FROM node:24-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


FROM base AS dependencies

WORKDIR /workspace

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile


FROM dependencies AS builder

COPY ./src ./src
COPY ./public ./public
COPY ./tsconfig.json ./next.config.ts ./postcss.config.mjs ./

# Next.jsによってテレメトリデータを収集するのを無効にする
ARG NEXT_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=$NEXT_TELEMETRY_DISABLED

ENV NODE_ENV=production
RUN  pnpm run build


FROM dependencies AS dev

COPY . .
ENV NODE_ENV=development
EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]


FROM base AS runner

WORKDIR /workspace/web

USER node

COPY --from=builder /workspace/public ./public

# 自動的に出力トレースを活用することで、イメージサイズを削減する
# https://nextjs.org/docs/app/api-reference/config/next-config-js/output
COPY --from=builder --chown=node:node /workspace/.next/standalone ./
COPY --from=builder --chown=node:node /workspace/.next/static ./.next/static

# Next.jsによってテレメトリデータを収集するのを無効にする
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["node", "server.js"]
