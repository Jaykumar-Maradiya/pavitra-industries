import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '@/components/contact/ContactForm';

describe('components/contact/ContactForm', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      configurable: true,
      value: { href: '' },
    });
  });

  it('renders all form input fields and submit button', () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your contact no/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();
    expect(screen.getByTestId('button-contact-submit')).toBeInTheDocument();
  });

  it('displays validation errors when submitting empty form', () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByTestId('button-contact-submit'));

    expect(screen.getByText('Please enter your name')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Please enter your contact number')).toBeInTheDocument();
    expect(screen.getByText('Please select a product from the list')).toBeInTheDocument();
  });

  it('validates email format requiring an @ symbol', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/your email/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByPlaceholderText(/your contact no/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Three Phase Ac Induction Motor' } });

    fireEvent.click(screen.getByTestId('button-contact-submit'));

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('submits successfully when all required fields are valid', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/your name/i), { target: { value: 'Rajesh Kumar' } });
    fireEvent.change(screen.getByPlaceholderText(/your email/i), { target: { value: 'rajesh@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/your contact no/i), { target: { value: '+91 98765 43210' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Three Phase Ac Induction Motor' } });
    fireEvent.change(screen.getByPlaceholderText(/your message/i), { target: { value: 'Interested in 5 HP motors.' } });

    fireEvent.click(screen.getByTestId('button-contact-submit'));

    expect(window.location.href).toContain('mailto:salespavitramotor@gmail.com');
    expect(window.location.href).toContain('Rajesh%20Kumar');
    expect(window.location.href).toContain('Three%20Phase%20Ac%20Induction%20Motor');
  });
});
