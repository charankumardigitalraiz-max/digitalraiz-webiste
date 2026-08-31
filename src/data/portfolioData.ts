export interface ProjectItem {
  id: string;
  name: string;
  type: "mobile" | "web";
  category: string;
  tag: string;
  desc: string;
  features: string[];
  tech: string[];
  img: string;
  logo?: string;
  url: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  metrics?: {
    label1?: string;
    val1?: string;
    label2?: string;
    val2?: string;
  };
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // --- MOBILE APPLICATIONS ---
  {
    id: "solo-hearts",
    name: "Solo Hearts",
    type: "mobile",
    category: "Social",
    tag: "iOS & Android App",
    desc: "Premium dating and social connection application featuring intelligent location-based matchmaking, real-time encrypted socket chat, verified profile badges, and interactive discovery reels.",
    features: ["Intelligent Matching Algorithm", "Geofenced Check-ins & Radius Search", "End-to-End Encrypted Chat", "Retina Image Video Profiles"],
    tech: ["Flutter / React Native", "Node.js WebSockets", "Redis Caching", "Firebase Auth", "PostgreSQL"],
    img: "/soloohearts.webp",
    logo: "/project-logs/sherla-properties.webp",
    url: "#",
    metrics: { val1: "50K+", label1: "Active Users", val2: "4.9★", label2: "User Rating" }
  },
  {
    id: "medicompares-app",
    name: "Medicompares Mobile",
    type: "mobile",
    category: "Healthcare",
    tag: "Medical Portal App",
    desc: "Comprehensive healthcare and clinical comparison application. Empowers users to compare medical diagnostic tests, hospital ratings, specialist consult fees, and book instant clinical appointments.",
    features: ["Real-time Test Price Matrix", "Clinic & Doctor Locator", "Encrypted Health Report Locker", "Instant Appointment Booking"],
    tech: ["React Native", "Next.js REST API", "Node.js Microservices", "Tailwind Mobile UI", "Stripe Healthcare API"],
    img: "/medicompares.jpg",
    logo: "/project-logs/MediCompares_Logo.webp",
    url: "#",
    metrics: { val1: "100K+", label1: "Lab Searches", val2: "99.9%", label2: "Uptime SLA" }
  },
  {
    id: "manik-samsthan",
    name: "Shri Manik Prabhu Samsthan",
    type: "mobile",
    category: "Community",
    tag: "Devotional App",
    desc: "Official mobile application for managing organization schedules, temple event calendars, live streaming discourses, daily panchang updates, and community resource distribution.",
    features: ["Live HD Video Streaming", "Offline Panchang Calendar", "Push Notification Broadcasts", "Devotional Asset Library"],
    tech: ["Android Native (Kotlin)", "CDN Video Streamer", "Firebase Cloud Messaging", "SQLite Caching"],
    img: "https://digitalraiz.com/uploads/portfolio/d72a821a275279ea42bc5c58af0f6cc3.png",
    url: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
    metrics: { val1: "25K+", label1: "Downloads", val2: "4.8★", label2: "App Rating" }
  },
  {
    id: "waypartner",
    name: "Waypartner",
    type: "mobile",
    category: "Logistics",
    tag: "Fleet Management App",
    desc: "High-performance logistics coordination and driver tracking app. Features live GPS route optimization, automated trip log generation, digital proof-of-delivery receipts, and fleet diagnostics.",
    features: ["Real-Time GPS Map Navigation", "Automated Driver Dispatch Logs", "Digital Signature Proof-of-Delivery", "Offline Route Caching"],
    tech: ["React Native", "Google Maps SDK", "Node.js Socket.io", "AWS DynamoDB", "Docker"],
    img: "https://digitalraiz.com/uploads/portfolio/3d5cfa303ab218435bcd47544379e4c8.png",
    url: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
    metrics: { val1: "500K+", label1: "Trips Logged", val2: "0.2s", label2: "GPS Latency" }
  },
  {
    id: "jbfms-india",
    name: "JBFMS India",
    type: "mobile",
    category: "Enterprise",
    tag: "Workflow Dashboard App",
    desc: "Corporate field workforce management system engineered for offline task attendance checks, inventory syncs, instant audit logs, and supervisor real-time analytics dashboards.",
    features: ["Field Staff Geofenced Check-Ins", "Offline Data Syncing Engine", "Automated Audit Sheet Generator", "Supervisor Approval Pipeline"],
    tech: ["Flutter Cross-Platform", "GraphQL API", "PostgreSQL Server", "AWS S3 Cloud", "OAuth 2.0"],
    img: "/jgfms.webp",
    url: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
    metrics: { val1: "10K+", label1: "Staff Logins", val2: "99.9%", label2: "Crash-Free" }
  },
  {
    id: "eaglemart",
    name: "Eaglemart",
    type: "mobile",
    category: "E-Commerce",
    tag: "Retail Shopping App",
    desc: "Full-scale consumer shopping mobile application featuring instant checkout gateways, dynamic product catalog filters, automated cart recovery notifications, and live shipment tracking.",
    features: ["Instant One-Tap Checkout", "Integrated Razorpay & Stripe", "Live Shipment Location Tracking", "Personalized Wishlist Engine"],
    tech: ["React Native", "Next.js Backend", "Redis Session Store", "Tailwind Mobile UI", "Stripe API"],
    img: "https://digitalraiz.com/uploads/portfolio/c93157eeeedb156a1ef3fd23227f742d.png",
    url: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
    metrics: { val1: "50K+", label1: "Orders Placed", val2: "4.7★", label2: "Store Rating" }
  },
  {
    id: "helomate",
    name: "Helomate",
    type: "mobile",
    category: "Social",
    tag: "Community Chat App",
    desc: "Interactive social networking client enabling instant location discovery, voice/video calls, dynamic media feed sharing, and real-time socket chat groups.",
    features: ["Low-Latency WebRTC Video Calls", "Geospatial Friend Radar", "Media Stream Carousel", "Custom Emoji Reaction Engine"],
    tech: ["Flutter Mobile", "WebRTC Native Engine", "Node.js Express", "MongoDB Cluster"],
    img: "https://digitalraiz.com/uploads/portfolio/dd0bff5ed7e3698d06753f38a8c985c2.png",
    url: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
    metrics: { val1: "200K+", label1: "Messages/Day", val2: "4.8★", label2: "User Score" }
  },
  {
    id: "gocut-beauty",
    name: "Gocut Beauty App",
    type: "mobile",
    category: "On-Demand",
    tag: "Salon Booking App",
    desc: "On-demand salon and beauty service booking mobile interface. Integrated with interactive map provider discovery, stylist calendar selection, in-app messaging, and automated booking reminders.",
    features: ["Real-Time Stylist Availability", "Interactive Location Map", "In-App Customer Chat", "Automated Booking Reminders"],
    tech: ["React Native", "Google Maps API", "Node.js REST", "Firebase Cloud Messaging"],
    img: "/gocut-beauty.webp",
    url: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
    metrics: { val1: "15K+", label1: "Bookings", val2: "4.9★", label2: "Rating" }
  },
  {
    id: "actin",
    name: "Actin",
    type: "mobile",
    category: "Fitness",
    tag: "Activity Tracker App",
    desc: "Fitness and workflow activity tracking application logging daily steps, caloric targets, session milestones, and historical analytics with dynamic visual charts.",
    features: ["Background Motion Sensor Logging", "Custom Milestone Target Badges", "Detailed Performance Charts", "HealthKit & Google Fit Sync"],
    tech: ["Swift / Kotlin Native", "CoreMotion / Google Fit SDK", "Recharts Data Library", "SQLite Store"],
    img: "https://digitalraiz.com/uploads/portfolio/2694ae7bddec4a4d521ea9e9870638db.png",
    url: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
    metrics: { val1: "30K+", label1: "Active Users", val2: "100%", label2: "Data Accuracy" }
  },

  // --- WEB APPLICATIONS ---
  {
    id: "sherla-properties",
    name: "Sherla Properties",
    type: "web",
    category: "Real Estate",
    tag: "Luxury Property Platform",
    desc: "Premium real estate platform engineered for showcasing luxury listings. Features advanced search filters, fluid listing galleries, interactive agent contact forms, and rapid loading times.",
    features: ["Advanced Multi-Parametric Search", "Glassmorphic Listing Cards", "Interactive Agent Consultation Form", "Ultra-Fast Vercel Edge Hosting"],
    tech: ["Next.js", "Tailwind CSS", "React Dynamic Search", "Framer Motion", "Vercel Deploy"],
    img: "/websites/sherlaproperties.webp",
    logo: "/project-logs/sherla-properties.webp",
    url: "https://sherlaproperties.com",
    metrics: { val1: "0.2s", label1: "Load Speed", val2: "100", label2: "Lighthouse" }
  },
  {
    id: "medicompares-web",
    name: "Medicompares Web",
    type: "web",
    category: "Healthcare",
    tag: "Medical Comparison Portal",
    desc: "Comprehensive healthcare comparison portal. Empowers users to compare medical procedures, clinic ratings, and pricing options with real-time analytics data and high-security medical directory search.",
    features: ["Medical Directory Indexing", "Real-Time Pricing Matrix", "Automated Appointment Queue", "HIPAA Compliant Data Pipeline"],
    tech: ["React.js", "Next.js Static Pages", "Tailwind CSS", "Medical Directory API", "Vercel"],
    img: "/websites/medicompares.webp",
    logo: "/project-logs/MediCompares_Logo.webp",
    url: "#",
    metrics: { val1: "150K+", label1: "Searches", val2: "A+", label2: "SSL Grade" }
  },
  {
    id: "skanda-hospital",
    name: "Skanda Hospital",
    type: "web",
    category: "Healthcare",
    tag: "Hospital & Clinic Portal",
    desc: "Advanced healthcare management and clinic lookup portal for Skanda Life Line Hospital. Features consultant listings, department directories, emergency service scheduling, and patient inquiry modules.",
    features: ["Interactive Doctor Schedules", "Department Directory Lookup", "Emergency Consultation Queue", "Patient Portal Booking"],
    tech: ["React.js", "Next.js SSG", "Tailwind CSS", "Clinic Locator API", "Node.js REST"],
    img: "/websites/skanda-life-line-hospital.webp",
    logo: "/project-logs/skanda.png",
    url: "#",
    metrics: { val1: "50+", label1: "Specialists", val2: "99.9%", label2: "Uptime" }
  },
  {
    id: "livewell-rehab",
    name: "Livewell Rehab",
    type: "web",
    category: "Healthcare",
    tag: "Rehabilitation Portal",
    desc: "Premium digital portal for Livewell Rehabilitation Services. Engineered to coordinate post-operative care, dynamic therapeutic exercise plans, physiotherapist schedules, and patient appointment bookings.",
    features: ["Therapeutic Exercise Module", "Physiotherapist Booking Scheduler", "Patient Care Progress Tracker", "Fluid Mobile-First UI"],
    tech: ["React.js", "Tailwind CSS", "Next.js Pre-rendering", "Booking Scheduler API"],
    img: "/websites/livewell.webp",
    logo: "/project-logs/livewell.png",
    url: "#",
    metrics: { val1: "10K+", label1: "Patients Served", val2: "4.9★", label2: "Rating" }
  },
  {
    id: "sr-associates",
    name: "Sr Associates",
    type: "web",
    category: "Logistics",
    tag: "Import Export Portal",
    desc: "Modern import-export logistics portal. Built with secure client dashboards, real-time shipment status tracking, multilocational currency conversion tools, and global partner communication.",
    features: ["Real-Time Shipment Container Tracking", "Multi-Currency Exchange Calculator", "Client Cargo Document Vault", "Custom House Broker CRM"],
    tech: ["Next.js Routing", "Node.js REST API", "Client Dashboard", "Real-Time Tracking Engine"],
    img: "https://digitalraiz.com/uploads/portfolio/27113090177f02688143b9c4812bcd28.png",
    url: "https://srimportexport.com/",
    metrics: { val1: "1M+", label1: "Cargo Tons", val2: "99.9%", label2: "Track Accuracy" }
  },
  {
    id: "gselfi",
    name: "Gselfi",
    type: "web",
    category: "Creative",
    tag: "Photography Studio",
    desc: "High-end photography studio and interactive portfolio site. Features fluid masonry galleries, dynamic lightboxes, smooth contact integrations, and high-fidelity retina asset rendering.",
    features: ["Fluid Masonry Photo Gallery", "Retina Asset Optimization", "Dynamic Lightbox Showcase", "Instant Lead Inquiry Modal"],
    tech: ["HTML5 / CSS3", "Tailwind CSS", "Framer Motion", "Lazy Image Loading Engine"],
    img: "https://digitalraiz.com/uploads/portfolio/24243c9467fa85c48e8ae6bf1c79b513.png",
    url: "#",
    metrics: { val1: "4K", label1: "Retina Photos", val2: "0.1s", label2: "Gallery Speed" }
  },
  {
    id: "statmindus",
    name: "Statmindus",
    type: "web",
    category: "Enterprise",
    tag: "Industrial Analytics",
    desc: "Industrial analytics platform dashboard formatted for high-performance visual graphing, workflow diagnostics, cross-platform server monitoring, clean chart modules, and custom real-time alerts.",
    features: ["Real-Time Canvas Analytics Charts", "Custom Diagnostic Metric Alerts", "Multi-Server Telemetry Monitor", "High-Speed Database Queries"],
    tech: ["React.js Canvas", "Recharts Data Library", "Server-Side Stats", "Tailwind Dashboard"],
    img: "https://digitalraiz.com/uploads/portfolio/a54a7110257b0969a58c6090e1210aab.png",
    url: "#",
    metrics: { val1: "10M+", label1: "Data Points/Sec", val2: "0.05s", label2: "Chart Render" }
  },
  {
    id: "zoozoo",
    name: "Zoozoo",
    type: "web",
    category: "Entertainment",
    tag: "Media & Streaming",
    desc: "Entertainment media portal built for streaming networks. Optimized for high-throughput video content delivery, automated video scheduling, and community interactive boards.",
    features: ["HLS/DASH Video Streaming Integration", "Automated Channel Loop Scheduler", "Viewer Live Chat & Boards", "Global CDN Distribution"],
    tech: ["CDN Streaming Integration", "Next.js SSR", "Scheduler Script", "Community Boards"],
    img: "https://digitalraiz.com/uploads/portfolio/6f026b11f2a8f09326c65397ed9ee943.jpg",
    url: "http://zoozootv.com",
    metrics: { val1: "100K+", label1: "Daily Streamers", val2: "4K HD", label2: "Video Quality" }
  },
  {
    id: "vauntsquare",
    name: "Vauntsquare",
    type: "web",
    category: "Real Estate",
    tag: "Commercial Directory",
    desc: "Corporate real estate directory and agent listing application. Implements strict security, responsive layout engines, dynamic mapping APIs, and granular listing filters.",
    features: ["MapBox Interactive Geo-Clustering", "Strict Content Security Policies", "Agent Contact Lead Routing", "Commercial & Industrial Filters"],
    tech: ["Next.js Dynamic API", "MapBox API", "Strict CSP Security", "Responsive Columns"],
    img: "https://digitalraiz.com/uploads/portfolio/0dd0b81cc7e349e30c3678a6e87d04a5.png",
    url: "#",
    metrics: { val1: "5K+", label1: "Properties", val2: "100%", label2: "Security Score" }
  },
  {
    id: "thinkstudios",
    name: "Thinkstudios",
    type: "web",
    category: "Creative",
    tag: "Creative Agency Site",
    desc: "Creative agency showcase website featuring immersive scrolling experiences, premium web animations, full-screen project profiles, and inbound lead capture workflows.",
    features: ["Immersive Scroll Experience", "Full-Screen Portfolio Case Decks", "Animated Lead Capture Module", "Framer Motion Interactive Effects"],
    tech: ["Framer Motion", "Tailwind CSS", "SmoothScroll.js", "Lead-Capture Form"],
    img: "https://digitalraiz.com/uploads/portfolio/a0ce7c26c44671ae6d46f899e1434de1.png",
    url: "#",
    metrics: { val1: "300%", label1: "Lead Growth", val2: "60 FPS", label2: "Animation" }
  },
  {
    id: "techpro",
    name: "Techpro",
    type: "web",
    category: "Enterprise",
    tag: "IT Solutions Portal",
    desc: "Full-scale corporate IT services portal showcasing cloud computing solutions, cybersecurity diagnostics tools, custom booking slots, and automated support ticket generation.",
    features: ["IT Service Catalog Index", "Automated Support Ticket System", "Cybersecurity Diagnostics Portal", "Consultant Calendar Scheduler"],
    tech: ["Next.js Static Pages", "Secure Forms Backend", "IT Service Catalog", "Booking Calendar API"],
    img: "https://digitalraiz.com/uploads/portfolio/c443a4a734e299e9d7f21126ce4542e5.png",
    url: "https://www.techprolog.com/",
    metrics: { val1: "99.99%", label1: "Server SLA", val2: "24/7", label2: "Support Sync" }
  },
  {
    id: "teccteam",
    name: "Teccteam",
    type: "web",
    category: "Enterprise",
    tag: "Workflow Dashboard",
    desc: "Enterprise workflow management and team collaboration dashboard. Optimizes daily reporting systems, internal communications, task sheets, and resource allocation schedules.",
    features: ["Kanban & Gantt Task Boards", "Granular Group Security Access", "Daily Production Reporting System", "Automated Resource Allocator"],
    tech: ["Node.js Backend", "React Dashboard UI", "Task Sheets CRM", "Reporting System APIs"],
    img: "https://digitalraiz.com/uploads/portfolio/1ff3faf675b73d51d9039e6208314bbb.png",
    url: "#",
    metrics: { val1: "50K+", label1: "Tasks Completed", val2: "0.2s", label2: "API Response" }
  },
  {
    id: "svmart",
    name: "Svmart",
    type: "web",
    category: "E-Commerce",
    tag: "Retail E-Commerce",
    desc: "Modern e-commerce platform built for retail scaling. Features fast product catalogs, secure checkout gateways, automated cart recovery, and integrated shipping API hooks.",
    features: ["Sub-Second Product Filtering", "Stripe & Razorpay Payment Engine", "Automated Cart Recovery Hooks", "Live Logistics Shipping Sync"],
    tech: ["Next.js SSG / SSR", "Stripe Checkout API", "Product Catalog CRM", "Cart System Hooks"],
    img: "https://digitalraiz.com/uploads/portfolio/636cb38b4591f85743372a229c247ba7.jpg",
    url: "https://www.svmart.in/",
    metrics: { val1: "100K+", label1: "SKU Catalog", val2: "99.9%", label2: "Uptime" }
  },
  {
    id: "smv",
    name: "Smv Chemicals",
    type: "web",
    category: "Enterprise",
    tag: "Industrial Chemical",
    desc: "Industrial chemical products manufacturing portal built with secure safety datasheets (SDS) downloads, bulk product inquiry systems, and compliance documentation tracking.",
    features: ["Compliance PDF Datasheet Vault", "Bulk Chemical Inquiry Portal", "Safety Standard Directory", "Client Support Ticket System"],
    tech: ["HTML5 / CSS3 Bevels", "PDF File Handler", "Bulk Inquiry Module", "Client Support System"],
    img: "https://digitalraiz.com/uploads/portfolio/547fead930248463e1a33474113a5313.png",
    url: "http://www.smvchemicals.com/",
    metrics: { val1: "100%", label1: "SDS Compliant", val2: "10K+", label2: "Inquiries" }
  },
  {
    id: "resort-web",
    name: "Luxury Resort & Spa",
    type: "web",
    category: "Hospitality",
    tag: "Booking Web App",
    desc: "Luxury hospitality and room booking web application. Integrated with interactive room selection galleries, availability calendars, concierge guides, and local tour booking modules.",
    features: ["Interactive Room 360 Gallery", "Real-Time Room Availability Calendar", "Integrated Stripe Concierge Payment", "Local Tour Reservation Module"],
    tech: ["Next.js SSR Booking", "Calendar Selection API", "Interactive Room Deck", "Stripe Payment"],
    img: "https://digitalraiz.com/uploads/portfolio/205998a051f16c3bc76eb036c5a065fb.png",
    url: "#",
    metrics: { val1: "4.9★", label1: "Guest Score", val2: "85%", label2: "Direct Bookings" }
  },
  {
    id: "phade",
    name: "Phade SaaS",
    type: "web",
    category: "Enterprise",
    tag: "SaaS Analytics",
    desc: "High-performance SaaS platform analytics dashboard. Engineered for multi-tenant data rendering, subscription billing sheets, customizable layout tiles, and key metric tracking.",
    features: ["Multi-Tenant Role Authorization", "Subscription Billing Sheets API", "Metric Tile Customizer", "Developer Documentation Hub"],
    tech: ["React Charting Canvas", "Multi-Tenant Access", "Billing Sheets API", "Metric Tracking Dashboard"],
    img: "https://digitalraiz.com/uploads/portfolio/e0d824fa8fc388674810cd01ac1a7854.jpg",
    url: "#",
    metrics: { val1: "99.99%", label1: "SLA Uptime", val2: "500+", label2: "Tenants" }
  }
];
