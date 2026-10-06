import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import PracticeAreaCard from "@/components/shared/PracticeAreaCard";
import { practiceAreas } from "@/lib/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas — Meridian Legal Partners",
  description: "Explore our comprehensive legal practice areas including dispute resolution, corporate governance, energy law, intellectual property, and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero title="Practice Areas" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionHeader overline="WHAT WE DO" heading="Our Areas of Expertise" />
            <p className="text-text-muted leading-relaxed">Meridian Legal Partners offers comprehensive legal services across seven core practice areas. Our multi-disciplinary team brings deep expertise and practical experience to every matter, ensuring our clients receive strategic counsel tailored to their specific needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.id} area={area} large />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
