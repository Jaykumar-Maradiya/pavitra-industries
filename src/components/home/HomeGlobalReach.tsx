'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { img } from '@/data/site-data';

export function HomeGlobalReach() {
  return (
    <section className="industrial-grid bg-white py-20 text-black md:py-28 border-t border-[#f0f0f0] overflow-hidden">
      <div className="site-container grid gap-14 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="section-kicker !text-black/70">Global reach</p>
          <h2 className="section-title !text-black">We Export Across the Globe</h2>
          <p className="body-copy !text-[#555]">
            Our motors are trusted and used in Europe, Africa and Russia. We meet strict deadlines and quality standards, building long-lasting relationships with our global clients.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {['Europe', 'Africa', 'Russia'].map((item, idx) => (
              <motion.span
                key={item}
                className="border border-black/20 bg-[#fafafa] hover:bg-black hover:text-white hover:border-black px-5 py-3 text-sm font-semibold transition-colors duration-200 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={img('2025-05--Africa-3.png')}
            alt="Pavitra Industries exports"
            className="max-h-[330px] w-full object-contain"
          />
          <Globe2 className="absolute right-7 top-7 text-black/60" size={36} />
        </motion.div>
      </div>
    </section>
  );
}
