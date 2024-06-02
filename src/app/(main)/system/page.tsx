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
  <div className="mb-8 w-full max-w-[700px]">
    <motion.h1
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-50%' }}
      transition={{ ...transition1, delay: baseDelay + data.length * 0.5 }}
      className="mb-8 text-left text-2xl font-bold"
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
            <th className="relative rounded-l-[15px] border border-white bg-[#F9AFA6] px-6 py-4 text-center font-bold text-white">
              {item.title}
              <span className="absolute left-full top-1/2 -translate-y-1/2">
                <span className="absolute left-full top-1/2 z-20 -translate-y-1/2 border-[10px] border-transparent border-l-[#F9AFA6]"></span>
                <span className="absolute left-[calc(100%+2px)] top-1/2 z-10 -translate-y-1/2 border-[12px] border-transparent border-l-white"></span>
              </span>
            </th>
            <td className="rounded-r-[15px] bg-[white] px-6 py-4 text-left">
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
    <section className="section lg:not-h-screen lg:not-overflow-y-auto container relative mx-auto flex h-screen min-h-screen flex-col items-center justify-center overflow-y-auto p-4 lg:p-0">
      <div className="mt-[50px] flex w-full sm-only:flex-col">
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
