import { describe, it, expect } from 'vitest';
import {
  products,
  productBySlug,
  articles,
  phone,
  email,
  address,
  whatsapp,
  social,
  brochure,
  locations,
  img,
  source,
} from '@/data/site-data';

describe('data/site-data', () => {
  describe('contact & branding constants', () => {
    it('provides correct phone, email, and address info', () => {
      expect(phone).toContain('97249 25394');
      expect(email).toBe('salespavitramotor@gmail.com');
      expect(address).toContain('Odhav');
      expect(address).toContain('Ahmedabad');
    });

    it('contains working whatsapp link with message', () => {
      expect(whatsapp).toContain('https://wa.me/+919724925394');
      expect(whatsapp).toContain('Pavitra+Industries');
    });

    it('contains social links', () => {
      expect(social.facebook).toContain('facebook.com');
      expect(social.youtube).toContain('youtube.com');
      expect(social.instagram).toContain('instagram.com');
      expect(social.linkedin).toContain('linkedin.com');
      expect(social.twitter).toContain('twitter.com');
    });

    it('provides valid brochure download link', () => {
      expect(brochure).toContain('.pdf');
    });

    it('img() prefixes image names with source path', () => {
      expect(source).toBe('/images/source/');
      expect(img('sample.png')).toBe('/images/source/sample.png');
    });

    it('provides headOffice and works locations with QR codes and map links', () => {
      expect(locations.headOffice.title).toContain('HEAD OFFICE');
      expect(locations.headOffice.mapUrl).toContain('maps.google.com');
      expect(locations.headOffice.qrSvg).toContain('.svg');
      expect(locations.headOffice.qrPng).toContain('.png');

      expect(locations.works.title).toContain('WORKS');
      expect(locations.works.mapUrl).toContain('maps.google.com');
      expect(locations.works.qrSvg).toContain('.svg');
    });
  });

  describe('products catalog', () => {
    it('has all 14 industrial products listed', () => {
      expect(products.length).toBe(14);
    });

    it('every product has required properties', () => {
      products.forEach((product) => {
        expect(product.slug).toBeTruthy();
        expect(typeof product.slug).toBe('string');
        expect(product.title).toBeTruthy();
        expect(product.image).toBeTruthy();
        expect(product.intro).toBeTruthy();
        expect(Array.isArray(product.features)).toBe(true);
        expect(product.features?.length).toBeGreaterThan(0);
        expect(Array.isArray(product.applications)).toBe(true);
        expect(product.applications?.length).toBeGreaterThan(0);
      });
    });

    it('contains core products: Three Phase, Single Phase, Vibratory, Brake motors', () => {
      const slugs = products.map((p) => p.slug);
      expect(slugs).toContain('three-phase-induction-motor');
      expect(slugs).toContain('single-phase-electric-motor');
      expect(slugs).toContain('ac-dc-brake-motors');
      expect(slugs).toContain('unbalance-vibratory-motor');
      expect(slugs).toContain('bench-polisher-machine');
      expect(slugs).toContain('bench-grinder-machine');
      expect(slugs).toContain('needle-vibrator-motors');
      expect(slugs).toContain('cooling-tower-motor');
      expect(slugs).toContain('sepration-vibrator-motor');
      expect(slugs).toContain('custmize-motor');
      expect(slugs).toContain('top-flange-vibratory-motors');
      expect(slugs).toContain('double-flange-vibratory-motor');
      expect(slugs).toContain('center-flange-vibratory-motor');
      expect(slugs).toContain('micro-vibratory-motor');
    });

    it('productBySlug map indexes all products by their slug', () => {
      products.forEach((p) => {
        expect(productBySlug[p.slug]).toBeDefined();
        expect(productBySlug[p.slug].title).toBe(p.title);
      });
    });
  });

  describe('articles data', () => {
    it('contains supplier, guide, and company articles', () => {
      expect(articles.supplier).toBeDefined();
      expect(articles.guide).toBeDefined();
      expect(articles.company).toBeDefined();
    });

    it('each article contains title and structured blocks with headings', () => {
      ['supplier', 'guide', 'company'].forEach((key) => {
        const article = articles[key];
        expect(article.title).toBeTruthy();
        expect(Array.isArray(article.blocks)).toBe(true);
        expect(article.blocks.length).toBeGreaterThan(0);
        article.blocks.forEach((block) => {
          expect(block.heading).toBeTruthy();
        });
      });
    });

    it('guide article includes technical specs table entries', () => {
      const specBlock = articles.guide.blocks.find((b) => b.specs !== undefined);
      expect(specBlock).toBeDefined();
      expect(specBlock?.specs?.length).toBeGreaterThan(0);
    });
  });
});
