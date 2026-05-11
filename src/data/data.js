export const about = {
  name: "Genene Tise",
  role: "Full-Stack Software Engineer",
  about:
    "I'm a full-stack engineer based in Addis Ababa, Ethiopia. I build production-grade systems at scale — from high-availability banking infrastructure at Commercial Bank of Ethiopia (40M+ customers) to SaaS products for global startups. Backend-leaning, product-minded, and obsessed with shipping things that actually work. Founder of Eagle Tutorials Services, a growing edtech platform connecting students and tutors across Ethiopia.",
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
};

export const projects = {
  pinProjects: [
    {
      title: "Eagle Pathway",
      description:
        "Full monorepo platform with a Next.js admin dashboard and an Expo mobile app for students and tutors. Supabase backend with PostgreSQL, Auth, Storage, and Realtime. 315+ commits, actively in development.",
      tags: ["Next.js", "Expo", "React Native", "Supabase", "TypeScript"],
      github: "https://github.com/Eagle-Pathway/eagle-pathway",
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
        "Implemented core product features for a digital signing SaaS — document workflows, real-time status updates, and authentication. Delivered fully remotely across time zones in agile sprint cycles.",
      tags: ["React", "Node.js", "REST API"],
      live: "https://taptosign.com",
      link: "https://taptosign.com",
    },
    {
      title: "Student-Tutor Marketplace",
      description:
        "Real-time marketplace automating tutor-student matching in Ethiopia. Features booking, real-time messaging, notifications, and a full admin panel.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/tise-genene/tutor-marketplace",
    },
    {
      title: "AI-Powered HRMS",
      description:
        "BSc thesis: AI-driven HR management system for Ethiopian government offices. Automated onboarding, leave tracking, and performance management using ML-based workflows.",
      tags: ["Python", "Laravel", "MySQL", "Machine Learning"],
      github: "https://github.com/tise-genene/HR_Process_Optimizer",
    },
    {
      title: "EagleBot",
      description:
        "Telegram automation bot managing tutor-student connections, announcements, and resource delivery for 1K+ active users.",
      tags: ["Python", "Supabase", "Telegram API"],
      github: "https://github.com/tise-genene/eaglebot",
      telegram: "https://t.me/eagletutorialsservicesbot",
    },
  ],
  otherProjects: [
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
    title: "Software Engineer — Commercial Bank of Ethiopia",
    description:
      "Designing and shipping full-stack web and mobile features within a high-availability banking system serving 40M+ customers. Architected secure REST APIs with JWT auth, rate limiting, and third-party integrations. Optimized PostgreSQL queries reducing response time by 60%. Led UI redesign improving Lighthouse performance score by 40%.",
    date: "Oct 2024 – Present",
    tags: ["React", "React Native", "Node.js", "PostgreSQL", "Flutter"],
  },
  {
    title: "Freelance Full-Stack Engineer — Upwork",
    description:
      "Delivering end-to-end fullstack projects for international clients: REST APIs, React frontends, database schema design, and cloud deployments on Vercel and Render. $4K+ earned with consistent 5-star feedback and strong async communication across time zones.",
    date: "Jan 2025 – Present",
    tags: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer — Taptosign",
    description:
      "Implemented document signing workflows, real-time status updates, and user authentication for a digital signing SaaS. Collaborated asynchronously with a remote team across time zones in weekly agile sprints.",
    date: "Aug 2023 – Nov 2024",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    title: "Founder & Technical Lead — Eagle Tutorials Services",
    description:
      "Founded and built a tutor-student matchmaking platform with 1K+ active members across Ethiopia. Automated matching logic reduced admin workload by 75%. Now evolving into Eagle Pathway — a cross-platform SaaS. Also organizes an active Telegram developer community.",
    date: "2023 – Present",
    tags: ["Next.js", "Python", "Supabase", "Telegram API"],
  },
  {
    title: "Emerging Technologist Fellow — Millennium Campus Network",
    description:
      "Designed and delivered programming curriculum to 100+ high-school students across Ethiopia. Featured on the MCN website for outstanding contribution.",
    date: "Aug 2023 – Jan 2024",
    tags: ["Teaching", "Python", "Web Dev"],
  },
  {
    title: "Software Engineer Intern — Ethiopian Science and Technology Agency",
    description:
      "Contributed two fully functional HRMS modules (onboarding and leave management) using Laravel and MySQL. Focused on reliability, data integrity, and clean code architecture.",
    date: "Jun 2023 – Aug 2023",
    tags: ["Laravel", "MySQL", "PHP"],
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