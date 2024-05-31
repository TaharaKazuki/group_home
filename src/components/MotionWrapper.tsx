'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MotionWrapper = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={true} mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default MotionWrapper;
