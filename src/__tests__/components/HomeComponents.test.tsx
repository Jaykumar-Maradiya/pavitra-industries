import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import {
  HomeHeroSlider,
  HomeProductsGrid,
  HomeAboutSection,
  HomeCertifications,
  HomeClients,
  HomeGlobalReach,
  HomeTechSection,
  HomeTestimonials,
  HomeSocialWall,
  HomeCtaSection,
} from '@/components/home';

describe('components/home sections', () => {
  describe('HomeHeroSlider', () => {
    it('renders initial hero slide text and controls', () => {
      render(<HomeHeroSlider />);

      expect(screen.getByText(/Vibrate the World with Pavitra Industries/i)).toBeInTheDocument();
      expect(screen.getByTestId('button-hero-prev')).toBeInTheDocument();
      expect(screen.getByTestId('button-hero-next')).toBeInTheDocument();
    });

    it('renders pagination indicators for all slides', () => {
      render(<HomeHeroSlider />);

      expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
    });

    it('handles interaction with navigation controls without error', () => {
      render(<HomeHeroSlider />);

      const nextBtn = screen.getByTestId('button-hero-next');
      const prevBtn = screen.getByTestId('button-hero-prev');

      fireEvent.click(nextBtn);
      fireEvent.click(prevBtn);
      fireEvent.click(screen.getByLabelText('Go to slide 2'));
    });
  });

  describe('HomeProductsGrid', () => {
    it('renders section title and product cards', () => {
      render(<HomeProductsGrid />);

      expect(screen.getByText(/Powering Industries with Precision & Performance/i)).toBeInTheDocument();
      expect(screen.getByText(/Three Phase Ac Induction Motor/i)).toBeInTheDocument();
      expect(screen.getByText(/Unbalance Vibratory Motor/i)).toBeInTheDocument();
    });

    it('navigates product slides using carousel controls', () => {
      render(<HomeProductsGrid />);

      const nextBtn = screen.getByLabelText(/next products/i);
      const prevBtn = screen.getByLabelText(/previous products/i);

      expect(nextBtn).toBeInTheDocument();
      expect(prevBtn).toBeInTheDocument();

      fireEvent.click(nextBtn);
      fireEvent.click(prevBtn);
    });
  });

  describe('HomeAboutSection', () => {
    it('renders company experience stats and link to about page', () => {
      render(<HomeAboutSection />);

      expect(screen.getByText(/About Pavitra Industries/i)).toBeInTheDocument();
      expect(screen.getByText(/Over 15 years of experience/i)).toBeInTheDocument();
      const learnMore = screen.getByTestId('home-about-link');
      expect(learnMore.getAttribute('href')).toMatch(/^\/about-us\/?$/);
    });
  });

  describe('HomeCertifications', () => {
    it('renders ISO 9001:2015 and CE certification standards', () => {
      render(<HomeCertifications />);

      expect(screen.getByText(/Quality that moves with you/i)).toBeInTheDocument();
      expect(screen.getByText(/ISO 9001:2015 certified/i)).toBeInTheDocument();
    });
  });

  describe('HomeClients', () => {
    it('renders clients and industries trust message', () => {
      render(<HomeClients />);

      expect(screen.getByText(/Our Clienteles/i)).toBeInTheDocument();
    });
  });

  describe('HomeGlobalReach', () => {
    it('renders international export highlights and regions', () => {
      render(<HomeGlobalReach />);

      expect(screen.getByText(/We Export Across the Globe/i)).toBeInTheDocument();
      expect(screen.getByText('Europe')).toBeInTheDocument();
      expect(screen.getByText('Africa')).toBeInTheDocument();
      expect(screen.getByText('Russia')).toBeInTheDocument();
    });
  });

  describe('HomeTechSection', () => {
    it('renders technology and manufacturing processes', () => {
      render(<HomeTechSection />);

      expect(screen.getByText(/Backed by Research & Technology/i)).toBeInTheDocument();
      expect(screen.getByText('Advanced Testing')).toBeInTheDocument();
      expect(screen.getByText('Quality Control')).toBeInTheDocument();
    });
  });

  describe('HomeTestimonials', () => {
    it('renders client feedback and testimonials', () => {
      render(<HomeTestimonials />);

      expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument();
      expect(screen.getByText('Jindal Steel')).toBeInTheDocument();
      expect(screen.getByText('NMDC Limited')).toBeInTheDocument();
    });
  });

  describe('HomeSocialWall', () => {
    it('renders social channels and updates', () => {
      render(<HomeSocialWall />);

      expect(screen.getByText(/Live From Pavitra Industries/i)).toBeInTheDocument();
    });
  });

  describe('HomeCtaSection', () => {
    it('renders contact call to action with link to contact page', () => {
      render(<HomeCtaSection />);

      expect(screen.getByText(/Tell us what your application needs\./i)).toBeInTheDocument();
      const contactCta = screen.getByTestId('home-contact-cta');
      expect(contactCta.getAttribute('href')).toMatch(/^\/contact-us\/?$/);
    });
  });
});
