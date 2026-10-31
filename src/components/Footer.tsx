'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaRss,
  FaPhoneAlt,
  FaEnvelope,
  FaFax,
  FaMapMarkerAlt,
  FaChevronDown
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { address, email, phone, social, products, img, locations } from '@/data/site-data';

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    products: false,
    links: false,
    office: false,
    factory: false,
    follow: false,
    contact: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const productList = [
    { title: 'Three Phase AC Induction Motor', slug: 'three-phase-induction-motor' },
    { title: 'Single Phase Electric Motor', slug: 'single-phase-electric-motor' },
    { title: 'AC/DC Brake Motors', slug: 'ac-dc-brake-motors' },
    { title: 'Unbalance Vibratory Motor', slug: 'unbalance-vibratory-motor' },
    { title: 'Micro Vibratory Motors', slug: 'micro-vibratory-motor' },
    { title: 'Cooling Tower Motor', slug: 'cooling-tower-motor' },
    { title: 'View All Products', slug: 'all-products' },
  ];

  return (
    <footer id="footer" className="relative text-white overflow-hidden font-sans border-t border-neutral-900">
      {/* Background with Dark Tech Circuit Texture */}
      <div
        className="relative bg-black bg-cover bg-center bg-no-repeat pt-14 pb-12"
        style={{ backgroundImage: `url('/images/bg4.jpg')` }}
      >
        {/* Subtle Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[0.5px]" />

        <div className="site-container relative z-10">
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
            {/* Column 1: OUR PRODUCTS (lg: 3 cols) */}
            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={() => toggleSection('products')}
                className="w-full flex items-center justify-between text-left lg:pointer-events-none pb-2 lg:pb-0"
              >
                <h3 className="text-[15px] font-bold tracking-wider text-white uppercase">
                  Our Products
                </h3>
                <FaChevronDown
                  className={`lg:hidden text-xs text-neutral-400 transition-transform ${openSections.products ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <ul
                className={`mt-4 space-y-2.5 text-[13px] text-neutral-300 lg:block ${openSections.products ? 'block' : 'hidden'
                  }`}
              >
                {productList.map((item, idx) => (
                  <li key={item.slug}>
                    <Link
                      href={item.slug === 'all-products' ? '/#products' : `/${item.slug}/`}
                      className={`hover:text-white transition-colors duration-200 block ${idx === productList.length - 1 ? 'font-bold text-white pt-1' : ''
                        }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: QUICK LINKS (lg: 4 cols) - Split in 2 sub-columns */}
            <div className="lg:col-span-4">
              <button
                type="button"
                onClick={() => toggleSection('links')}
                className="w-full flex items-center justify-between text-left lg:pointer-events-none pb-2 lg:pb-0"
              >
                <h3 className="text-[15px] font-bold tracking-wider text-white uppercase">
                  Quick Links
                </h3>
                <FaChevronDown
                  className={`lg:hidden text-xs text-neutral-400 transition-transform ${openSections.links ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div
                className={`mt-4 grid grid-cols-2 gap-4 text-[13px] text-neutral-300 lg:grid ${openSections.links ? 'grid' : 'hidden'
                  }`}
              >
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#products" className="hover:text-white transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/" className="hover:text-white transition-colors">
                      News and Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us/" className="hover:text-white transition-colors">
                      Request a Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/" className="hover:text-white transition-colors">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us/" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      Career
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2.5">
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/#products" className="hover:text-white transition-colors">
                      Brand Video Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/#testimonials" className="hover:text-white transition-colors">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/" className="hover:text-white transition-colors">
                      Legal Disclaimer
                    </Link>
                  </li>
                  <li>
                    <a href="/sitemap.xml" className="hover:text-white transition-colors">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: LOCATIONS WITH QR CODES (lg: 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office / Unit 1 */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('office')}
                  className="w-full flex items-center justify-between text-left lg:pointer-events-none pb-2 lg:pb-0"
                >
                  <h3 className="text-[15px] font-bold tracking-wider text-white uppercase">
                    PAVITRA INDUSTRIES, HEAD OFFICE
                  </h3>
                  <FaChevronDown
                    className={`lg:hidden text-xs text-neutral-400 transition-transform ${openSections.office ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start lg:grid ${openSections.office ? 'grid' : 'hidden'
                    }`}
                >
                  <div className="flex gap-2.5 text-[13px] text-neutral-300 leading-relaxed">
                    <FaMapMarkerAlt className="shrink-0 text-white mt-1 text-sm" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Address:</strong>
                      {locations.headOffice.address}
                      <div className="mt-2">
                        <a
                          href={locations.headOffice.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline transition-colors font-medium"
                          title="Open Head Office location in Google Maps"
                        >
                          <FaMapMarkerAlt className="text-[11px]" />
                          <span>View on Google Maps</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-center justify-center sm:justify-start">
                    <a
                      href={locations.headOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Scan with phone or click to open Head Office on Google Maps"
                      aria-label="Head Office Location Google Maps QR Code - Click or Scan"
                      className="group/qr block bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-2 border-transparent hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-center"
                    >
                      <img
                        src={locations.headOffice.qrSvg}
                        alt="Head Office Location Google Maps QR Code"
                        width={96}
                        height={96}
                        className="w-22 h-22 sm:w-24 sm:h-24 object-contain transition-transform duration-200 group-hover/qr:scale-105"
                      />
                      {/* <span className="mt-1 flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 group-hover/qr:text-amber-600 transition-colors">
                        <FaMapMarkerAlt className="text-red-600 text-[9px]" /> Scan / Click
                      </span> */}
                    </a>
                  </div>
                </div>
              </div>

              {/* Manufacturing Plant / Warehouse */}
              <div className="pt-2 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => toggleSection('factory')}
                  className="w-full flex items-center justify-between text-left lg:pointer-events-none pb-2 lg:pb-0"
                >
                  <h3 className="text-[15px] font-bold tracking-wider text-white uppercase">
                    PAVITRA INDUSTRIES, WORKS & FACTORY
                  </h3>
                  <FaChevronDown
                    className={`lg:hidden text-xs text-neutral-400 transition-transform ${openSections.factory ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start lg:grid ${openSections.factory ? 'grid' : 'hidden'
                    }`}
                >
                  <div className="flex gap-2.5 text-[13px] text-neutral-300 leading-relaxed">
                    <FaMapMarkerAlt className="shrink-0 text-white mt-1 text-sm" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Address:</strong>
                      {locations.works.address}
                      <div className="mt-2">
                        <a
                          href={locations.works.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline transition-colors font-medium"
                          title="Open Works & Factory location in Google Maps"
                        >
                          <FaMapMarkerAlt className="text-[11px]" />
                          <span>View on Google Maps</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-center justify-center sm:justify-start">
                    <a
                      href={locations.works.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Scan with phone or click to open Works & Factory on Google Maps"
                      aria-label="Works & Factory Location Google Maps QR Code - Click or Scan"
                      className="group/qr block bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-2 border-transparent hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-center"
                    >
                      <img
                        src={locations.works.qrSvg}
                        alt="Works & Factory Location Google Maps QR Code"
                        width={96}
                        height={96}
                        className="w-22 h-22 sm:w-24 sm:h-24 object-contain transition-transform duration-200 group-hover/qr:scale-105"
                      />
                      {/* <span className="mt-1 flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 group-hover/qr:text-amber-600 transition-colors">
                        <FaMapMarkerAlt className="text-red-600 text-[9px]" /> Scan / Click
                      </span> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Bottom Grid: Follow Us On + Our Contact */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-start">
            {/* Follow Us On (md: 6 cols / lg: 7 cols) */}
            <div className="md:col-span-6 lg:col-span-7">
              <h4 className="text-[14px] font-bold tracking-wider text-white uppercase mb-3">
                Follow Us On
              </h4>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {/* Facebook */}
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaFacebookF size={15} />
                </a>

                {/* Twitter / X */}
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaXTwitter size={15} />
                </a>

                {/* YouTube */}
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaYoutube size={16} />
                </a>

                {/* Instagram */}
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaInstagram size={16} />
                </a>

                {/* LinkedIn */}
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaLinkedinIn size={15} />
                </a>

                {/* RSS */}
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RSS Feed"
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-neutral-800/90 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaRss size={14} />
                </a>
              </div>
            </div>

            {/* Our Contact (md: 6 cols / lg: 5 cols) */}
            <div className="md:col-span-6 lg:col-span-5">
              <h4 className="text-[14px] font-bold tracking-wider text-white uppercase mb-3">
                Our Contact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
                {/* Phones */}
                <div>
                  <a
                    href="tel:+919724925394"
                    className="flex items-center gap-2 text-white font-bold hover:text-neutral-300 transition-colors"
                  >
                    <FaPhoneAlt className="text-white text-xs shrink-0" />
                    <span>+91 97249 25394</span>
                  </a>
                  <a
                    href="tel:+919904860464"
                    className="flex items-center gap-2 text-white font-bold hover:text-neutral-300 transition-colors mt-1.5"
                  >
                    <FaPhoneAlt className="text-white text-xs shrink-0" />
                    <span>+91 99048 60464</span>
                  </a>
                </div>

                {/* Emails & Support */}
                <div>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white font-bold hover:text-neutral-300 transition-colors"
                  >
                    <FaEnvelope className="text-white text-xs shrink-0" />
                    <span className="truncate">{email}</span>
                  </a>
                  <a
                    href="tel:+919724925394"
                    className="flex items-center gap-2 text-white font-bold hover:text-neutral-300 transition-colors mt-1.5"
                  >
                    <FaFax className="text-white text-xs shrink-0" />
                    <span>+91 97249 25394</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Focus Keywords & Manufacturing Range Index */}
          <div className="pt-8 pb-4 border-t border-white/10 text-neutral-300">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-3">
              Leading Electric Motor & Vibratory Motor Manufacturer in India:
            </h4>
            <div className="flex flex-wrap gap-2 text-[12px] leading-relaxed text-neutral-400">
              <Link href="/single-phase-electric-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Electric Motor Manufacturer
              </Link>
              <Link href="/three-phase-induction-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Industrial Motor Manufacturer
              </Link>
              <Link href="/three-phase-induction-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Induction Motor Manufacturer
              </Link>
              <Link href="/unbalance-vibratory-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Vibratory Motor Manufacturer
              </Link>
              <Link href="/sepration-vibrator-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Vibro Motor Manufacturer
              </Link>
              <Link href="/ac-dc-brake-motors/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Brake Motor Manufacturer
              </Link>
              <Link href="/custmize-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Flameproof Motor Manufacturer
              </Link>
              <Link href="/cooling-tower-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Cooling Tower Motor Manufacturer
              </Link>
              <Link href="/single-phase-electric-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Single Phase Motor Manufacturer
              </Link>
              <Link href="/three-phase-induction-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Three Phase Motor Manufacturer
              </Link>
              <Link href="/micro-vibratory-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Micro Vibratory Motor Manufacturer
              </Link>
              <Link href="/custmize-motor/" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded">
                Customized Motor Manufacturer
              </Link>
              <span className="text-neutral-500 py-1 px-1">
                | Ahmedabad • Gujarat • India & Worldwide Exports
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer Copyright Bar */}
      <div className="bg-[#0b0b0b] border-t border-white/10 py-5">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Link href="/" className="shrink-0">
              <img
                src={img('2025-05--pavitra-logo.png')}
                alt="Pavitra Industries"
                className="h-9 w-auto bg-white rounded px-2 py-0.5 object-contain"
              />
            </Link>
            <div>
              <p>Copyright © {new Date().getFullYear()}, Pavitra Industries</p>
              <p className="text-[11px] text-neutral-500">All rights reserved.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-semibold tracking-wider text-neutral-300">
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-semibold tracking-wider text-neutral-300">
              CE COMPLIANT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
