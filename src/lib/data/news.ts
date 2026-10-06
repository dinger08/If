export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: "News" | "Article" | "Insight";
  publishedAt: string;
  content: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: "1",
    slug: "meridian-legal-wins-arbitration-award",
    title: "Meridian Legal Secures Landmark Arbitration Award for Energy Client",
    excerpt:
      "Our dispute resolution team successfully represented a major energy company in a USD 45 million international arbitration proceeding.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=News+1",
    category: "News",
    publishedAt: "2025-04-15",
    content:
      "Meridian Legal Partners is pleased to announce that our dispute resolution team has secured a landmark arbitration award on behalf of a leading energy company. The arbitration, which was administered under ICC Rules, involved claims arising from a complex joint operating agreement for offshore petroleum operations. The tribunal awarded our client full damages plus interest and costs, totaling approximately USD 45 million. This outcome underscores our firm's reputation as a leading dispute resolution practice in the region.",
  },
  {
    id: "2",
    slug: "new-corporate-governance-guidelines",
    title: "Navigating the New Corporate Governance Code: What Boards Need to Know",
    excerpt:
      "An in-depth analysis of the revised corporate governance code and its implications for listed companies.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=Article+1",
    category: "Article",
    publishedAt: "2025-03-28",
    content:
      "The Securities and Exchange Commission has released a revised Corporate Governance Code that introduces significant changes for listed companies. Key amendments include mandatory board diversity requirements, enhanced disclosure obligations for related-party transactions, and new rules on executive compensation. Our corporate governance team examines the practical implications of these changes and offers guidance on how boards can prepare for compliance. Companies are advised to review their existing governance frameworks and begin the process of updating their board charters and policies.",
  },
  {
    id: "3",
    slug: "intellectual-property-digital-age",
    title: "Protecting Your Brand in the Digital Age: A Practical Guide",
    excerpt:
      "Key strategies for businesses looking to safeguard their trademarks and digital assets online.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=Article+2",
    category: "Article",
    publishedAt: "2025-03-10",
    content:
      "The digital revolution has created unprecedented opportunities for businesses but also new challenges in protecting intellectual property. From domain name disputes to social media impersonation, brands face a constantly evolving threat landscape. This article explores practical strategies for trademark protection online, including proactive monitoring, UDRP proceedings for domain disputes, and takedown procedures for infringing content on major platforms. We also discuss the emerging legal frameworks for protecting AI-generated content and digital collectibles.",
  },
  {
    id: "4",
    slug: "employment-law-remote-work",
    title: "Remote Work Policies: Legal Considerations for Employers",
    excerpt:
      "Understanding the employment law implications of hybrid and remote working arrangements.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=News+2",
    category: "News",
    publishedAt: "2025-02-20",
    content:
      "As hybrid and remote working arrangements become the norm, employers must ensure their policies comply with existing labour legislation. This briefing examines the key legal considerations including: amendments to employment contracts, health and safety obligations in home offices, data protection requirements for remote access, and tax implications for cross-border remote workers. Our employment law team recommends that all employers review and update their remote work policies to address these evolving requirements.",
  },
  {
    id: "5",
    slug: "did-you-know-land-registration",
    title: "Did You Know? Land Registration Protects Against Adverse Claims",
    excerpt:
      "Registering your land title under the Land Act provides statutory protection against competing claims and encumbrances.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=Insight+1",
    category: "Insight",
    publishedAt: "2025-01-15",
    content:
      "Many landowners in Ghana remain unaware that formal registration of their land title provides far stronger legal protection than relying on customary documentation alone. Under the Land Act, a registered title serves as prima facie evidence of ownership and confers statutory protection against adverse claims, encumbrances, and fraud. Our real estate team strongly advises all landowners to complete the registration process through the Lands Commission to secure their property rights.",
  },
  {
    id: "6",
    slug: "did-you-know-shareholder-rights",
    title: "Did You Know? Minority Shareholders Have Powerful Legal Protections",
    excerpt:
      "The Companies Act provides minority shareholders with significant rights including the ability to petition the court for relief from unfair prejudice.",
    coverImage: "https://placehold.co/800x600/1a2e4a/ffffff?text=Insight+2",
    category: "Insight",
    publishedAt: "2025-01-05",
    content:
      "Minority shareholders often believe they have limited power to influence company decisions or challenge the conduct of majority shareholders. In reality, the Companies Act provides robust protections including the right to petition the court for relief from conduct that is unfairly prejudicial to their interests. Shareholders holding at least 5% of shares may also requisition board meetings and propose resolutions. Our corporate governance team regularly advises minority shareholders on exercising these important rights.",
  },
];
