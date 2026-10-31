import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Shell } from '@/components/Shell';

describe('components/Shell', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  });

  it('renders children content within Shell', () => {
    render(
      <Shell>
        <div data-testid="page-child">Test Page Content</div>
      </Shell>
    );

    expect(screen.getByTestId('page-child')).toBeInTheDocument();
    expect(screen.getByText('Test Page Content')).toBeInTheDocument();
  });

  it('renders skip-to-content accessibility link', () => {
    render(
      <Shell>
        <div>Content</div>
      </Shell>
    );

    const skipLink = screen.getByText('Skip to content');
    expect(skipLink).toHaveAttribute('href', '#content');
  });

  it('renders floating WhatsApp button', () => {
    render(
      <Shell>
        <div>Content</div>
      </Shell>
    );

    const whatsappBtn = screen.getByTestId('link-whatsapp');
    expect(whatsappBtn).toBeInTheDocument();
    expect(whatsappBtn).toHaveAttribute('href');
    expect(whatsappBtn.getAttribute('href')).toContain('wa.me');
  });

  it('toggles floating social media links on expand button click', () => {
    render(
      <Shell>
        <div>Content</div>
      </Shell>
    );

    const toggleBtn = screen.getByTitle(/show social media links/i);
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    // Social links should now appear (e.g., LinkedIn, Instagram)
    expect(screen.getAllByLabelText('LinkedIn').length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText('Instagram').length).toBeGreaterThan(0);
  });

  it('displays scroll-to-top button after scrolling and scrolls to top on click', () => {
    render(
      <Shell>
        <div>Content</div>
      </Shell>
    );

    // Initially scroll is 0, button not rendered
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();

    // Simulate scrolling past 300px
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 350 });
      window.dispatchEvent(new Event('scroll'));
    });

    const scrollBtn = screen.getByLabelText('Scroll to top');
    expect(scrollBtn).toBeInTheDocument();

    fireEvent.click(scrollBtn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
