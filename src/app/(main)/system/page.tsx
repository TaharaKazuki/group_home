'use client';

import { SYSTEM_DATA, COST_DATA } from '@/const/systemData';
import { transition1 } from '@/util/transitions';
import { motion } from 'framer-motion';

type TableProps = {
  data: typeof SYSTEM_DATA | typeof COST_DATA;
  tableTitle: string;
  baseDelay: number;
};

const Table = ({ data, tableTitle, baseDelay }: TableProps) => (
  <div className="w-full max-w-[700px] mb-8">
    <motion.h1
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-50%' }}
      transition={{ ...transition1, delay: baseDelay + data.length * 0.5 }}
      className="text-left mb-8 text-2xl font-bold"
    >
      {tableTitle}
    </motion.h1>
    <table className="w-full table-fixed border-collapse">
      <tbody>
        {data.map((item, i) => (
          <motion.tr
            className="relative"
            key={i}
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -250 }}
            transition={{ ...transition1, delay: baseDelay + i * 0.5 }}
          >
            <th className="bg-[#F9AFA6] text-white font-bold text-center py-4 px-6 border border-white rounded-l-[15px] relative">
              {item.title}
              <span className="absolute top-1/2 left-full transform -translate-y-1/2">
                <span className="absolute top-1/2 left-full transform -translate-y-1/2 border-[10px] border-transparent border-l-[#F9AFA6] z-20"></span>
                <span className="absolute top-1/2 left-[calc(100%+2px)] transform -translate-y-1/2 border-[12px] border-transparent border-l-white z-10"></span>
              </span>
            </th>
            <td className="bg-[white] py-4 px-6 rounded-r-[15px] text-left">
              {item.cost}
              {item.description && (
                <span className="block">{item.description}</span>
              )}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SystemPage = () => {
  return (
    <section className="section flex flex-col items-center justify-center container mx-auto min-h-screen relative lg:p-0 p-4 h-screen overflow-y-auto lg:not-h-screen lg:not-overflow-y-auto">
      <div className="w-full mt-[50px] flex sm-only:flex-col">
        <Table data={COST_DATA} tableTitle={'料金一覧'} baseDelay={0} />
        <Table
          data={SYSTEM_DATA}
          tableTitle={'設備など'}
          baseDelay={COST_DATA.length * 0.5}
        />
      </div>
    </section>
  );
};

export default SystemPage;
