import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Seo } from '@/components/Seo';

describe('components/Seo', () => {
  beforeEach(() => {
    document.title = '';
    // Clean up created meta tags
    document.head.querySelectorAll('meta, link[rel="canonical"], script[type="application/ld+json"]').forEach((el) => {
      el.remove();
    });
  });

  it('sets document title with Pavitra Industries suffix if needed', () => {
    render(<Seo title="High Efficiency Motors" description="Test motor description" />);
    expect(document.title).toBe('High Efficiency Motors | Pavitra Industries');
  });

  it('keeps title unchanged if Pavitra Industries is already present', () => {
    render(<Seo title="Pavitra Industries - Industrial Motors" description="Test description" />);
    expect(document.title).toBe('Pavitra Industries - Industrial Motors');
  });

  it('updates meta description, keywords, and openGraph properties', () => {
    render(
      <Seo
        title="Three Phase Induction Motor"
        description="Premium heavy-duty induction motors"
        canonicalPath="/three-phase-induction-motor/"
      />
    );

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta?.getAttribute('content')).toBe('Premium heavy-duty induction motors');

    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    expect(keywordsMeta?.getAttribute('content')).toContain('Electric Motor Manufacturer');

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute('content')).toContain('Three Phase Induction Motor');

    const ogDesc = document.querySelector('meta[property="og:description"]');
    expect(ogDesc?.getAttribute('content')).toBe('Premium heavy-duty induction motors');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl?.getAttribute('content')).toBe('https://pavitraind.com/three-phase-induction-motor/');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe('https://pavitraind.com/three-phase-induction-motor/');
  });

  it('injects JSON-LD structured data script if provided', () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pavitra Industries',
    };

    render(
      <Seo
        title="About Us"
        description="About Pavitra Industries"
        canonicalPath="/about-us/"
        jsonLd={jsonLd}
      />
    );

    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    const parsed = JSON.parse(script?.textContent || '{}');
    expect(parsed.name).toBe('Pavitra Industries');
  });
});
