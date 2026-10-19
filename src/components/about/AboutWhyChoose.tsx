'use client';

import { motion } from 'framer-motion';
import { img } from '@/data/site-data';

export function AboutWhyChoose() {
  const points = [
    {
      title: '15+ Years of Industry Experience',
      description:
        'Our deep understanding of industrial vibration technology comes from over a decade of hands-on manufacturing and engineering excellence. From small machinery to large-scale equipment — our motors power it all with unmatched reliability.',
    },
    {
      title: 'Expert Engineering Team',
      description:
        'Our team includes skilled engineers, designers, and technical specialists who understand your process requirements. With an eye for detail and a passion for innovation, we build motors that are efficient, durable, and application-ready.',
    },
    {
      title: 'End-to-End After-Sales Support',
      description:
        'We believe in long-term relationships. From installation assistance to performance tuning and troubleshooting — our support team ensures your equipment keeps running smoothly throughout its lifecycle.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, intro, and 3 points */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight uppercase"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose{' '}
              <span className="text-neutral-500 font-bold block sm:inline">
                That Move the World
              </span>
            </motion.h2>

            <motion.p
              className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              At <strong className="text-black">Pavitra Industries</strong>, we don’t just manufacture motors — we engineer{' '}
              <strong className="text-black">trust, precision, and performance</strong>. With over 15 years of experience and a global customer base, we are the preferred choice for industries that demand vibration solutions they can rely on.
            </motion.p>

            <div className="mt-8 space-y-6">
              {points.map((pt, idx) => (
                <motion.div
                  key={pt.title}
                  className="flex gap-4 sm:gap-5 items-start p-4 sm:p-5 rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 hover:border-black transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.12,
                    ease: 'easeOut',
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded bg-black text-white font-mono font-bold text-xs sm:text-sm shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide">
                      {pt.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                      {pt.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Original Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="relative overflow-hidden rounded-md border-4 border-black shadow-2xl bg-neutral-100 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img('2025-06--Untitled-design-57.webp')}
                alt="Why Choose Pavitra Industries"
                className="w-full h-auto object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
