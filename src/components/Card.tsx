'use client';

import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-3vh + ${i * 20}px)`,
        }}
        className="flex flex-col relative top-[-25%] lg:h-[650px] w-full h-[400px] rounded-[25px] p-[50px]"
      >
        <h2 className="text-center m-0 text-2xl">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-2/5 relative top-[10%]">
            <p className="text-lg">{description}</p>
          </div>
          <div className="relative w-3/5 h-full rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
