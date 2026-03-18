import { ExperienceItem } from "@/interface/universal";


const experiences: ExperienceItem[] = [
  {
    company: "Badhon Soft",
    role: "Junior Full Stack Developer",
    period: "2025 — Present",
    points: [
      "Developed multiple MERN and Next.js applications with responsive, user-focused interfaces.",
      "Built secure REST APIs with authentication, role-based access, and optimized database queries.",
      "Implemented global state management using Redux Toolkit and RTK Query for efficient data handling.",
      "Delivered production-ready systems including dashboards, admin panels, and business management tools.",
    ],
    tech: ["Next.js", "Tailwind", "TypeScript", "Node", "Express", "Prisma", "PostgreSQL"],
  },
];

export const skills = [
  { 
    name: 'JavaScript', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#F7DF1E" d="M0 0h24v24H0z"/>
        <path d="M18.663 19.335c-.437.68-1.14 1.132-2.14 1.132-.96 0-1.74-.53-2.175-1.155l1.018-.6c.245.41.6.685 1.157.685.545 0 .914-.263.914-.725 0-.41-.305-.595-.91-.86l-1.1-.39c-.933-.404-1.57-.96-1.57-1.95 0-.895.84-1.55 1.762-1.55.765 0 1.25.26 1.71.74l-.74.6c-.343-.3-.591-.497-1.012-.497-.37 0-.71.185-.71.6 0 .33.205.51.7.72l1.1.48c1.1.47 1.63 1.05 1.63 2.05 0 1.1-.73 1.65-1.635 1.65zm-7.615.112c.16.29.35.48.58.62.3.16.63.24 1.01.24.41 0 .73-.08.97-.24.25-.17.38-.41.38-.72V10h1.16v8.43c0 .59-.16 1.07-.48 1.45-.44.5-1.15.8-1.96.8-.75 0-1.39-.18-1.84-.55-.44-.36-.66-.86-.81-1.6l1.01-.64z" fill="#000"/>
      </svg>
    ) 
  },
  { 
    name: 'TypeScript', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect width="24" height="24" fill="#3178C6"/>
        <path d="M13.5 12h2.25c1.243 0 2.25.84 2.25 2.25 0 1.41-1.007 2.25-2.25 2.25h-2.25v-1.5h2.25c.414 0 .75-.336.75-.75 0-.414-.336-.75-.75-.75H13.5V12zm-7.5 0h6v1.5H9.75V18h-1.5v-4.5H6V12z" fill="#fff"/>
      </svg>
    ) 
  },
  { 
    name: 'React', 
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ) 
  },
  { 
    name: 'Next.js', 
    icon: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <mask id="next-mask" maskUnits="userSpaceOnUse" style={{maskType:'alpha'}}><circle cx="90" cy="90" r="90" fill="black"/></mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.1836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
          <path d="M115.223 54H127.337V125.97H115.223V54Z" fill="white"/>
        </g>
      </svg>
    ) 
  },
  { 
    name: 'Redux', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#764ABC" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18.462c-4.665 0-8.462 3.797-8.462 8.462s3.797 8.462 8.462 8.462 8.462-3.797 8.462-8.462-3.797-8.462-8.462-8.462z"/>
        <circle cx="12" cy="12" r="3" fill="#764ABC"/>
      </svg>
    ) 
  },
  { 
    name: 'Zod', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#3068b7" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3068b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 8h4l-4 4h4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ) 
  },
  { 
    name: 'Node.js', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <path d="M128 32l-94.8 54.8v109.4L128 251l94.8-54.8V86.8L128 32zm82.8 157.4L128 238.4l-82.8-49V92.6L128 43.6l82.8 49v102.8z" fill="#339933"/>
        <path d="M128 64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#339933"/>
      </svg>
    ) 
  },
  { 
    name: 'Express', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
        <path d="M7.4 17.5h.8v-3.8h2.3v-.6H8.2v-1.9H11v-.6H7.4v6.9zm4.2-.6l1-1.8 1.1 1.8h.9l-1.4-2.2 1.4-2.4h-.9L12.7 14l-1-1.6h-.9l1.4 2.2-1.4 2.3h.8zm5.5 1.5c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8zm0-3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zM5.5 14h.6c.6 0 1-.4 1-.9 0-.6-.4-.9-1-.9h-.6v1.8zm-.7.8h.7c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6H4V18h.8v-3.2zm14.3.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 3c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8z"/>
      </svg>
    ) 
  },
  { 
    name: 'Prisma', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M12 2.25l-9.75 5.25v13.5l9.75-5.25v-13.5zM12.75 3.542v12.333l8.25 4.442v-12.333l-8.25-4.442z"/>
      </svg>
    ) 
  },
  { 
    name: 'MongoDB', 
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path d="M37 23.5c0 7.8-6.7 14.1-13 14.1s-13-6.3-13-14.1c0-4.6 2.3-8.8 6.1-11.4l6.9-4.1 6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4z" fill="#47a248"/>
        <path d="M24 6l6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4 0 3.3-1.2 6.4-3.2 8.7-1.1-3-2.1-7.1-2.1-11.2 0-.3 0-.7-.1-1L24 6z" fill="#3fa049"/>
        <path d="M24 37.6c-4.4 0-8.5-4-10.7-9.4 1.1 2.3 2.9 4.3 5.3 5.6 1.7.9 3.6 1.4 5.4 1.4V37.6z" fill="#47a248"/>
      </svg>
    ) 
  },
  { 
    name: 'PostgreSQL', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-4h2v4zm4 0h-2v-6h2v6zm4 0h-2v-8h2v8z"/>
      </svg>
    ) 
  },
  { 
    name: 'Tailwind CSS', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ) 
  }
];