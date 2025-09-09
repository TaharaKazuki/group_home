"use client"

import { motion } from "framer-motion"

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Philosophy", "History", "Team"],
  },
  {
    title: "Services",
    links: ["Design", "Production", "Interior", "Consulting"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Privacy Policy", "Terms"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">NUTRAD</h3>
            <p className="text-sm text-gray-400">
              Creating beautiful spaces and products that inspire daily living.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-medium">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 NUTRAD. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
