import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IXIA Group Home",
  description: "xxxxxx",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-white to-bgSub">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
