'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="bg-black text-white py-10 sm:py-12 border-b border-neutral-900 overflow-hidden">
      <div className="site-container">
        <motion.div
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Home"
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-neutral-500" />
          <span className="text-white">Contact Us</span>
        </motion.div>
        <motion.h1
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h1>
      </div>
    </section>
  );
}
