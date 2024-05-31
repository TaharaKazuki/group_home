import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';

import { motion } from 'framer-motion';

const MobileNav = () => {
  return (
    <nav>
      <div className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      <div className="bg-white shadow-2xl w-full absolute h-screen top-0 right-0 max-w-xs z-20">
        <div>icon</div>

        <ul className="h-full flex flex-col justify-center items-start gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link
              href="/"
              className="flex items-center gap-x-2
            "
            >
              <p>Home</p>
              <span className="text-xs">ホーム</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-x-2">
              <p>About</p>
              <span className="text-xs">私たちについて</span>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" className="flex items-center gap-x-2">
              <p>Portfolio</p>
              <span className="text-xs">日常の流れ</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-x-2">
              <p>Contact</p>
              <span className="text-xs">お問い合わせ</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
