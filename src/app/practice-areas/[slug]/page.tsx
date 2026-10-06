import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Scale, Building2, Zap, Lightbulb, Users, Plane, Home } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { practiceAreas } from "@/lib/data/practiceAreas";
import { teamMembers } from "@/lib/data/team";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale, Building2, Zap, Lightbulb, Users, Plane, Home,
};

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Not Found" };
  return { title: `${area.title} — Meridian Legal Partners`, description: area.summary };
}

export default async function PracticeAreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.icon] || Scale;
  const related = area.relatedAreas?.map((s) => practiceAreas.find((a) => a.slug === s)).filter(Boolean) || [];
  const relevantTeam = teamMembers.slice(0, 3);

  return (
    <>
      <PageHero title={area.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas", href: "/practice-areas" }, { label: area.title }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy">{area.title}</h2>
              </div>
              {area.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-muted leading-relaxed mb-5">{para}</p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {related.length > 0 && (
                <div className="bg-grey-light rounded-lg p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-4">Related Practice Areas</h3>
                  <ul className="space-y-3">
                    {related.map((r) => r && (
                      <li key={r.slug}>
                        <Link href={`/practice-areas/${r.slug}`} className="text-sm text-text-muted hover:text-gold transition-colors">→ {r.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="bg-navy rounded-lg p-6 text-center">
                <h3 className="font-serif text-lg font-bold text-white mb-3">Need Legal Advice?</h3>
                <p className="text-white/60 text-sm mb-5">Contact our team to discuss how we can assist you.</p>
                <Link href="/contact" className="inline-flex px-6 py-2.5 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-colors">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {relevantTeam.map((m) => (<TeamMemberCard key={m.id} member={m} compact />))}
          </div>
        </div>
      </section>
    </>
  );
}
