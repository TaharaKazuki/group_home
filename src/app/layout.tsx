import { M_PLUS_Rounded_1c } from "next/font/google"

import { cn } from "@/lib/utils"

import type { Metadata } from "next"

import "./globals.css"

const geistSans = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "IXIA Group Home - イキシアグループホームで送る快適な共同生活",
    template: "%s - IXIA Group Home",
  },
  description: "IXIA Group Home - イキシアグループホームで送る快適な共同生活",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${cn(geistSans.className)} antialiased`}>
        {children}
      </body>
    </html>
  )
}
