"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    headline: "Two Decades of Trusted Legal Counsel",
    subtext:
      "Meridian Legal Partners has been at the forefront of legal practice in Ghana since 2003, delivering consistent results across industries and borders.",
    image: "https://placehold.co/800x600/1a2e4a/c9a84c?text=Legal+Counsel",
  },
  {
    headline: "Award-Winning Dispute Resolution",
    subtext:
      "Our dispute resolution team has secured landmark victories in international arbitration and commercial litigation, protecting our clients' interests at the highest levels.",
    image: "https://placehold.co/800x600/243a5e/c9a84c?text=Dispute+Resolution",
  },
  {
    headline: "Committed to Excellence in Every Matter",
    subtext:
      "From corporate governance to energy law, we bring deep expertise and unwavering dedication to every engagement — because your success is our priority.",
    image: "https://placehold.co/800x600/0f1e33/c9a84c?text=Excellence",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
          {/* Text side */}
          <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 relative z-10">
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                {`0${current + 1}`} / {`0${slides.length}`}
              </span>
              <h1
                key={current}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in"
                style={{ animation: "fadeInUp 0.6s ease-out" }}
              >
                {slides[current].headline}
              </h1>
              <p
                className="text-white/70 text-base sm:text-lg mb-8 max-w-lg"
                style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
              >
                {slides[current].subtext}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/practice-areas"
                  className="px-6 py-3 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative hidden lg:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 left-6 sm:left-10 lg:left-16 flex gap-3 z-20">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:right-16 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-gold" : "w-4 bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
