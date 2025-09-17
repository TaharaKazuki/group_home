"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { menuItems, contactButton } from "@/data/navigation"
import { colors } from "@/lib/colors"

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile header with logo and hamburger */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="flex items-center justify-between px-6 py-4">
          <motion.a
            href="/#top"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/assets/logo.svg"
              alt="IXIA Logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 rounded-lg p-2 text-white transition-colors ${
              isOpen ? `${colors.primaryClass}` : ""
            }`}
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
      </header>

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
                      className={`flex flex-col py-3 text-2xl font-medium tracking-wide transition-colors ${colors.textDark} hover:text-gray-500`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col py-3 text-2xl font-medium tracking-wide transition-colors ${colors.textDark} hover:text-gray-500`}
                    >
                      <span>{item.label}</span>
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="mt-4"
              >
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full rounded-full"
                >
                  <Link
                    href={contactButton.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {contactButton.label}
                  </Link>
                </Button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
