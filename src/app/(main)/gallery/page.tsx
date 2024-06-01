'use client';

import Link from 'next/link';
import React from 'react';
import MotionWrapper from '@/components/MotionWrapper';
import { motion } from 'framer-motion';
import { transition1 } from '@/util/transitions';

const GalleryPage = () => {
  return (
    <MotionWrapper>
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
      >
        <div className="container h-full mx-auto min-h-screen relative overflow-y-auto">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              transition={transition1}
              className="w-full pt-36 pb-2 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:top-52 flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">IXIA</h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                GROUP HOME
              </p>
              <Link href="/contact" className="btn mb-[30px]">
                お問い合わせはこちら
              </Link>
            </motion.div>
            <div className="flex justify-end max-h-screen lg:max-h-max">
              {/* <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-40 lg:-top-72 overflow-hidden"
              ></motion.div> */}
            </div>
          </div>
        </div>
      </motion.section>
    </MotionWrapper>
  );
};

export default GalleryPage;
