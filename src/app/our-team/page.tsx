import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import TeamGrid from "@/components/shared/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team — Meridian Legal Partners",
  description: "Meet the experienced attorneys and professionals at Meridian Legal Partners.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="OUR PEOPLE" heading="Meet the Attorneys" centered />
          <TeamGrid />
        </div>
      </section>
    </>
  );
}
