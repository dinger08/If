import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

export default function WhoWeAre() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x450/1a2e4a/c9a84c?text=Our+Firm"
                alt="About Meridian Legal Partners"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <SectionHeader overline="WHO WE ARE" heading="A Legacy of Legal Excellence" />
            <p className="text-text-muted mb-4 leading-relaxed">
              Founded in 2003 by Dr. Ama Mensah, Meridian Legal Partners has grown from a
              boutique practice into one of the most respected full-service law firms in Ghana.
              Our team of experienced attorneys provides strategic counsel across a broad range
              of practice areas, serving clients from multinational corporations to government
              institutions.
            </p>
            <p className="text-text-muted mb-4 leading-relaxed">
              We believe that exceptional legal service begins with understanding our clients&apos;
              objectives. Every matter we take on receives the full attention of partners and
              associates who are deeply invested in achieving the best possible outcome.
            </p>
            <p className="text-text-muted mb-8 leading-relaxed">
              With offices in Accra and a network of correspondent firms across Africa and
              Europe, we are well-positioned to handle complex cross-border matters with
              confidence and efficiency.
            </p>
            <Link
              href="/about"
              className="inline-flex px-6 py-3 bg-navy text-white font-semibold text-sm rounded hover:bg-navy-light transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
