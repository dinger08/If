import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Lightbulb } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Publications — Meridian Legal Partners",
  description: "Explore articles, legal insights, and thought leadership from the attorneys at Meridian Legal Partners.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero title="Publications" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="KNOWLEDGE SHARING" heading="Our Publications" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/publications/articles" className="group block">
              <div className="card-hover bg-white rounded-lg shadow-md p-10 text-center border border-grey-medium">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
                  <FileText className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">Articles</h3>
                <p className="text-text-muted">In-depth analysis, legal commentary, and professional perspectives from our team.</p>
              </div>
            </Link>
            <Link href="/publications/insights" className="group block">
              <div className="card-hover bg-white rounded-lg shadow-md p-10 text-center border border-grey-medium">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
                  <Lightbulb className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">Legal Insights</h3>
                <p className="text-text-muted">Quick, practical legal tips and &ldquo;Did You Know?&rdquo; facts to keep you informed.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
