'use client';

import { motion } from 'framer-motion';
import { email } from '@/data/site-data';

export function ContactInfo() {
  return (
    <motion.div
      className="flex flex-col justify-between"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-black leading-tight">
          Looking for a Reliable Single Phase Motor?
        </h2>
        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
          Let our experts help you choose the ideal single phase motor for your specific application.
        </p>

        {/* Timeline Style Contact List matching reference structure */}
        <div className="relative mt-8 pl-8 sm:pl-9 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[3px] before:bg-black space-y-7">
          {/* Company Name */}
          <div className="relative">
            <span className="absolute -left-[30.5px] sm:-left-[34.5px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-white ring-4 ring-neutral-200" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black">
              Company Name :
            </h3>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 mt-1">
              Pavitra Industries
            </p>
          </div>

          {/* Phone No */}
          <div className="relative">
            <span className="absolute -left-[30.5px] sm:-left-[34.5px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-white ring-4 ring-neutral-200" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black">
              Phone No :
            </h3>
            <div className="mt-1 flex flex-col gap-1 text-sm sm:text-base font-semibold text-neutral-800">
              <a
                href="tel:9724925394"
                data-testid="contact-phone-1"
                className="hover:text-black hover:underline transition-colors"
              >
                +91 97249 25394
              </a>
              <a
                href="tel:9904860464"
                data-testid="contact-phone-2"
                className="hover:text-black hover:underline transition-colors"
              >
                +91 99048 60464
              </a>
              <a
                href="tel:9925779053"
                data-testid="contact-phone-3"
                className="hover:text-black hover:underline transition-colors"
              >
                +91 99257 79053
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <span className="absolute -left-[30.5px] sm:-left-[34.5px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-white ring-4 ring-neutral-200" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black">
              Address :
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 mt-1">
              Plot No.78 Odhav GIDC, Shed No. 09, Anukul Industrial Estate, Ambika Nagar Road, Nr. National Tank, Odhav, Ahmedabad, Gujarat, 382415
            </p>
          </div>

          {/* Email ID */}
          <div className="relative">
            <span className="absolute -left-[30.5px] sm:-left-[34.5px] top-1.5 h-4 w-4 rounded-full border-2 border-black bg-white ring-4 ring-neutral-200" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black">
              Email ID :
            </h3>
            <a
              href={`mailto:${email}`}
              data-testid="contact-email"
              className="text-sm sm:text-base font-semibold text-black hover:underline mt-1 block"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
