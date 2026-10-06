import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

interface ContactInfoProps {
  light?: boolean;
}

export default function ContactInfo({ light = false }: ContactInfoProps) {
  const textColor = light ? "text-white" : "text-text-primary";
  const mutedColor = light ? "text-white/70" : "text-text-muted";

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className={`font-semibold text-sm ${textColor}`}>Address</h4>
          <p className={`text-sm ${mutedColor}`}>{siteConfig.address}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className={`font-semibold text-sm ${textColor}`}>Phone</h4>
          <p className={`text-sm ${mutedColor}`}>{siteConfig.phone}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className={`font-semibold text-sm ${textColor}`}>Email</h4>
          <p className={`text-sm ${mutedColor}`}>{siteConfig.email}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className={`font-semibold text-sm ${textColor}`}>Office Hours</h4>
          <p className={`text-sm ${mutedColor}`}>{siteConfig.hours}</p>
        </div>
      </div>
    </div>
  );
}
