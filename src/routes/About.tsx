'use client';

import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import {
  AboutHero,
  AboutIntroduction,
  AboutMissionVision,
  AboutWhyChoose,
  AboutVideoStats,
  AboutCertifications,
} from '@/components/about';

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Pavitra Industries, a leading manufacturer of vibratory motors and vibration equipment with over 15 years of experience."
      />
      <Shell>
        <main id="content">
          {/* 1. Hero Section matching reference banner */}
          <AboutHero />

          {/* 2. Introduction: Engineering Vibrations That Move the World + 15+ Yrs badge + 3 Progress Bars */}
          <AboutIntroduction />

          {/* 3. Principles: Our Vision, Our Mission, Our Goals */}
          <AboutMissionVision />

          {/* 4. Why Choose That Move the World: 3 Points + Machine Graphic Image */}
          <AboutWhyChoose />

          {/* 5. Satisfaction is Our Motto: Video Popup + 4 Big Counter Cards */}
          <AboutVideoStats />

          {/* 6. Certified to Perform: ISO/CE Badges + Check points + Certification Gallery */}
          <AboutCertifications />
        </main>
      </Shell>
    </>
  );
}
