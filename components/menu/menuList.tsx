import { motion } from "framer-motion"
import { MenuItem } from "@/components/menu/menuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const MENU_ITEMS = [
  {
    url: "/",
    title: "トップページ",
    subTitle: "Top",
  },
  {
    url: "/about",
    title: "私たちについて",
    subTitle: "About",
  },
  {
    url: "/daily-schedule",
    title: "入居1日の流れ",
    subTitle: "daily Schedule",
  },
  {
    url: "/contact",
    title: "お問い合わせ",
    subTitle: "Contact",
  },
]

export const MenuList = () => {
  return (
    <motion.ul
      variants={variants}
      className="px-10 absolute w-screen top-32 left-0 h-screen text-3xl flex flex-col gap-6"
    >
      {MENU_ITEMS.map((item) => (
        <MenuItem {...item} />
      ))}
    </motion.ul>
  )
}
