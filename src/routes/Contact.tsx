'use client';

import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactMap,
} from '@/components/contact';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Pavitra Industries in Ahmedabad for vibratory motors, electric motors and industrial equipment enquiries."
      />
      <Shell>
        <main id="content">
          {/* Breadcrumbs and Page Hero */}
          <ContactHero />

          {/* Main 2-Column Section: Contact Information & Enquiry Form */}
          <section className="bg-white py-14 sm:py-20 lg:py-24 border-b border-neutral-200">
            <div className="site-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left: Contact Info Timeline */}
                <div className="lg:col-span-5">
                  <ContactInfo />
                </div>

                {/* Right: Enquiry Form */}
                <div className="lg:col-span-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Embedded Google Maps Location */}
          <ContactMap />
        </main>
      </Shell>
    </>
  );
}
