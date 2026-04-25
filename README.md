# cas-ru.com

このレポジトリは[cas-ru.com](https://cas-ru.com)のソースコードです。

## 技術スタック

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com)
- [Dev container](https://code.visualstudio.com/docs/remote/containers)
- [Docker](https://www.docker.com/)

## 開発環境のセットアップ

### 共通

[Docker](https://www.docker.com/)をインストールしておく。

### Devcontainerを使う場合

1. [Visual Studio Code](https://code.visualstudio.com/)をインストール
2. [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)拡張機能をインストール
3. このレポジトリをクローン`git clone https://github.com/CASru-IT/cas-ru.com.git`
4. Visual Studio Codeでこのレポジトリを開く
5. `sample.env`を参考に`.env`ファイルを作成し、環境変数を設定
6. コマンドパレット（Ctrl+Shift+p）から`Reopen in Container`
7. `localhost:3000`にアクセス

`docker-compose.yml`を`docker-compose.dev.yml`で上書きして開発環境を構築している。devcontainerではさらに`.devcontainer/docker-compose.yml`で上書きしてコンテナーが落ちないようにしている。

### Devcontainerを使わない場合

1. `docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build`
2. `localhost:3000`にアクセス

## 本番環境のセットアップ

1. [Docker](https://www.docker.com/)をインストール
2. このレポジトリをクローン`git clone https://github.com/CASru-IT/cas-ru.com.git`
3. `sample.env`を参考に`.env`ファイルを作成し、環境変数を設定
4. `docker-compose up -d`でコンテナーを起動
