"use client"

import LeftNav from "@/components/layout/LeftNav"
import MobileHeader from "@/components/layout/MobileHeader"

export default function Header() {
  return (
    <>
      {/* Left navigation for desktop */}
      <div className="hidden lg:block">
        <LeftNav />
      </div>

      {/* Mobile header - just the hamburger menu */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </>
  )
}
