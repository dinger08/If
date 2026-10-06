import SectionHeader from "@/components/shared/SectionHeader";
import PracticeAreaCard from "@/components/shared/PracticeAreaCard";
import { practiceAreas } from "@/lib/data/practiceAreas";

export default function PracticeAreasGrid() {
  return (
    <section className="py-20 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="LEGAL PRACTICE AREAS"
          heading="We Have Expertise In"
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
