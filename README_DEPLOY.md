# Netlifyデプロイ時のパスワード保護設定

## 環境変数の設定

Netlifyの管理画面で以下の環境変数を設定してください：

1. Netlifyにログイン
2. 対象のサイトを選択
3. "Site configuration" → "Environment variables" に移動
4. 以下の環境変数を追加：

```
PASSWORD_PROTECTION=true
SITE_PASSWORD=your-secure-password-here
NEXT_PUBLIC_SITE_PASSWORD=your-secure-password-here
```

※ `your-secure-password-here` を任意のパスワードに変更してください

## EmailJS用の環境変数（既に設定済みの場合はスキップ）

```
NEXT_PUBLIC_EMAILJS_USER_ID=your-user-id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
```

## デプロイ後の確認

1. デプロイが完了したら、サイトにアクセス
2. 自動的に `/auth` ページにリダイレクトされることを確認
3. 設定したパスワードでログイン

## パスワード保護を無効にする場合

環境変数を以下のように変更：
```
PASSWORD_PROTECTION=false
```

## トラブルシューティング

### リダイレクトされない場合
1. Netlifyの管理画面で "Deploys" → 最新のデプロイログを確認
2. ビルドが成功していることを確認
3. 環境変数が正しく設定されていることを確認
4. ブラウザのキャッシュをクリア（Cmd+Shift+R）

### その他の注意点
- パスワードはCookieに保存され、7日間有効
- パスワードを変更した場合、既存のユーザーは再認証が必要