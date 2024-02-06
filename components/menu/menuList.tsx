import { motion } from "framer-motion"
import { MenuItem } from "@/components/menu/menuItem"
import { MENU_ITEMS } from "@/const/link"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const MenuList = () => {
  return (
    <motion.ul
      variants={variants}
      className="px-10 absolute w-screen top-32 left-0 h-screen text-3xl flex flex-col gap-6"
    >
      {MENU_ITEMS.map((item, i) => (
        <MenuItem
          key={i}
          {...item}
        />
      ))}
    </motion.ul>
  )
}
