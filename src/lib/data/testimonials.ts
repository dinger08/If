export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  organization: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Meridian Legal Partners provided exceptional counsel during our company's restructuring. Their attention to detail and deep understanding of corporate governance gave our board complete confidence throughout the process.",
    author: "Richard Amoako",
    organization: "CEO, West Coast Holdings Ltd.",
    avatarUrl: "https://placehold.co/80x80/c9a84c/ffffff?text=RA",
  },
  {
    id: "2",
    quote:
      "We engaged Meridian Legal for a complex cross-border arbitration and were impressed by their strategic approach and tenacity. They delivered an outstanding result that exceeded our expectations.",
    author: "Fatima Al-Hassan",
    organization: "General Counsel, Sahara Energy Group",
    avatarUrl: "https://placehold.co/80x80/c9a84c/ffffff?text=FA",
  },
  {
    id: "3",
    quote:
      "Their real estate team guided us through a challenging land acquisition with professionalism and precision. We now consider Meridian Legal our trusted advisors for all property matters.",
    author: "James Quartey",
    organization: "Director, Quartey Developments",
    avatarUrl: "https://placehold.co/80x80/c9a84c/ffffff?text=JQ",
  },
];
