'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight, Zap } from 'lucide-react';
import { products, img } from '@/data/site-data';

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0.05), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full flex flex-col rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-2xl hover:border-black/50 transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      {/* Interactive dynamic cursor spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightBg }}
      />

      {/* Floating Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
        <Zap size={10} className="text-amber-400 fill-amber-400" />
        <span>Industrial Grade</span>
      </div>

      {/* Image Area with hover zoom effect */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-50/90 p-6 flex items-center justify-center border-b border-neutral-100">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

        <Link href={`/${product.slug}/`} className="relative z-10 block w-full h-full flex items-center justify-center">
          <motion.img
            src={img(product.image)}
            alt={product.title}
            className="h-full w-full object-contain object-center drop-shadow-md"
            whileHover={{ scale: 1.12, rotate: -1.5 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </Link>

        {/* Quick View Floating Pill Button on Hover */}
        <motion.div
          className="absolute bottom-3 z-20 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
        >
          <Link
            href={`/${product.slug}/`}
            className="flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-xl hover:bg-neutral-800 transition-colors"
          >
            <span>Explore Specs</span>
            <ArrowUpRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between relative z-10 bg-white">
        <div>
          {/* Category Label */}
          <p className="text-[11px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1 line-clamp-1">
            Pavitra Industrial Motors
          </p>
          {/* Product Title Link */}
          <h3 className="text-sm sm:text-base font-extrabold text-black group-hover:text-neutral-700 transition-colors line-clamp-2 min-h-[44px] leading-snug">
            <Link href={`/${product.slug}/`}>
              {product.title}
            </Link>
          </h3>
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2">
          {/* Skewed View Details button with animated sweep */}
          <Link
            href={`/${product.slug}/`}
            className="group/btn relative inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-black -skew-x-[15deg] overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <span className="absolute inset-0 bg-neutral-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-200" />
            <span className="skew-x-[15deg] inline-block relative z-10">
              View Details
            </span>
          </Link>

          {/* Cart / Inquiry Icon link with magnetic bounce */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/contact-us/"
              title="Inquire Product"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 hover:bg-black text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs"
            >
              <ShoppingCart size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function HomeProductsGrid() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - 4);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <div className="site-container">
        {/* Section Heading & Subtitle with smooth fade up */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70 mb-1.5">
            Our Products
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-black">
            Powering Industries with Precision & Performance
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#666] leading-relaxed">
            At Pavitra Industries, we offer a wide range of highly efficient and durable vibratory motors designed to serve multiple industrial applications — from material handling to screening and compaction.
          </p>
        </motion.div>

        {/* Carousel / Grid Wrapper with Navigation Controls */}
        <div className="relative">
          {/* Navigation Arrows with Spring hover physics */}
          <motion.button
            type="button"
            onClick={prevSlide}
            aria-label="Previous products"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black text-white shadow-xl cursor-pointer"
            whileHover={{ scale: 1.15, backgroundColor: '#171717' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <ChevronLeft size={22} />
          </motion.button>
          <motion.button
            type="button"
            onClick={nextSlide}
            aria-label="Next products"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black text-white shadow-xl cursor-pointer"
            whileHover={{ scale: 1.15, backgroundColor: '#171717' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <ChevronRight size={22} />
          </motion.button>

          {/* Cards Track with smooth spring animation */}
          <div className="overflow-hidden px-2 sm:px-4 py-3">
            <motion.div
              className="flex"
              animate={{
                x: `-${startIndex * (100 / 4)}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 22,
                mass: 0.85,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.slug}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 px-2.5 sm:px-3"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to products slide ${idx + 1}`}
                className="p-1 cursor-pointer focus:outline-none"
              >
                <motion.div
                  className="h-2 rounded-full bg-black transition-colors"
                  animate={{
                    width: startIndex === idx ? 24 : 8,
                    opacity: startIndex === idx ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA: View more products */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/three-phase-induction-motor/"
            className="group relative inline-flex items-center justify-center font-extrabold text-xs sm:text-sm md:text-base tracking-wide uppercase text-black hover:text-white px-7 sm:px-8 py-3.5 sm:py-4 transition-colors duration-300"
          >
            <span
              className="absolute inset-0 -skew-x-[23deg] border-[3px] border-[#9e9e9e] border-r-[#ddd] group-hover:border-black transition-colors duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 -skew-x-[23deg] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2">
              View more products
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
