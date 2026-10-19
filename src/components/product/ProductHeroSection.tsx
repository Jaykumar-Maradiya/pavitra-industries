import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Rotate3d, Image as ImageIcon } from 'lucide-react';
import { img } from '@/data/site-data';
import { Motor360Viewer } from './Motor360Viewer';

interface ProductHeroSectionProps {
  title: string;
  eyebrow?: string;
  intro: string;
  images: string[];
  view360Images?: string[];
}

export function ProductHeroSection({
  title,
  eyebrow = 'Reliable. Efficient. Built for Performance.',
  intro,
  images,
  view360Images,
}: ProductHeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'gallery' | '360'>(
    view360Images && view360Images.length > 0 ? '360' : 'gallery'
  );

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="site-container py-10 md:py-16 overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Heading, Eyebrow, Intro, CTAs */}
        <motion.div
          className="lg:col-span-6 xl:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {eyebrow && (
            <h2 className="mt-3 text-lg font-semibold text-neutral-800 sm:text-xl md:text-2xl">
              {eyebrow}
            </h2>
          )}

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
            {intro.split('\n\n').length > 1 ? (
              intro.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{intro}</p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us/"
              data-testid="product-hero-enquire-btn"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Enquire About This Motor <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919724925394"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              Call: +91 97249 25394
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 360 Viewer or Carousel Gallery */}
        <motion.div
          className="lg:col-span-6 xl:col-span-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {view360Images && view360Images.length > 0 && (
            <div className="mb-3 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('360')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === '360'
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <Rotate3d className="h-3.5 w-3.5" />
                360° Inspection
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('gallery')}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === 'gallery'
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" />
                Photos ({images.length})
              </button>
            </div>
          )}

          {activeTab === '360' && view360Images && view360Images.length > 0 ? (
            <Motor360Viewer
              images={view360Images}
              alt={title}
              autoRotate={false}
              badgeLabel="360° Cursor Controlled View"
            />
          ) : (
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6">
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-50 p-4">
                <img
                  src={img(images[currentSlide])}
                  alt={`${title} - view ${currentSlide + 1}`}
                  className="max-h-[380px] w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Carousel navigation controls if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white/90 p-2 text-neutral-800 shadow-md backdrop-blur-sm transition hover:bg-black hover:text-white focus:outline-none"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white/90 p-2 text-neutral-800 shadow-md backdrop-blur-sm transition hover:bg-black hover:text-white focus:outline-none"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Thumbnail dots / buttons */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {images.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative h-14 w-14 overflow-hidden rounded-md border p-1 transition ${
                      currentSlide === idx
                        ? 'border-black ring-2 ring-black/10'
                        : 'border-neutral-200 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Select slide ${idx + 1}`}
                  >
                    <img
                      src={img(item)}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
