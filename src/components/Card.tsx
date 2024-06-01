'use client';

import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Sample from '../components/img/schedule/sample.jpg';

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
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
          borderColor: color,
          // scale,
        }}
        className="flex flex-col relative lg:h-[650px] lg:w-[1700px] w-full h-[600px] rounded-md lg:p-[50px] p-3 lg:top-0 top-14 bg-white"
      >
        <h1 className="text-center m-0 text-2xl font-bold">{title}</h1>
        <div className="flex flex-col lg:flex-row h-full lg:mt-12 lg:gap-12 gap-4">
          <div className="w-full lg:w-1/2 h-full flex flex-col lg:order-1 order-2">
            <p className="lg:text-lg line-clamp-6">{description}</p>
          </div>
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full flex items-center justify-center rounded-md lg:order-2 order-1">
            {src && (
              <div className="w-full h-full">
                <Image
                  fill
                  src={`/images/schedule/${src}`}
                  alt="image"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
