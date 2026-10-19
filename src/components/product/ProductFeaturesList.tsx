import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductFeaturesListProps {
  heading?: string;
  features: string[];
}

export function ProductFeaturesList({
  heading = 'Key Features',
  features,
}: ProductFeaturesListProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
    >
      <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
        {heading}
      </h3>
      <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <ul className="grid gap-4 sm:grid-cols-1 md:gap-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3.5 border-b border-neutral-100 pb-3 text-sm font-medium text-neutral-800 last:border-b-0 last:pb-0 sm:text-base"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-sm">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="pt-0.5 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
