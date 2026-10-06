import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Target, Shield, Heart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "About Our Firm — Meridian Legal Partners",
  description: "Learn about Meridian Legal Partners, our history, values, and commitment to delivering exceptional legal services across Ghana and beyond.",
};

const values = [
  { icon: Shield, title: "Integrity", desc: "We are guided by honesty and transparency in all our dealings." },
  { icon: Target, title: "Excellence", desc: "We pursue the highest standards in legal practice and client service." },
  { icon: Heart, title: "Dedication", desc: "We are deeply committed to understanding and advancing our clients' interests." },
  { icon: Award, title: "Innovation", desc: "We embrace modern approaches to solve complex legal challenges." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Our Firm" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image src="https://placehold.co/600x450/1a2e4a/c9a84c?text=Our+History" alt="Our History" width={600} height={450} className="rounded-lg shadow-lg w-full h-auto" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10 hidden lg:block" />
            </div>
            <div>
              <SectionHeader overline="OUR STORY" heading="A Tradition of Legal Excellence" />
              <p className="text-text-muted mb-4 leading-relaxed">Meridian Legal Partners was established in 2003 by Dr. Ama Mensah with a clear vision: to build a law firm that combines deep legal expertise with genuine client partnership. From our founding office in Accra, we have grown into a multi-disciplinary practice serving clients across West Africa and internationally.</p>
              <p className="text-text-muted mb-4 leading-relaxed">Over two decades, we have built a reputation for rigorous legal analysis, strategic thinking, and an unwavering commitment to our clients&apos; objectives. Our growth has been organic and deliberate — every expansion driven by client demand and our desire to deliver comprehensive legal solutions under one roof.</p>
              <p className="text-text-muted leading-relaxed">Today, our team of experienced partners, associates, and support staff provides counsel across seven core practice areas, handling matters that range from complex cross-border arbitrations to local real estate transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="OUR VALUES" heading="What Defines Us" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 text-center card-hover shadow-sm">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase block mb-2">RECOGNITION</span>
          <h2 className="font-serif text-3xl font-bold text-white mb-8">Awards & Accolades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Chambers Global — Band 1 Dispute Resolution", "IFLR1000 — Highly Regarded (Corporate)", "Legal 500 — Recommended Firm", "Ghana Business Awards — Law Firm of the Year"].map((award) => (
              <div key={award} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <Award className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-sm text-white/80">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Work With Us?</h2>
          <p className="text-navy/70 mb-8 max-w-xl mx-auto">We welcome the opportunity to discuss how Meridian Legal Partners can support your legal needs.</p>
          <Link href="/contact" className="inline-flex px-8 py-3 bg-navy text-white font-semibold text-sm rounded hover:bg-navy-light transition-colors">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
