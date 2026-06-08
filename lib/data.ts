export type IconName =
  | "Code2"
  | "Globe"
  | "Palette"
  | "Megaphone"
  | "Share2"
  | "Search"
  | "PenTool"
  | "Video"
  | "ShoppingCart"
  | "Zap"
  | "Cloud"
  | "Headphones";

export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  iconName: IconName;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface PortfolioProject {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export const services: Service[] = [
  {
    title: "Software Development",
    slug: "software-development",
    description:
      "Custom software solutions engineered to solve complex business challenges with scalable, maintainable architecture.",
    longDescription:
      "We design and build enterprise-grade software tailored to your specific workflows. From requirement analysis to deployment and maintenance, our team delivers robust solutions using modern tech stacks. Whether you need an internal tool, a customer-facing platform, or a complex data pipeline, we architect systems that grow with your business.",
    iconName: "Code2",
    features: [
      "Custom enterprise applications",
      "API development & integration",
      "Legacy system modernization",
      "Database design & optimization",
      "Cloud-native architecture",
      "Agile development methodology",
    ],
  },
  {
    title: "Web & App Development",
    slug: "web-app-development",
    description:
      "Responsive websites and native mobile apps that deliver seamless experiences across every device and platform.",
    longDescription:
      "From progressive web apps to native iOS and Android applications, we build digital products that users love. Our development process emphasizes performance, accessibility, and intuitive design. We use modern frameworks like React, Next.js, Flutter, and Swift to deliver pixel-perfect results.",
    iconName: "Globe",
    features: [
      "Progressive Web Apps (PWA)",
      "Native iOS & Android apps",
      "Cross-platform development",
      "Performance optimization",
      "App Store deployment",
      "Ongoing maintenance & updates",
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Human-centered design that transforms complex workflows into intuitive, visually compelling interfaces.",
    longDescription:
      "Great design is invisible — it guides users effortlessly toward their goals. Our design process begins with deep user research, continues through wireframing and prototyping, and culminates in polished, production-ready interfaces. We design for clarity, delight, and measurable business outcomes.",
    iconName: "Palette",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design system creation",
      "Usability testing",
      "Interaction design",
      "Accessibility compliance",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Data-driven marketing strategies that amplify your reach, engage your audience, and drive measurable growth.",
    longDescription:
      "We craft comprehensive digital marketing strategies that connect your brand with the right audience at the right time. From PPC campaigns to content marketing, email automation, and analytics, every decision is backed by data and optimized for ROI.",
    iconName: "Megaphone",
    features: [
      "PPC & Google Ads management",
      "Content marketing strategy",
      "Email marketing automation",
      "Analytics & reporting",
      "Conversion rate optimization",
      "Marketing funnel design",
    ],
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Strategic social presence that builds community, drives engagement, and turns followers into customers.",
    longDescription:
      "Social media is where brands come alive. We develop tailored strategies for each platform, create scroll-stopping content, manage community interactions, and track performance metrics. From organic growth to paid campaigns, we handle the full spectrum of social media excellence.",
    iconName: "Share2",
    features: [
      "Platform strategy & planning",
      "Content creation & curation",
      "Community management",
      "Paid social campaigns",
      "Influencer partnerships",
      "Performance analytics",
    ],
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    description:
      "Technical and content SEO strategies that improve visibility, drive organic traffic, and build domain authority.",
    longDescription:
      "Search visibility is the foundation of sustainable digital growth. Our SEO services combine technical audits, on-page optimization, content strategy, and authoritative link building to improve your rankings. We focus on long-term, white-hat strategies that deliver compounding results.",
    iconName: "Search",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Content strategy & creation",
      "Link building campaigns",
      "Local SEO optimization",
      "Monthly reporting & insights",
    ],
  },
  {
    title: "Branding & Creative Design",
    slug: "branding-creative-design",
    description:
      "Distinctive brand identities that capture your essence, differentiate you from competitors, and resonate with your audience.",
    longDescription:
      "Your brand is more than a logo — it's the promise you make and the experience you deliver. We create cohesive brand identities that tell your story compellingly across every touchpoint. From visual identity to brand voice, we build brands that people remember and trust.",
    iconName: "PenTool",
    features: [
      "Brand strategy & positioning",
      "Logo & visual identity design",
      "Brand guidelines & style guides",
      "Marketing collateral design",
      "Packaging design",
      "Brand refresh & evolution",
    ],
  },
  {
    title: "Video Production & Editing",
    slug: "video-production",
    description:
      "Cinematic video content that tells your story, engages viewers, and converts across platforms.",
    longDescription:
      "Video is the most powerful storytelling medium. From concept to final cut, we produce professional video content that captures attention and drives action. Whether it's brand films, product demos, social media reels, or corporate videos, we bring your vision to life with cinematic quality.",
    iconName: "Video",
    features: [
      "Brand & corporate videos",
      "Product demonstrations",
      "Social media content",
      "Motion graphics & animation",
      "Post-production editing",
      "Script writing & storyboarding",
    ],
  },
  {
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description:
      "End-to-end e-commerce platforms that deliver frictionless shopping experiences and maximize conversions.",
    longDescription:
      "We build e-commerce experiences that sell. From custom Shopify and WooCommerce stores to fully bespoke platforms, we handle everything: product catalog architecture, payment integration, inventory management, and conversion optimization. Your online store, built to scale.",
    iconName: "ShoppingCart",
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory management systems",
      "Shopping cart optimization",
      "Multi-channel selling",
      "Analytics & conversion tracking",
    ],
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    description:
      "Intelligent automation that eliminates repetitive tasks, reduces errors, and frees your team for high-value work.",
    longDescription:
      "Manual processes drain productivity and introduce errors. We identify automation opportunities across your operations and implement intelligent workflows using modern tools and custom integrations. From CRM automation to document processing, we help you work smarter.",
    iconName: "Zap",
    features: [
      "Workflow automation design",
      "CRM & ERP integration",
      "Document processing automation",
      "Custom API integrations",
      "Chatbot development",
      "Process optimization consulting",
    ],
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    description:
      "Scalable SaaS platforms built for growth — from MVP to enterprise, with multi-tenancy and subscription management.",
    longDescription:
      "Bringing a SaaS product to market requires more than code. We partner with founders and product teams to architect, build, and scale cloud-based software products. From MVP validation to enterprise features like multi-tenancy, billing, and analytics, we build SaaS that scales.",
    iconName: "Cloud",
    features: [
      "MVP development & validation",
      "Multi-tenant architecture",
      "Subscription & billing systems",
      "User authentication & roles",
      "Analytics dashboards",
      "Scalable cloud infrastructure",
    ],
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    description:
      "Strategic technology consulting that aligns your IT infrastructure with business objectives for maximum impact.",
    longDescription:
      "Technology decisions shape your competitive advantage. Our consulting team helps you navigate the technology landscape, make informed decisions, and implement solutions that drive business outcomes. From infrastructure planning to digital transformation strategy, we're your trusted technology advisors.",
    iconName: "Headphones",
    features: [
      "Technology stack assessment",
      "Digital transformation strategy",
      "Infrastructure planning",
      "Security & compliance audits",
      "Vendor evaluation & selection",
      "Team training & mentorship",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Salehin Baig",
    role: "CEO",
    company: "BaigDentPro",
    content:
      "OMIX Solutions built our dental clinic management software from scratch. The attention to detail was remarkable — they understood our workflow deeply and delivered a system that transformed how we operate. Our clinic efficiency improved by 40% within the first month.",
    avatar: "SB",
  },
  {
    name: "Sarah Rahman",
    role: "Marketing Director",
    company: "NovaTech BD",
    content:
      "Their digital marketing team completely revamped our online presence. Within 6 months, our organic traffic tripled and our lead generation increased by 280%. They don't just execute — they think strategically about every campaign.",
    avatar: "SR",
  },
  {
    name: "Arif Hossain",
    role: "Co-Founder",
    company: "ShopLocal",
    content:
      "We needed an e-commerce platform that could handle thousands of vendors and their custom requirements. OMIX delivered a solution that not only met our specs but exceeded our expectations. The platform is blazing fast and our vendors love using it.",
    avatar: "AH",
  },
  {
    name: "Nadia Chowdhury",
    role: "Operations Manager",
    company: "GreenField Logistics",
    content:
      "The business automation solutions OMIX implemented saved us over 120 hours per month in manual data entry alone. Their team was responsive, professional, and genuinely invested in understanding our pain points before proposing solutions.",
    avatar: "NC",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "BaigDentPro",
    slug: "baigdentpro",
    category: "Software Development",
    description:
      "Comprehensive dental clinic management SaaS platform with patient records, appointment scheduling, billing, and treatment planning modules.",
    image: "/portfolio/baigdentpro.svg",
    tags: ["SaaS", "Healthcare", "Web App"],
    url: "https://baigdentpro.com",
  },
  {
    title: "ShopLocal Marketplace",
    slug: "shoplocal",
    category: "E-commerce",
    description:
      "Multi-vendor e-commerce platform connecting local businesses with customers, featuring real-time inventory and delivery tracking.",
    image: "/portfolio/shoplocal.jpg",
    tags: ["E-commerce", "Marketplace", "Mobile"],
  },
  {
    title: "GreenField Dashboard",
    slug: "greenfield",
    category: "Business Automation",
    description:
      "Real-time logistics operations dashboard with route optimization, fleet tracking, and automated dispatch management.",
    image: "/portfolio/greenfield.jpg",
    tags: ["Dashboard", "Automation", "Analytics"],
  },
  {
    title: "NovaTech Brand Identity",
    slug: "novatech",
    category: "Branding",
    description:
      "Complete brand identity overhaul including logo design, brand guidelines, marketing collateral, and digital presence strategy.",
    image: "/portfolio/novatech.jpg",
    tags: ["Branding", "Design", "Strategy"],
  },
  {
    title: "MediCare Plus App",
    slug: "medicare-plus",
    category: "App Development",
    description:
      "Telemedicine mobile application with video consultations, prescription management, and health record integration.",
    image: "/portfolio/medicare.jpg",
    tags: ["Mobile App", "Healthcare", "React Native"],
  },
  {
    title: "EduConnect LMS",
    slug: "educonnect",
    category: "SaaS Development",
    description:
      "Learning management system with live classes, course creation tools, progress tracking, and certification management.",
    image: "/portfolio/educonnect.jpg",
    tags: ["SaaS", "Education", "Web App"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Why Custom Software Beats Off-the-Shelf Solutions in 2025",
    slug: "custom-software-vs-off-the-shelf",
    excerpt:
      "Discover why businesses are increasingly choosing custom-built software over generic solutions, and how tailored development delivers measurable ROI.",
    date: "2025-05-28",
    readTime: "6 min read",
    category: "Software Development",
    image: "/blog/custom-software.jpg",
  },
  {
    title: "The Complete Guide to SEO for Bangladeshi Businesses",
    slug: "seo-guide-bangladesh",
    excerpt:
      "A comprehensive walkthrough of SEO strategies tailored for the Bangladeshi market, including local SEO tactics and Bengali content optimization.",
    date: "2025-05-15",
    readTime: "8 min read",
    category: "SEO",
    image: "/blog/seo-guide.jpg",
  },
  {
    title: "How Business Automation Can Save You 100+ Hours Per Month",
    slug: "business-automation-saves-time",
    excerpt:
      "Real case studies of how automation transformed operations for small and medium businesses, with practical implementation strategies.",
    date: "2025-04-22",
    readTime: "5 min read",
    category: "Automation",
    image: "/blog/automation.jpg",
  },
  {
    title: "UI/UX Design Trends That Will Define 2026",
    slug: "ui-ux-trends-2026",
    excerpt:
      "From spatial interfaces to AI-driven personalization, explore the design trends that will shape digital experiences in the coming year.",
    date: "2025-04-10",
    readTime: "7 min read",
    category: "Design",
    image: "/blog/design-trends.jpg",
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "35+", label: "Happy Clients" },
  { value: "12", label: "Services Offered" },
  { value: "3+", label: "Years of Experience" },
];

export const siteConfig = {
  name: "OMIX Solutions",
  tagline: "Elevating Brands in the Digital World",
  description:
    "OMIX Solutions is a full-service digital agency providing software development, web & app development, UI/UX design, digital marketing, and IT consulting services.",
  contact: {
    phone: "+880 1601-677122",
    email: "omixsolutions@gmail.com",
    address: "Dhanmondi, Dhaka, Bangladesh",
  },
  social: {
    facebook: "https://www.facebook.com/omixsolutionsbd/",
    linkedin: "https://www.linkedin.com/company/omix-solutions/",
    instagram: "https://www.instagram.com/omixsolutions/",
    twitter: "https://x.com/omixsolutions",
  },
};
