'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { img } from '@/data/site-data';

export function HomeClients() {
  const clients = [
    '2025-07--1.png',
    '2025-06--Untitled-design-63.png',
    '2026-06--Dudhsagar-Dairy-1.png',
    '2025-06--Untitled-design-64.webp',
    '2025-06--Untitled-design-67.webp',
    '2025-06--Untitled-design-73.png',
    '2025-06--Untitled-design-74.png',
    '2025-06--Untitled-design-87.png',
    '2025-06--Untitled-design-93.png',
    '2025-06--Untitled-design-92.png',
    '2025-06--Untitled-design-65.webp',
    '2025-06--Untitled-design-66.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = Math.max(0, clients.length - 5);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Automatic scrolling interval with pause on hover/touch
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-[#636365] py-14 sm:py-16 md:py-20">
      <div className="site-container">
        {/* Section Heading with staggered scroll animation */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.p
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-1.5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our most valuable client
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Clienteles
          </motion.h2>
          <motion.p
            className="mt-2 text-xs sm:text-sm text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trusted by teams that keep industry moving.
          </motion.p>
        </motion.div>

        {/* Carousel / Logo Slider matching wotfc.ae #owl-logo */}
        <motion.div
          className="relative px-2 sm:px-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* Navigation Arrows with Spring Hover */}
          <motion.button
            type="button"
            onClick={prevSlide}
            aria-label="Previous client logos"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer"
            whileHover={{ scale: 1.15, backgroundColor: '#000000', color: '#ffffff' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            type="button"
            onClick={nextSlide}
            aria-label="Next client logos"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white shadow-lg cursor-pointer"
            whileHover={{ scale: 1.15, backgroundColor: '#ffffff', color: '#000000' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Slider Viewport Track with smooth motion translation and gesture support */}
          <div
            className="overflow-hidden py-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              animate={{
                x: `-${currentIndex * (100 / 5)}%`,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  nextSlide();
                } else if (info.offset.x > threshold) {
                  prevSlide();
                }
              }}
              transition={{
                type: 'spring',
                stiffness: 140,
                damping: 20,
                mass: 0.8,
              }}
            >
              {clients.map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 shrink-0 px-2 sm:px-3"
                >
                  {/* Framed Logo Card */}
                  <motion.div
                    className="group relative mx-auto h-[110px] sm:h-[120px] w-full max-w-[225px] overflow-hidden rounded-lg border border-[#dcdcdc] bg-white p-3 shadow-xs cursor-pointer select-none"
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      boxShadow: '0 12px 24px -6px rgba(0,0,0,0.35)',
                      borderColor: '#000000',
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  >
                    <figure className="flex h-full w-full items-center justify-center overflow-hidden">
                      <motion.img
                        src={img(name)}
                        alt="Pavitra Industries client"
                        className="max-h-full max-w-full object-contain"
                        whileHover={{ scale: 1.12, rotate: -1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </figure>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Pagination Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="p-1 cursor-pointer focus:outline-none"
              >
                <motion.div
                  className="h-2 rounded-full bg-white transition-colors"
                  animate={{
                    width: currentIndex === idx ? 24 : 8,
                    opacity: currentIndex === idx ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
