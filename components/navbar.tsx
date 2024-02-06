import Link from "next/link"

import Logo from "@/components/logo/pc"
const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4">
      {/* LOGO */}
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div></div>
    </div>
  )
}

export default Navbar
