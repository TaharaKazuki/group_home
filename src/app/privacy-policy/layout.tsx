import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "IXIA Group Homeのプライバシーポリシーです。個人情報の取り扱いについて詳しくご説明しています。",
  openGraph: {
    title: "プライバシーポリシー | IXIA Group Home",
    description:
      "IXIA Group Homeのプライバシーポリシーです。個人情報の取り扱いについて詳しくご説明しています。",
  },
  twitter: {
    title: "プライバシーポリシー | IXIA Group Home",
    description:
      "IXIA Group Homeのプライバシーポリシーです。個人情報の取り扱いについて詳しくご説明しています。",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
