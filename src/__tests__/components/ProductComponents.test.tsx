import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  ProductHeroSection,
  ProductSpecsTable,
  ProductFeaturesList,
  ProductApplications,
  ProductBreadcrumb,
  ProductCtaBanner,
  ProductDataTable,
} from '@/components/product';

describe('components/product', () => {
  describe('ProductBreadcrumb', () => {
    it('renders home link and current product title', () => {
      render(<ProductBreadcrumb title="Three Phase AC Induction Motor" />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
      expect(screen.getByText('Three Phase AC Induction Motor')).toBeInTheDocument();
    });
  });

  describe('ProductHeroSection', () => {
    it('renders product title, eyebrow, paragraphs, and enquiry button', () => {
      render(
        <ProductHeroSection
          title="Unbalance Vibratory Motor"
          eyebrow="Heavy Duty Industrial Vibration"
          intro="Precision engineered vibratory motors for screens, feeders, and conveyors."
          images={['2025-06--4-2-1024x1024.webp']}
        />
      );

      expect(screen.getByText('Unbalance Vibratory Motor')).toBeInTheDocument();
      expect(screen.getByText('Heavy Duty Industrial Vibration')).toBeInTheDocument();
      expect(
        screen.getByText(/Precision engineered vibratory motors for screens/i)
      ).toBeInTheDocument();

      const enquireBtn = screen.getByTestId('product-hero-enquire-btn');
      expect(enquireBtn).toHaveAttribute('href', '/contact-us');
    });
  });

  describe('ProductSpecsTable', () => {
    it('renders table headers and specification key-value pairs', () => {
      const specs: [string, string][] = [
        ['Power Range', '0.25 HP to 75 HP'],
        ['Voltage', '415V ±10%'],
        ['Enclosure', 'TEFC IP55'],
      ];

      render(<ProductSpecsTable heading="Technical Specifications" specs={specs} />);

      expect(screen.getByText('Technical Specifications')).toBeInTheDocument();
      expect(screen.getByText('Specification')).toBeInTheDocument();
      expect(screen.getByText('Details')).toBeInTheDocument();

      expect(screen.getByText('Power Range')).toBeInTheDocument();
      expect(screen.getByText('0.25 HP to 75 HP')).toBeInTheDocument();
      expect(screen.getByText('TEFC IP55')).toBeInTheDocument();
    });
  });

  describe('ProductFeaturesList', () => {
    it('renders feature items with custom heading', () => {
      const features = [
        'High Efficiency IE2/IE3',
        'Dynamically Balanced Rotor',
        'Class F Insulation',
      ];

      render(<ProductFeaturesList heading="Core Motor Features" features={features} />);

      expect(screen.getByText('Core Motor Features')).toBeInTheDocument();
      features.forEach((feat) => {
        expect(screen.getByText(feat)).toBeInTheDocument();
      });
    });
  });

  describe('ProductApplications', () => {
    it('renders applications list and industrial graphic', () => {
      const apps = ['Pumps & Compressors', 'Conveyor Belts', 'Crusher Machines'];

      render(
        <ProductApplications
          heading="Typical Applications"
          applications={apps}
          imageSrc="2025-06--hg-1024x1024.webp"
        />
      );

      expect(screen.getByText('Typical Applications')).toBeInTheDocument();
      apps.forEach((app) => {
        expect(screen.getByText(app)).toBeInTheDocument();
      });

      const img = screen.getByAltText(/industrial applications diagram/i);
      expect(img).toHaveAttribute('src', '/images/source/2025-06--hg-1024x1024.webp');
    });
  });

  describe('ProductCtaBanner', () => {
    it('renders contact actions and call now link', () => {
      render(
        <ProductCtaBanner
          title="Need Custom Technical Specifications?"
          description="We will help you choose the best-fit motor."
        />
      );

      expect(screen.getByText(/Need Custom Technical Specifications\?/i)).toBeInTheDocument();
      const callNow = screen.getByTestId('product-call-now');
      expect(callNow).toHaveAttribute('href', 'tel:+919724925394');
    });
  });

  describe('ProductDataTable', () => {
    it('renders tabular specifications with headers and rows', () => {
      render(
        <ProductDataTable
          title="Frame Size & RPM Dimensions"
          headers={['Frame', 'KW', 'HP', 'RPM']}
          rows={[
            ['63M', '0.18', '0.25', '1440'],
            ['71M', '0.37', '0.50', '1440'],
          ]}
        />
      );

      expect(screen.getByText('Frame Size & RPM Dimensions')).toBeInTheDocument();
      expect(screen.getByText('Frame')).toBeInTheDocument();
      expect(screen.getByText('63M')).toBeInTheDocument();
      expect(screen.getByText('71M')).toBeInTheDocument();
      expect(screen.getAllByText('1440').length).toBe(2);
    });
  });
});
