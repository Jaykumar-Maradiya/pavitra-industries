import { motion } from 'framer-motion';

interface ProductDataTableProps {
  title?: string;
  headers: string[];
  rows: string[][];
}

export function ProductDataTable({ title, headers, rows }: ProductDataTableProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {title && (
        <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          {title}
        </h3>
      )}
      <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-900 text-white">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="whitespace-nowrap px-4 py-3.5 font-semibold uppercase tracking-wider text-xs md:text-sm"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={`transition-colors hover:bg-neutral-50/80 ${
                    rIdx % 2 === 1 ? 'bg-neutral-50/50' : 'bg-white'
                  }`}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-3 text-neutral-700 whitespace-nowrap ${
                        cIdx === 0 ? 'font-medium text-neutral-900' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
