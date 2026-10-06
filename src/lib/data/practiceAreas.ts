export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  icon: string;
  summary: string;
  fullDescription: string;
  relatedAreas?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    icon: "Scale",
    summary:
      "Strategic counsel in arbitration, mediation, and litigation across commercial, civil, and investment disputes.",
    fullDescription:
      "Our Dispute Resolution practice is one of the most respected in the region. We represent clients before national courts, international arbitral tribunals, and mediation panels across a broad spectrum of commercial, civil, and investment disputes.\n\nOur team has handled landmark cases that have shaped jurisprudence in corporate and commercial law. We adopt a strategic, results-oriented approach — assessing each matter's merits early to determine the most effective path to resolution, whether through negotiation, mediation, arbitration, or litigation.\n\nWe regularly advise multinational corporations, state-owned enterprises, and high-net-worth individuals on complex cross-border disputes, enforcement of foreign judgments, and investor-state arbitration under BIT and ICSID frameworks.",
    relatedAreas: ["corporate-governance", "employment-law"],
  },
  {
    id: "2",
    slug: "corporate-governance",
    title: "Corporate Governance",
    icon: "Building2",
    summary:
      "Advising boards and executives on compliance, corporate structuring, and governance best practices.",
    fullDescription:
      "Good governance is the foundation of sustainable business. Our Corporate Governance practice advises boards of directors, company secretaries, and senior executives on regulatory compliance, board composition, shareholder rights, and corporate restructuring.\n\nWe assist clients with the formation and registration of companies, joint ventures, and partnerships across multiple jurisdictions. Our team regularly drafts shareholder agreements, articles of incorporation, and corporate policies that align with both local legislation and international best practices.\n\nWe also provide ongoing compliance support, helping organizations navigate the evolving regulatory landscape including SEC filings, anti-money laundering obligations, and beneficial ownership disclosures.",
    relatedAreas: ["dispute-resolution", "intellectual-property"],
  },
  {
    id: "3",
    slug: "energy-natural-resources",
    title: "Energy & Natural Resources",
    icon: "Zap",
    summary:
      "Comprehensive legal support for oil & gas, mining, and renewable energy projects.",
    fullDescription:
      "Ghana's position as a major producer of oil, gas, gold, and other minerals demands sophisticated legal counsel. Our Energy & Natural Resources team advises on every phase of resource projects — from exploration licensing and environmental permitting to production sharing agreements and decommissioning.\n\nWe have supported some of the largest mining and petroleum transactions in West Africa, including advising on the legal frameworks for offshore oil production and onshore gold mining operations. Our expertise spans regulatory compliance, joint operating agreements, farm-in/farm-out transactions, and community development obligations.\n\nOur team is also at the forefront of renewable energy law, advising on solar, wind, and hydro projects including power purchase agreements and feed-in tariff applications.",
    relatedAreas: ["corporate-governance", "real-estate"],
  },
  {
    id: "4",
    slug: "intellectual-property",
    title: "Intellectual Property",
    icon: "Lightbulb",
    summary:
      "Protecting innovations, brands, and creative works through registration, enforcement, and licensing.",
    fullDescription:
      "In an increasingly knowledge-driven economy, the protection of intellectual property is paramount. Our IP practice covers the full spectrum of trademark, patent, copyright, and industrial design matters — from prosecution and registration through to enforcement and licensing.\n\nWe advise clients ranging from technology startups to established consumer brands on developing IP strategies that protect their competitive advantage. Our team handles oppositions, cancellation proceedings, and infringement litigation before the Registrar General's Department and the courts.\n\nWe also provide counsel on technology transfer agreements, software licensing, trade secrets, and digital rights management, ensuring our clients' innovations remain protected in both physical and digital marketplaces.",
    relatedAreas: ["corporate-governance", "employment-law"],
  },
  {
    id: "5",
    slug: "employment-law",
    title: "Employment Law",
    icon: "Users",
    summary:
      "Guiding employers and employees through workplace regulations, contracts, and dispute resolution.",
    fullDescription:
      "Employment relationships are governed by an intricate web of statutory requirements and contractual obligations. Our Employment Law practice advises both employers and employees on the full range of workplace matters — from recruitment and contract drafting to termination, redundancy, and post-employment restrictions.\n\nWe regularly assist organizations with the development of employment policies, employee handbooks, and workplace codes of conduct that comply with the Labour Act and related regulations. We also handle collective bargaining negotiations, trade union relations, and industrial disputes.\n\nOur litigation team has extensive experience representing clients in unfair dismissal claims, discrimination cases, and occupational health and safety matters before the National Labour Commission and the courts.",
    relatedAreas: ["dispute-resolution", "corporate-governance"],
  },
  {
    id: "6",
    slug: "transport-aviation",
    title: "Transport & Aviation",
    icon: "Plane",
    summary:
      "Navigating regulatory frameworks for airlines, shipping companies, and logistics operators.",
    fullDescription:
      "The transport and aviation sectors require specialist legal knowledge given their complex regulatory environments. Our practice advises airlines, airport authorities, shipping companies, and logistics operators on regulatory compliance, licensing, and commercial transactions.\n\nWe have been involved in the negotiation of bilateral air service agreements, aircraft leasing and financing arrangements, and airport concession contracts. Our maritime practice covers ship registration, charter party disputes, cargo claims, and port operations.\n\nWe also advise on inland transport regulations, including road haulage licensing, rail concessions, and the legal aspects of emerging mobility solutions such as ride-hailing platforms and drone delivery services.",
    relatedAreas: ["dispute-resolution", "energy-natural-resources"],
  },
  {
    id: "7",
    slug: "real-estate",
    title: "Real Estate",
    icon: "Home",
    summary:
      "Expert counsel on property acquisitions, commercial leasing, construction, and land title matters.",
    fullDescription:
      "Real estate transactions in our jurisdiction require careful navigation of customary land tenure, statutory frameworks, and administrative procedures. Our Real Estate practice provides comprehensive legal services covering residential and commercial property acquisitions, dispositions, leasing, and development.\n\nWe conduct thorough due diligence on property titles, ensuring our clients' investments are secured against competing claims. Our team handles land registration, survey coordination, and stamp duty compliance to ensure seamless closings.\n\nFor developers and construction companies, we advise on construction contracts, joint venture agreements, planning and building permits, and environmental compliance. We also assist with real estate financing, including mortgage documentation and securitization structures.",
    relatedAreas: ["corporate-governance", "energy-natural-resources"],
  },
];
