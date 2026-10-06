import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Mail } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import PageHero from "@/components/shared/PageHero";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { teamMembers } from "@/lib/data/team";

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: "Not Found" };
  return { title: `${member.name} — Meridian Legal Partners`, description: `${member.name} is a ${member.role} at Meridian Legal Partners.` };
}

export default async function AttorneyProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const others = teamMembers.filter((m) => m.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero title={member.name} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/our-team" }, { label: member.name }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo */}
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image src={member.photo} alt={member.name} width={400} height={400} className="w-full h-auto" />
              </div>
              {/* Social links */}
              <div className="flex gap-3 mt-6 justify-center">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                )}
                <a href="#" className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase block mb-2">{member.role}</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">{member.name}</h2>
              <p className="text-text-muted leading-relaxed mb-8">{member.bio}</p>

              <h3 className="font-serif text-lg font-bold text-navy mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {member.specializations.map((s) => (
                  <span key={s} className="px-4 py-1.5 bg-navy/5 text-navy text-sm rounded-full">{s}</span>
                ))}
              </div>

              {member.email && (
                <div className="bg-grey-light rounded-lg p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">Contact {member.name.split(" ")[0]}</h3>
                  <p className="text-sm text-text-muted">{member.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other team members */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy mb-8 text-center">Other Members of Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((m) => (<TeamMemberCard key={m.id} member={m} compact />))}
          </div>
        </div>
      </section>
    </>
  );
}
