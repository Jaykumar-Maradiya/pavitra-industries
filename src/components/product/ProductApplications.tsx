import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { img } from '@/data/site-data';

interface ProductApplicationsProps {
  heading?: string;
  applications: string[];
  imageSrc?: string;
}

export function ProductApplications({
  heading = 'Applications',
  applications,
  imageSrc = '2025-06--hg-1024x1024.webp',
}: ProductApplicationsProps) {
  return (
    <section className="site-container py-12 md:py-20 overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Industrial Application Graphic */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
            <div className="flex aspect-square items-center justify-center">
              <img
                src={img(imageSrc)}
                alt="Industrial applications diagram"
                className="max-h-[460px] w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Applications List */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Our three-phase squirrel cage induction motors power heavy-duty applications across diverse industrial sectors:
          </p>

          <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-1">
              {applications.map((app) => (
                <li
                  key={app}
                  className="flex items-start gap-3.5 border-b border-neutral-100 pb-3 text-sm font-medium text-neutral-800 last:border-b-0 last:pb-0 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-sm">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5 leading-snug">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
