'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { img } from '@/data/site-data';

export function HomeCertifications() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-[#f0f0f0] overflow-hidden">
      <div className="site-container grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="section-kicker !text-black/70">Certified to perform</p>
          <h2 className="section-title !text-black">Quality that moves with you.</h2>
          <p className="body-copy !text-[#555]">
            We are proud to be ISO 9001:2015 certified and CE-compliant. Every Pavitra motor is a Make-in-India product with international performance standards.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2 border border-black/20 bg-[#fafafa] px-4 py-2.5 rounded text-xs sm:text-sm text-black">
              <Check size={15} className="text-black" /> Export Ready
            </span>
            <span className="inline-flex items-center gap-2 border border-black/20 bg-[#fafafa] px-4 py-2.5 rounded text-xs sm:text-sm text-black">
              <Check size={15} className="text-black" /> Overload & Voltage Compatibility
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            '2025-06--Untitled-design-53.webp',
            '2025-06--IVF-.webp',
            '2025-05--PAVITRA-INDUSTRIES-1-1_page-0001.webp'
          ].map((name, index) => (
            <motion.div
              key={name}
              className="overflow-hidden rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-1.5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <img
                src={img(name)}
                alt="Pavitra certification and quality document"
                className="h-32 w-full object-contain md:h-44 rounded"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
