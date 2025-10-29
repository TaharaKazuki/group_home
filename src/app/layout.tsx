import { M_PLUS_Rounded_1c } from "next/font/google"

import ClientLayout from "@/components/ClientLayout"
import { cn } from "@/lib/utils"

import type { Metadata } from "next"

import "./globals.css"

const geistSans = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ixia-grouphome.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IXIA Group Home - イキシアグループホーム | S&Tタカノ合同会社",
    template: "%s | IXIA Group Home",
  },
  description:
    "S&Tタカノ合同会社が運営するIXIA Group Homeは、快適で安心な共同生活をサポートするグループホームです。埼玉県川口市の4拠点（わおんイキシアⅠ・Ⅱ・Ⅳ、あかつき館）で、一人ひとりに寄り添ったケアを提供しています。",
  keywords: [
    "グループホーム",
    "IXIA",
    "イキシア",
    "S&Tタカノ合同会社",
    "タカノ",
    "共同生活",
    "介護",
    "福祉",
    "障害者グループホーム",
    "川口市",
    "埼玉県",
    "わおん",
  ],
  authors: [{ name: "S&Tタカノ合同会社" }],
  creator: "S&Tタカノ合同会社",
  publisher: "S&Tタカノ合同会社",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "IXIA Group Home | S&Tタカノ合同会社",
    title: "IXIA Group Home - イキシアグループホーム | S&Tタカノ合同会社",
    description:
      "S&Tタカノ合同会社が運営するIXIA Group Homeは、快適で安心な共同生活をサポートするグループホームです。埼玉県川口市の4拠点で、一人ひとりに寄り添ったケアを提供しています。",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "IXIA Group Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IXIA Group Home - イキシアグループホーム | S&Tタカノ合同会社",
    description:
      "S&Tタカノ合同会社が運営するIXIA Group Homeは、快適で安心な共同生活をサポートするグループホームです。埼玉県川口市の4拠点で、一人ひとりに寄り添ったケアを提供しています。",
    images: ["/opengraph-image.png"],
  },
  verification: {
    // Google Search Console用（後で追加可能）
    // google: "your-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${cn(geistSans.className)} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
