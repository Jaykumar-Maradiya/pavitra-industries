'use client';

import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import { type Product } from '@/data/site-data';
import {
  ProductHeroBanner,
  ProductHeroSection,
  ProductSpecsTable,
  ProductFeaturesList,
  ProductDataTable,
  ProductGalleryStrip,
  ProductApplications,
  ProductCtaBanner,
  Motor360Viewer,
} from '@/components/product';

// Original strip carousel images from pavitraind.com: 2.jpg, 3.jpg, 4.jpg, 1.jpg
const SECONDARY_MOTOR_GALLERY = [
  '2025-06--2.jpg',
  '2025-06--3.jpg',
  '2025-06--4.jpg',
  '2025-06--1.jpg',
];

// Map each product to its original applications diagram/graphic
function getProductAppImage(slug: string): string {
  switch (slug) {
    case 'three-phase-induction-motor':
      return '2025-06--hg-1024x1024.webp';
    case 'single-phase-electric-motor':
      return '2025-06--4-1024x1024.webp';
    case 'unbalance-vibratory-motor':
      return '2025-06--4-2-1024x1024.webp';
    case 'bench-polisher-machine':
      return '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-13-1.webp';
    case 'bench-grinder-machine':
      return '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-19.jpg';
    case 'needle-vibrator-motors':
      return '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-17.jpg';
    case 'cooling-tower-motor':
      return '2025-06--mechanical-dimensions.jpg';
    case 'sepration-vibrator-motor':
      return '2025-06--PAVITRA-WEB-.pdf-1-e1750307939391.png';
    case 'custmize-motor':
      return '2025-05--pavitra-social-media-8.webp';
    case 'top-flange-vibratory-motors':
      return '2025-06--CENTER-FLANGE-WEB.pdf-1.png';
    case 'double-flange-vibratory-motor':
      return '2025-06--4-4-1024x1024.webp';
    case 'center-flange-vibratory-motor':
      return '2025-06--CENTER-FLANGE-WEB.pdf-1.png';
    case 'micro-vibratory-motor':
      return '2025-06--4-3-1024x1024.webp';
    default:
      return '2025-06--large-metal-object-with-many-different-parts-it_981168-6854.jpg';
  }
}

// 8-angle 360-degree rotational frames for three-phase induction motor
const INDUCTION_MOTOR_360_IMAGES = [
  '/images/360/induction-motor/frame_00.webp',
  '/images/360/induction-motor/frame_01.webp',
  '/images/360/induction-motor/frame_02.webp',
  '/images/360/induction-motor/frame_03.webp',
  '/images/360/induction-motor/frame_04.webp',
  '/images/360/induction-motor/frame_05.webp',
  '/images/360/induction-motor/frame_06.webp',
  '/images/360/induction-motor/frame_07.webp',
];

export function ProductPage({ product }: { product: Product }) {
  // Combine hero carousel images: main image + gallery images
  const heroImages = [
    product.image,
    ...(product.gallery || []).filter((img) => img !== product.image),
  ];

  const view360Images =
    product.slug === 'three-phase-induction-motor' ? INDUCTION_MOTOR_360_IMAGES : undefined;

  const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: [`https://pavitraind.com/images/source/${product.image}`],
    description: product.intro?.slice(0, 300) || `${product.title} manufactured by Pavitra Industries`,
    brand: {
      '@type': 'Brand',
      name: 'Pavitra Industries',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Pavitra Industries',
      url: 'https://pavitraind.com',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://pavitraind.com/${product.slug}/`,
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return (
    <>
      <Seo
        title={product.title}
        description={product.intro}
        canonicalPath={`/${product.slug}/`}
        jsonLd={productJsonLd}
      />
      <Shell>
        <main id="content" className="bg-white text-neutral-900">
          {/* 1. Hero Banner with Industrial Exploded Motor Background & Floating Bottom-Left Card */}
          <ProductHeroBanner title={product.title} />

          {/* 2. Hero Section: Title, Eyebrow, Intro, CTAs, and Motor Carousel / 360 Viewer */}
          <ProductHeroSection
            title={product.title}
            eyebrow={product.eyebrow}
            intro={product.intro}
            images={heroImages}
            view360Images={view360Images}
          />

          {/* 3. Technical Specifications Table & Key Features Side by Side */}
          {(product.specs || product.features) && (
            <section className="border-t border-neutral-200 bg-neutral-50/50 py-12 md:py-20">
              <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-14">
                {product.specs && (
                  <div className={product.features ? 'lg:col-span-7' : 'lg:col-span-12'}>
                    <ProductSpecsTable
                      heading={
                        product.slug === 'three-phase-induction-motor'
                          ? 'Optional Features'
                          : 'Technical Specifications'
                      }
                      specs={product.specs}
                    />
                  </div>
                )}
                {product.features && (
                  <div className={product.specs ? 'lg:col-span-5' : 'lg:col-span-12'}>
                    <ProductFeaturesList
                      heading="Key Features"
                      features={product.features}
                    />
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 4. Additional Model / Frame / Mechanical Dimension Tables */}
          {product.tables && product.tables.length > 0 && (
            <section className="border-t border-neutral-200 bg-white py-12 md:py-20">
              <div className="site-container space-y-12">
                {product.tables.map((t, idx) => (
                  <ProductDataTable
                    key={idx}
                    title={t.title}
                    headers={t.headers}
                    rows={t.rows}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 5. Interactive 3D 360° Motor Viewer (Replaces separate photo strips with a single 3D continuous object) */}
          {product.slug === 'three-phase-induction-motor' && (
            <section className="border-y border-neutral-200 bg-neutral-100/70 py-12 md:py-16">
              <div className="site-container">
                <div className="mx-auto max-w-3xl text-center mb-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
                    Precision 3D Inspection
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-black uppercase">
                    360° Interactive Motor View
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 max-w-lg mx-auto">
                    Click and drag horizontally or swipe to freely rotate the motor 360° as a continuous 3D object from all angles.
                  </p>
                </div>

                <div className="mx-auto max-w-xl">
                  <Motor360Viewer
                    spriteSheet="/images/360/induction-motor/motor_3d_spritesheet.webp"
                    totalFrames={8}
                    alt={product.title}
                    autoRotate={false}
                    badgeLabel="3D Continuous Motor Object"
                    className="shadow-md"
                  />
                </div>
              </div>
            </section>
          )}

          {/* 6. Applications Section with Industrial Diagram Graphic */}
          {product.applications && (
            <ProductApplications
              heading="Applications"
              applications={product.applications}
              imageSrc={getProductAppImage(product.slug)}
            />
          )}

          {/* 7. Technical Help & Call-Now CTA Banner */}
          <ProductCtaBanner
            title="Need Help Selecting the Right Motor?"
            description={
              product.slug === 'ac-dc-brake-motors'
                ? 'We’ll help you choose the best-fit AC brake motor for your industrial application.'
                : 'We’ll help you choose the best-fit motor for your industrial application.'
            }
          />
        </main>
      </Shell>
    </>
  );
}
