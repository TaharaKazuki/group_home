"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import DesktopHeader from "@/components/layout/DesktopHeader"
import MobileHeader from "@/components/layout/MobileHeader"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-6 lg:px-12">
        <motion.a
          href="/#top"
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/assets/logo.svg"
            alt="IXIA Logo"
            width={300}
            height={100}
            className="h-12 w-auto object-contain md:h-16"
          />
        </motion.a>

        <div className="hidden items-center gap-8 rounded-full bg-white px-3 py-3 shadow-md lg:flex lg:pl-8">
          <DesktopHeader />
        </div>

        <MobileHeader />
      </nav>
    </motion.header>
  )
}
