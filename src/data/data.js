export const about = {
  name: "Genene",
  role: "Fullstack Web & Mobile Developer",
  about:
    "I’m a software developer from Addis Ababa, Ethiopia. I craft smart, scalable, and user-friendly digital solutions that solve real problems and drive results. Let’s turn your idea into impact.",
  email: "tisegenene@gmail.com",
  phone: "+251932508910",
  cv: "/docs/cv.pdf",
};

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Fullstack Web & Mobile Developer from Addis Ababa — modern web apps, real-time systems and scalable SaaS solutions.",
  keywords:
    "Genene, Fullstack, Next.js, Laravel, React, portfolio, software developer",
};

export const forms = {
  // Optional: set to your Formspree endpoint (e.g. "https://formspree.io/f/abcdefg").
  // When empty, the contact form falls back to composing an email to `about.email`.
  formspreeUrl: "https://formspree.io/f/mojqzjrv",
};

export const skills = [
  { name: "Next.js", alt: "nextjs logo", icon: "/nextjs.svg" },
  { name: "React", alt: "react logo", icon: "/react.svg" },
  { name: "TypeScript", alt: "typescript", icon: "/js.svg" },
  { name: "Laravel", alt: "laravel", icon: "/file.svg" },
  { name: "Node.js", alt: "nodejs", icon: "/js.svg" },
  { name: "Tailwind CSS", alt: "tailwind", icon: "/tailwind.svg" },
  { name: "React Native", alt: "react native", icon: "/react.svg" },
];

export const socials = {
  github: "https://github.com/tise-genene",
  linkedin: "https://www.linkedin.com/in/genene-tise-253037234/",
  twitter: "https://x.com/genene_tise",
  instagram: "https://www.linkedin.com/in/genene-tise-253037234/",
  facebook: "https://x.com/genene_tise",
};

export const projects = {
  pinProjects: [
    {
      title: "CBE Corporate Website",
      description:
        "Commercial Bank of Ethiopia corporate website — front-end enhancements, performance and accessibility work.",
      tags: ["React", "Next.js", "Accessibility"],
      live: "https://www.combanketh.et",
      link: "https://www.combanketh.et",
      caseStudy: "/projects/cbe-case-study",
    },
    {
      title: "Taptosign",
      description:
        "Taptosign — digital signing platform (front-end & integrations).",
      tags: ["React", "Node.js", "API"],
      live: "https://taptosign.com",
      link: "https://taptosign.com",
    },
    {
      title: "Student-Tutor Marketplace",
      description:
        "Next.js + TypeScript marketplace with real-time messaging, notifications, and a comprehensive booking system.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      link: "https://genenetise.com/tutor-marketplace.vercel.app",
      github: "https://github.com/tise-genene/tutor-marketplace",
    },
    {
      title: "ScholarPath",
      description:
        "Scholarship counseling platform with booking, LMS integration, and premium video content. Built with Next.js and Tailwind.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://genenetise.com/scholarpath-omega.vercel.app",
      github: "https://github.com/tise-genene/scholarpath",
    },
    {
      title: "EagleBot",
      description:
        "Automation bot project (EagleBot). Source and details available on GitHub. A Telegram bot is available at @eagletutorialsservicesbot.",
      tags: ["Python", "Bot", "Automation"],
      github: "https://github.com/tise-genene/eaglebot",
      telegram: "https://t.me/eagletutorialsservicesbot",
    },
    {
      title: "HRMS — Yekatit 12 Hospital",
      description:
        "Human Resource Management System built with CodeIgniter / PHP and MySQL to streamline employee management, payroll, and performance tracking.",
      tags: ["PHP", "CodeIgniter", "MySQL"],
      github: "https://github.com/tise-genene/HR_Process_Optimizer",
    },
  ],
  otherProjects: [
    {
      title: "Laravel Restaurant Reservation System",
      description:
        "Reservation and booking system for a restaurant built with Laravel and MySQL, featuring seat and meal selection.",
      tags: ["Laravel", "MySQL"],
      github:
        "https://github.com/tise-genene/Laravel-Restaurant-Reservation-System-project",
    },
  ],
};

export const experience = [
  {
    title: "Freelance Software Developer — Upwork",
    description:
      "Freelance software development on Upwork, delivering web and mobile solutions including fullstack apps, integrations, and maintenance. Tech: React, Next.js, Node, Laravel (summary from Upwork profile).",
    date: "Jan 2025 - Present",
  },
  {
    title: "Software Engineer — Commercial Bank of Ethiopia",
    description:
      "Maintain and enhance CBE's corporate website — performance, accessibility, and UX improvements. Tech: React, React Native.",
    date: "Nov 2024 - Present",
  },
  {
    title: "Software Developer — Eagle Educational Consult PLC",
    description:
      "Built an LMS and a student–tutor marketplace with booking and messaging features. Tech: React, Tailwind CSS.",
    date: "Aug 2023 - Nov 2024",
  },
  {
    title: "Emerging Technologist Fellow — Millennium Campus Network (MCN)",
    description:
      "Delivered programming workshops to 100+ high-school students; designed curriculum and learning materials.",
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Software Developer — Ethiopian Science and Technology Agency",
    description:
      "Implemented HRMS modules (onboarding & leave management) using Laravel and MySQL; focused on reliability and data integrity.",
    date: "Jun 2023 - Aug 2023",
  },
];

export const blogs = [
  {
    title: "Mastering Middleware in ASP.NET Core: My Journey and Key Takeaways",
    date: "31/12/2024",
    link: "https://medium.com/p/41cd3b8ca38d",
  },
  {
    title:
      "From Rural Roots to Tech Trailblazer: A Journey of Family Support and Unwavering Belief",
    date: "22/02/2024",
    link: "https://medium.com/@tisegenene/from-rural-roots-to-tech-trailblazer-a-journey-of-family-support-and-unwavering-belief-c081175731c9",
  },
  {
    title: "All posts on Medium",
    date: "",
    link: "https://medium.com/@tisegenene",
  },
];
