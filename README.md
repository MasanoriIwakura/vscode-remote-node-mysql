# Visual Studio Code Docker Debug for Node.js

Visual Studio CodeのDev Containerを使用したNode.jsのリモートデバッグ開発環境

## 前提

- Dockerがインストールされていること
  - Linuxの場合は`sudo`しなくてもDockerを実行できること
- Visual Studio Codeがインストールされていること
  - 拡張機能の`Remote Development`がインストールされていること

## 使用方法

1. VSCodeでDev Containerを起動
1. 任意の位置にブレイクポイントを設定
1. コンソール上で`npm run debug`または`yarn debug`を実行
1. `F5`キー押下
1. `http://localhost:3000`にアクセス

## 開発環境

|ツール等|バージョン|
|:--|:--|
|Visual Studio Code|1.35.1|
|Remote Development|-|
|Docker for Mac|2.0.0.3|
|Docker Compose|1.23.2|

コンテナ内の環境

|ツール等|バージョン|
|:--|:--|
|Node.js|v10.16.0|
|Express|4.16.1|
|MySQL|8|
