import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

interface ProductCtaBannerProps {
  title?: string;
  description?: string;
}

export function ProductCtaBanner({
  title = 'Need Help Selecting the Right Motor?',
  description = 'We’ll help you choose the best-fit motor for your industrial application.',
}: ProductCtaBannerProps) {
  return (
    <section className="site-container py-12 md:py-20 overflow-hidden">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-neutral-900 px-6 py-12 text-white shadow-xl md:px-12 md:py-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Technical Consultation & Support
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919724925394"
                data-testid="product-call-now"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="mailto:salespavitramotor@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-700 bg-neutral-800/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Mail className="h-4 w-4" /> Email Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Direct Contact List */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Direct Contact Lines
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+919724925394"
                    className="flex items-center gap-3 text-neutral-200 transition hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">+91 97249 25394</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919904860464"
                    className="flex items-center gap-3 text-neutral-200 transition hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">+91 99048 60464</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919925779053"
                    className="flex items-center gap-3 text-neutral-200 transition hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">+91 99257 79053</span>
                  </a>
                </li>
                <li className="pt-2 border-t border-neutral-800">
                  <a
                    href="mailto:salespavitramotor@gmail.com"
                    className="flex items-center gap-3 text-neutral-200 transition hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium truncate">salespavitramotor@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
