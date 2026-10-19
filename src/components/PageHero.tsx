'use client';

import { img } from '@/data/site-data';

export function PageHero({ label, title, image }: { label: string; title: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#251d1d] py-20 text-white md:py-28">
      {image && <img src={img(image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="absolute inset-0 bg-gradient-to-r from-[#271b1b] via-[#271b1b]/80 to-[#9c0e0e]/30" />
      <div className="site-container relative">
        <p className="section-kicker !text-[#e0aa32]">{label}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <div className="mt-7 h-1 w-16 bg-[#e0aa32]" />
      </div>
    </section>
  );
}
