# cas-ru.com

このレポジトリは[cas-ru.com](https://cas-ru.com)のソースコードです。

## 技術スタック

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Remote container](https://code.visualstudio.com/docs/remote/containers)
- [Docker](https://www.docker.com/)

## 開発環境のセットアップ

1. [Docker](https://www.docker.com/)をインストール
2. [Visual Studio Code](https://code.visualstudio.com/)をインストール
3. [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)拡張機能をインストール
4. このレポジトリをクローン`git clone https://github.com/CASru-IT/cas-ru.com.git`
5. Visual Studio Codeでこのレポジトリを開く
6. `sample.env`を参考に`.env`ファイルを作成し、環境変数を設定
7. コマンドパレット（Ctrl+Shift+p）から`Reopen in Container`

## 本番環境のセットアップ

1. [Docker](https://www.docker.com/)をインストール
2. [Docker Compose](https://docs.docker.com/compose/)をインストール
3. このレポジトリをクローン`git clone https://github.com/CASru-IT/cas-ru.com.git`
4. `sample.env`を参考に`.env`ファイルを作成し、環境変数を設定
5. `docker-compose up -d`でコンテナーを起動
