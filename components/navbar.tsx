"use client"

import { useRef, useState } from "react"
import Link from "next/link"

import Logo from "@/components/logo/pc"
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "@/components/menu/menuToggle"
import { MenuList } from "@/components/menu/menuList"
import { useDimensions } from "@/hooks/useDimensions"

const LINKS = [
  { url: "/", title: "ホーム" },
  { url: "/about", title: "私たちについて", subTitle: "About" },
  { url: "/contact", title: "お問い合わせ", subTitle: "Contact" },
  {
    url: "/daily-schedule",
    title: "入居者のスケジュール",
    subTitle: "dailySchedule",
  },
]

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 37px) 48px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0 at calc(100% - 37px) 48px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  return (
    <div className="h-full flex items-center justify-between px-4">
      {/* LOGO */}
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            variants={sidebar}
            className="absolute top-0 left-0 bottom-0 w-screen h-screen bg-sub"
          />
          <MenuList />
          <MenuToggle
            toggle={toggleOpen}
            isOpen={isOpen}
          />
        </motion.nav>
      </div>
    </div>
  )
}

export default Navbar
