export const site = {
  name: "Julio Zeledon Vargas",
  fullName: "Julio Zeledon Vargas",
  role: "Senior Full Stack Software Engineer",
  tagline:
    "10+ years building scalable web applications, SaaS platforms, and cloud-native systems across fintech, healthcare, e-commerce, and AI-driven products.",
  email: "crbmw135in55@gmail.com",
  phone: "+506 8890-9673",
  location: "Costa Rica · Remote",
  image: {
    src: "/julio-zeledon.png",
    alt: "Portrait of Julio Zeledon Vargas",
    width: 400,
    height: 400,
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "Senior Full Stack Software Engineer with 10+ years of experience building scalable web applications, SaaS platforms, enterprise systems, and cloud-native solutions across fintech, healthcare, e-commerce, and AI-driven products.",
    "I work across the stack with React, Next.js, TypeScript, Node.js, Python, and cloud platforms like AWS, Azure, and GCP. I collaborate closely with product, design, and business stakeholders to ship reliable software, mentor engineers, and raise engineering quality throughout the lifecycle.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Very Good Security",
    description:
      "Payment tokenization platform that isolates sensitive card data, reduces PCI scope, and powers secure agentic commerce for merchants and processors.",
    tags: ["Payments", "Tokenization", "Security"],
    liveUrl: "https://www.verygoodsecurity.com/",
  },
  {
    title: "Lightedge",
    description:
      "Hybrid infrastructure company combining colocation, private cloud, and public cloud with managed security and compliance for enterprise workloads.",
    tags: ["Hybrid Cloud", "Infrastructure", "Compliance"],
    liveUrl: "https://lightedge.com/",
  },
  {
    title: "DaVita Patient IAM",
    description:
      "Patient identity and access portal for DaVita, giving kidney care patients a secure way to sign in and manage their healthcare account.",
    tags: ["Healthcare", "Identity", "Patient Portal"],
    liveUrl: "https://iam.patient.davita.com/",
  },
  {
    title: "Medicare Helpline",
    description:
      "Medicare plan comparison site powered by SelectQuote, helping people review Medicare Advantage and related coverage options with licensed agents.",
    tags: ["Medicare", "Insurance", "Consumer"],
    liveUrl: "https://medicarehelpline.com/",
  },
  {
    title: "SelectQuote",
    description:
      "Insurance marketplace that shops life, Medicare, home, and auto coverage across carriers so customers can compare quotes and enroll.",
    tags: ["Insurance", "Quotes", "Marketplace"],
    liveUrl: "https://selectquote.com/",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "SelectQuote via Ignite Visibility",
    role: "Senior Full Stack / Tech Lead",
    period: "2025 — Present",
    location: "Remote, US",
    highlights: [
      "Led architecture and development of scalable full-stack insurance platforms with React, Next.js, TypeScript, Node.js, and PostgreSQL for high-traffic enrollment and policy workflows.",
      "Designed RESTful APIs and backend services with Node.js and Express, integrating insurance, payment, analytics, and CRM systems.",
      "Built SEO-optimized frontend applications with React, Next.js, and Contentful to support rapid publishing and customer acquisition.",
      "Shipped cloud-native solutions on AWS (ECS, S3, CloudFront) with Docker, CI/CD, and automated deployments.",
    ],
  },
  {
    company: "Tech9 — LightEdge",
    role: "Senior Full Stack Engineer",
    period: "2024 — 2025",
    location: "Remote, Utah",
    highlights: [
      "Modernized an enterprise customer portal by migrating legacy applications to Next.js, TypeScript, and Django.",
      "Designed reusable React/Next.js components and shared UI patterns for customer-facing dashboards.",
      "Built and optimized Django REST Framework APIs with efficient data access and authentication workflows.",
      "Introduced Jest, React Testing Library, Pytest, and TDD practices that reduced production regressions.",
    ],
  },
  {
    company: "Gorilla Logic",
    role: "Senior Software Engineer",
    period: "2020 — 2024",
    location: "Remote, Costa Rica",
    highlights: [
      "Led frontend development for a telemedicine platform with React and Redux in a regulated healthcare environment.",
      "Integrated Vonage Video APIs and backend services for real-time patient-physician consultations.",
      "Delivered full-stack dashboard features for Very Good Security using React and Node.js.",
      "Rolled out automated testing with TestCafe and supported DevOps with Jenkins, CircleCI, Docker, Datadog, and Sentry.",
    ],
  },
  {
    company: "Zarmada",
    role: "Full Stack Engineer",
    period: "2018 — 2021",
    location: "Remote, US",
    highlights: [
      "Built interactive enterprise and customer-facing apps with Vue.js and Laravel.",
      "Developed data-driven interfaces with Vue Router and Vuex/Pinia for visualization and workflow automation.",
      "Implemented RESTful APIs with authentication, RBAC, third-party integrations, and database-driven workflows.",
      "Improved reliability with Laravel queues, caching, automated testing, and CI/CD.",
    ],
  },
  {
    company: "Prodigious",
    role: "Senior Frontend Developer",
    period: "2016 — 2018",
    location: "Costa Rica",
    highlights: [
      "Built responsive marketing sites and campaign landing pages for multinational brands with a focus on visual quality, accessibility, and performance.",
      "Created interactive, motion-heavy experiences with JavaScript and GSAP.",
      "Developed internal AngularJS tools to support project estimation and delivery workflows.",
    ],
  },
  {
    company: "Ciris Informatic Solutions",
    role: "Web Developer / Full-Stack Developer",
    period: "2015 — 2016",
    location: "Costa Rica",
    highlights: [
      "Built customer-facing web applications with AngularJS and Ruby on Rails for booking, CMS, and operations.",
      "Delivered a reservation platform for Costa Rica Monkey Tours with AngularJS, Rails, and WordPress integrations.",
      "Designed RESTful Rails APIs and a media monitoring platform using AngularJS, MongoDB, and PostgreSQL.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Angular",
      "Vue.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "Go",
      "Ruby on Rails",
      "Laravel",
    ],
  },
  {
    category: "Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Supabase",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    category: "AI",
    items: ["OpenAI", "LangChain", "LangGraph", "RAG", "Vector databases"],
  },
  {
    category: "Languages",
    items: ["Spanish (Native)", "English (Fluent)"],
  },
];

export const education = {
  school: "Universidad de Costa Rica",
  degree: "Computer Science",
  period: "2008 — 2012",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/julzel",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julio-zeled%C3%B3n-069659a0",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
  },
] as const;
