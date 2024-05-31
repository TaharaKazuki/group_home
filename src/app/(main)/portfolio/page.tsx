'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      className="section bg-green-200 flex items-center justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
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
    </section>
  );
};

export default PortfolioPage;
