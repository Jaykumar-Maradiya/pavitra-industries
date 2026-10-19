import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from '@/data/site-data';

export function HomeSocialWall() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  const images = [
    '2025-09--WhatsApp-Image-2025-09-13-at-09.44.17.jpeg',
    '2025-09--WhatsApp-Image-2025-09-13-at-09.44.18-1.jpeg',
    '2025-09--WhatsApp-Image-2025-09-13-at-09.44.18.jpeg',
    '2025-09--WhatsApp-Image-2025-09-13-at-09.44.19.jpeg',
    '2025-05--pavitra-social-media-1.webp',
    '2025-05--pavitra-social-media-2.webp',
    '2025-05--pavitra-social-media-4.webp',
    '2025-05--pavitra-social-media-5.webp',
    '2025-05--pavitra-social-media-6.webp',
    '2025-05--pavitra-social-media-7.webp',
    '2025-05--pavitra-social-media-9.webp',
    '2025-05--pavitra-social-media-10.webp'
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Ultra-smooth continuous animation loop using requestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.8; // pixels per frame for butter-smooth movement

    const step = () => {
      if (!isHoveredRef.current && scrollRef.current) {
        scrollRef.current.scrollLeft += speed;
        // When halfway through the duplicated list, reset seamlessly to 0 for infinite loop
        const maxScroll = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Double list to create seamless infinite scrolling effect
  const displayImages = [...images, ...images];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#f0f0f0] overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="section-kicker !text-black/70">On the floor</p>
            <h2 className="section-title !text-black">Live From Pavitra Industries</h2>
            <p className="body-copy !text-[#555] mt-3 max-w-2xl">
              Every post tells a story — of innovation, quality, and customer satisfaction. Explore our social media wall to see real-time updates, new product launches, and how our motors are making an impact globally.
            </p>
          </motion.div>
          {/* Scroll Navigation Arrows */}
          <motion.div
            className="flex items-center gap-2 self-start sm:self-end shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#333] active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#333] active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Single Row Horizontal ScrollView with Increased Gap & Smooth Continuous Auto-Scroll */}
        <motion.div
          ref={scrollRef}
          tabIndex={0}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
          onTouchStart={() => {
            isHoveredRef.current = true;
          }}
          onTouchEnd={() => {
            isHoveredRef.current = false;
          }}
          aria-label="Social media photos gallery"
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 pt-2 no-scrollbar focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          {displayImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 shrink-0 overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa] shadow-xs hover:border-black hover:shadow-md transition-all duration-300"
            >
              <img
                src={img(image)}
                alt="Pavitra Industries social gallery"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
