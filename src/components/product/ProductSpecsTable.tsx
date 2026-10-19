import { motion } from 'framer-motion';

interface ProductSpecsTableProps {
  heading?: string;
  specs: [string, string][];
}

export function ProductSpecsTable({
  heading = 'Optional Features',
  specs,
}: ProductSpecsTableProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
        {heading}
      </h3>
      <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-900 text-white">
                <th scope="col" className="w-1/3 px-5 py-3.5 font-semibold uppercase tracking-wider text-xs md:text-sm">
                  Specification
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold uppercase tracking-wider text-xs md:text-sm">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {specs.map(([label, value], idx) => (
                <tr
                  key={label}
                  className={`transition-colors hover:bg-neutral-50/80 ${
                    idx % 2 === 1 ? 'bg-neutral-50/50' : 'bg-white'
                  }`}
                >
                  <td className="px-5 py-3.5 font-medium text-neutral-900">
                    {label}
                  </td>
                  <td className="px-5 py-3.5 text-neutral-700">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
