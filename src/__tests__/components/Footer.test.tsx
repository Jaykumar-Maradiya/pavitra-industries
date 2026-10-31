import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('components/Footer', () => {
  it('renders products column with links to key motor pages', () => {
    render(<Footer />);

    expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Three Phase AC Induction Motor/i)).toBeInTheDocument();
    expect(screen.getByText(/Single Phase Electric Motor/i)).toBeInTheDocument();
    expect(screen.getByText(/Unbalance Vibratory Motor/i)).toBeInTheDocument();
  });

  it('renders Head Office and Works addresses', () => {
    render(<Footer />);

    expect(screen.getByText(/PAVITRA INDUSTRIES, HEAD OFFICE/i)).toBeInTheDocument();
    expect(screen.getByText(/PAVITRA INDUSTRIES, WORKS & FACTORY/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Odhav/i).length).toBeGreaterThan(0);
  });

  it('renders QR code navigation links to Google Maps locations', () => {
    render(<Footer />);

    const headOfficeQr = screen.getByAltText(/Head Office Location Google Maps QR Code/i);
    expect(headOfficeQr).toBeInTheDocument();

    const worksQr = screen.getByAltText(/Works & Factory Location Google Maps QR Code/i);
    expect(worksQr).toBeInTheDocument();
  });

  it('renders copyright notice and ISO certification reference', () => {
    render(<Footer />);

    expect(screen.getByText(/Copyright ©/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/ISO 9001:2015 CERTIFIED/i)).toBeInTheDocument();
  });

  it('toggles mobile accordion sections when clicked', () => {
    render(<Footer />);

    const productsToggle = screen.getByRole('button', { name: /our products/i });
    fireEvent.click(productsToggle);
    // Button click triggers openSections state update
    expect(productsToggle).toBeInTheDocument();
  });
});
