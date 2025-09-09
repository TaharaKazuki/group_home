"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { menuItems, contactButton } from "@/data/navigation"

export default function DesktopHeader() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <ul className="flex items-center gap-8">
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

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: menuItems.length * 0.1 }}
      >
        <Button
          asChild
          variant="primary"
          size="sm"
          className="cursor-pointer rounded-full"
        >
          <Link href={contactButton.href}>{contactButton.label}</Link>
        </Button>
      </motion.div>
    </div>
  )
}
