import { Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/SocialIcons";
import { siteConfig } from "@/lib/data/siteConfig";

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-white/80 text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="w-3.5 h-3.5" />
            {siteConfig.email}
          </a>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {siteConfig.hours}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href={siteConfig.socials.facebook} aria-label="Facebook" className="hover:text-gold transition-colors">
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="hover:text-gold transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href={siteConfig.socials.twitter} aria-label="Twitter" className="hover:text-gold transition-colors">
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
