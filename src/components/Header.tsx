'use client';

import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from './img/header/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/">
          <div className="h-[250px] w-[250px] flex justify-center items-center overflow-hidden">
            <Image src={Logo} alt="logo" width={250} height={250} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
