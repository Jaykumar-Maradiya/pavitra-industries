'use client';

import { motion } from 'framer-motion';
import { img } from '@/data/site-data';

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Image with Crisp Dark/Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/images/ab-bg.jpg"
          alt="Pavitra Industries About Us Banner"
          className="h-full w-full object-cover object-center grayscale contrast-125 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
      </div>

      <div className="site-container relative z-10 py-16 sm:py-20 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-wide uppercase text-white drop-shadow-md"
        >
          Pavitra Industries—About US
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mx-auto mt-4 h-1 w-20 bg-white/80 rounded-full origin-center"
        />
      </div>
    </section>
  );
}
