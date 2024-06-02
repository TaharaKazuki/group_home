'use client';
import Image from 'next/image';
import AboutImage from '../../../components/img/about/about.jpg';
import Link from 'next/link';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';

const AboutPage = () => {
  return (
    <motion.section
      className="lg:not-h-screen lg:not-overflow-y-auto h-screen overflow-y-auto"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={transition1}
    >
      <div className="container relative mx-auto h-full min-h-screen overflow-y-auto">
        <div className="flex flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:text-left">
          <div className="max-h-full flex-1 pt-24 lg:order-none lg:max-h-max lg:pt-0">
            <Image className="h-screen" src={AboutImage} alt="sample" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={transition1}
            className="z-10 flex flex-1 flex-col items-center justify-center px-2 pb-4 pt-3 lg:w-auto lg:items-start lg:pt-0"
          >
            <div className="bg-white px-3 py-4">
              <h1 className="mb-2 text-4xl font-bold capitalize leading-[120%] -tracking-wider">
                私たちについて
              </h1>
              <p className="mb-12 max-w-full">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                <b>サンプルサンプルサンプルサンプルサンプル</b>
                サンプルサンプルサンプルサンプルサンプル
                <br />
                <br />
                サンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプル
                サンプルサンプルサンプルサンプルサンプルaaaaa
                サンプルサaaaaaンプルサンプルサンプルサンプル
              </p>
            </div>
            <Link className="btn mt-2" href="/portfolio">
              お問い合わせはこちら
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
