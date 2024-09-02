FROM node:20-bullseye-slim AS base

FROM base AS builder

WORKDIR /workspace/web

RUN apt-get update && apt-get upgrade -y
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

COPY app/ ./app
COPY public/ ./public
COPY tsconfig.json *.mjs ./

# Next.jsによってテレメトリデータを収集するのを無効にする
ARG NEXT_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=$NEXT_TELEMETRY_DISABLED

RUN  yarn build

FROM base AS runner

WORKDIR /workspace/web

USER node

COPY --from=builder /workspace/web/public ./public

# 自動的に出力トレースを活用することで、イメージサイズを削減する
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /workspace/web/.next/standalone ./
COPY --from=builder --chown=node:node /workspace/web/.next/static ./.next/static

# Next.jsによってテレメトリデータを収集するのを無効にする
ENV NEXT_TELEMETRY_DISABLED=$NEXT_TELEMETRY_DISABLED

# 注意: ポートのマッピングはdocker-composeで行うため、設定しない

CMD ["node", "server.js"]