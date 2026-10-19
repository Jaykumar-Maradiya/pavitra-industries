'use client';

import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import {
  HomeHeroSlider,
  HomeAboutSection,
  HomeProductsGrid,
  HomeGlobalReach,
  HomeTechSection,
  HomeCertifications,
  HomeClients,
  HomeTestimonials,
  HomeSocialWall,
  HomeCtaSection
} from '@/components/home';

export function Home() {
  const homeFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which types of industrial electric and vibratory motors does Pavitra Industries manufacture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pavitra Industries manufactures a wide range of motors including Three Phase Induction Motors (0.25 to 75 HP), Single Phase Electric Motors, AC/DC Brake Motors, Unbalance Vibratory Motors, Micro Vibratory Motors (15W to 120W), Cooling Tower Motors, and Customized OEM Motors.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are Pavitra Industries motors certified for industrial and export use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our motors are built compliant with ISO 9001:2015 quality standards and CE directives, engineered with high insulation (Class F/H), IP55/IP65 ingress protection, and heavy-duty dynamically balanced components.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Pavitra Industries located and do you supply across India and globally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are headquartered at Plot No.78 Odhav GIDC, Ahmedabad, Gujarat, India, and supply industrial electric motors across India as well as export worldwide to over 10+ countries.'
        }
      }
    ]
  };

  return (
    <>
      <Seo
        title="Electric Motor Manufacturer & Vibratory Motor Manufacturer in India"
        description="Pavitra Industries is a leading Electric Motor Manufacturer, Industrial Motor Manufacturer, and Vibratory Motor Manufacturer in Ahmedabad, India. We produce Three Phase Induction Motors, Brake Motors, Cooling Tower Motors, Micro Vibratory Motors, and Custom Motors."
        canonicalPath="/"
        jsonLd={homeFaqJsonLd}
      />
      <Shell>
        <main id="content">
          <HomeHeroSlider />
          <HomeAboutSection />
          <HomeProductsGrid />
          <HomeGlobalReach />
          <HomeTechSection />
          <HomeCertifications />
          <HomeClients />
          <HomeTestimonials />
          <HomeSocialWall />
          <HomeCtaSection />
        </main>
      </Shell>
    </>
  );
}
