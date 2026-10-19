'use client';

import { useRef, useEffect } from 'react';
import { Award } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { img } from '@/data/site-data';

function AnimatedCounter({
  value,
  delay = 0,
  suffix = '%',
  duration = 1.4,
}: {
  value: number;
  delay?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionVal, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => {
      controls.stop();
    };
  }, [isInView, value, delay, duration, motionVal]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function AboutIntroduction() {
  const skills = [
    { label: 'Performance', percentage: 98 },
    { label: 'Quality', percentage: 99 },
    { label: 'Client Relation', percentage: 80 },
  ];

  return (
    <section className="bg-white text-neutral-900 py-16 sm:py-20 lg:py-24 border-b border-neutral-200 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Experience Badge */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              <motion.div
                className="relative overflow-hidden rounded-md border-4 border-black/90 shadow-2xl bg-neutral-100 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img('2025-06--large-metal-object-with-many-different-parts-it_981168-6854.jpg')}
                  alt="Engineering Vibrations - Industrial Motor Parts"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              {/* Floating Years of Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-6 bg-black text-white px-5 py-4 sm:px-6 sm:py-5 rounded-md shadow-2xl border-2 border-white/20 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-black shrink-0">
                  <Award size={28} className="text-black" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-none">
                    <AnimatedCounter value={15} suffix="+" delay={0.4} duration={1.2} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-300 mt-1">
                    Years of Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content & Progress Bars */}
          <motion.div
            className="lg:col-span-7 pt-6 lg:pt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering Vibrations{' '}
              <span className="text-neutral-500 font-bold block sm:inline">
                That Move the World
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              className="mt-5 space-y-4 text-sm sm:text-[15px] leading-relaxed text-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                With over 15 years of experience, <strong className="text-black">Pavitra Industries</strong> is a leading ISO 9001:2008 certified manufacturer of vibratory motors and vibration equipment. From construction to chemical, food to pharma — our motors are trusted across industries to power essential processes like conveying, compacting, feeding, screening, and more.
              </p>
              <p>
                Founded with a clear purpose — <em className="text-neutral-800">to bring reliable and powerful vibration solutions to Indian and global industries</em> — today we proudly export to countries across{' '}
                <strong className="text-black font-semibold">Europe, Africa, Russia, and Asia</strong>.
              </p>
            </motion.div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    <span>{skill.label}</span>
                    <AnimatedCounter value={skill.percentage} delay={0.2 + index * 0.15} />
                  </div>
                  <div className="h-2.5 w-full bg-neutral-200 rounded-full overflow-hidden p-0.5 border border-neutral-300">
                    <motion.div
                      className="h-full bg-black rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + index * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
