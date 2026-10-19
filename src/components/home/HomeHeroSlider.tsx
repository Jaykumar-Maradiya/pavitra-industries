'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from '@/data/site-data';

export const heroSlides = [
  {
    heading: 'Vibrate the World with Pavitra Industries',
    description:
      'With over 15+ years of experience and ISO 9001:2008 certification, Pavitra Industries leads the way in manufacturing high-performance vibratory motors and equipment trusted by industries worldwide.',
    image: '2025-05--pavitrA-2-1536x566.webp'
  },
  {
    heading: 'Exporting Quality Across Continents',
    description:
      'From Europe to Asia, our CE-certified vibratory motors deliver performance, reliability, and international-grade engineering—trusted by global industries for consistent results.',
    image: '2025-05--pavitrA-3-1536x566.webp'
  },
  {
    heading: 'Precision-Engineered Vibratory Motors for Every Industry',
    description:
      'Explore our complete range of foot-mounted, flange-mounted, and custom vibratory motors, designed for maximum efficiency, centrifugal force, and vibration control.',
    image: '2025-05--pavitrA-1-1536x566.webp'
  }
];

export function HomeHeroSlider() {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setSlide((prev) => (prev + heroSlides.length - 1) % heroSlides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Automatically advance slides every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[500px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[620px] lg:aspect-[1600/680] flex items-center overflow-hidden bg-[#181515] text-white"
    >
      {/* Background slide images with Ken Burns subtle cinematic zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[slide].image}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src={img(heroSlides[slide].image)}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic dark gradient overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/95 via-black/75 to-black/40 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-black/25" />

      {/* Slide Content Caption with Framer Motion staggered animations */}
      <div className="relative z-30 w-full py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Heading */}
                <motion.h1
                  className="text-[22px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold uppercase leading-[1.2] tracking-tight text-white drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {heroSlides[slide].heading}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mt-3 sm:mt-4 md:mt-5 max-w-xl text-[13px] xs:text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {heroSlides[slide].description}
                </motion.p>

                {/* Sleek skewed button with responsive sizing */}
                <motion.div
                  className="mt-5 sm:mt-7 md:mt-9"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="/three-phase-induction-motor/"
                    className="group relative inline-flex items-center justify-center font-bold sm:font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase text-white px-5 sm:px-7 py-2.5 sm:py-3.5 transition-all duration-300"
                  >
                    <span
                      className="absolute inset-0 -skew-x-[20deg] sm:-skew-x-[22deg] border-2 sm:border-[3px] border-white/90 group-hover:border-white transition-colors duration-300 pointer-events-none"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-0 -skew-x-[20deg] sm:-skew-x-[22deg] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                      Explore More
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Pagination dots with animated progress line */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-5 sm:left-8 md:left-12 lg:left-16 z-30 flex items-center gap-2 sm:gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="p-1 cursor-pointer focus:outline-none"
          >
            <div className="relative overflow-hidden h-2 sm:h-2.5 rounded-full bg-white/30 transition-all duration-300"
              style={{ width: index === slide ? '36px' : '10px' }}
            >
              {index === slide && !isPaused && (
                <motion.div
                  key={`progress-${slide}`}
                  className="absolute inset-0 bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              )}
              {index === slide && isPaused && (
                <div className="absolute inset-0 bg-white" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slider arrow controls with spring hover physics */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-5 sm:right-8 md:right-12 lg:right-16 z-30 flex items-center gap-1.5 sm:gap-2">
        <motion.button
          data-testid="button-hero-prev"
          type="button"
          onClick={prevSlide}
          className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-sm cursor-pointer"
          whileHover={{ scale: 1.15, backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </motion.button>
        <motion.button
          data-testid="button-hero-next"
          type="button"
          onClick={nextSlide}
          className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-sm cursor-pointer"
          whileHover={{ scale: 1.15, backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </motion.button>
      </div>
    </section>
  );
}
