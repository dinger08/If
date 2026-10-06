import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import { newsPosts } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Articles — Meridian Legal Partners",
  description: "Read the latest articles and legal analysis from the attorneys at Meridian Legal Partners.",
};

export default function ArticlesPage() {
  const articles = newsPosts.filter((p) => p.category === "Article" || p.category === "News");

  return (
    <>
      <PageHero title="Articles" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications", href: "/publications" }, { label: "Articles" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="ARTICLES" heading="Our Latest Writing" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
          {articles.length === 0 && <p className="text-center text-text-muted py-12">No articles yet. Check back soon.</p>}
        </div>
      </section>
    </>
  );
}
