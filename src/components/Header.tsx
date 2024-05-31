'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from './img/header/logo.svg';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Source } from 'postcss';

const Header = () => {
  return (
    <div className="bg-white fixed w-full px-[10px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/" className="max-w-[200px]">
          <div className="h-[100px] w-[200px] flex justify-center items-center overflow-hidden">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            href="/"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </div>
  );
};

export default Header;
