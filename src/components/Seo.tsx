'use client';

import { useEffect } from 'react';

export function Seo({
  title,
  description,
  canonicalPath,
  jsonLd,
}: {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
}) {
  useEffect(() => {
    const fullTitle = title.includes('Pavitra Industries')
      ? title
      : `${title} | Pavitra Industries`;

    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta(
      'keywords',
      'Electric Motor Manufacturer, Industrial Motor Manufacturer, Induction Motor Manufacturer, Vibratory Motor Manufacturer, Vibro Motor Manufacturer, Brake Motor Manufacturer, Flameproof Motor Manufacturer, Cooling Tower Motor Manufacturer, Single Phase Motor Manufacturer, Three Phase Motor Manufacturer, Micro Vibratory Motor Manufacturer, Customized Motor Manufacturer, Ahmedabad, Gujarat, India'
    );

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setOg('og:title', fullTitle);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:url', `https://pavitraind.com${canonicalPath || window.location.pathname}`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://pavitraind.com${canonicalPath || window.location.pathname}`);

    // Dynamic JSON-LD injection if provided
    let scriptEl = document.querySelector('script#route-jsonld');
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.setAttribute('id', 'route-jsonld');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonicalPath, jsonLd]);

  return null;
}
