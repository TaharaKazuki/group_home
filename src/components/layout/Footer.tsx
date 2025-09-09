"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"

import { LINKS } from "@/constant"

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center bg-white py-14">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/logo.svg"
          alt="IXIA Logo"
          width={200}
          height={100}
          priority
        />
        {/* address */}
        <div className="mt-5 flex flex-col items-center text-xs text-gray-700">
          <p>Tel. 090-0000-0000</p>
        </div>
        {/* social */}
        <ul className="mt-5 flex flex-row gap-3 text-gray-700">
          <li>
            <FaFacebook className="text-red-300" />
          </li>
          <Link href="https://www.instagram.com/ikisia_group_home/">
            <FaInstagram className="text-red-300" />
          </Link>
        </ul>
        {/* links */}
        <ul className="flex flex-col gap-3 py-12 text-center lg:flex-row lg:gap-9 lg:py-16">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <span className="relative cursor-pointer text-xs text-gray-700 underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-red-300 before:content-[''] lg:transition-colors lg:duration-300 lg:before:transition-all lg:before:duration-300 lg:hover:text-red-300 lg:hover:underline-offset-0 lg:hover:before:w-full">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-[2vw] text-gray-700 lg:text-[10px]">
          © 2024 IXIA group home
        </p>
      </div>
    </footer>
  )
}

export default Footer
