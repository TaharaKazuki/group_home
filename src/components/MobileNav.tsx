import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { socialLinks } from './Socials';
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

const navLinks = [
  { href: '/', label: 'Home', subLabel: 'ホーム' },
  { href: '/about', label: 'About', subLabel: '私たちについて' },
  { href: '/schedule', label: 'Schedule', subLabel: '日常の流れ' },
  { href: '/gallery', label: 'Gallery', subLabel: 'ギャラリー' },
  { href: '/system', label: 'System', subLabel: '料金・設備' },
  { href: '/question', label: 'Q/A', subLabel: 'ご質問' },
  { href: '/contact', label: 'Contact', subLabel: 'お問い合わせ' },
];

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="xl:hidden">
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
        className="bg-white shadow-2xl w-full absolute h-screen top-0 right-0 max-w-xs z-20 p-8"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-10 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        <ul className="mt-24 flex flex-col justify-start items-start gap-y-6 text-primary relative font-primary font-bold text-3xl">
          {navLinks.map((nav, _) => (
            <li key={nav.href} className="w-full block">
              <Link
                href={nav.href}
                onClick={() => setOpenMenu(false)}
                className="flex items-center gap-x-2 py-1 w-full
            "
              >
                <p className="text-lg">{nav.label}</p>
                <span className="text-xs">{nav.subLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 wrapper flex flex-col gap-y-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="button group flex items-center"
            >
              <div
                className={`icon bg-white ${link.hoverColor} flex items-center justify-center`}
              >
                {link.icon}
              </div>
              <span
                className={`hidden group-hover:inline-block ml-2 ${link.textColor}`}
              >
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
