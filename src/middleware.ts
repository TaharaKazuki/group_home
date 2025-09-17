import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"

// パスワード保護を有効にする環境変数
const PASSWORD_PROTECTION = process.env.PASSWORD_PROTECTION === "true"
const SITE_PASSWORD = process.env.SITE_PASSWORD || "demo2024"

export function middleware(request: NextRequest) {
  // パスワード保護が無効な場合はスキップ
  if (!PASSWORD_PROTECTION) {
    return NextResponse.next()
  }

  // 認証ページ自体へのアクセスは許可
  if (request.nextUrl.pathname === "/auth") {
    return NextResponse.next()
  }

  // 認証済みかチェック
  const auth = request.cookies.get("auth")

  if (auth?.value !== SITE_PASSWORD) {
    // 認証されていない場合は認証ページへリダイレクト
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
