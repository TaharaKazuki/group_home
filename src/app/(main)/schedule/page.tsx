'use client';

import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { projects } from '@/const/scheduleData';
import Card from '@/components/Card';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';

const GalleryPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: container,
    // offset: ['start start', 'end end'],
    container: container.current!,
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

  // className="h-screen overflow-y-auto"
  return (
    <div
      className="h-screen overflow-y-auto lg:not-h-screen lg:not-overflow-y-auto"
      ref={container}
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.1, 1 - (projects.length - i) * 0.01]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.section>
    </div>
  );
};

export default GalleryPage;
