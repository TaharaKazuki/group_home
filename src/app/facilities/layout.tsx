import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "施設一覧",
  description:
    "IXIA Group Homeの施設をご紹介します。渋谷店、新宿店、世田谷店の3拠点で、それぞれの地域に根ざしたサービスを提供しています。",
  openGraph: {
    title: "施設一覧 | IXIA Group Home",
    description:
      "IXIA Group Homeの施設をご紹介します。渋谷店、新宿店、世田谷店の3拠点で、それぞれの地域に根ざしたサービスを提供しています。",
  },
  twitter: {
    title: "施設一覧 | IXIA Group Home",
    description:
      "IXIA Group Homeの施設をご紹介します。渋谷店、新宿店、世田谷店の3拠点で、それぞれの地域に根ざしたサービスを提供しています。",
  },
}

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
