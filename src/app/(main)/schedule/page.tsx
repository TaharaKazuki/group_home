'use client';

import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { SCHEDULE_DATA } from '@/const/scheduleData';
import Card from '@/components/Card';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="h-screen overflow-y-auto lg:not-h-screen lg:not-overflow-y-auto"
      ref={container}
    >
      <motion.section
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-50%' }}
        transition={transition1}
      >
        {SCHEDULE_DATA.map((schedule, i) => {
          const targetScale = 1 - (SCHEDULE_DATA.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...schedule}
              progress={scrollYProgress}
              range={[i * 0.1, 1 - (SCHEDULE_DATA.length - i) * 0.01]}
              targetScale={targetScale}
              isReversed={i % 2 !== 0}
            />
          );
        })}
      </motion.section>
    </div>
  );
};

export default GalleryPage;
