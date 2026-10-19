'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function StatCounter({
  value,
  suffix = '',
  delay = 0,
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  delay?: number;
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

export function AboutVideoStats() {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { label: 'Years of Experience', numericValue: 15, suffix: '+' },
    { label: 'Quality of Products', numericValue: 99, suffix: '%' },
    { label: 'Client Satisfaction Rate', numericValue: 98, suffix: '%' },
    { label: 'Countries We Serve', numericValue: 10, suffix: '+' },
  ];

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-900 relative overflow-hidden">
      <div className="site-container">
        {/* Banner with Video Play Trigger */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Satisfaction is Our Motto
          </motion.h2>

          {/* Video Play Button */}
          <div className="flex justify-center items-center my-6">
            <motion.button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play Corporate Video"
              className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white text-black shadow-[0_0_35px_rgba(255,255,255,0.45)] cursor-pointer"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              <span className="absolute -inset-3 rounded-full border border-white/50 animate-ping pointer-events-none" />
              <span className="absolute -inset-6 rounded-full border border-white/20 pointer-events-none" />
              <Play size={32} className="ml-1 fill-black text-black group-hover:scale-110 transition-transform duration-200" />
            </motion.button>
          </div>

          <motion.p
            className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Watch Company Profile & Machinery in Action
          </motion.p>
        </motion.div>

        {/* 4 Counter Metrics */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-neutral-800">
          {stats.map((st, index) => (
            <motion.div
              key={st.label}
              className="text-center p-6 bg-neutral-950 border border-neutral-800/80 rounded-md shadow-md hover:border-neutral-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.12,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono">
                <StatCounter
                  value={st.numericValue}
                  suffix={st.suffix}
                  delay={0.25 + index * 0.12}
                  duration={1.4}
                />
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {st.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup with AnimatePresence */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <div className="aspect-video w-full">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  src="https://pavitraind.com/wp-content/uploads/2025/06/WhatsApp-Video-2025-06-20-at-12.41.51_af34fee7.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
