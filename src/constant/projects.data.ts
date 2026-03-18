import { StaticImageData } from 'next/image';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/dailyzone.png';
import project4 from '../assets/Screenshot_20-2-2026_17456_ecommerce-frontend-tau-lemon.vercel.app.jpeg';

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: (string | StaticImageData)[];
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
  role: string;
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    title: 'ELITE-EASE',
    year: '2026',
    role: 'Lead Full Stack Developer',
    description: 'A NEXT-GENERATION TECH RETAIL HUB FEATURING DYNAMIC PRODUCT FILTERING AND AN OPTIMIZED CHECKOUT PIPELINE.',
    longDescription: 'Elite-Ease was engineered to redefine the digital shopping experience for high-end tech. The focus was on architectural performance—implementing a multi-vendor schema with PostgreSQL and a sleek, glassmorphism-inspired UI that stays fluid under heavy data loads.',
    techStack: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'REDUX', 'PRISMA', 'POSTGRESQL'],
    features: [
      'Multi-vendor Dashboard Architecture',
      'Advanced 3D Product Previews',
      'Complex Dynamic Filtering System',
      'Optimized Stripe Checkout Pipeline'
    ],
    images: [project4, project1, project2], // Primary image + Gallery images
    liveUrl: 'https://ecommerce-frontend-tau-lemon.vercel.app',
    githubUrl: 'https://github.com/devShuvo25/EliteEase---Tech-E-Commerce-Website-Back-end',
  },
  {
    id: 2,
    title: 'THE DAILY DISH',
    year: '2025',
    role: 'Full Stack Developer',
    description: 'A PREMIUM MARKETPLACE FOR HOME-COOKED MEALS WITH REAL-TIME PRE-ORDERING AND SECURE PAYMENTS.',
    longDescription: 'Developed as a solution for local culinary entrepreneurs, The Daily Dish integrates complex real-time ordering systems with a focus on mobile-first responsiveness. The platform handles sensitive transactions and user data with rigorous security protocols.',
    techStack: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'EXPRESS', 'CLOUDINARY'],
    features: [
      'Real-time Order Tracking System',
      'Secure Stripe Payment Integration',
      'Vendor Analytics Dashboard',
      'Dynamic Menu Management'
    ],
    images: [project1, project3, project4],
    liveUrl: 'https://the-daily-dish.netlify.app/',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'DAILY ZONE',
    year: '2025',
    role: 'Frontend Architect',
    description: 'A MODERN FULL-STACK APPLICATION THAT HELPS USERS TRACK DAILY TASKS, HABITS, AND PRODUCTIVITY.',
    longDescription: 'Daily Zone applies behavioral psychology to digital design. By utilizing Firebase for real-time synchronization and a minimalist MERN stack backend, it provides a frictionless interface for habit formation and task management.',
    techStack: ['REACT', 'NODE.JS', 'MONGODB', 'FIREBASE', 'FRAMER MOTION'],
    features: [
      'Real-time Data Synchronization',
      'Habit Consistency Tracking',
      'Custom Productivity Metrics',
      'Interactive Goal Visualization'
    ],
    images: [project3, project2, project1],
    liveUrl: 'https://dailyzone.netlify.app',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'GAME SPACE',
    year: '2025',
    role: 'UI/UX Developer',
    description: 'A NEXT-GEN GAMING PLATFORM FEATURING VIBRANT CARDS, NEON ACCENTS, AND A MINIMALIST INTERFACE.',
    longDescription: 'Game Space is a study in high-impact visual design. Leveraging GSAP for complex scroll animations and Framer Motion for interface micro-interactions, the platform creates an immersive environment that matches the energy of the gaming world.',
    techStack: ['REACT', 'GSAP', 'FIREBASE', 'TAILWIND CSS'],
    features: [
      'Immersive Neon UI/UX Design',
      'GSAP-powered Motion Sequences',
      'Instant Global Search Function',
      'Dynamic Game Library Integration'
    ],
    images: [project2, project4, project3],
    liveUrl: 'https://game-space-bd.netlify.app/games',
    githubUrl: '#',
  },
];