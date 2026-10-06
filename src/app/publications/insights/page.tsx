import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import { newsPosts } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Legal Insights — Meridian Legal Partners",
  description: "Practical legal tips and 'Did You Know?' insights from Meridian Legal Partners.",
};

export default function InsightsPage() {
  const insights = newsPosts.filter((p) => p.category === "Insight");

  return (
    <>
      <PageHero title="Legal Insights" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications", href: "/publications" }, { label: "Legal Insights" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="DID YOU KNOW?" heading="Quick Legal Insights" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
          {insights.length === 0 && <p className="text-center text-text-muted py-12">No insights yet. Check back soon.</p>}
        </div>
      </section>
    </>
  );
}
