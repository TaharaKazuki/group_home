'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { transition1 } from '@/util/transitions';

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
