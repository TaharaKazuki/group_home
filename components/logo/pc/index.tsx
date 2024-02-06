import Image from "next/image"
import logo from "@/public/logo.svg"

const Logo = () => {
  return (
    <Image
      alt="logo"
      src={logo}
      width={200}
      height={100}
    />
  )
}

export default Logo
