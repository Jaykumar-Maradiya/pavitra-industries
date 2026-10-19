'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { whatsapp, social } from '@/data/site-data';

export function Shell({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

      {/* Floating Vertical Social Sidebar (Positioned lower down towards bottom right with slightly smaller icons) */}
      <aside aria-label="Social links" className="fixed right-3 sm:right-4 bottom-20 z-40 flex flex-col items-center gap-2">
        {/* Facebook */}
        <a
          href={social.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#1877f2] hover:text-white"
        >
          <FaFacebookF size={14} />
        </a>

        {/* X / Twitter */}
        <a
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="X (formerly Twitter)"
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
        >
          <FaXTwitter size={14} />
        </a>

        {/* YouTube */}
        <a
          href={social.youtube}
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#ff0000] hover:text-white"
        >
          <FaYoutube size={15} />
        </a>

        {/* Instagram */}
        <a
          href={social.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white"
        >
          <FaInstagram size={15} />
        </a>

        {/* LinkedIn */}
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] hover:text-white"
        >
          <FaLinkedinIn size={14} />
        </a>

        {/* WhatsApp with Pulsing Aura Glow */}
        <div className="relative mt-1 flex items-center justify-center">
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
