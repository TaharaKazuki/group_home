import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "IXIA Group Homeへのお問い合わせはこちらから。入居のご相談、見学のご希望、採用に関するお問い合わせなど、お気軽にご連絡ください。",
  openGraph: {
    title: "お問い合わせ | IXIA Group Home",
    description:
      "IXIA Group Homeへのお問い合わせはこちらから。入居のご相談、見学のご希望、採用に関するお問い合わせなど、お気軽にご連絡ください。",
  },
  twitter: {
    title: "お問い合わせ | IXIA Group Home",
    description:
      "IXIA Group Homeへのお問い合わせはこちらから。入居のご相談、見学のご希望、採用に関するお問い合わせなど、お気軽にご連絡ください。",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
