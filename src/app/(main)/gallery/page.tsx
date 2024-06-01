'use client';

import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

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
  });

  return (
    <section ref={container} className="relative">
      {}
    </section>
  );
};

export default GalleryPage;
