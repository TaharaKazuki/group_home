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
    </nav>
  );
};

export default MobileNav;
