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
  { href: '/schedule', label: 'Schedule', subLabel: '日常の流れ' },
  { href: '/gallery', label: 'Gallery', subLabel: 'ギャラリー' },
  { href: '/system', label: 'System', subLabel: '料金・設備' },
  { href: '/question', label: 'Q/A', subLabel: 'ご質問' },
  { href: '/contact', label: 'Contact', subLabel: 'お問い合わせ' },
];

const NavLink = ({ href, label, subLabel }: NavLinkProps) => (
  <Link
    href={href}
    className="flex flex-col items-center text-primary transition hover:text-primary"
  >
    <p>{label}</p>
    <span className="text-xs">{subLabel}</span>
  </Link>
);

const Header = () => {
  return (
    <div className="fixed z-30 flex h-[100px] w-full items-center bg-white px-[30px] lg:h-[140px] lg:bg-transparent lg:px-[100px]">
      <div className="flex w-full flex-col justify-start gap-x-6 lg:flex-row lg:items-center">
        <Link href="/" className="max-w-[200px]">
          <div className="flex h-[100px] w-[200px] items-center justify-center overflow-hidden">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </Link>
        <nav className="hidden gap-x-8 font-semibold xl:flex">
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
