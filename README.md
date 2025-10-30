# グループホームWebサイト

グループホーム事業のコーポレートサイトです。Next.js 15とReact 19を使用したモダンなWebアプリケーションです。

## 📋 目次

- [技術スタック](#技術スタック)
- [必要な前提条件](#必要な前提条件)
- [セットアップ手順](#セットアップ手順)
- [環境変数の設定](#環境変数の設定)
- [開発方法](#開発方法)
- [プロジェクト構造](#プロジェクト構造)
- [主要機能](#主要機能)
- [コード品質管理](#コード品質管理)
- [ビルドとデプロイ](#ビルドとデプロイ)
- [トラブルシューティング](#トラブルシューティング)
- [開発時の注意事項](#開発時の注意事項)

## 🛠 技術スタック

### コアフレームワーク
- **Next.js** 15.5.2 (App Router)
- **React** 19.1.0
- **TypeScript** 5.x (strictモード有効)

### スタイリング
- **Tailwind CSS** v4
- **Framer Motion** 12.23.12 (アニメーション)
- **Lucide React** (アイコン)
- **React Icons** (ソーシャルメディアアイコン)

### フォーム・バリデーション
- **React Hook Form** 7.62.0
- **Zod** 4.1.5

### 外部サービス連携
- **EmailJS** (@emailjs/browser 4.4.1) - お問い合わせフォームのメール送信

### UI/UX
- **Sonner** (トースト通知)
- **next-themes** (ダークモード対応)
- **Radix UI** (Dialog等のプリミティブコンポーネント)

### 開発ツール
- **Turbopack** (開発サーバー・ビルド高速化)
- **ESLint** (コード品質管理)
- **Prettier** (コードフォーマット)
- **TypeScript ESLint** (型安全なリンティング)

## 📦 必要な前提条件

- **Node.js**: 20.x以上推奨
- **npm**: 9.x以上 (またはyarn/pnpm)
- **EmailJSアカウント**: お問い合わせフォーム機能を使用する場合

## 🚀 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd group_home
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.example`ファイルを`.env.local`にコピーして、必要な環境変数を設定してください。

```bash
cp .env.example .env.local
```

詳細は[環境変数の設定](#環境変数の設定)セクションを参照してください。

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 🔑 環境変数の設定

`.env.local`ファイルに以下の環境変数を設定してください：

### EmailJS設定（必須）

お問い合わせフォームの送信機能に必要です。

```env
NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_user_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

#### EmailJS設定手順

1. [EmailJS](https://www.emailjs.com/)にアカウント登録
2. Email Servicesでメール送信サービスを作成
3. Email Templatesでテンプレートを作成
4. Account > General から Public Key (User ID) を取得
5. 上記の値を`.env.local`に設定

### サイトURL設定（オプション）

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

本番環境のURLを設定してください。OGP画像やcanonical URLなどで使用される可能性があります。

## 💻 開発方法

### 利用可能なコマンド

```bash
# 開発サーバーを起動 (Turbopack使用)
npm run dev

# 本番用ビルドを作成
npm run build

# 本番サーバーを起動（ビルド後）
npm start

# ESLintでコードチェック
npm run lint

# ESLintでコードチェック＆自動修正
npm run lint:fix
```

### 開発フロー

1. ブランチを作成して機能を実装
2. コミット前に`npm run lint:fix`でコードを整形
3. 変更をコミット
4. プルリクエストを作成してレビュー

## 📁 プロジェクト構造

```
group_home/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── page.tsx             # トップページ
│   │   ├── globals.css          # グローバルスタイル
│   │   ├── contact/             # お問い合わせページ
│   │   │   └── page.tsx
│   │   ├── privacy-policy/      # プライバシーポリシー
│   │   │   └── page.tsx
│   │   ├── questions/           # よくある質問
│   │   │   └── page.tsx
│   │   ├── services/            # サービス一覧・詳細
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx   # 動的ルート
│   │   └── stores/              # 店舗一覧・詳細
│   │       ├── page.tsx
│   │       └── [id]/page.tsx   # 動的ルート
│   ├── components/              # 再利用可能コンポーネント
│   │   ├── layout/             # レイアウトコンポーネント
│   │   │   ├── Header.tsx      # ヘッダー（レスポンシブ）
│   │   │   ├── DesktopHeader.tsx
│   │   │   ├── MobileHeader.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # セクションコンポーネント
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Company.tsx
│   │   │   └── Topics.tsx
│   │   ├── ui/                 # UIコンポーネント
│   │   │   ├── Button.tsx
│   │   │   ├── AccordionItem.tsx
│   │   │   ├── FadeInText.tsx
│   │   │   ├── GradualSpacing.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── sonner.tsx
│   │   └── modals/             # モーダルコンポーネント
│   │       ├── ServiceModal.tsx
│   │       ├── LifeModal.tsx
│   │       └── PricingModal.tsx
│   ├── data/                    # データファイル
│   │   ├── services.ts         # サービス情報
│   │   └── stores.ts           # 店舗情報
│   ├── constant/                # 定数定義
│   └── lib/                     # ユーティリティ関数
├── public/                      # 静的ファイル
├── .env.example                 # 環境変数のサンプル
├── .env.local                   # 環境変数（Git管理外）
├── next.config.ts               # Next.js設定
├── tailwind.config.ts           # Tailwind CSS設定
├── tsconfig.json                # TypeScript設定
├── eslint.config.mjs            # ESLint設定
├── CLAUDE.md                    # Claude Code用のガイド
└── package.json                 # プロジェクト依存関係

```

### パスエイリアス

TypeScriptのパスエイリアス`@/*`が`./src/*`にマッピングされています。

```typescript
// 使用例
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
```

## ✨ 主要機能

### 1. レイアウトシステム

#### ヘッダー
- **レスポンシブ対応**: デスクトップとモバイルで異なるUIを表示
- **スクロール検知**: スクロール時に背景色が変化
- **モバイルメニュー**: ハンバーガーメニュー実装

実装ファイ���:
- [src/components/layout/Header.tsx](src/components/layout/Header.tsx)
- [src/components/layout/DesktopHeader.tsx](src/components/layout/DesktopHeader.tsx)
- [src/components/layout/MobileHeader.tsx](src/components/layout/MobileHeader.tsx)

#### フッター
- シンプルな中央配置デザイン
- ソーシャルメディアリンク（React Icons使用）

実装ファイル:
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

### 2. ページ構成

#### トップページ
複数のセクションで構成：
- HeroSlider: グラデーション背景のアニメーションスライダー
- AboutUs: 事業紹介
- Services: サービス一覧（モーダル表示対応）
- Company: 会社情報
- Topics: お知らせ・ブログ

実装ファイル: [src/app/page.tsx](src/app/page.tsx)

#### お問い合わせページ
- React Hook Form + Zod によるバリデーション
- EmailJS統合によるメール送信
- localStorage によるフォームデータ保存
- Sonner によるトースト通知

実装ファイル: [src/app/contact/page.tsx](src/app/contact/page.tsx)

#### その他のページ
- **プライバシーポリシー**: 6セクション構成
- **よくある質問**: アコーディオン形式
- **店舗一覧**: 3店舗のカード表示
- **店舗詳細**: 動的ルーティング（Next.js 15対応）

### 3. サービス管理

サービス情報は[src/data/services.ts](src/data/services.ts)で一元管理：
- Design（デザイン）
- Production（制作）
- Interior（インテリア）
- Consulting（コンサルティング）

モーダル表示: [src/components/modals/ServiceModal.tsx](src/components/modals/ServiceModal.tsx)

### 4. 店舗管理

店舗情報は[src/data/stores.ts](src/data/stores.ts)で一元管理：
- 渋谷店
- 新宿店
- 世田谷店

動的ルーティング: [src/app/stores/[id]/page.tsx](src/app/stores/[id]/page.tsx)

### 5. UIコンポーネント

#### アニメーション
- **FadeInText**: スクロール連動フェードイン
- **GradualSpacing**: 文字間隔アニメーション
- **Framer Motion**: 滑らかなページ遷移

#### インタラクション
- **Button**: プライマリ/セカンダリ/ゴーストバリアント
- **AccordionItem**: 開閉可能なアコーディオン
- **Dialog**: モーダルダイアログ（Radix UI準拠）

### 6. デザインシステム

#### カラーパレット
- **プライマリカラー**: 赤（red-300, red-400）
- **テキストカラー**: グレー（gray-700, gray-600）
- **背景色**: 白（bg-white）、ベージュ（bg-[#FAF7F2]）

#### レスポンシブブレークポイント
Tailwind CSSのデフォルトブレークポイントを使用：
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎨 コード品質管理

### ESLint設定

プロジェクトでは厳格なコード品質を維持するため、以下のESLintルールを適用：

- **TypeScript ESLint**: 型安全なコード
- **Next.js推奨設定**: core-web-vitals
- **Prettier統合**: 自動フォーマット
- **Import順序ルール**:
  1. React系
  2. 外部ライブラリ
  3. 内部モジュール（アルファベット順）
- **未使用インポート検出**: 自動削除

### コーディング規約

1. **ファイル命名**: PascalCase (コンポーネント)、camelCase (ユーティリティ)
2. **コンポーネント**: 関数コンポーネント使用
3. **型定義**: 明示的な型アノテーション推奨
4. **未使用変数**: `_`プレフィックスで明示

### コミット前のチェック

```bash
# コードチェック＆自動修正
npm run lint:fix

# ビルドエラーの確認
npm run build
```

## 🏗 ビルドとデプロイ

### ビルド手順

```bash
# 依存関係のインストール
npm install

# 本番用ビルド
npm run build

# ビルド結果の確認
npm start
```

### ビルド成果物

`.next/`ディレクトリに生成されます（Git管理外）。

### 環境変数の設定

デプロイ先の環境変数設定で、以下を設定してください：

```
NEXT_PUBLIC_EMAILJS_USER_ID=your_value
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_value
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_value
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

### デプロイ時の注意事項

1. **Node.jsバージョン**: 20.x以上を使用
2. **ビルドコマンド**: `npm run build`
3. **開始コマンド**: `npm start`
4. **環境変数**: 必ず設定すること（特にEmailJS関連）

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### 1. 開発サーバーが起動しない

**原因**: Node.jsバージョンが古い、ポートが使用中

**解決方法**:
```bash
# Node.jsバージョン確認
node -v  # 20.x以上が必要

# ポート変更
PORT=3001 npm run dev
```

#### 2. ビルドエラーが発生する

**原因**: 型エラー、ESLintエラー

**解決方法**:
```bash
# 型エラーの確認
npx tsc --noEmit

# ESLintエラーの確認・修正
npm run lint:fix
```

#### 3. お問い合わせフォームが送信できない

**原因**: EmailJS環境変数が未設定または誤っている

**解決方法**:
1. `.env.local`ファイルの存在確認
2. 環境変数の値が正しいか確認
3. EmailJSダッシュボードで設定を再確認
4. 開発サーバーを再起動

#### 4. 画像が表示されない

**原因**: Unsplashの画像がブロックされている、`next.config.ts`の設定不足

**解決方法**:
- [next.config.ts](next.config.ts)の`remotePatterns`に画像ホストを追加

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    // 他のホストを追加
  ],
}
```

#### 5. Hydration エラーが発生する

**原因**: サーバーとクライアントのレンダリング結果が異なる

**解決方法**:
- `useState`と`useEffect`で`isMounted`状態を管理
- サーバーサイドでアニメーションを無効化

参考実装: [src/components/sections/HeroSlider.tsx](src/components/sections/HeroSlider.tsx)

## 📝 開発時の注意事項

### Next.js 15の重要な変更点

#### 1. 動的ルートパラメータがPromiseに
```typescript
// ❌ 古い書き方（Next.js 14以前）
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
}

// ✅ 新しい書き方（Next.js 15）
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
}
```

#### 2. SSR/クライアントハイドレーション
アニメーションや動的コンテンツは、クライアントサイドでのみ実行するように注意：

```typescript
const [isMounted, setIsMounted] = useState(false)

useEffect(() => {
  setIsMounted(true)
}, [])

// isMountedがtrueの時だけアニメーション実行
```

### パフォーマンス最適化

1. **画像最適化**: Next.jsの`Image`コンポーネント使用
2. **コード分割**: 動的インポート活用
3. **アニメーション**: 条件付きレンダリング
4. **キャッシング**: Next.jsの自動キャッシング活用

### アクセシビリティ

1. **セマンティックHTML**: 適切なタグ使用
2. **キーボード操作**: すべての機能をキーボードで操作可能に
3. **ARIAラベル**: スクリーンリーダー対応
4. **コントラスト比**: WCAG AA基準以上

## 📚 参考リソース

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### プロジェクト固有のドキュメント
- [CLAUDE.md](CLAUDE.md): Claude Code用のガイドライン
- `.env.example`: 環境変数のサンプル

## 🤝 サポート

プロジェクトに関する質問や問題がある場合は、前任者または開発チームにお問い合わせください。

---

**最終更新**: 2025年10月
**メンテナ**: プロジェクト引き継ぎ担当者
