import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "IXIA Group Homeに関するよくある質問と回答をまとめました。入居について、料金について、生活について、見学についてなど、ご不明な点はこちらをご覧ください。",
  openGraph: {
    title: "よくある質問 | IXIA Group Home",
    description:
      "IXIA Group Homeに関するよくある質問と回答をまとめました。入居について、料金について、生活について、見学についてなど、ご不明な点はこちらをご覧ください。",
  },
  twitter: {
    title: "よくある質問 | IXIA Group Home",
    description:
      "IXIA Group Homeに関するよくある質問と回答をまとめました。入居について、料金について、生活について、見学についてなど、ご不明な点はこちらをご覧ください。",
  },
}

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
