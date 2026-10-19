import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pavitraind.com'),
  title: {
    default: 'Electric Motor & Vibratory Motor Manufacturer | Pavitra Industries',
    template: '%s | Pavitra Industries',
  },
  description: 'Pavitra Industries is a leading Electric Motor Manufacturer and Vibratory Motor Manufacturer in Ahmedabad, India. We produce Three Phase Induction Motors, Single Phase Motors, Brake Motors, Cooling Tower Motors, Micro Vibratory Motors, and Custom Industrial Motors.',
  keywords: [
    'Electric Motor Manufacturer',
    'Industrial Motor Manufacturer',
    'Induction Motor Manufacturer',
    'Vibratory Motor Manufacturer',
    'Vibro Motor Manufacturer',
    'Brake Motor Manufacturer',
    'Flameproof Motor Manufacturer',
    'Cooling Tower Motor Manufacturer',
    'Single Phase Motor Manufacturer',
    'Three Phase Motor Manufacturer',
    'Micro Vibratory Motor Manufacturer',
    'Customized Motor Manufacturer',
    'Electric Motor Manufacturer in Ahmedabad',
    'Motor Manufacturer India',
    'Vibratory Motor Supplier'
  ],
  authors: [{ name: 'Pavitra Industries', url: 'https://pavitraind.com' }],
  creator: 'Pavitra Industries',
  publisher: 'Pavitra Industries',
  applicationName: 'Pavitra Industries',
  alternates: { canonical: 'https://pavitraind.com/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pavitra Industries',
    title: 'Electric Motor & Vibratory Motor Manufacturer | Pavitra Industries',
    description: 'Pavitra Industries is India’s premier manufacturer and exporter of electric motors, vibratory motors, brake motors, and custom industrial motors.',
    url: 'https://pavitraind.com/',
    images: [
      {
        url: '/images/source/2025-05--pavitra-logo.png',
        width: 600,
        height: 300,
        alt: 'Pavitra Industries - Electric & Vibratory Motor Manufacturer'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electric Motor & Vibratory Motor Manufacturer | Pavitra Industries',
    description: 'Premier Indian Manufacturer of Vibratory, Induction, Brake, and Custom Electric Motors. ISO 9001:2015 & CE Certified.',
    images: ['/images/source/2025-05--pavitra-logo.png'],
  },
  icons: { icon: '/images/source/2025-05--pavitra-logo.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9c0e0e',
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Manufacturer'],
      '@id': 'https://pavitraind.com/#organization',
      name: 'Pavitra Industries',
      alternateName: ['Pavitra Motor', 'Pavitra Industries Ahmedabad'],
      url: 'https://pavitraind.com/',
      logo: 'https://pavitraind.com/images/source/2025-05--pavitra-logo.png',
      image: 'https://pavitraind.com/images/source/2025-05--pavitra-logo.png',
      description: 'Pavitra Industries is a prominent manufacturer and exporter of electric motors, vibratory motors, AC/DC brake motors, cooling tower motors, and customized OEM motors based in Ahmedabad, Gujarat, India.',
      foundingDate: '2008',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No.78 Odhav GIDC, Shed No. 09, Anukul Industrial Estate, Ambika Nagar Road, Nr. National Tank, Odhav',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '382415',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '23.0132',
        longitude: '72.6685'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-97249-25394',
          contactType: 'sales',
          email: 'salespavitramotor@gmail.com',
          areaServed: ['IN', 'AE', 'SA', 'US', 'DE', 'Global'],
          availableLanguage: ['English', 'Hindi', 'Gujarati']
        }
      ],
      sameAs: [
        'https://www.facebook.com/share/p/1HyiR6avhX/',
        'https://youtube.com/@pavitramotor',
        'https://www.instagram.com/pavitra_industries/',
        'https://www.linkedin.com/company/pavitra-industries/'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Industrial Electric & Vibratory Motor Catalog',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Electric Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Industrial Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Induction Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vibratory Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Vibro Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Brake Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Flameproof Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Cooling Tower Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Single Phase Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Three Phase Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Micro Vibratory Motor' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Customized Motor' } }
        ]
      }
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}