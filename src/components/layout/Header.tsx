"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

const menuItems = [
  { label: "ホーム", englishLabel: "Top", href: "/#top" },
  { label: "理念", englishLabel: "Philosophy", href: "/#philosophy" },
  { label: "サービス", englishLabel: "Service", href: "/#service" },
  { label: "会社概要", englishLabel: "Company", href: "/#company" },
  { label: "店舗情報", englishLabel: "Stores", href: "/stores" },
  { label: "よくある質問", englishLabel: "FAQ", href: "/questions" },
  { label: "お知らせ", englishLabel: "Topics", href: "/#topics" },
  { label: "お問い合わせ", englishLabel: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-6 lg:px-12">
          <motion.a
            href="/#top"
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            IXIA
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="relative flex flex-col text-sm font-medium tracking-wide transition-colors hover:text-gray-600"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-400">
                      {item.englishLabel}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-300"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="relative flex flex-col text-sm font-medium tracking-wide transition-colors hover:text-gray-600"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-400">
                      {item.englishLabel}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-300"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="flex h-6 w-6 items-center justify-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 45 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </motion.div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 z-40 h-full w-full overflow-y-auto bg-white sm:w-80"
          >
            <ul className="flex flex-col gap-2 p-12 pt-24 pb-12">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col py-3 text-2xl font-medium tracking-wide transition-colors hover:text-gray-600"
                    >
                      <span>{item.label}</span>
                      <span className="text-sm text-gray-400">
                        {item.englishLabel}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col py-3 text-2xl font-medium tracking-wide transition-colors hover:text-gray-600"
                    >
                      <span>{item.label}</span>
                      <span className="text-sm text-gray-400">
                        {item.englishLabel}
                      </span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
