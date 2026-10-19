'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from '@/data/site-data';

interface ProductGalleryStripProps {
  images: string[];
}

export function ProductGalleryStrip({ images }: ProductGalleryStripProps) {
  const [startIndex, setStartIndex] = useState(0);

  // We display up to 4 images in a responsive row/grid
  const prev = () => {
    setStartIndex((prevIdx) => (prevIdx === 0 ? Math.max(0, images.length - 4) : prevIdx - 1));
  };

  const next = () => {
    setStartIndex((prevIdx) => (prevIdx >= images.length - 4 ? 0 : prevIdx + 1));
  };

  return (
    <section className="border-y border-neutral-200 bg-neutral-100/60 py-10 md:py-14">
      <div className="site-container">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
            {images.slice(0, 4).map((src, i) => (
              <div
                key={i}
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={img(src)}
                  alt={`Product view ${i + 1}`}
                  className="max-h-[220px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {images.length > 4 && (
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-neutral-300 bg-white p-2 text-neutral-700 shadow-sm transition hover:bg-black hover:text-white"
                aria-label="Previous images"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-neutral-300 bg-white p-2 text-neutral-700 shadow-sm transition hover:bg-black hover:text-white"
                aria-label="Next images"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
