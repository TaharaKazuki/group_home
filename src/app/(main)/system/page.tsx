'use client';

import { SYSTEM_DATA, COST_DATA } from '@/const/systemData';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';

const SystemPage = () => {
  return (
    <section className="section h-full flex flex-col items-center justify-center container mx-auto min-h-screen relative lg:p-0 p-4">
      <div className="w-full mt-[50px] flex">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="text-left mb-8 text-2xl font-bold"
          >
            料金一覧
          </motion.h1>
          <table className="w-full max-w-[700px] table-fixed border-collapse">
            <tbody>
              {COST_DATA.map((data, i) => (
                <motion.tr
                  className="relative"
                  key={i}
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ ...transition1, delay: i * 0.5 }}
                >
                  <th className="bg-[#F9AFA6] text-white font-bold text-center py-4 px-6 border border-white rounded-l-[15px] relative">
                    {data.title}
                    <span className="absolute top-1/2 left-full transform -translate-y-1/2">
                      <span className="absolute top-1/2 left-full transform -translate-y-1/2 border-[10px] border-transparent border-l-[#F9AFA6] z-20"></span>
                      <span className="absolute top-1/2 left-[calc(100%+2px)] transform -translate-y-1/2 border-[12px] border-transparent border-l-white z-10"></span>
                    </span>
                  </th>
                  <td className="bg-[white] py-4 px-6 rounded-r-[15px] text-left">
                    {data.cost}
                    {data.description && (
                      <span className="block">{data.description}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="text-left mb-8 text-2xl font-bold"
          >
            設備など
          </motion.h1>
          <table className="w-full max-w-[700px] table-fixed border-collapse">
            <tbody>
              {SYSTEM_DATA.map((data, i) => (
                <motion.tr
                  className="relative"
                  key={i}
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ ...transition1, delay: i * 0.5 }}
                >
                  <th className="bg-[#F9AFA6] text-white font-bold text-center py-4 px-6 border border-white rounded-l-[15px] relative">
                    {data.title}
                    <span className="absolute top-1/2 left-full transform -translate-y-1/2">
                      <span className="absolute top-1/2 left-full transform -translate-y-1/2 border-[10px] border-transparent border-l-[#F9AFA6] z-20"></span>
                      <span className="absolute top-1/2 left-[calc(100%+2px)] transform -translate-y-1/2 border-[12px] border-transparent border-l-white z-10"></span>
                    </span>
                  </th>
                  <td className="bg-[white] py-4 px-6 rounded-r-[15px] text-left">
                    {data.cost}
                    {data.description && (
                      <span className="block">{data.description}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SystemPage;
