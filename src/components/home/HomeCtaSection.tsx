'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HomeCtaSection() {
  return (
    <section className="bg-black py-16 text-white md:py-20 border-t border-neutral-900 overflow-hidden">
      <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="section-kicker !text-white/70">Need help selecting the right motor?</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl text-white">
            Tell us what your application needs.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <Link
            href="/contact-us/"
            data-testid="home-contact-cta"
            className="button-light !border-white !bg-white !text-black hover:!bg-neutral-200 transition-colors"
          >
            Contact Pavitra <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
