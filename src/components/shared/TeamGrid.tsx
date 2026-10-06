"use client";

import { useState } from "react";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { teamMembers } from "@/lib/data/team";

const filters = ["All", "Partners", "Senior Associates", "Associates", "Support"] as const;
type Filter = (typeof filters)[number];

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = activeFilter === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
              activeFilter === f
                ? "bg-navy text-white"
                : "bg-grey-light text-text-muted hover:bg-navy/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-12">No team members in this category.</p>
      )}
    </>
  );
}
