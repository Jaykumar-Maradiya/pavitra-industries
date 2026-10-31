import { describe, it, expect } from 'vitest';
import {
  siteRoutes,
  staticRouteSlugs,
  findSiteRoute,
  createRouteMetadata,
} from '@/site-routes';

describe('site-routes', () => {
  it('siteRoutes contains home, about, blog, contact, articles, and product routes', () => {
    expect(siteRoutes.length).toBeGreaterThan(15);

    const slugs = siteRoutes.map((r) => r.slug);
    expect(slugs).toContain('');
    expect(slugs).toContain('about-us');
    expect(slugs).toContain('blog');
    expect(slugs).toContain('contact-us');
    expect(slugs).toContain('three-phase-induction-motor');
    expect(slugs).toContain('single-phase-electric-motor');
  });

  it('staticRouteSlugs excludes empty home slug but includes other pages', () => {
    expect(staticRouteSlugs).not.toContain('');
    expect(staticRouteSlugs).toContain('about-us');
    expect(staticRouteSlugs).toContain('contact-us');
    expect(staticRouteSlugs).toContain('three-phase-induction-motor');
  });

  describe('findSiteRoute', () => {
    it('finds standard pages by slug', () => {
      const home = findSiteRoute('');
      expect(home).toBeDefined();
      expect(home?.canonicalPath).toBe('/');

      const about = findSiteRoute('about-us');
      expect(about).toBeDefined();
      expect(about?.title).toContain('About');

      const contact = findSiteRoute('contact-us');
      expect(contact).toBeDefined();
      expect(contact?.title).toContain('Contact');
    });

    it('finds products and alias routes', () => {
      const induction = findSiteRoute('three-phase-induction-motor');
      expect(induction).toBeDefined();
      expect(induction?.title).toContain('Three Phase');

      const alias1 = findSiteRoute('separation-vibrator-motor');
      expect(alias1).toBeDefined();

      const alias2 = findSiteRoute('customized-motor');
      expect(alias2).toBeDefined();
    });

    it('returns undefined for non-existent slugs', () => {
      expect(findSiteRoute('non-existent-page-slug')).toBeUndefined();
    });
  });

  describe('createRouteMetadata', () => {
    it('generates complete metadata object with title, description, openGraph, twitter', () => {
      const route = findSiteRoute('about-us')!;
      const meta = createRouteMetadata(route);

      expect(meta.title).toContain('Pavitra Industries');
      expect(meta.description).toBe(route.description);
      expect(meta.alternates?.canonical).toBe('https://pavitraind.com/about-us/');
      expect(meta.openGraph?.type).toBe('website');
      expect(meta.openGraph?.url).toBe('https://pavitraind.com/about-us/');
      expect(meta.twitter?.card).toBe('summary_large_image');
      expect(meta.keywords).toContain('Electric Motor Manufacturer');
    });

    it('formats title by appending Pavitra Industries if not present', () => {
      const customRoute = {
        slug: 'test-route',
        title: 'Custom Motor Solutions',
        description: 'Test description',
        canonicalPath: '/test-route/',
      };
      const meta = createRouteMetadata(customRoute);
      expect(meta.title).toBe('Custom Motor Solutions | Pavitra Industries');
    });
  });
});
