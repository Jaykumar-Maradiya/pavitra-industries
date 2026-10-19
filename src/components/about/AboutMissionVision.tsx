'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Compass } from 'lucide-react';

export function AboutMissionVision() {
  const cards = [
    {
      title: 'Our Vision',
      description:
        'To be the most trusted global brand in vibratory motor manufacturing, known for quality, reliability, and ethical practices.',
      icon: Shield,
    },
    {
      title: 'Our Mission',
      description:
        'To provide durable, efficient, and innovative vibration solutions that empower industries to perform at their best — every day.',
      icon: Target,
    },
    {
      title: 'Our Goals',
      description:
        "To expand high-class products, make a decision and clarify the customers' provision. Our vision for approaching years has certain things to take into consideration.",
      icon: Compass,
    },
  ];

  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="group relative bg-white border border-neutral-200 p-8 sm:p-9 rounded-md shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-black text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 h-1 w-12 bg-neutral-300 group-hover:w-full group-hover:bg-black transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
