'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ChevronsRight } from 'lucide-react';
import { img } from '@/data/site-data';

interface ProductHeroBannerProps {
  title: string;
  bgImage?: string;
}

export function ProductHeroBanner({
  title,
  bgImage = '2025-06--Untitled-design-59_11zon-scaled.webp',
}: ProductHeroBannerProps) {
  return (
    <section className="relative min-h-[340px] w-full overflow-hidden sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
      {/* Background exploded motor industrial image with subtle overlay for contrast */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={img(bgImage)}
          alt="Three Phase Induction Motor banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/15 backdrop-brightness-[0.98]" />
      </div>

      {/* Floating Bottom-Left Card matching reference elementor-element-75b4be79 */}
      <div className="site-container relative flex h-full min-h-[340px] items-end pb-0 sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
        <motion.div
          className="w-full max-w-[340px] rounded-t-[20px] bg-white p-5 shadow-lg sm:p-6 md:max-w-[360px]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-2">
            {/* Home Icon Link */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center text-neutral-800 transition hover:text-black focus:outline-none"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
            </div>

            {/* Breadcrumb row: Double Right Chevron + Title */}
            <div className="flex items-start gap-2.5 pt-1">
              <ChevronsRight className="mt-1 h-4 w-4 shrink-0 text-black" />
              <span className="font-sans text-base font-semibold leading-snug tracking-tight text-black sm:text-lg">
                {title}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
