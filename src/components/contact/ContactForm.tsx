'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { email } from '@/data/site-data';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Select Product(*)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'Select Product(*)',
    'Single Phase Ac Induction Motor',
    'Three Phase Ac Induction Motor',
    'Unbalanced Vibratory Motor',
    'Stone Crusher Vibration Motor',
    'Micro Vibrating Motor',
    'Ac Brake Motor',
    'Micro Vibratory Low Voltage Motor',
    'Sepration Vibratory Motor',
    'Foot Cum Flnage Mounted Three Phase Electric Motor',
    'Flange Mounted Single Phase Electric Motor',
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your contact number';
    if (formData.product === 'Select Product(*)') {
      newErrors.product = 'Please select a product from the list';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Enquiry for ${formData.product} from ${formData.name}`
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <motion.div
      className="bg-neutral-50 border border-neutral-300 rounded-md p-6 sm:p-8 lg:p-10 shadow-sm"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Row 1: Name, Email, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="contact-name" className="sr-only">Your Name (*)</label>
            <input
              id="contact-name"
              type="text"
              name="your-name"
              placeholder="Your Name (*)"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full rounded bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 border transition-colors focus:outline-none ${
                errors.name ? 'border-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-black'
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">Your Email (*)</label>
            <input
              id="contact-email"
              type="email"
              name="your-email"
              placeholder="Your Email (*)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full rounded bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 border transition-colors focus:outline-none ${
                errors.email ? 'border-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-black'
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-phone" className="sr-only">Your Contact No. (*)</label>
            <input
              id="contact-phone"
              type="tel"
              name="your-phone"
              placeholder="Your Contact No. (*)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full rounded bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 border transition-colors focus:outline-none ${
                errors.phone ? 'border-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-black'
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: Select Product Dropdown */}
        <div>
          <label htmlFor="contact-product" className="sr-only">Select Product(*)</label>
          <select
            id="contact-product"
            name="product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className={`w-full rounded bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 border transition-colors focus:outline-none ${
              errors.product ? 'border-red-600 focus:border-red-600' : 'border-neutral-300 focus:border-black'
            }`}
          >
            {productOptions.map((opt) => (
              <option key={opt} value={opt} disabled={opt === 'Select Product(*)'}>
                {opt}
              </option>
            ))}
          </select>
          {errors.product && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.product}</p>}
        </div>

        {/* Row 3: Message Textarea */}
        <div>
          <label htmlFor="contact-message" className="sr-only">Your Message</label>
          <textarea
            id="contact-message"
            rows={5}
            name="your-message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded bg-white px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 border border-neutral-300 transition-colors focus:border-black focus:outline-none resize-y"
          />
        </div>

        {/* Row 4: Submit Button */}
        <div>
          <button
            type="submit"
            data-testid="button-contact-submit"
            className="inline-flex items-center justify-center rounded bg-black px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </div>

        {submitted && (
          <p className="mt-3 text-xs font-semibold text-neutral-700 bg-neutral-200/60 p-3 rounded border border-neutral-300">
            Enquiry generated. Your default email client has been opened to send this directly to <span className="font-bold text-black">{email}</span>.
          </p>
        )}
      </form>
    </motion.div>
  );
}
