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
- **フォント**: M_PLUS_Rounded_1c (Google Fonts経由)
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React、React Icons
- **フォーム処理**: React Hook Form + Zod バリデーション
- **メール送信**: EmailJS統合
- **トースト通知**: Sonner

### プロジェクト構造
```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── globals.css        # グローバルスタイル
│   ├── contact/           # お問い合わせページ
│   ├── privacy-policy/    # プライバシーポリシー
│   ├── questions/         # Q&Aページ
│   ├── services/          # サービス関連ページ
│   │   └── [id]/page.tsx  # 個別サービス詳細（動的ルート）
│   └── stores/            # 店舗関連ページ
│       ├── page.tsx       # 店舗一覧
│       └── [id]/page.tsx  # 個別店舗詳細
├── components/            # 再利用可能コンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx    # ヘッダー統合コンポーネント
│   │   ├── DesktopHeader.tsx # デスクトップ用ヘッダー
│   │   ├── MobileHeader.tsx  # モバイル用ヘッダー
│   │   └── Footer.tsx    # フッター
│   ├── sections/         # セクションコンポーネント
│   │   ├── HeroSlider.tsx    # ヒーロースライダー
│   │   ├── AboutUs.tsx       # 私たちについてセクション
│   │   ├── Services.tsx      # サービスセクション
│   │   ├── Company.tsx       # 会社情報セクション
│   │   └── Topics.tsx        # トピックスセクション
│   ├── ui/              # UIコンポーネント
│   │   ├── Button.tsx        # ボタンコンポーネント
│   │   ├── AccordionItem.tsx # アコーディオンアイテム
│   │   ├── FadeInText.tsx    # フェードインテキスト
│   │   ├── GradualSpacing.tsx # 文字間隔アニメーション
│   │   └── sonner.tsx        # トースト通知設定
│   └── modals/          # モーダルコンポーネント
│       ├── ServiceModal.tsx  # サービスモーダル
│       ├── LifeModal.tsx     # ライフモーダル
│       └── PricingModal.tsx  # 価格モーダル
├── data/                 # データファイル
│   ├── services.ts      # サービスデータ
│   └── stores.ts        # 店舗データ
├── constant/             # 定数定義
└── lib/                  # ユーティリティ関数
```

- TypeScriptパスエイリアス: `@/*`は`./src/*`にマッピング

### コードスタイル設定
プロジェクトはESLintを通じて厳格なコード品質を強制：
- 型認識リンティング用のTypeScript ESLintプラグイン
- 一貫したフォーマット用のPrettier統合
- インポート順序ルール（Reactが最初、次に外部、内部、アルファベット順でソート）
- 未使用インポートの検出と削除
- Next.js core-web-vitalsとTypeScriptプリセット

アンダースコア(_)で始まる変数と引数は意図的に未使用であり、警告をトリガーしません。

## 実装済み機能

### 1. レイアウトシステム
- **Header** (`src/components/layout/Header.tsx`): レスポンシブナビゲーション、スクロール検知、モバイルメニュー
- **DesktopHeader** (`src/components/layout/DesktopHeader.tsx`): デスクトップ用ナビゲーション
- **MobileHeader** (`src/components/layout/MobileHeader.tsx`): モバイル用ハンバーガーメニュー
- **Footer** (`src/components/layout/Footer.tsx`): シンプルな中央配置デザイン、React Iconsによるソーシャルメディアリンク

### 2. ページ構成
- **ホームページ** (`src/app/page.tsx`): HeroSlider、AboutUs、Services、Company、Topics セクション
- **お問い合わせ** (`src/app/contact/page.tsx`): 
  - React Hook Form + Zod バリデーション
  - EmailJS統合によるメール送信機能
  - プライバシーポリシー同意チェックボックス
  - フォームデータのlocalStorage保存
  - 送信成功/失敗時のトースト通知（Sonner使用）
- **プライバシーポリシー** (`src/app/privacy-policy/page.tsx`): 6セクション構成の詳細なポリシー
- **Q&Aページ** (`src/app/questions/page.tsx`): よくある質問のアコーディオン表示
- **店舗一覧** (`src/app/stores/page.tsx`): 3店舗のカード表示
- **店舗詳細** (`src/app/stores/[id]/page.tsx`): 動的ルーティングによる個別店舗情報

### 3. サービスセクション機能
- **サービス一覧** (`src/data/services.ts`): Design、Production、Interior、Consulting の4項目
- **モーダル表示** (`src/components/modals/ServiceModal.tsx`): 状態ベースのシンプルなモーダル
- **SSR対応**: hydration エラー対策済み

### 4. 店舗システム
- **店舗データ** (`src/data/stores.ts`): 渋谷店、新宿店、世田谷店の詳細情報
- **動的ルーティング**: Next.js 15 の Promise params 対応
- **店舗詳細表示**: 施設概要、特徴・サービス、施設・設備、スタッフ紹介、画像プリロード機能

### 5. UIコンポーネント
- **HeroSlider** (`src/components/sections/HeroSlider.tsx`): グラデーション背景のアニメーションスライダー
- **Button** (`src/components/ui/Button.tsx`): プライマリ/セカンダリ/ゴーストバリアント
- **AccordionItem** (`src/components/ui/AccordionItem.tsx`): 開閉可能なアコーディオン
- **FadeInText** (`src/components/ui/FadeInText.tsx`): スクロール連動フェードイン
- **GradualSpacing** (`src/components/ui/GradualSpacing.tsx`): 文字間隔アニメーション
- **Toaster** (`src/components/ui/sonner.tsx`): カスタマイズされたトースト通知
- **Dialog** (`src/components/ui/dialog.tsx`): モーダルダイアログコンポーネント（shadcn/ui準拠）

### 6. アニメーション・UI
- Framer Motion による滑らかなアニメーション
- SSRハイドレーション対応（`isMounted` 状態管理）
- レスポンシブデザイン（Tailwind CSS）
- ホバーエフェクトとマイクロインタラクション
- スクロール連動アニメーション

## 技術的な解決済み課題

### Next.js 15 対応
- **Params Promise**: `React.use()` による非同期パラメータのアンラップ
- **SSR Hydration**: サーバー・クライアント間の不整合解消

### パフォーマンス最適化
- 条件付きアニメーション（マウント状態に基づく）
- 適切なコンポーネント分割
- 画像最適化（Next.js Image コンポーネント）
- 画像プリロード機能（店舗ページ）

### アクセシビリティ
- 適切なセマンティックHTML
- キーボードナビゲーション対応
- ARIAラベル適用

### 外部サービス統合
- **EmailJS**: 環境変数によるセキュアな設定管理
- **Google Fonts**: M_PLUS_Rounded_1cフォントの最適化読み込み

## モーダルダイアログ実装

### Dialog コンポーネント（`src/components/ui/dialog.tsx`）
- **ベース**: Radix UI Dialog プリミティブを使用
- **アニメーション**: shadcn/ui 準拠のアニメーション実装
  - オーバーレイ: フェードイン/アウト効果
  - コンテンツ: data-state属性によるアニメーション制御
- **スタイリング**:
  - 背景色: 白（bg-white）
  - テキスト色: text-gray-700（本文）、text-red-300（見出し・アクセント）
  - 閉じるボタン: 円形（rounded-full）、赤背景（bg-red-300）、ホバー時色反転
  - 固定位置（fixed）でスクロール時も位置固定
  - レスポンシブ対応（40x40px、モバイルでも操作しやすいサイズ）

### モーダル実装の統一仕様
- **ServiceModal** (`src/components/modals/ServiceModal.tsx`):
  - サービス詳細情報の表示
  - チェックアイコンと背景を赤テーマで統一
  
- **PricingModal** (`src/components/modals/PricingModal.tsx`):
  - 料金表と公的支援制度の説明
  - セクション見出しをtext-red-300で統一
  
- **LifeModal** (`src/components/modals/LifeModal.tsx`):
  - 一日の流れと季節イベントの表示
  - アイコンカラーと見出しを赤テーマで統一