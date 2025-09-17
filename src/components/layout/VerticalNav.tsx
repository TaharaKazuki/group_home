"use client"

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { menuItems, contactButton } from "@/data/navigation"

export default function VerticalNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 lg:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false)
        setHoveredIndex(null)
      }}
    >
      <motion.div
        animate={{
          width: isExpanded ? "220px" : "60px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-full shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          border: "1px solid rgba(239, 68, 68, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Collapsed state - dots only */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-4 px-4 py-8"
            >
              {menuItems.map((_, index) => (
                <div
                  key={index}
                  className="h-3 w-3 rounded-full bg-red-300/60 transition-colors hover:bg-red-400"
                />
              ))}
              <div className="my-2 h-px w-6 bg-red-300/30" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400">
                <span className="text-xs font-bold text-white">問</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded state - full menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col gap-3 px-4 py-6"
            >
              {/* Navigation items */}
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ${
                        hoveredIndex === index
                          ? "bg-red-50 text-red-600"
                          : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-200 ${
                          hoveredIndex === index
                            ? "scale-150 bg-red-500"
                            : "bg-red-300/60"
                        }`}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ${
                        hoveredIndex === index
                          ? "bg-red-50 text-red-600"
                          : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-200 ${
                          hoveredIndex === index
                            ? "scale-150 bg-red-500"
                            : "bg-red-300/60"
                        }`}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Contact button */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.05, duration: 0.3 }}
                className="mt-2 border-t border-red-300/20 pt-2"
              >
                <Button
                  asChild
                  variant="primary"
                  className="w-full justify-start gap-3 rounded-lg bg-red-500 px-3 py-2 text-white transition-all duration-200 hover:bg-red-600"
                >
                  <Link href={contactButton.href}>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30">
                      <span className="text-xs font-bold">問</span>
                    </div>
                    <span className="text-sm font-medium">
                      {contactButton.label}
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
