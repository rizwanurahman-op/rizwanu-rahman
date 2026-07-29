import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizwanu Rahman // Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer & UI Architect specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications. Crafting high-performance digital experiences.",
  keywords: [
    "Rizwanu Rahman",
    "Full Stack Engineer",
    "Software Engineer",
    "Frontend Specialist",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "Node.js",
    "AI Developer",
    "Portfolio",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Rizwanu Rahman" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Rizwanu Rahman // Full Stack Software Engineer",
    description:
      "Crafting high-performance web applications and AI-driven platforms with React, Next.js & TypeScript.",
    url: "https://github.com/rizwanurahman-op/rizwanu-rahman",
    siteName: "Rizwanu Rahman Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwanu Rahman // Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
