'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { whatsapp, social } from '@/data/site-data';

export function Shell({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const socialItems = [
    {
      name: 'Facebook',
      href: social.facebook,
      icon: <FaFacebookF size={14} />,
      hoverClass: 'hover:bg-[#1877f2] hover:text-white',
    },
    {
      name: 'X (formerly Twitter)',
      href: social.twitter,
      icon: <FaXTwitter size={14} />,
      hoverClass: 'hover:bg-black hover:text-white',
    },
    {
      name: 'YouTube',
      href: social.youtube,
      icon: <FaYoutube size={15} />,
      hoverClass: 'hover:bg-[#ff0000] hover:text-white',
    },
    {
      name: 'Instagram',
      href: social.instagram,
      icon: <FaInstagram size={15} />,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: social.linkedin,
      icon: <FaLinkedinIn size={14} />,
      hoverClass: 'hover:bg-[#0077b5] hover:text-white',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      {children}

      {/* Floating Vertical Social Sidebar with Animated Toggle Arrow */}
      <aside aria-label="Social links" className="fixed right-3 sm:right-4 bottom-20 z-40 flex flex-col items-center gap-2">
        {/* Animated Expandable Social Media Links */}
        <AnimatePresence>
          {isSocialOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.85 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 overflow-hidden pb-1"
            >
              {socialItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  initial={{ opacity: 0, y: 15, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.6 }}
                  transition={{
                    duration: 0.2,
                    delay: (socialItems.length - 1 - idx) * 0.04,
                    ease: 'easeOut',
                  }}
                  className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 ${item.hoverClass}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrow Toggle Button to Show/Hide Social Media */}
        <button
          type="button"
          onClick={() => setIsSocialOpen((prev) => !prev)}
          aria-expanded={isSocialOpen}
          aria-label={isSocialOpen ? 'Hide social media links' : 'Show social media links'}
          title={isSocialOpen ? 'Hide social media links' : 'Show social media links'}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.18)] hover:bg-[#1b4332] hover:text-[#ffc107] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-neutral-100 group"
        >
          <motion.div
            animate={{ rotate: isSocialOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <ChevronUp size={16} strokeWidth={2.5} className="group-hover:translate-y-[-1px] transition-transform" />
          </motion.div>
        </button>

        {/* WhatsApp with Pulsing Aura Glow */}
        <div className="relative mt-0.5 flex items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-[#25d366]/30 animate-ping opacity-75 pointer-events-none" />
          <span className="absolute -inset-1.5 rounded-full bg-[#25d366]/35 blur-sm pointer-events-none" />
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            data-testid="link-whatsapp"
            aria-label="WhatsApp"
            className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#25d366] shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </aside>

      {/* Scroll to Top Button (matching green/gold upward arrow badge at bottom right) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded bg-[#1b4332] text-[#ffc107] shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}

      <Footer />
    </>
  );
}
