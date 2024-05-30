'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from './img/header/logo.svg';
// import Socials from './Socials';
// import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/">
          <div className="h-[100px] w-[200px] flex justify-center items-center">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
