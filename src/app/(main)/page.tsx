'use client';

import Image from 'next/image';
import Link from 'next/link';

import FlowerImg from '../../components/img/home/flower.png';

import HomeLogo from '../../components/img/home/home_logo.svg';
import { motion } from 'framer-motion';
import { transition1 } from '@/util/transitions';

const Home = () => {
  return (
    // <MotionWrapper>
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <div className="container relative mx-auto h-full min-h-screen overflow-y-auto lg:overflow-hidden">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="z-10 flex w-full flex-col items-center justify-center pb-2 pt-24 lg:absolute lg:top-[400px] lg:w-auto lg:items-center lg:py-0"
          >
            <Image src={HomeLogo} alt="" objectFit="contain" />
            <Link href="/contact" className="btn mb-[30px] mt-5">
              お問い合わせはこちら
            </Link>
          </motion.div>
          <div className="flex max-h-screen justify-center lg:max-h-max lg:justify-end">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative h-screen w-10/12 lg:-right-20 lg:-top-[120px]"
            >
              <Image src={FlowerImg} alt="flower" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    // </MotionWrapper>
  );
};

export default Home;
