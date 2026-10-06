"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
  compact?: boolean;
}

export default function TeamMemberCard({ member, compact = false }: TeamMemberCardProps) {
  return (
    <Link href={`/our-team/${member.slug}`} className="block">
      <div className={`card-hover bg-white rounded-lg overflow-hidden shadow-md ${compact ? "min-w-[260px]" : ""}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image src={member.photo} alt={member.name} fill className="object-cover" />
          {/* Overlay with social links on hover */}
          <div className="absolute inset-0 bg-navy/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex gap-3">
              {member.email && (
                <span onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
              )}
              {member.linkedin && (
                <span onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
              )}
              {member.twitter && (
                <span onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </span>
              )}
              <span onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="font-serif text-lg font-bold text-navy">{member.name}</h3>
          <p className="text-sm text-gold font-medium mt-1">{member.role}</p>
          {!compact && (
            <p className="text-xs text-text-muted mt-2 line-clamp-2">{member.bio}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
