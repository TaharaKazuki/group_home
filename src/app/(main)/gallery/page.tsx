'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      className="section h-full bg-green-200 flex flex-col items-center justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="container h-full mx-auto min-h-screen relative overflow-y-auto">
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
        <motion.div
          transition={{ layout: { duration: 0.5, type: 'spring' } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-12 px-40"
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
