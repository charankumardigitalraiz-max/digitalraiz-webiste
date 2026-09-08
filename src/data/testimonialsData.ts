export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  company: string;
  app: string;
  avatarBg: string;
  initials: string;
  rating: number;
  review: string;
  tag: string;
  url?: string;
  metric?: string;
}

// 📱 Mobile Application Testimonials
export const mobileAppReviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Rajesh Varma",
    role: "Founder & CEO",
    company: "Solo Hearts",
    app: "Solo Hearts App",
    avatarBg: "from-pink-500 to-rose-600",
    initials: "RV",
    rating: 5,
    review: "Digital Raiz transformed our mobile app concept into a high-performance iOS & Android product. The fluid UI and sub-second chat response exceeded our expectations!",
    tag: "Social App"
  },
  {
    id: 2,
    name: "Dr. Ananya Reddy",
    role: "Co-Founder",
    company: "Medicompares",
    app: "Medicompares Platform",
    avatarBg: "from-violet-600 to-indigo-600",
    initials: "AR",
    rating: 5,
    review: "Extremely professional mobile engineering team in Hyderabad. They delivered our clinical health portal on schedule with zero critical bugs and flawless API integrations.",
    tag: "HealthTech"
  },
  {
    id: 3,
    name: "Vikram Sharma",
    role: "Operations Director",
    company: "JBFMS India",
    app: "JBFMS Mobile Suite",
    avatarBg: "from-emerald-500 to-teal-700",
    initials: "VS",
    rating: 5,
    review: "Their attention to offline data caching and battery performance made our field management app robust and reliable for thousands of daily enterprise users.",
    tag: "Enterprise"
  },
  {
    id: 4,
    name: "Siddharth Rao",
    role: "Product Lead",
    company: "Gocut Beauty",
    app: "Gocut Booking App",
    avatarBg: "from-amber-500 to-orange-600",
    initials: "SR",
    rating: 5,
    review: "From Figma prototypes to Play Store submission, the team executed every phase flawlessly. Our user retention jumped by 40% after launch!",
    tag: "On-Demand"
  },
  {
    id: 5,
    name: "Meera Kulkarni",
    role: "VP of Product",
    company: "Sherla Properties",
    app: "Sherla Properties App",
    avatarBg: "from-indigo-500 to-purple-600",
    initials: "MK",
    rating: 5,
    review: "The custom Flutter real estate app built by Digital Raiz is blazing fast with interactive maps, smooth search filters, and seamless lead management.",
    tag: "Real Estate"
  }
];

// 🌐 Web Development Testimonials (Browser & Studio Blueprint Spec)
export const webDevReviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Karthik Subramanian",
    role: "VP of Digital Strategy",
    company: "Apex Global",
    app: "Apex Enterprise Portal",
    url: "apexglobal.com",
    metric: "0.2s Load • +210% SEO",
    avatarBg: "from-blue-600 to-indigo-600",
    initials: "KS",
    rating: 5,
    review: "Digital Raiz re-architected our corporate website using Next.js. Page load time dropped to 0.2s and our organic search conversions doubled within 60 days!",
    tag: "Web Portal"
  },
  {
    id: 2,
    name: "Pooja Hegde",
    role: "Marketing Director",
    company: "Luxe Retail India",
    app: "Luxe E-Commerce Store",
    url: "luxeretail.in",
    metric: "100/100 Lighthouse Score",
    avatarBg: "from-purple-600 to-pink-600",
    initials: "PH",
    rating: 5,
    review: "Their web engineering team delivered a high-converting e-commerce portal with flawless payment gateway integrations and lightning-fast product catalogs.",
    tag: "E-Commerce"
  },
  {
    id: 3,
    name: "Suresh Nair",
    role: "Chief Technology Officer",
    company: "CloudFlex SaaS",
    app: "CloudFlex Admin Suite",
    url: "cloudflex.io",
    metric: "99.99% Uptime SLA",
    avatarBg: "from-teal-500 to-emerald-600",
    initials: "SN",
    rating: 5,
    review: "Outstanding custom web app development. The role-based dashboard and API integrations handle millions of daily records effortlessly.",
    tag: "SaaS Platform"
  },
  {
    id: 4,
    name: "Rohan Mehta",
    role: "Founder & CEO",
    company: "FinStack Technologies",
    app: "FinStack Financial Web App",
    url: "finstack.tech",
    metric: "Sub-Second API Speed",
    avatarBg: "from-amber-500 to-rose-600",
    initials: "RM",
    rating: 5,
    review: "From UI design wireframes to production deployment, Digital Raiz delivered an institutional-grade web app with unmatched speed and security.",
    tag: "FinTech Portal"
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "Head of Digital Product",
    company: "OmniPulse Agency",
    app: "OmniPulse Global Website",
    url: "omnipulse.agency",
    metric: "+185% Lead Conversion",
    avatarBg: "from-indigo-600 to-cyan-600",
    initials: "ER",
    rating: 5,
    review: "The responsive web architecture built by Digital Raiz looks breathtaking on any device. Our client inquiries tripled right after launch!",
    tag: "Corporate Web"
  }
];

// Default Export Alias for Mobile App & General Testimonials
export const reviewsData = mobileAppReviewsData;
