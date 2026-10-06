"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "All Practice Areas", href: "/practice-areas" },
      { label: "Dispute Resolution", href: "/practice-areas/dispute-resolution" },
      { label: "Corporate Governance", href: "/practice-areas/corporate-governance" },
      { label: "Energy & Natural Resources", href: "/practice-areas/energy-natural-resources" },
      { label: "Intellectual Property", href: "/practice-areas/intellectual-property" },
      { label: "Employment Law", href: "/practice-areas/employment-law" },
      { label: "Transport & Aviation", href: "/practice-areas/transport-aviation" },
      { label: "Real Estate", href: "/practice-areas/real-estate" },
    ],
  },
  { label: "Our Team", href: "/our-team" },
  {
    label: "Publications",
    href: "/publications",
    children: [
      { label: "All Publications", href: "/publications" },
      { label: "Articles", href: "/publications/articles" },
      { label: "Legal Insights", href: "/publications/insights" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-xl font-bold text-navy">
                  {siteConfig.firmName.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-text-muted uppercase -mt-0.5">
                  {siteConfig.firmName.split(" ").slice(2).join(" ")}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text-primary hover:text-gold transition-colors"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {link.children && (
                    <div
                      className={`absolute top-full left-0 mt-0 w-60 bg-white rounded-lg shadow-xl border border-grey-medium py-2 transition-all duration-200 ${
                        activeDropdown === link.label ? "dropdown-visible" : "dropdown-enter"
                      }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-primary hover:bg-gold/10 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-dark transition-colors"
              >
                Free Consultation
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-navy"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
