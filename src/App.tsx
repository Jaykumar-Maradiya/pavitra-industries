'use client';

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';

// Shared Data
import { productBySlug, articles, products, type Product } from '@/data/site-data';

// Components
import { Seo } from '@/components/Seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shell } from '@/components/Shell';
import { PageHero } from '@/components/PageHero';

// Routes
import { Home } from '@/routes/Home';
import { About } from '@/routes/About';
import { Contact } from '@/routes/Contact';
import { Blog } from '@/routes/Blog';
import { ProductPage } from '@/routes/ProductPage';
import { Article } from '@/routes/Article';

// Re-exports for convenience and backward compatibility
export { Seo, Header, Footer, Shell, PageHero };
export { Home, About, Contact, Blog, ProductPage, Article };
export { products, productBySlug, articles, type Product };

const queryClient = new QueryClient();

export function SiteRoute({ slug }: { slug: string }) {
  let page: ReactNode;
  const product =
    productBySlug[slug] ??
    (slug === 'separation-vibrator-motor' ? productBySlug['sepration-vibrator-motor'] : undefined) ??
    (slug === 'customized-motor' ? productBySlug['custmize-motor'] : undefined);

  if (slug === '') {
    page = <Home />;
  } else if (slug === 'about-us') {
    page = <About />;
  } else if (slug === 'blog') {
    page = <Blog />;
  } else if (slug === 'contact-us') {
    page = <Contact />;
  } else if (slug === 'vibratory-motor-full-guide-to-working-specifications-uses') {
    page = <Article article={articles.supplier} />;
  } else if (slug === '🌟-what-is-a-vibratory-motor-complete-guide-working-types-applications') {
    page = <Article article={articles.guide} />;
  } else if (slug === 'pavitra-industries-indias-leading-manufacturer-of-vibratory-motors-and-equipment') {
    page = <Article article={articles.company} />;
  } else if (product) {
    page = <ProductPage product={product} />;
  } else {
    page = <NotFound />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey={slug}>{page}</ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default function App() {
  return <SiteRoute slug="" />;
}
