'use client';

import { useState } from 'react';
import type { Dictionary } from '@/get-dictionary';

export function ContactForm({
  contact,
}: {
  contact: Dictionary['Contact'];
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Handle form submission here (API call, email service, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-stone-900 mb-2"
          >
            {contact.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
            placeholder={contact.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-stone-900 mb-2"
          >
            {contact.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
            placeholder={contact.emailPlaceholder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-stone-900 mb-2"
          >
            {contact.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
            placeholder={contact.phonePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-stone-900 mb-2"
          >
            {contact.subjectLabel}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
            placeholder={contact.subjectPlaceholder}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-stone-900 mb-2"
        >
          {contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-sage-700"
          placeholder={contact.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#c8b89a] text-cream-50 py-3 font-semibold hover:bg-[#b8a882] transition-colors"
      >
        {contact.send}
      </button>

      {submitted && (
        <div className="bg-sage-100 text-sage-800 p-4 rounded text-center">
          {contact.thankYouMessage}
        </div>
      )}
    </form>
  );
}
