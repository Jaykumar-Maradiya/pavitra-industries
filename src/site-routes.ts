export type SiteRouteMetadata = {
  slug: string;
  title: string;
  description: string;
  canonicalPath: string;
};

const productTitle = (title: string) => title;
const productDescription = (title: string) =>
  `Pavitra Industries ${title} product information, specifications, and enquiry details.`;

const productRoutes: SiteRouteMetadata[] = [
  {
    slug: 'three-phase-induction-motor',
    title: 'Three Phase Motor Manufacturer | Induction Motor Manufacturer',
    description: 'Pavitra Industries is a premier Three Phase Motor Manufacturer & Induction Motor Manufacturer in India. Range: 0.25 HP to 75 HP, 415V, TEFC, high efficiency IE2/IE3 squirrel cage.',
    canonicalPath: '/three-phase-induction-motor/'
  },
  {
    slug: 'single-phase-electric-motor',
    title: 'Single Phase Motor Manufacturer | Electric Motor Manufacturer',
    description: 'Looking for a reliable Single Phase Motor Manufacturer? Pavitra Industries manufactures 0.25 HP to 5 HP single phase electric motors with high torque and silent operation.',
    canonicalPath: '/single-phase-electric-motor/'
  },
  {
    slug: 'ac-dc-brake-motors',
    title: 'Brake Motor Manufacturer (AC & DC Electromagnetic Brakes)',
    description: 'Leading Brake Motor Manufacturer in India. High precision AC/DC fail-safe brake motors from 0.25 HP to 30 HP for cranes, hoists, conveyors, and material handling equipment.',
    canonicalPath: '/ac-dc-brake-motors/'
  },
  {
    slug: 'unbalance-vibratory-motor',
    title: 'Vibratory Motor Manufacturer | Vibro Motor Manufacturer',
    description: 'India’s top Vibratory Motor Manufacturer and Vibro Motor Manufacturer. Heavy duty unbalance vibratory motors with adjustable centrifugal force 0 to 12,000 kg/m.',
    canonicalPath: '/unbalance-vibratory-motor/'
  },
  {
    slug: 'bench-polisher-machine',
    title: 'Bench Polisher Machine Manufacturer (0.25 HP to 10 HP)',
    description: 'Industrial Bench Polisher Machine Manufacturer in Ahmedabad, India. Cast iron body, dual spindle, dynamically balanced for jewelers, metal finishing, and workshops.',
    canonicalPath: '/bench-polisher-machine/'
  },
  {
    slug: 'bench-grinder-machine',
    title: 'Bench Grinder & Pedestal Grinder Machine Manufacturer',
    description: 'Bench & Pedestal Grinder Manufacturer in India. Rugged workshop grinders from 0.12 HP to 5 HP (100mm to 355mm wheels) compliant with Indian standards IS-325.',
    canonicalPath: '/bench-grinder-machine/'
  },
  {
    slug: 'needle-vibrator-motors',
    title: 'Needle Vibrator Motor Manufacturer (1 HP to 3 HP)',
    description: 'Heavy duty concrete Needle Vibrator Motor Manufacturer. Single phase and three phase vibrator motors for construction slabs, columns, and precast elements.',
    canonicalPath: '/needle-vibrator-motors/'
  },
  {
    slug: 'cooling-tower-motor',
    title: 'Cooling Tower Motor Manufacturer (IP55 Epoxy Coated)',
    description: 'Specialized Cooling Tower Motor Manufacturer in India. Class F insulation, IP55 enclosure, moisture-resistant epoxy paint, flange mounted B5 for HVAC & chemical plants.',
    canonicalPath: '/cooling-tower-motor/'
  },
  {
    slug: 'sepration-vibrator-motor',
    title: 'Vibro Motor Manufacturer for Separation & Screening Equipment',
    description: 'High performance Vibro Motor Manufacturer & separation vibrator motors for vibro screens, sieves, mining, food processing, recycling, and chemical filtration.',
    canonicalPath: '/sepration-vibrator-motor/'
  },
  {
    slug: 'custmize-motor',
    title: 'Customized Motor Manufacturer & Flameproof Motor Manufacturer',
    description: 'Customized Motor Manufacturer & Flameproof Motor Manufacturer in India. Custom shafts, voltages, flange mountings, dual-speed, and hazardous area motors for OEMs.',
    canonicalPath: '/custmize-motor/'
  },
  {
    slug: 'top-flange-vibratory-motors',
    title: 'Top Flange Vibratory Motor Manufacturer (0.25 HP to 10 HP)',
    description: 'Top Flange Vibratory Motor Manufacturer for vertical vibrating screens, compactors, and hoppers. High centrifugal force with IP55/IP65 ingress protection.',
    canonicalPath: '/top-flange-vibratory-motors/'
  },
  {
    slug: 'double-flange-vibratory-motor',
    title: 'Double Flange Vibratory Motor Manufacturer (1 HP to 10 HP)',
    description: 'Double Flange Vibratory Motor Manufacturer with heavy-duty MS structure and NJ cylindrical roller bearings for maximum axial and radial load capacity.',
    canonicalPath: '/double-flange-vibratory-motor/'
  },
  {
    slug: 'center-flange-vibratory-motor',
    title: 'Center Flange Vibratory Motor Manufacturer (Gyro Screens)',
    description: 'Center Flange Gyro Vibratory Motor Manufacturer for rotary gyro screens, pharmaceutical separators, and food sieves. 0 to 12,000 kg centrifugal force range.',
    canonicalPath: '/center-flange-vibratory-motor/'
  },
  {
    slug: 'micro-vibratory-motor',
    title: 'Micro Vibratory Motor Manufacturer (15W to 120W Compact)',
    description: 'Premier Micro Vibratory Motor Manufacturer in India. Ultra-compact PMV series motors (15W to 120W, 1.5kg to 2.2kg) in single and three-phase for small feeders and hoppers.',
    canonicalPath: '/micro-vibratory-motor/'
  },
  {
    slug: 'separation-vibrator-motor',
    title: 'Vibro Motor Manufacturer for Separation & Screening Equipment',
    description: 'High performance Vibro Motor Manufacturer & separation vibrator motors for vibro screens, sieves, mining, food processing, recycling, and chemical filtration.',
    canonicalPath: '/sepration-vibrator-motor/'
  },
  {
    slug: 'customized-motor',
    title: 'Customized Motor Manufacturer & Flameproof Motor Manufacturer',
    description: 'Customized Motor Manufacturer & Flameproof Motor Manufacturer in India. Custom shafts, voltages, flange mountings, dual-speed, and hazardous area motors for OEMs.',
    canonicalPath: '/custmize-motor/'
  },
];

export const siteRoutes: SiteRouteMetadata[] = [
  {
    slug: 'about-us',
    title: 'About Pavitra Industries | Industrial Motor Manufacturer in India',
    description: 'Over 15+ years of excellence as an Industrial Motor Manufacturer and Vibratory Motor Manufacturer in Ahmedabad, India. ISO 9001:2015 & CE compliant engineering.',
    canonicalPath: '/about-us/',
  },
  {
    slug: 'blog',
    title: 'Technical Blog & Insights | Vibratory Motor & Electric Motor Guide',
    description: 'Explore engineering guides and industry insights from Pavitra Industries on vibratory motor working principles, induction motors, and industrial applications.',
    canonicalPath: '/blog/',
  },
  {
    slug: 'contact-us',
    title: 'Contact Pavitra Industries | Electric & Vibratory Motor Enquiries',
    description: 'Contact Pavitra Industries in Odhav GIDC, Ahmedabad, Gujarat for quotation on electric motors, vibratory motors, brake motors, and customized OEM motor manufacturing.',
    canonicalPath: '/contact-us/',
  },
  ...productRoutes,
  {
    slug: 'vibratory-motor-full-guide-to-working-specifications-uses',
    title: 'Choosing the Best Vibratory Motor Supplier in India: A Closer Look at Pavitra Industries',
    description: 'Pavitra Industries’ introduction, quality and innovation, and commitment to sustainability.',
    canonicalPath: '/vibratory-motor-full-guide-to-working-specifications-uses/',
  },
  {
    slug: '🌟-what-is-a-vibratory-motor-complete-guide-working-types-applications',
    title: 'What is a Vibratory Motor? Complete Guide – Working, Types & Applications',
    description: 'A comprehensive technical guide to how vibratory motors work, unbalance weights, types, centrifugal forces, and industrial screening applications.',
    canonicalPath: '/%f0%9f%8c%9f-what-is-a-vibratory-motor-complete-guide-working-types-applications/',
  },
  {
    slug: 'pavitra-industries-indias-leading-manufacturer-of-vibratory-motors-and-equipment',
    title: 'Pavitra Industries, India’s Leading Manufacturer of Vibratory Motors and Equipment',
    description: 'Pavitra Industries’ history, mission, global reach, and wide electric & vibratory motor product range exported worldwide.',
    canonicalPath: '/pavitra-industries-indias-leading-manufacturer-of-vibratory-motors-and-equipment/',
  },
  {
    slug: '',
    title: 'Electric Motor Manufacturer & Vibratory Motor Manufacturer in India',
    description: 'Pavitra Industries is India’s leading Electric Motor Manufacturer, Industrial Motor Manufacturer, and Vibratory Motor Manufacturer based in Ahmedabad, Gujarat. ISO 9001:2015 Certified.',
    canonicalPath: '/',
  },
];

export const staticRouteSlugs = siteRoutes
  .filter((route) => route.slug !== '')
  .map((route) => route.slug);

export function findSiteRoute(slug: string): SiteRouteMetadata | undefined {
  return siteRoutes.find((route) => route.slug === slug);
}

export function createRouteMetadata(route: SiteRouteMetadata) {
  const title = route.title.includes('Pavitra Industries')
    ? route.title
    : `${route.title} | Pavitra Industries`;
  const url = `https://pavitraind.com${route.canonicalPath}`;

  return {
    title,
    description: route.description,
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
      'Motor Manufacturer in Ahmedabad',
      'Electric Motor Supplier India'
    ],
    alternates: { canonical: url },
    openGraph: {
      type: 'website' as const,
      siteName: 'Pavitra Industries',
      title,
      description: route.description,
      url,
      images: ['/images/source/2025-05--pavitra-logo.png'],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description: route.description,
      images: ['/images/source/2025-05--pavitra-logo.png'],
    },
  };
}