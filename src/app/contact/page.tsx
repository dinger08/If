"use client";

import { useState } from "react";
import { CheckCircle, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactInfo from "@/components/shared/ContactInfo";
import { practiceAreas } from "@/lib/data/practiceAreas";
import { siteConfig } from "@/lib/data/siteConfig";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", date: "", message: "", privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
              <p className="text-text-muted mb-8">Fill out the form below and a member of our team will respond within 24 hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">Thank You!</h3>
                  <p className="text-text-muted">We have received your message and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="text" name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm" />
                    <input type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm" />
                    <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm text-text-muted">
                      <option value="">Select Service</option>
                      {practiceAreas.map((a) => (<option key={a.id} value={a.title}>{a.title}</option>))}
                    </select>
                  </div>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm" />
                  <textarea name="message" placeholder="Your Message *" rows={5} required value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded border border-grey-medium text-sm resize-none" />
                  <label className="flex items-start gap-3 text-sm text-text-muted cursor-pointer">
                    <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} required className="mt-0.5 accent-gold" />
                    <span>I agree to the Privacy Policy and consent to having my data processed.</span>
                  </label>
                  <button type="submit" className="px-8 py-3 bg-navy text-white font-semibold text-sm rounded hover:bg-navy-light transition-colors">Send Message</button>
                </form>
              )}
            </div>

            {/* Contact info + map placeholder */}
            <div className="space-y-8">
              <div className="bg-grey-light rounded-lg p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-6">Our Office</h3>
                <ContactInfo />
              </div>
              <div className="bg-grey-medium rounded-lg h-64 flex flex-col items-center justify-center text-text-muted">
                <MapPin className="w-10 h-10 mb-3 text-navy/30" />
                <p className="text-sm font-medium">Map Placeholder</p>
                <p className="text-xs mt-1">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width map placeholder */}
      <div className="bg-grey-medium h-[400px] flex flex-col items-center justify-center text-text-muted">
        <MapPin className="w-12 h-12 mb-3 text-navy/20" />
        <p className="font-medium">Map Placeholder — replace with Google Maps embed</p>
        <p className="text-sm mt-1">{siteConfig.address}</p>
      </div>
    </>
  );
}
