import Image from "next/image";

const affiliations = [
  { logo: "https://placehold.co/300x100/f5f5f5/1a2e4a?text=GBA", label: "Ghana Bar Association" },
  { logo: "https://placehold.co/300x100/f5f5f5/1a2e4a?text=IBA", label: "International Bar Association" },
  { logo: "https://placehold.co/300x100/f5f5f5/1a2e4a?text=AILA", label: "African Institute of Legal Affairs" },
  { logo: "https://placehold.co/300x100/f5f5f5/1a2e4a?text=ICC", label: "International Chamber of Commerce" },
];

export default function MembershipsBar() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase">OUR AFFILIATIONS</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {affiliations.map((a) => (
            <div key={a.label} className="text-center">
              <Image src={a.logo} alt={a.label} width={300} height={100} className="mx-auto mb-3 opacity-70 hover:opacity-100 transition-opacity" />
              <p className="text-xs text-text-muted">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
