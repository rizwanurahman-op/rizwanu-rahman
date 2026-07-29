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
  title: "Rizwanu Rahman | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building high-performance web applications with modern technologies. Based in Kerala, India.",
  keywords: [
    "Rizwanu Rahman",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Rizwanu Rahman" }],
  openGraph: {
    title: "Rizwanu Rahman | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwanu Rahman | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
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
