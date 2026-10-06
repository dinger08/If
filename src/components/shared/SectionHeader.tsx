interface SectionHeaderProps {
  overline: string;
  heading: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ overline, heading, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase block mb-2">
        {overline}
      </span>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-navy"}`}>
        {heading}
      </h2>
      <div className={`h-[3px] w-16 bg-gold mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
