"use client"

import { useState } from "react"

import Cookies from "js-cookie"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/Button"

export default function AuthPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // パスワードを環境変数と照合（本番環境では環境変数を使用）
    const correctPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD || "demo2024"

    if (password === correctPassword) {
      // Cookieに認証情報を保存
      Cookies.set("auth", password, { expires: 7 }) // 7日間有効
      router.push("/")
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="w-full max-w-md p-8">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-300 to-pink-300">
              <Lock className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-2 text-center text-2xl font-light text-gray-700">
            サイトアクセス認証
          </h1>
          <p className="mb-8 text-center text-sm text-gray-500">
            パスワードを入力してください
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワード"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-red-300 focus:ring-2 focus:ring-red-100 focus:outline-none"
                autoFocus
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="animate-pulse text-center text-sm text-red-500">
                パスワードが正しくありません
              </div>
            )}

            {/* Submit button */}
            <Button type="submit" variant="primary" className="w-full py-3">
              認証する
            </Button>
          </form>

          {/* Info */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-center text-xs text-gray-400">
              このサイトは現在開発中です
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
