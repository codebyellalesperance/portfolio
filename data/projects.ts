export type Project = {
  title: string
  subtitle?: string
  tag?: string
  href: string
  thumb: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Pantry App",
    subtitle: "A React Native app that makes household inventory management frictionless. Built with three-tier search architecture, fuzzy matching, and real-time sync. Never wonder what's in your fridge again.",
    tag: "React Native | Expo | Supabase | TypeScript | 2025",
    href: "https://substack.com/home/post/p-178148833",
    thumb: "/images/fridge2.png",
    featured: true,
  },
  {
    title: "Whim",
    subtitle: "A spontaneous hangout app that makes last-minute plans frictionless. Built with React Native + Expo + NativeWind. No group chat negotiations—just tap to join what friends are doing right now.",
    tag: "React Native | Expo | NativeWind | TypeScript | 2025",
    href: "https://substack.com/home/post/p-176837256",
    thumb: "/images/whim.png",
    featured: true,
  },
  {
    title: "Second Brain",
    subtitle: "A local-first 'Second Brain' that lets AI remember you without cloud APIs. Built with Node.js, SQLite, local embeddings, and Claude's Model Context Protocol.",
    tag: "Node.js | TypeScript | SQLite | MCP | Embeddings | 2025 \n",
    href: "https://substack.com/home/post/p-175670954",
    thumb: "/images/mcp.jpg",
    featured: true,
  },
  {
    title: "Axess Tennis",
    subtitle: "A budget-based fantasy tennis platform with ATP/WTA scoring, weekly lineups, and live stats. Built for tennis fans who want real strategy and season-long team building.",
    tag: "Next.js | TypeScript | Supabase | Tailwind CSS | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/tennis.jpg",
    featured: true,
  },
  {
    title: "Inside Scoop",
    subtitle: "An AI-powered fashion trend tracker that blends user wardrobes with global trend data and influencer signals. Save items to your closet and get personalized recommendations.",
    tag: "React | Python | Supabase | AI/ML | Fashion Tech | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/inside-scoop.jpg",
    featured: true,
  },
  {
    title: "JumboCode Platform",
    subtitle: "Led operations for a 170+ student nonprofit dev organization while product managing a full-stack volunteer scheduling platform. Improved registration efficiency by 30% and client satisfaction scores.",
    tag: "Product Management | React | Node.js | MongoDB | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/jumbocode.png",
    featured: true,
  },
  {
    title: "Lacrosse Analytics",
    subtitle: "Analyzed NCAA D3 women's lacrosse stats to uncover what most strongly correlates with wins. Applied KMeans clustering to identify team archetypes and built interactive Tableau dashboards for coaches and players.",
    tag: "Python | Tableau | Data Analysis | KMeans | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/tuftswomenslacrosse.webp",
  },
  {
    title: "NFL Timing Study",
    subtitle: "Built a scraping pipeline and Bayesian model to test whether game timing (night vs. day) measurably shifts the Patriots' win probability after controlling for confounders.",
    tag: "Python | PyMC | Bayesian Statistics | Web Scraping | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/patriots.png",
  },
  {
    title: "Web Scraper Pipeline",
    subtitle: "Built a resilient data extraction pipeline using Selenium and Python for sports analytics. Features schema validation, deduplication, and GitHub Actions automation for reliable data collection from rate-limited sites.",
    tag: "Python | Selenium | Data Engineering | Automation | 2024",
    href: "https://codebyel.com/",
    thumb: "/images/roster.jpg",
  },
]
      