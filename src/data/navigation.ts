import type { MenuItem, ContactButton } from "@/types/header"

export const menuItems: MenuItem[] = [
  { label: "ホーム", href: "/#top" },
  { label: "理念", href: "/#philosophy" },
  { label: "サービス", href: "/#service" },
  { label: "会社概要", href: "/#company" },
  { label: "よくある質問", href: "/questions" },
  { label: "店舗情報", href: "/stores" },
  // { label: "お知らせ", href: "/#topics" }, // Micro CMSできたら追加する
]

export const contactButton: ContactButton = {
  label: "お問い合わせ",
  href: "/contact",
}
