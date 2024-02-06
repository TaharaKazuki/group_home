"use client"

import { useState } from "react"
import Link from "next/link"

import Logo from "@/components/logo/pc"
import { motion } from "framer-motion"

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
  const [open, setOpen] = useState<boolean>(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "#F9AFA6",
    },
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "#F9AFA6",
    },
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
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
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-main origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-main"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-main origin-left"
          />
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-bgSub text-text flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {LINKS.map((link, i) => (
              <motion.div
                variants={listItemVariants}
                key={`${link.title}_${i}`}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
