import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers"; // We'll create this below
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Adding your portfolio fonts to ensure the CSS variables match your @theme
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shuvo Mallik | Full-Stack Developer",
  description: "Portfolio of a MERN stack and Next.js specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${inter.variable} 
          ${syne.variable} 
          antialiased min-h-screen relative overflow-x-hidden
        `}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Providers>
        <Navbar/>
          {children}
          
          <Footer />
          
        </Providers>

      </body>
    </html>
  );
}