'use client';

import { motion } from 'framer-motion';
import { img } from '@/data/site-data';

export function BlogHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 text-white min-h-[380px] sm:min-h-[460px] lg:min-h-[531px] flex items-center justify-center">
      {/* Original Pavitra Industries Blog Hero Banner with integrated motor cards in graphic */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={img('2025-05--pavitrA-1-scaled.webp')}
          alt="Pavitra Industries Motors & Vibratory Equipment Banner"
          className="h-full w-full object-cover object-center lg:object-bottom"
        />
        {/* Subtle dark gradient overlay to ensure text contrast while keeping background graphic fully visible */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />
      </div>

      <div className="site-container relative z-10 py-20 sm:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight text-white drop-shadow-lg"
        >
          Blog
        </motion.h1>
      </div>
    </section>
  );
}
