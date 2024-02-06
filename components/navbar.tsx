"use client"

import { useRef } from "react"
import Link from "next/link"

import Logo from "@/components/logo/pc"
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "@/components/menu/menuToggle"
import { MenuList } from "@/components/menu/menuList"
import { useDimensions } from "@/hooks/useDimensions"
import { MENU_ITEMS } from "@/const/link"

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
    <div className="h-full flex items-center justify-between px-8">
      {/* LOGO */}
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        {MENU_ITEMS.slice(1).map((item) => (
          <Link
            href={item.url}
            className="p-2"
          >
            <div className="text-center text-main drop-shadow-sm">
              {item.title}
            </div>
            <div className="text-center text-sub text-sm drop-shadow-sm">
              {item.subTitle}
            </div>
          </Link>
        ))}
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
