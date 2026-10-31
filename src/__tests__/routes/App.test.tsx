import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App, { SiteRoute } from '@/App';

describe('App & SiteRoute dispatcher', () => {
  it('renders Home page for slug=""', () => {
    render(<SiteRoute slug="" />);
    expect(screen.getByText(/Vibrate the World with Pavitra Industries/i)).toBeInTheDocument();
  });

  it('renders About page for slug="about-us"', () => {
    render(<SiteRoute slug="about-us" />);
    expect(screen.getAllByText(/About Us/i).length).toBeGreaterThan(0);
  });

  it('renders Contact page for slug="contact-us"', () => {
    render(<SiteRoute slug="contact-us" />);
    expect(screen.getAllByRole('heading', { name: /contact us/i }).length).toBeGreaterThan(0);
  });

  it('renders Blog page for slug="blog"', () => {
    render(<SiteRoute slug="blog" />);
    expect(screen.getAllByText(/Choosing the Best Vibratory Motor Supplier in India/i).length).toBeGreaterThan(0);
  });

  it('renders ProductPage for valid product slug', () => {
    render(<SiteRoute slug="single-phase-electric-motor" />);
    expect(screen.getByRole('heading', { name: /Single Phase Electric Motor/i, level: 1 })).toBeInTheDocument();
  });

  it('handles route aliases for separation-vibrator-motor', () => {
    render(<SiteRoute slug="separation-vibrator-motor" />);
    expect(screen.getByRole('heading', { name: /Sepration Vibratory Motor/i, level: 1 })).toBeInTheDocument();
  });

  it('handles route aliases for customized-motor', () => {
    render(<SiteRoute slug="customized-motor" />);
    expect(screen.getByRole('heading', { name: /Customized.*Motor/i, level: 1 })).toBeInTheDocument();
  });

  it('renders Article page for article slugs', () => {
    render(<SiteRoute slug="vibratory-motor-full-guide-to-working-specifications-uses" />);
    expect(
      screen.getAllByText(/Choosing the Best Vibratory Motor Supplier in India/i).length
    ).toBeGreaterThan(0);
  });

  it('renders NotFound page for unknown slug', () => {
    render(<SiteRoute slug="non-existent-random-slug-12345" />);
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });

  it('default App export renders without error', () => {
    render(<App />);
    expect(screen.getByText(/Vibrate the World with Pavitra Industries/i)).toBeInTheDocument();
  });
});
