'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from './img/header/logo.svg';
import Socials from './Socials';
import MobileNav from './MobileNav';

type NavLinkProps = {
  href: string;
  label: string;
  subLabel: string;
};

const navLinks = [
  { href: '/', label: 'Home', subLabel: 'ホーム' },
  { href: '/about', label: 'About', subLabel: '私たちについて' },
  { href: '/portfolio', label: 'Portfolio', subLabel: '日常の流れ' },
  { href: '/gallery', label: 'Gallery', subLabel: 'ギャラリー' },
  { href: '/system', label: 'System', subLabel: '料金について' },
  { href: '/question', label: 'Q/A', subLabel: 'ご質問' },
  { href: '/contact', label: 'Contact', subLabel: 'お問い合わせ' },
];

const NavLink = ({ href, label, subLabel }: NavLinkProps) => (
  <Link
    href={href}
    className="text-[#696c6d] hover:text-primary transition flex flex-col items-center"
  >
    <p>{label}</p>
    <span className="text-xs">{subLabel}</span>
  </Link>
);

const Header = () => {
  return (
    <div className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-white lg:bg-transparent">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/" className="max-w-[200px]">
          <div className="h-[100px] w-[200px] flex justify-center items-center overflow-hidden">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </Link>
        <nav className="hidden xl:flex gap-x-8 font-semibold">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.href}
              href={nav.href}
              label={nav.label}
              subLabel={nav.subLabel}
            />
          ))}
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
