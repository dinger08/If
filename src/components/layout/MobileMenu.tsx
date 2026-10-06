"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-grey-medium">
          <span className="font-serif text-lg font-bold text-navy">{siteConfig.firmName}</span>
          <button onClick={onClose} aria-label="Close menu" className="p-1 text-text-muted hover:text-navy">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-5 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex-1 py-3 text-sm font-medium text-text-primary hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => toggleExpanded(link.label)}
                    className="p-2 text-text-muted"
                    aria-label={`Expand ${link.label}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(link.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {link.children && expandedItems.includes(link.label) && (
                <div className="pl-4 pb-2 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-text-muted hover:text-gold transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center px-5 py-3 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
