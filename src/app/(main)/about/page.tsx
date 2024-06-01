'use client';
import Image from 'next/image';
import AboutImage from '../../../components/img/about/about.jpg';
import Link from 'next/link';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';

const AboutPage = () => {
  return (
    <MotionWrapper>
      <motion.section
        className="section"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={transition1}
      >
        <div className="container h-full mx-auto min-h-screen relative overflow-y-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left">
            <div className="flex-1 lg:pt-0 pt-24 max-h-full lg:max-h-max lg:order-none">
              <Image className="h-[100vh]" src={AboutImage} alt="sample" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={transition1}
              className="flex-1 pt-3 pb-4 px-2 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            >
              <div className="py-4 px-3 bg-white">
                <h1 className="text-4xl font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
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
    </MotionWrapper>
  );
};

export default AboutPage;
