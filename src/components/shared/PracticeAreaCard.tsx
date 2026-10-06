import Link from "next/link";
import {
  Scale, Building2, Zap, Lightbulb, Users, Plane, Home,
} from "lucide-react";
import type { PracticeArea } from "@/lib/data/practiceAreas";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale, Building2, Zap, Lightbulb, Users, Plane, Home,
};

interface PracticeAreaCardProps {
  area: PracticeArea;
  large?: boolean;
}

export default function PracticeAreaCard({ area, large = false }: PracticeAreaCardProps) {
  const IconComponent = iconMap[area.icon] || Scale;

  return (
    <Link href={`/practice-areas/${area.slug}`}>
      <div className={`card-hover bg-white rounded-lg shadow-md border border-grey-medium p-6 ${large ? "p-8" : "p-6"} group`}>
        <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
          <IconComponent className="w-7 h-7 text-gold" />
        </div>
        <h3 className={`font-serif font-bold text-navy mb-3 ${large ? "text-xl" : "text-lg"}`}>
          {area.title}
        </h3>
        <p className={`text-text-muted mb-4 ${large ? "text-base" : "text-sm"} line-clamp-3`}>
          {area.summary}
        </p>
        <span className="text-gold font-semibold text-sm group-hover:text-gold-dark transition-colors">
          Read More →
        </span>
      </div>
    </Link>
  );
}
