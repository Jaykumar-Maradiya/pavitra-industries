'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { img } from '@/data/site-data';

function TestimonialCard({
  name,
  image,
  quote,
  index,
}: {
  name: string;
  image: string;
  quote: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt mouse tracker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 25,
    stiffness: 220,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 25,
    stiffness: 220,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative rounded-2xl border border-neutral-200 bg-linear-to-b from-white to-neutral-50/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.14)] hover:border-black/40 transition-shadow duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative gradient glow on hover */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial from-neutral-200/50 via-transparent to-transparent -z-10" />

      {/* Floating Quote watermark */}
      <div className="absolute top-5 right-6 text-neutral-100 group-hover:text-neutral-200/80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none">
        <Quote size={52} strokeWidth={1} />
      </div>

      <div>
        {/* Star Ratings */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>

        {/* Brand Logo with lift */}
        <div className="mb-6 h-12 flex items-center">
          <motion.img
            src={img(image)}
            alt={name}
            className="h-full max-w-36 object-contain object-left filter contrast-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Testimonial Quote */}
        <p className="text-[15px] leading-relaxed text-neutral-700 italic relative z-10">
          “{quote}”
        </p>
      </div>

      {/* Author info with spring line */}
      <div className="mt-8 border-t border-neutral-200/80 pt-5 flex items-center justify-between">
        <div>
          <strong className="block font-serif text-lg text-black group-hover:text-neutral-900 transition-colors">
            {name}
          </strong>
          <span className="text-xs text-neutral-500 tracking-wide">
            Purchase Manager
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Verified
        </span>
      </div>
    </motion.div>
  );
}

export function HomeTestimonials() {
  const testimonials = [
    {
      name: 'Jindal Steel',
      image: '2025-06--Untitled-design-66.webp',
      quote:
        'Using their products for more than 20 Years now. Trustworthy products with excellent after-sales Service.',
    },
    {
      name: 'NMDC Limited',
      image: '2025-06--Untitled-design-67.webp',
      quote:
        'We have very good experience with pavitra industries and we are satisfied with services and martial quality.',
    },
    {
      name: 'Electrotherm',
      image: '2025-06--Untitled-design-63.png',
      quote:
        'Pavitra Motor is one of the best motor manufacturers in Ahmedabad, Gujarat. They provide the best quality Electric motors.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#f0f0f0] overflow-hidden">
      <div className="site-container">
        {/* Animated Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker !text-black/70">What our clients say</p>
          <h2 className="section-title !text-black">What Our Clients Say</h2>
        </motion.div>

        {/* 3D Dynamic Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={t.name}
              index={idx}
              name={t.name}
              image={t.image}
              quote={t.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
