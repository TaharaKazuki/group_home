"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"

import { LINKS } from "@/constant"
import { colors } from "@/lib/colors"

const Footer = () => {
  return (
    <footer
      className={`${colors.primaryClass} flex flex-row items-center justify-center py-14`}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/footer/footer_logo.svg"
          alt="IXIA Logo"
          width={200}
          height={100}
          priority
          className="h-16 w-32 object-contain md:h-[100px] md:w-[200px]"
        />
        {/* address */}
        <div className="mt-5 flex flex-col items-center text-xs text-white">
          <p>Tel. 090-0000-0000</p>
        </div>
        {/* social */}
        <ul className="mt-5 flex flex-row gap-3">
          <li>
            <Link
              href="#"
              className="text-white transition-colors hover:text-gray-200"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/ikisia_group_home/"
              className="text-white transition-colors hover:text-gray-200"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
          </li>
        </ul>
        {/* links */}
        <ul className="flex flex-col gap-3 py-12 text-center lg:flex-row lg:gap-9 lg:py-16">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <span className="relative cursor-pointer text-xs text-white underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:content-[''] lg:transition-colors lg:duration-300 lg:before:transition-all lg:before:duration-300 lg:hover:text-gray-200 lg:hover:underline-offset-0 lg:hover:before:w-full">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-[2vw] text-white lg:text-[10px]">
          © 2024 IXIA group home
        </p>
      </div>
    </footer>
  )
}

export default Footer
