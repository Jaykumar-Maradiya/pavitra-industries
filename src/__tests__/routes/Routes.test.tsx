import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from '@/routes/Home';
import { About } from '@/routes/About';
import { Contact } from '@/routes/Contact';
import { Blog } from '@/routes/Blog';
import { Article } from '@/routes/Article';
import { ProductPage } from '@/routes/ProductPage';
import NotFound from '@/pages/not-found';
import { products, articles } from '@/data/site-data';

describe('routes / pages', () => {
  it('renders Home route with hero and products', () => {
    render(<Home />);
    expect(screen.getByText(/Vibrate the World with Pavitra Industries/i)).toBeInTheDocument();
    expect(screen.getByText(/Powering Industries with Precision & Performance/i)).toBeInTheDocument();
  });

  it('renders About route with company mission and background', () => {
    render(<About />);
    expect(screen.getAllByText(/About Us/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Pavitra Industries/i).length).toBeGreaterThan(0);
  });

  it('renders Contact route with info and contact form', () => {
    render(<Contact />);
    expect(screen.getAllByRole('heading', { name: /contact us/i }).length).toBeGreaterThan(0);
    expect(screen.getByTestId('button-contact-submit')).toBeInTheDocument();
  });

  it('renders Blog route with technical articles', () => {
    render(<Blog />);
    expect(screen.getAllByText(/Choosing the Best Vibratory Motor Supplier in India/i).length).toBeGreaterThan(0);
  });

  it('renders Article route with article details, sections, and back link', () => {
    render(<Article article={articles.guide} />);
    expect(
      screen.getAllByText(/What is a Vibratory Motor\? Complete Guide/i).length
    ).toBeGreaterThan(0);
    expect(screen.getByText(/How Does a Vibratory Motor Work\?/i)).toBeInTheDocument();
    expect(screen.getByTestId('article-back-blog').getAttribute('href')).toMatch(/^\/blog\/?$/);
  });

  it('renders ProductPage route with technical specifications and 360 viewer', () => {
    const motor = products.find((p) => p.slug === 'three-phase-induction-motor')!;
    render(<ProductPage product={motor} />);

    expect(screen.getByRole('heading', { name: motor.title, level: 1 })).toBeInTheDocument();
    expect(screen.getByTestId('product-hero-enquire-btn')).toBeInTheDocument();
    expect(screen.getByTestId('product-call-now')).toBeInTheDocument();
  });

  it('renders NotFound page with 404 message', () => {
    render(<NotFound />);
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });
});
