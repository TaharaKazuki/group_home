# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) へのガイダンスを提供します。

## コマンド

### 開発
- `npm run dev` - Turbopackを使用して開発サーバーを起動 (http://localhost:3000)
- `npm run build` - Turbopackを使用して本番アプリケーションをビルド
- `npm start` - 本番サーバーを起動

### コード品質
- `npm run lint` - ESLintを実行してコードの問題をチェック
- `npm run lint:fix` - ESLintを実行し、可能な箇所は自動修正

## アーキテクチャ

Next.js 15.5.2とReact 19.1.0を使用したApp Routerアーキテクチャのアプリケーションです。

### 主要な技術的決定事項
- **フレームワーク**: App Router付きNext.js (`src/app/`に配置)
- **スタイリング**: Tailwind CSS v4
- **型システム**: strictモードを有効にしたTypeScript
- **ビルドツール**: Turbopack (開発とビルド両方で有効)
- **フォント最適化**: next/font経由でGeistフォントファミリーを使用

### プロジェクト構造
- `src/app/` - App Routerのページとレイアウト
  - `layout.tsx` - メタデータとフォント設定を含むルートレイアウト
  - `page.tsx` - ホームページコンポーネント
  - `globals.css` - Tailwindディレクティブを含むグローバルスタイル
- TypeScriptパスエイリアス: `@/*`は`./src/*`にマッピング

### コードスタイル設定
プロジェクトはESLintを通じて厳格なコード品質を強制：
- 型認識リンティング用のTypeScript ESLintプラグイン
- 一貫したフォーマット用のPrettier統合
- インポート順序ルール（Reactが最初、次に外部、内部、アルファベット順でソート）
- 未使用インポートの検出と削除
- Next.js core-web-vitalsとTypeScriptプリセット

アンダースコア(_)で始まる変数と引数は意図的に未使用であり、警告をトリガーしません。