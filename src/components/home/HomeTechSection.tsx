'use client';

import { motion } from 'framer-motion';
import { Factory, FlaskConical, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

export function HomeTechSection() {
  const techFeatures = [
    {
      title: 'Advanced Testing',
      text: 'Each motor undergoes rigorous multi-point testing to ensure reliability, durability, and vibration accuracy before it reaches your site.',
      Icon: FlaskConical,
      tag: '01'
    },
    {
      title: 'Quality Control',
      text: 'We follow strict ISO-certified quality protocols at every stage — from raw material to final dispatch — to ensure zero-defect products.',
      Icon: ShieldCheck,
      tag: '02'
    },
    {
      title: 'Feature Upgrades',
      text: 'Our team constantly innovates motor designs with better insulation, higher torque, efficient cooling, and customizable mounting options.',
      Icon: Factory,
      tag: '03'
    },
    {
      title: 'Innovation-led Engineering',
      text: 'Our R&D department works tirelessly to integrate the latest vibration technology into our motors, keeping you ahead of the curve.',
      Icon: Globe2,
      tag: '04'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#f0f0f0] overflow-hidden">
      <div className="site-container">
        {/* Animated Section Header */}
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.p
            className="section-kicker !text-black/70"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Research & technology
          </motion.p>
          <motion.h2
            className="section-title !text-black"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Backed by Research & Technology
          </motion.h2>
          <motion.p
            className="body-copy !text-[#555]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our dedicated R&D center ensures continuous product improvement and innovation. From vibration intensity tuning to next-gen designs — we keep you ahead of the curve.
          </motion.p>
        </motion.div>

        {/* 4 Feature Cards with Staggered Entrance & Interactive Hover */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techFeatures.map(({ title, text, Icon, tag }, index) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-neutral-200 bg-neutral-50/70 p-7 hover:border-black hover:bg-black hover:text-white transition-colors duration-400 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-2xl"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
            >
              {/* Top Row: Icon and Step Number */}
              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-xs border border-neutral-200/80 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-800 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-neutral-500 transition-colors">
                    {tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-black group-hover:text-white transition-colors duration-300 leading-snug">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300">
                  {text}
                </p>
              </div>

              {/* Bottom Subtle Indicator Arrow */}
              <div className="mt-8 pt-4 border-t border-neutral-200/80 group-hover:border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors duration-300">
                <span className="uppercase tracking-wider text-[11px]">Certified R&D</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
