"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-sm border border-marble-dark/40 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
          Thank You!
        </h3>
        <p className="text-slate">
          We&apos;ve received your request and will contact you within 1 hour
          during business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-white p-8 lg:p-10 rounded-sm border border-marble-dark/40 shadow-sm"
    >
      <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
        Request Your Free Estimate
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
            placeholder="(561) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm bg-white"
          >
            <option value="">Select a service</option>
            <option value="kitchen">Kitchen Countertops</option>
            <option value="bathroom">Bathroom Countertops</option>
            <option value="outdoor">Outdoor Kitchen</option>
            <option value="commercial">Commercial Project</option>
            <option value="repair">Repair / Restoration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="material" className="block text-sm font-medium text-charcoal mb-1">
            Preferred Material
          </label>
          <select
            id="material"
            name="material"
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm bg-white"
          >
            <option value="">Not sure yet</option>
            <option value="marble">Marble</option>
            <option value="granite">Granite</option>
            <option value="quartz">Quartz</option>
            <option value="quartzite">Quartzite</option>
            <option value="porcelain">Porcelain / Dekton</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-charcoal mb-1">
            City / Area *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm"
            placeholder="Boca Raton"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-marble-dark/40 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm resize-none"
            placeholder="Tell us about your project — approximate size, timeline, budget, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity"
        >
          Get My Free Estimate
        </button>

        <p className="text-xs text-slate text-center">
          By submitting this form, you agree to receive communications from Boca
          Marble. We respect your privacy and never share your information.
        </p>
      </div>
    </form>
  );
}
