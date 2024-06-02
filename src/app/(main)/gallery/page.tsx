'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      className="section flex h-full flex-col items-center justify-center bg-green-200"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="container relative mx-auto h-full min-h-screen overflow-y-auto">
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white px-40 py-12"
        >
          <motion.h2 layout="position" className="text-2xl">
            Motion
          </motion.h2>
          {isOpen && (
            <motion.div>
              <p className="pt-4">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
              <p className="pt-4">
                サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulePage;
