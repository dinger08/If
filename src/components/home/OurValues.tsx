const values = [
  {
    number: "01",
    title: "Professionalism",
    description:
      "We uphold the highest standards of professional conduct in every interaction, ensuring our clients receive counsel they can rely on with confidence.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Honesty and transparency are the cornerstones of our practice. We provide candid advice even when it is not what clients expect to hear.",
  },
  {
    number: "03",
    title: "Client Focus",
    description:
      "Our clients' objectives drive everything we do. We listen carefully, respond promptly, and tailor our approach to each unique situation.",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-[0.2em] uppercase block mb-2">
            OUR VALUES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            What Guides Us
          </h2>
          <div className="h-[3px] w-16 bg-gold mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.number} className="text-center group">
              <span className="text-5xl font-serif font-bold text-gold/30 group-hover:text-gold/60 transition-colors">
                {value.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-2 mb-3">
                {value.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
