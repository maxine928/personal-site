export interface Article {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  slug: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: "The Operator's Advantage: Why Experience Beats Ideas",
    description:
      "Everyone has ideas. The people who win are the ones who've actually run something. Here's why operational experience is the most underrated edge in business.",
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    slug: 'operators-advantage',
  },
  {
    id: '2',
    title: 'Building Enduring Businesses in a Short-Term World',
    description:
      "The market rewards quarterly thinking. The best businesses are built on decade-long horizons. How to stay focused on what actually matters.",
    date: 'Feb 3, 2026',
    readTime: '8 min read',
    slug: 'building-enduring-businesses',
  },
  {
    id: '3',
    title: 'Unit Economics: The Foundation of Sustainable Growth',
    description:
      "Before you scale, you need to understand what you're scaling. A deep dive into the unit economics that separate durable businesses from growth stories.",
    date: 'Jan 27, 2026',
    readTime: '10 min read',
    slug: 'unit-economics',
  },
  {
    id: '4',
    title: 'My Investment Thesis: Why I Bet on Boring Businesses',
    description:
      "SaaS multiples, moonshots, and venture darlings dominate the conversation. Meanwhile, the boring businesses generating real cash flow keep compounding quietly.",
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    slug: 'boring-businesses-thesis',
  },
  {
    id: '5',
    title: 'The Real Cost of Growing Too Fast',
    description:
      "Growth is addictive. But every startup that's blown up has the same story: they scaled before the foundation was ready. The hidden costs of premature scaling.",
    date: 'Jan 13, 2026',
    readTime: '9 min read',
    slug: 'cost-of-growing-fast',
  },
  {
    id: '6',
    title: 'Conviction vs. Consensus: When to Ignore the Crowd',
    description:
      "The best investments and the best business decisions are almost always contrarian. How I think about when to trust your conviction over the consensus.",
    date: 'Jan 6, 2026',
    readTime: '6 min read',
    slug: 'conviction-vs-consensus',
  },
  {
    id: '7',
    title: 'Building Systems That Scale Without You',
    description:
      "The goal of every operator should be to make themselves replaceable. Not because you want to leave — because that's what a real business looks like.",
    date: 'Dec 30, 2025',
    readTime: '11 min read',
    slug: 'systems-that-scale',
  },
  {
    id: '8',
    title: 'Founder-Market Fit: The Most Underrated Advantage',
    description:
      "Product-market fit gets all the attention. But the real edge comes before that — whether the founder is the right person to build in this specific market.",
    date: 'Dec 23, 2025',
    readTime: '7 min read',
    slug: 'founder-market-fit',
  },
]
