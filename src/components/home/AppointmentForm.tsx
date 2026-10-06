"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import ContactInfo from "@/components/shared/ContactInfo";
import { practiceAreas } from "@/lib/data/practiceAreas";

export default function AppointmentForm() {
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

  if (submitted) {
    return (
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Thank You!</h2>
          <p className="text-white/70 text-lg">We have received your request. A member of our team will be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase block mb-2">SCHEDULE A MEETING</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">Book An Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" name="name" placeholder="Full Name *" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm" />
                <input type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm" />
                <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white text-sm">
                  <option value="" className="text-navy">Select Service</option>
                  {practiceAreas.map((a) => (<option key={a.id} value={a.title} className="text-navy">{a.title}</option>))}
                </select>
              </div>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white text-sm" />
              <textarea name="message" placeholder="Your Message" rows={4} value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm resize-none" />
              <label className="flex items-start gap-3 text-sm text-white/60 cursor-pointer">
                <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} required className="mt-0.5 accent-gold" />
                <span>I agree to the Privacy Policy and consent to having my data processed for the purpose of handling my enquiry.</span>
              </label>
              <button type="submit" className="px-8 py-3 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-colors">Submit Request</button>
            </form>
          </div>
          <div className="flex items-center">
            <div className="bg-white/5 rounded-lg p-8 w-full border border-white/10">
              <h3 className="font-serif text-xl font-bold text-white mb-6">Get In Touch Directly</h3>
              <ContactInfo light />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
