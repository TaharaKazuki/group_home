import { motion } from "framer-motion"

import Link from "next/link"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

type MenuItemProps = {
  url: string
  title: string
  subTitle: string
}

export const MenuItem = ({ title, url, subTitle }: MenuItemProps) => {
  return (
    <Link href={url}>
      <motion.li
        className=""
        variants={variants}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-main drop-shadow-md">{title}</span>
        <span className="text-text text-sm drop-shadow-sm ml-2">
          {subTitle}
        </span>
      </motion.li>
    </Link>
  )
}
