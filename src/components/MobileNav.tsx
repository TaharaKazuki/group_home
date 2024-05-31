import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';

import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : ''}
        className="bg-white shadow-2xl w-full absolute h-screen top-0 right-0 max-w-xs z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-10 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        <ul className="h-full flex flex-col justify-center items-start gap-y-8 text-primary  relative left-4 font-primary font-bold text-3xl">
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
      </motion.div>
    </nav>
  );
};

export default MobileNav;
