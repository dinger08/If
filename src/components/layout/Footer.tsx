import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/SocialIcons";
import { siteConfig } from "@/lib/data/siteConfig";
import { practiceAreas } from "@/lib/data/practiceAreas";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-lg">M</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">Meridian Legal</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{siteConfig.tagline}</p>
            <div className="flex gap-3">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.twitter} aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/our-team" },
                { label: "Publications", href: "/publications" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-white/60 text-sm hover:text-gold transition-colors">{area.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved.</span>
          <span>Designed with precision for legal excellence.</span>
        </div>
      </div>
    </footer>
  );
}
