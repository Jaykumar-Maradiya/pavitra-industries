'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { img } from '@/data/site-data';

export function HomeAboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f4f4]">
      {/* Background graphic using /images/source/2025-05--2-4.png */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/images/source/2025-05--2-4.png')" }}
      />
      {/* Subtle overlay gradient to ensure clean readability on wide screens */}
      <div className="hidden lg:block absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#f4f4f4]/90 to-[#f4f4f4]" />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
          {/* Mobile/Tablet image banner */}
          <motion.div
            className="lg:hidden mb-8 w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-md bg-white border border-[#e6ddd5] p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src="/images/source/2025-05--2-4.png"
              alt="Pavitra Industries motor"
              className="w-full h-56 sm:h-64 object-contain object-center"
            />
          </motion.div>

          {/* Right Content Block (.ab_right) matching wotfc.ae */}
          <motion.div
            className="w-full lg:w-[48%] xl:w-[45%] text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Heading: Bold uppercase title */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2em] font-extrabold uppercase tracking-tight text-black leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Pavitra Industries
            </motion.h2>

            {/* Sub-heading / kicker */}
            <motion.p
              className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Why Choose Pavitra Industries?
            </motion.p>

            {/* Description copy (.ab_cnt) */}
            <motion.p
              className="mt-4 text-sm sm:text-base leading-relaxed text-[#333] font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              With over 15+ years of excellence and ISO 9001:2015 certification, Pavitra Industries is one of India’s leading manufacturers of electric vibratory motors and Ac induction motors, Ac&Dc brake motors, and equipment. Our products are trusted across global industries like Construction, Food, Compressor, Material Lift, Chemical, Packaging, Electronics, and more.
            </motion.p>

            {/* Features list */}
            <div className="mt-6 grid grid-cols-2 gap-3 pt-4 border-t border-[#dedede]">
              {[
                'Over 15 years of experience',
                'Serving 10+ global countries',
                'Certified & Quality Assured',
                'High Precision Engineering'
              ].map((item, idx) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#222]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                >
                  <Check className="shrink-0 text-black" size={16} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* btn2_style: Skewed button matching wotfc.ae */}
            <div className="mt-7 sm:mt-9 lg:mt-11">
              <Link
                href="/about-us/"
                data-testid="home-about-link"
                className="group relative inline-flex items-center justify-center font-extrabold text-xs sm:text-sm md:text-base tracking-wide uppercase text-black hover:text-white px-7 sm:px-8 py-3.5 sm:py-4 transition-colors duration-300"
              >
                {/* Skewed outline border box matching wotfc.ae .btn2_style::before */}
                <span
                  className="absolute inset-0 -skew-x-[23deg] border-[3px] border-[#9e9e9e] border-r-[#ddd] group-hover:border-black transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Skewed animated fill background matching wotfc.ae: black on hover */}
                <span
                  className="absolute inset-0 -skew-x-[23deg] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-2">
                  Learn about more
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
