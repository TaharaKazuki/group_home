"use client"

import { Home, Info, Users, Building, HelpCircle, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/Button"

const navItems = [
  {
    label: "ホーム",
    href: "/#top",
    icon: Home,
  },
  {
    label: "私たちについて",
    href: "/#about",
    icon: Info,
  },
  {
    label: "サービス",
    href: "/#service",
    icon: Users,
  },
  {
    label: "会社概要",
    href: "/#company",
    icon: Building,
  },
  {
    label: "よくある質問",
    href: "/questions",
    icon: HelpCircle,
  },
  {
    label: "施設情報",
    href: "/facilities",
    icon: Building,
  },
]

export default function LeftNav() {
  return (
    <nav
      className="fixed top-0 left-0 z-50 h-screen w-64 shadow-xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex h-full flex-col">
        {/* Logo section */}
        <div className="p-6">
          <Link href="/#top" className="block">
            <Image
              src="/assets/logo.svg"
              alt="IXIA Group Home"
              width={200}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation items */}
        <div className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-red-300 hover:text-white hover:shadow-md"
                  >
                    <item.icon className="h-5 w-5 text-red-300 transition-colors group-hover:text-white" />
                    <span className="font-medium">{item.label}</span>
                    <div className="ml-auto h-1 w-1 rounded-full bg-red-300 opacity-0 transition-opacity group-hover:bg-white group-hover:opacity-100" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-red-300 hover:text-white hover:shadow-md"
                  >
                    <item.icon className="h-5 w-5 text-red-300 transition-colors group-hover:text-white" />
                    <span className="font-medium">{item.label}</span>
                    <div className="ml-auto h-1 w-1 rounded-full bg-red-300 opacity-0 transition-opacity group-hover:bg-white group-hover:opacity-100" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact button section */}
        <div className="p-6">
          <div>
            <Button
              asChild
              variant="primary"
              className="w-full justify-start gap-3 rounded-xl bg-red-300 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-red-300 hover:shadow-xl"
            >
              <Link href="/contact">
                <Mail className="h-5 w-5 transition-colors hover:text-red-300" />
                <span className="font-medium">お問い合わせ</span>
              </Link>
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">TEL: 048-925-5750</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
