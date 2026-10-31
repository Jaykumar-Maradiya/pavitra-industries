import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('components/Header', () => {
  it('renders top contact bar with phone and email', () => {
    render(<Header />);

    const phoneLink = screen.getByTestId('link-header-phone');
    expect(phoneLink).toHaveAttribute('href', 'tel:+919724925394');

    const emailLink = screen.getByTestId('link-header-email');
    expect(emailLink).toHaveAttribute('href', 'mailto:salespavitramotor@gmail.com');
  });

  it('renders brand logo linking to homepage', () => {
    render(<Header />);

    const logo = screen.getByTestId('link-logo');
    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders main desktop navigation items', () => {
    render(<Header />);

    const homeLinks = screen.getAllByTestId('link-nav-home');
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0].getAttribute('href')).toBe('/');

    const aboutLinks = screen.getAllByTestId('link-nav-about');
    expect(aboutLinks[0].getAttribute('href')).toMatch(/^\/about-us\/?$/);

    const blogLinks = screen.getAllByTestId('link-nav-blog');
    expect(blogLinks[0].getAttribute('href')).toMatch(/^\/blog\/?$/);

    const contactLinks = screen.getAllByTestId('link-nav-contact');
    expect(contactLinks[0].getAttribute('href')).toMatch(/^\/contact-us\/?$/);
  });

  it('toggles products menu on button click', () => {
    render(<Header />);

    const productMenuBtn = screen.getByTestId('button-product-menu');
    fireEvent.click(productMenuBtn);

    expect(screen.getByTestId('link-product-menu-three-phase-induction-motor')).toBeInTheDocument();
  });

  it('opens search input when search button is clicked and filters products', () => {
    render(<Header />);

    const searchBtn = screen.getByTestId('button-header-search');
    fireEvent.click(searchBtn);

    const searchInput = screen.getByPlaceholderText(/search vibratory motors/i);
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Brake' } });
    expect(screen.getByText(/AC\/DC Brake Motors/i)).toBeInTheDocument();
  });

  it('toggles mobile drawer on mobile menu button click', () => {
    render(<Header />);

    const mobileMenuBtn = screen.getByTestId('button-mobile-menu');
    expect(mobileMenuBtn).toHaveAttribute('aria-label', 'Open menu');

    fireEvent.click(mobileMenuBtn);

    expect(mobileMenuBtn).toHaveAttribute('aria-label', 'Close menu');
    expect(screen.getByText('Product Range')).toBeInTheDocument();
  });
});
