#!/bin/bash


# パッケージの再インストール
echo "Installing dependencies..."
npm install

# 開発サーバーを起動
echo "Starting development server..."
npm run dev
