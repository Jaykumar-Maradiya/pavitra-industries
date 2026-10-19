'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Download,
  Facebook,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  X,
  Youtube
} from 'lucide-react';
import { products, phone, email, social, brochure, img } from '@/data/site-data';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (!pathname) return path === '/';
    if (path === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(path);
  };

  const isProductActive = products.some((p) => pathname?.includes(p.slug));

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.intro.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar with Contact Info - Kept Sticky, Bolder and Slightly Larger Text */}
      <div className="bg-[#08080a] text-neutral-300 text-[12px] sm:text-[12.5px] font-medium border-b border-white/10 transition-colors">
        <div className="site-container flex min-h-9 items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 py-1.5">
            <a
              data-testid="link-header-phone"
              href="tel:+919724925394"
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <Phone size={13} className="text-white shrink-0" /> {phone}
            </a>
            <a
              data-testid="link-header-email"
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <Mail size={13} className="text-white shrink-0" /> {email}
            </a>
            <span className="hidden lg:inline-flex items-center gap-2 font-medium text-neutral-300">
              <MapPin size={13} className="text-neutral-400 shrink-0" /> Shed No. 09, Anukul Industrial Estate, Ambika Nagar Rd, Odhav, Ahmedabad
            </span>
          </div>
          <div className="hidden shrink-0 items-center gap-3.5 sm:flex">
            <a
              data-testid="link-facebook"
              href={social.facebook}
              aria-label="Facebook"
              className="hover:text-white transition-colors text-neutral-300"
            >
              <Facebook size={14} />
            </a>
            <a
              data-testid="link-youtube"
              href={social.youtube}
              aria-label="YouTube"
              className="hover:text-white transition-colors text-neutral-300"
            >
              <Youtube size={14} />
            </a>
            <a
              data-testid="link-instagram"
              href={social.instagram}
              aria-label="Instagram"
              className="hover:text-white transition-colors text-neutral-300"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Pitch Black with Exact Design from Reference Photo, Sticky at top-0 */}
      <nav
        className={`bg-[#000000] text-white border-b border-neutral-900 transition-all duration-300 ${
          scrolled ? 'shadow-[0_10px_35px_rgba(0,0,0,0.95)] border-neutral-800' : 'shadow-2xl'
        }`}
      >
        <div className="mx-auto flex h-16 md:h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          {/* Left: Navigation links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {/* Home */}
            <Link
              href="/"
              data-testid="link-nav-home"
              className={`relative py-5 text-[13.5px] font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-2 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about-us/"
              data-testid="link-nav-about"
              className={`relative py-5 text-[13.5px] font-medium tracking-wide transition-colors ${
                isActive('/about-us') ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              About Us
              {isActive('/about-us') && (
                <span className="absolute bottom-2 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              )}
            </Link>

            {/* Product (with Dropdown) */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                data-testid="button-product-menu"
                onClick={() => setProductsOpen((v) => !v)}
                className={`relative py-5 flex items-center gap-1 text-[13.5px] font-medium tracking-wide transition-colors cursor-pointer ${
                  isProductActive ? 'text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Product</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                />
                {isProductActive && (
                  <span className="absolute bottom-2 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                )}
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full mt-0 w-80 rounded-md border border-neutral-800 bg-[#0e0f12]/98 backdrop-blur-md p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="max-h-[65vh] overflow-y-auto space-y-0.5 pr-1">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/${product.slug}/`}
                        data-testid={`link-product-menu-${product.slug}`}
                        className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-800/80 hover:text-white rounded transition-colors"
                        onClick={() => {
                          setProductsOpen(false);
                          setOpen(false);
                        }}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog/"
              data-testid="link-nav-blog"
              className={`relative py-5 text-[13.5px] font-medium tracking-wide transition-colors ${
                isActive('/blog') ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <span className="absolute bottom-2 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              )}
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us/"
              data-testid="link-nav-contact"
              className={`relative py-5 text-[13.5px] font-medium tracking-wide transition-colors ${
                isActive('/contact-us') ? 'text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Contact Us
              {isActive('/contact-us') && (
                <span className="absolute bottom-2 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              )}
            </Link>

            {/* Slanted divider line before center logo */}
            <div className="hidden lg:block h-7 w-[1.5px] bg-neutral-700/80 -skew-x-[20deg] ml-2 xl:ml-3 shrink-0" />
          </div>

          {/* Center: Brand Logo (Increased Size) */}
          <div className="flex items-center justify-center shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" className="group flex items-center py-1" data-testid="link-logo">
              <img
                src={img('2025-05--pavitra-logo.png')}
                alt="Pavitra Industries"
                className="h-11 md:h-13 lg:h-15 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => {
                setSearchOpen((v) => !v);
                setCartOpen(false);
              }}
              data-testid="button-header-search"
              aria-label="Search products"
              className="p-1.5 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <Search size={18} />
            </button>

            {/* Cart / Inquiry Icon with Badge '0' */}
            <button
              type="button"
              onClick={() => {
                setCartOpen((v) => !v);
                setSearchOpen(false);
              }}
              data-testid="button-header-cart"
              aria-label="Inquiry Basket"
              className="relative p-1.5 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <ShoppingCart size={19} />
              <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-black shadow-sm">
                0
              </span>
            </button>

            {/* Slanted Grey Button: Support */}
            <a
              href="tel:+919724925394"
              data-testid="link-header-support"
              className="relative inline-flex items-center justify-center -skew-x-[20deg] bg-[#4e555d] hover:bg-[#5f6771] text-white px-5 py-2 transition-all duration-200 shadow-sm border border-neutral-600/30 rounded-[2px]"
              title={`Call Support: ${phone}`}
            >
              <span className="inline-flex items-center gap-2 skew-x-[20deg] text-xs font-bold tracking-wide text-white">
                <Headphones size={15} className="shrink-0 text-white" />
                <span>Support</span>
              </span>
            </a>

            {/* Slanted White Outline Button: Download */}
            <a
              href={brochure}
              target="_blank"
              rel="noreferrer"
              data-testid="link-header-download"
              className="relative inline-flex items-center justify-center -skew-x-[20deg] border-2 border-white bg-transparent hover:bg-white text-white hover:text-black px-4 py-2 transition-all duration-200 shadow-sm rounded-[2px] group"
              title="Download Brochure"
            >
              <span className="inline-flex items-center gap-1.5 skew-x-[20deg] text-xs font-bold tracking-wide transition-colors group-hover:text-black">
                <Download size={13} className="shrink-0" />
                <span>Download</span>
              </span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="p-1.5 text-white"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen((v) => !v)}
              aria-label="Inquiry Cart"
              className="relative p-1.5 text-white mr-1"
            >
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
                0
              </span>
            </button>
            <button
              type="button"
              data-testid="button-mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="rounded-md p-1.5 text-white hover:bg-neutral-800 transition-colors"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Live Search Bar Dropdown */}
        {searchOpen && (
          <div className="border-t border-neutral-800 bg-[#0d0e12]/98 backdrop-blur-md px-4 py-3 shadow-2xl">
            <div className="mx-auto max-w-3xl">
              <div className="relative flex items-center">
                <Search size={16} className="absolute left-3 text-neutral-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search vibratory motors, ac induction motors, specifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded bg-neutral-900 border border-neutral-700/80 py-2 pl-9 pr-9 text-xs text-white placeholder-neutral-400 focus:border-white focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-neutral-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {searchQuery && (
                <div className="mt-2 max-h-60 overflow-y-auto rounded border border-neutral-800 bg-neutral-900/90 p-2 text-xs space-y-1">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/${p.slug}/`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center justify-between p-2 rounded hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors"
                      >
                        <span className="font-medium">{p.title}</span>
                        <span className="text-[10px] text-neutral-400 uppercase">View Specs →</span>
                      </Link>
                    ))
                  ) : (
                    <p className="p-2 text-neutral-400 text-center">No motors matching &quot;{searchQuery}&quot;</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Inquiry / RFQ Modal Drawer */}
        {cartOpen && (
          <div className="border-t border-neutral-800 bg-[#0d0e12]/98 backdrop-blur-md px-4 py-4 shadow-2xl">
            <div className="mx-auto max-w-md text-center space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white mx-auto">
                <ShoppingCart size={18} />
              </div>
              <h4 className="text-sm font-semibold text-white">Inquiry Basket (0 Items)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your quotation list is currently empty. Browse our catalog of industrial vibratory motors to request custom specs and pricing.
              </p>
              <div className="flex justify-center gap-3 pt-1">
                <Link
                  href="/contact-us/"
                  onClick={() => setCartOpen(false)}
                  className="rounded bg-white text-black px-4 py-1.5 text-xs font-bold hover:bg-neutral-200 transition-colors"
                >
                  Request A Quote
                </Link>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="rounded border border-neutral-700 px-4 py-1.5 text-xs text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="lg:hidden border-t border-neutral-800 bg-[#0a0b0e] p-5 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                data-testid="link-nav-home"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-2 text-sm font-semibold border-b border-neutral-800/60 ${
                  isActive('/') ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-300'
                }`}
              >
                <span>Home</span>
              </Link>
              <Link
                href="/about-us/"
                data-testid="link-nav-about"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-2 text-sm font-semibold border-b border-neutral-800/60 ${
                  isActive('/about-us') ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-300'
                }`}
              >
                <span>About Us</span>
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-neutral-300 border-b border-neutral-800/60"
                >
                  <span>Product Range</span>
                  <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="pl-3 py-2 space-y-2 bg-neutral-950/60 rounded my-1 border border-neutral-800/50">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/${p.slug}/`}
                        onClick={() => setOpen(false)}
                        className="block text-xs text-neutral-300 hover:text-white py-1"
                      >
                        • {p.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog/"
                data-testid="link-nav-blog"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-2 text-sm font-semibold border-b border-neutral-800/60 ${
                  isActive('/blog') ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-300'
                }`}
              >
                <span>Blog</span>
              </Link>

              <Link
                href="/contact-us/"
                data-testid="link-nav-contact"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-2 text-sm font-semibold border-b border-neutral-800/60 ${
                  isActive('/contact-us') ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-300'
                }`}
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Slanted Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <a
                href="tel:+919724925394"
                className="inline-flex items-center justify-center -skew-x-[15deg] bg-[#4e555d] text-white py-2 text-xs font-bold"
              >
                <span className="skew-x-[15deg] inline-flex items-center gap-1.5">
                  <Headphones size={13} /> Support
                </span>
              </a>
              <a
                href={brochure}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center -skew-x-[15deg] border border-white text-white py-2 text-xs font-bold"
              >
                <span className="skew-x-[15deg] inline-flex items-center gap-1.5">
                  <Download size={13} /> Download
                </span>
              </a>
            </div>

            {/* Mobile Contact Quick Info */}
            <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
              <p>
                <Phone size={11} className="inline mr-1" /> {phone}
              </p>
              <p>
                <Mail size={11} className="inline mr-1" /> {email}
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
