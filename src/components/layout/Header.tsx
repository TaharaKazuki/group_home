"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Top", href: "#top" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Service", href: "#service" },
  { label: "Company", href: "#company" },
  { label: "Topics", href: "#topics" },
  { label: "Contact", href: "#contact" },
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
            href="#top"
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NUTRAD
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
                <a
                  href={item.href}
                  className="relative text-sm font-medium tracking-wide transition-colors hover:text-gray-600"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
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
            className="fixed top-0 right-0 z-40 h-full w-full bg-white sm:w-80"
          >
            <ul className="flex flex-col gap-2 p-12 pt-24">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-2xl font-medium tracking-wide transition-colors hover:text-gray-600"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
