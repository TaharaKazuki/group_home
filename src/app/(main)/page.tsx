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
      <div className="container h-full mx-auto min-h-screen relative lg:overflow-hidden overflow-y-auto">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="w-full pt-24 pb-2 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:top-[400px] flex flex-col justify-center items-center lg:items-center"
          >
            <Image src={HomeLogo} alt="" objectFit="contain" />
            <Link href="/contact" className="btn mt-5 mb-[30px]">
              お問い合わせはこちら
            </Link>
          </motion.div>
          <div className="flex lg:justify-end justify-center max-h-screen lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative w-10/12 h-screen lg:-right-20 lg:-top-[120px]"
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
