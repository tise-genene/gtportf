export const about = {
  name: "Genene Tise",
  role: "Full-Stack Software Engineer",
  about:
    "I'm a full-stack engineer and founder based in Addis Ababa, Ethiopia. I founded and built Eagle Pathway, a scholarship guidance and tutor matching platform live on web and Google Play with 1,000+ users and 1,000+ installs, grown with $0 paid marketing. I also ship full-stack features at Commercial Bank of Ethiopia (40M+ customers), and have worked as an AI Trainer evaluating LLM-generated code for AfterQuery. Backend-leaning, product-minded, and focused on shipping things that actually work.",
  email: "tisegenene@gmail.com",
  phone: "+251932508910",
  cv: "/docs/cv.pdf",
};

export const seo = {
  title: `${about.name} | Full-Stack Software Engineer`,
  description:
    "Full-stack software engineer from Addis Ababa, Ethiopia. Building scalable APIs, web apps, and mobile products for banks, SaaS startups, and edtech platforms.",
  keywords:
    "Genene Tise, Full-Stack Engineer, Next.js, Laravel, Node.js, React, PostgreSQL, Supabase, Ethiopia, software developer, remote developer",
};

export const forms = {
  formspreeUrl: "https://formspree.io/f/mojqzjrv",
};

export const skills = [
  { name: "Laravel", alt: "laravel", icon: "/laravel.svg" },
  { name: "Node.js", alt: "nodejs", icon: "/nodejs.svg" },
  { name: "Next.js", alt: "nextjs logo", icon: "/nextjs.svg" },
  { name: "React", alt: "react logo", icon: "/react.svg" },
  { name: "TypeScript", alt: "typescript", icon: "/typescript.svg" },
  { name: "PostgreSQL", alt: "postgresql", icon: "/postgresql.svg" },
  { name: "Supabase", alt: "supabase", icon: "/supabase.svg" },
  { name: "Tailwind CSS", alt: "tailwind", icon: "/tailwind.svg" },
  { name: "React Native", alt: "react native", icon: "/react.svg" },
  { name: "Flutter", alt: "flutter", icon: "/flutter.svg" },
  { name: "Python", alt: "python", icon: "/python.svg" },
  { name: "Docker", alt: "docker", icon: "/docker.svg" },
];

export const socials = {
  github: "https://github.com/tise-genene",
  linkedin: "https://www.linkedin.com/in/genene-tise-253037234/",
  twitter: "https://x.com/genene_tise",
  upwork: "https://www.upwork.com/freelancers/~YOUR_UPWORK_ID",
};

export const projects = {
  pinProjects: [
    {
      title: "Eagle Pathway",
      description:
        "Full monorepo platform (web admin + mobile app) for scholarship guidance and tutor matching. Live on Google Play with 1,000+ installs and 1,000+ registered users, grown with $0 paid marketing. Supabase backend with PostgreSQL, Auth, Storage, and Realtime. Chapa payment integration. 315+ commits.",
      tags: ["Next.js", "Expo", "React Native", "Supabase", "TypeScript"],
      link: "https://eaglespathway.com",
      live: "https://eaglespathway.com",
      playstore: "https://play.google.com/store/apps/details?id=com.eaglepathway.app",
      github: "https://github.com/Eagle-Pathway/eagle-pathway",
      caseStudy: "/projects/eagle-pathway-case-study",
    },
    {
      title: "Commercial Bank of Ethiopia",
      description:
        "Shipping full-stack web and mobile features within a high-availability banking system serving 40M+ customers. Architected REST APIs, optimized PostgreSQL queries (60% faster), and led UI redesign improving Lighthouse score by 40%.",
      tags: ["React", "React Native", "Node.js", "PostgreSQL", "Flutter"],
      live: "https://www.combanketh.et",
      link: "https://www.combanketh.et",
      caseStudy: "/projects/cbe-case-study",
    },
    {
      title: "Taptosign",
      description:
        "Implemented core product features for a digital signing SaaS - document workflows, real-time status updates, and authentication. Delivered fully remotely across time zones in agile sprint cycles.",
      tags: ["React", "Node.js", "REST API"],
      live: "https://taptosign.com",
      link: "https://taptosign.com",
    },
    {
      title: "EagleBot",
      description:
        "Telegram automation bot managing tutor-student connections, announcements, and resource delivery for 1K+ active users.",
      tags: ["Python", "Supabase", "Telegram API"],
      github: "https://github.com/tise-genene/eaglebot",
      telegram: "https://t.me/eagletutorialsservicesbot",
    },
    {
      title: "Student-Tutor Marketplace",
      description:
        "Real-time marketplace automating tutor-student matching in Ethiopia. Features booking, real-time messaging, notifications, and a full admin panel.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/tise-genene/tutor-marketplace",
    },
  ],
  otherProjects: [
    {
      title: "AI-Powered HRMS",
      description:
        "BSc thesis: AI-driven HR management system for Ethiopian government offices. Automated onboarding, leave tracking, and performance management using ML-based workflows.",
      tags: ["Python", "Laravel", "MySQL", "Machine Learning"],
      github: "https://github.com/tise-genene/HR_Process_Optimizer",
    },
    {
      title: "ScholarPath",
      description:
        "Scholarship counseling platform with LMS integration, session booking, and premium video content delivery.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/tise-genene/scholarpath",
    },
    {
      title: "Laravel Restaurant Reservation System",
      description:
        "Reservation and booking system built with Laravel and MySQL, featuring seat and meal selection.",
      tags: ["Laravel", "MySQL"],
      github: "https://github.com/tise-genene/Laravel-Restaurant-Reservation-System-project",
    },
  ],
};

export const experience = [
  {
    title: "Founder & Full-Stack Engineer, Eagle Pathway",
    description:
      "Founded and built Eagle Pathway end to end: Next.js admin dashboard, Expo/React Native mobile app live on Google Play, and Supabase backend (PostgreSQL, Auth, Storage, Realtime). Grew to 1,000+ users and 1,000+ app installs with zero paid marketing, including 500+ sign-ups in the first 24 hours of launch. Integrated Chapa payment gateway with webhook HMAC verification and idempotency keys. Built the scholarship application pipeline and a real-time tutor booking system. Leading incorporation of Eagle Pathway as a registered PLC alongside two co-founders.",
    date: "2023 to Present",
    tags: ["Next.js", "Expo", "React Native", "Supabase", "TypeScript"],
    links: [
      {
        label: "📲 Download App",
        url: "https://play.google.com/store/apps/details?id=com.eaglepathway.app",
      },
      {
        label: "🌐 eaglespathway.com",
        url: "https://eaglespathway.com",
      },
    ],
  },
  {
    title: "Software Engineer, Commercial Bank of Ethiopia",
    description:
      "Designing and shipping full-stack web and mobile features within a high-availability banking system serving 40M+ customers. Architected secure REST APIs with JWT auth, rate limiting, and third-party integrations. Optimized PostgreSQL queries reducing response time by 60%. Led UI redesign improving Lighthouse performance score by 40%.",
    date: "Nov 2024 to Present",
    tags: ["React", "React Native", "Node.js", "PostgreSQL", "Flutter"],
  },
  {
    title: "AI Trainer, LLM & Software Engineering, AfterQuery",
    description:
      "Evaluated and improved AI-generated code and technical solutions. Worked on repository-level programming challenges and model evaluation to improve reliability of AI coding systems.",
    date: "Apr 2026 to Sep 2026",
    tags: ["Python", "LLM Evaluation", "Code Review"],
  },
  {
    title: "Freelance Software Engineer, Top Rated, Upwork",
    description:
      "Delivered full-stack, AI-powered, and scalable software solutions for international clients, including taptosign.com, a notifications product, and an LMS platform. Consistent 5-star feedback, strong async communication across time zones.",
    date: "Jan 2025 to Present",
    tags: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer, Taptosign Technologies",
    description:
      "Implemented document signing workflows, real-time status updates, and user authentication for a digital signing SaaS. Collaborated asynchronously with a remote team across time zones in weekly agile sprints.",
    date: "Aug 2023 to Nov 2024",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    title: "Founder, Eagle Tutorials Services",
    description:
      "Founded a Telegram-based tutor-student matching service, 200+ students, 100+ tutors. Automated 75% of manual admin matching work. This evolved into Eagle Pathway.",
    date: "Jul 2023 to Present",
    tags: ["Telegram API", "Python", "Supabase"],
  },
  {
    title: "Emerging Technologist Fellow, Millennium Campus Network",
    description:
      "Designed and delivered programming curriculum to 100+ high-school students across Ethiopia. Featured on the MCN website for outstanding contribution.",
    date: "Aug 2023 to Jan 2024",
    tags: ["Teaching", "Python", "Web Dev"],
  },
  {
    title: "Software Engineer Intern, Ethiopian Science and Technology Agency",
    description:
      "Contributed two fully functional HRMS modules (onboarding and leave management) using Laravel and MySQL. Focused on reliability, data integrity, and clean code architecture.",
    date: "Jun 2023 to Aug 2023",
    tags: ["Laravel", "MySQL", "PHP"],
  },
  {
    title: "Freelance Web Developer, Independent (Local Clients)",
    description:
      "Built fixed-price web projects for local businesses, including restaurant and cafe websites, inventory management systems, and food and coffee ordering platforms, working directly with owners from requirements through launch.",
    date: "2021 to Aug 2023",
    tags: ["Web Development", "PHP", "JavaScript"],
  },
];

export const skillCategories = [
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Laravel", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Flutter"],
  },
  {
    category: "DevOps / Tools",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Render", "Nginx", "Agile"],
  },
  {
    category: "AI / CS",
    skills: ["Python", "Machine Learning", "Data Structures", "System Design", "Prompt Engineering"],
  },
];

export const education = [
  {
    degree: "B.Sc. Information Systems",
    institution: "Addis Ababa University",
    grade: "GPA 3.51 · Great Distinction",
    note: "Thesis: AI-Powered HRMS for Ethiopian Government Offices",
    year: "2021 - 2024",
  },
  {
    degree: "Digital Product Development From Scratch",
    institution: "Technical University of Munich",
    grade: "Great Distinction",
    note: "Via Coursera",
    year: "Dec 2024",
  },
  {
    degree: "Founders Academy",
    institution: "ALX Ventures",
    grade: "",
    note: "Entrepreneurship & product strategy",
    year: "Dec 2024",
  },
];

export const volunteering = [
  {
    title: "Volunteer Instructor & Workshop Facilitator",
    location: "Addis Ababa · 2023 - Present",
    points: [
      "Taught C++, Python, and web development to 100+ early-career students through community-led sessions.",
      "Runs free workshops on freelancing and software development for aspiring developers.",
      "Active open-source contributor on GitHub.",
    ],
  },
];

export const blogs = [
  {
    title: "Mastering Middleware in ASP.NET Core: My Journey and Key Takeaways",
    date: "31/12/2024",
    link: "https://medium.com/p/41cd3b8ca38d",
  },
  {
    title: "From Rural Roots to Tech Trailblazer: A Journey of Family Support and Unwavering Belief",
    date: "22/02/2024",
    link: "https://medium.com/@tisegenene/from-rural-roots-to-tech-trailblazer-a-journey-of-family-support-and-unwavering-belief-c081175731c9",
  },
  {
    title: "All posts on Medium",
    date: "",
    link: "https://medium.com/@tisegenene",
  },
];