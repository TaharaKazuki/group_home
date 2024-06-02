'use client';

import Image from 'next/image';
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type CardProps = {
  i: number;
  title: string;
  subTitle: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  isReversed: boolean;
};

const Card = ({
  title,
  subTitle,
  description,
  src,
  progress,
  range,
  targetScale,
  isReversed,
}: CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center px-4"
    >
      <motion.div
        style={{
          scale,
        }}
        className="relative top-14 flex h-[600px] w-full flex-col rounded-md bg-white p-3 lg:top-0 lg:h-[650px] lg:w-[1700px] lg:p-[50px]"
      >
        <h1 className="m-0 flex flex-col items-center text-center text-3xl font-bold">
          <p>{title}</p>
          <span className="text-sm">{subTitle}</span>
        </h1>
        <div className="flex h-full flex-col gap-4 lg:mt-12 lg:flex-row lg:gap-12">
          <div
            className={`flex size-full flex-col lg:w-1/2 ${
              isReversed ? 'lg:order-2' : 'lg:order-1'
            } order-2`}
          >
            <p className="sm-only:line-clamp-6 lg:text-lg">{description}</p>
          </div>
          <div
            className={`relative flex h-[300px] w-full items-center justify-center lg:h-full lg:w-1/2 ${
              isReversed ? 'lg:order-1' : 'lg:order-2'
            } order-1`}
          >
            {src && (
              <motion.div className="size-full">
                <Image
                  fill
                  src={`/images/schedule/${src}`}
                  alt="image"
                  className="rounded-md object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
