'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { img } from '@/data/site-data';

export function AboutCertifications() {
  const certLogos = [
    { name: 'ISO Certified', src: img('2025-05--Africa-3.png') },
    { name: 'CE Quality Certified', src: img('2025-05--Peach-Modern-New-Product-Skincare-Instagram-Post-4.png') },
    { name: 'IVF Verified', src: img('2025-06--IVF-.webp') },
  ];

  const galleryImages = [
    { name: 'Quality Certificate 1', src: img('2025-05--PAVITRA-INDUSTRIES-1-1_page-0001.webp') },
    { name: 'Quality Certificate 2', src: img('2025-06--Untitled-design-53.webp') },
    { name: 'Quality Certificate 3', src: img('2025-06--Untitled-design-54.webp') },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, description, certification badges, and checklist */}
          <motion.div
            className="lg:col-span-6"
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
              Certified to Perform
            </motion.h2>

            <motion.p
              className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              We are proud to be <strong className="text-black">ISO 9001:2015 certified</strong> and{' '}
              <strong className="text-black">CE-compliant</strong>. Every Pavitra motor is a Make-in-India product with international performance standards.
            </motion.p>

            {/* 3 Certification Logo Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 items-center max-w-md">
              {certLogos.map((c, idx) => (
                <motion.div
                  key={c.name}
                  className="flex items-center justify-center p-3 rounded-md border border-neutral-200 bg-neutral-50 shadow-sm hover:border-black transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <img
                    src={c.src}
                    alt={c.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Check points */}
            <div className="mt-8 space-y-3">
              <motion.div
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-black"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white shrink-0">
                  <Check size={14} />
                </span>
                <span>Export Ready</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-black"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white shrink-0">
                  <Check size={14} />
                </span>
                <span>Overload & Voltage Compatibility</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Certificate Gallery */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {galleryImages.map((item, idx) => (
                <motion.div
                  key={item.name}
                  className={`group relative overflow-hidden rounded-md border-2 border-neutral-200 bg-neutral-50 p-2 shadow-sm hover:border-black hover:shadow-lg transition-all ${
                    idx === 2 ? 'sm:col-span-3 lg:col-span-2' : ''
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.12,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-48 sm:h-56 object-contain group-hover:scale-102 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
