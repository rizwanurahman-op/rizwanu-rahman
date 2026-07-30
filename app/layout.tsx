import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://rizwanurahman.in";

export const viewport: Viewport = {
  themeColor: "#00FF88",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Rizwanu Rahman — Full Stack Developer | React, Next.js, TypeScript",
    template: "%s | Rizwanu Rahman",
  },

  description:
    "Rizwanu Rahman is a Full Stack Developer from Kerala, India, specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications. Available for freelance projects worldwide.",

  keywords: [
    // Name variations — the #1 signal for personal name ranking
    "Rizwanu Rahman",
    "Rizwanu Rahman developer",
    "Rizwanu Rahman portfolio",
    "Rizwanu Rahman full stack developer",
    "Rizwanu Rahman Kerala",
    "Rizwanu Rahman Nilambur",
    "Rizwanu Rahman software engineer",
    "Rizwanu Rahman freelance",
    "rizwanurahman.in",
    // Role keywords
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Developer",
    "Freelance Developer India",
    "Freelance React Developer",
    "Web Developer Kerala",
    "Web Developer Nilambur",
    "Portfolio",
    "Kerala",
    "India",
  ],

  authors: [
    {
      name: "Rizwanu Rahman",
      url: BASE_URL,
    },
  ],

  creator: "Rizwanu Rahman",
  publisher: "Rizwanu Rahman",

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  // Favicon + App icons
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  // Open Graph — for social sharing (LinkedIn, Facebook, WhatsApp)
  openGraph: {
    type: "profile",
    firstName: "Rizwanu",
    lastName: "Rahman",
    username: "rizwanurahman",
    gender: "male",
    title: "Rizwanu Rahman — Full Stack Developer | React, Next.js, TypeScript",
    description:
      "Full Stack Developer from Kerala, India. Specializing in React, Next.js, TypeScript, Node.js & AI-powered web apps. Available for freelance projects worldwide.",
    url: BASE_URL,
    siteName: "Rizwanu Rahman",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rizwanu Rahman — Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Rizwanu Rahman — Full Stack Developer | React, Next.js, TypeScript",
    description:
      "Full Stack Developer from Kerala, India. React, Next.js, TypeScript, Node.js & AI apps. Available for freelance worldwide.",
    images: ["/profile.jpg"],
    creator: "@rizwanurahman",
    site: "@rizwanurahman",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification — add these once you claim in Search Console & Bing
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  //   yandex: "YOUR_YANDEX_CODE",
  //   bing: "YOUR_BING_CODE",
  // },

  category: "technology",
};

// JSON-LD Structured Data — Google's most reliable name-to-person signal
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Rizwanu Rahman",
      givenName: "Rizwanu",
      familyName: "Rahman",
      url: BASE_URL,
      email: "Rizwanurahman321@gmail.com",
      telephone: "+91 7558002009",
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/profile.jpg`,
        width: 400,
        height: 400,
      },
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer from Nilambur, Kerala, India, specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nilambur",
        addressRegion: "Kerala",
        postalCode: "679332",
        addressCountry: "IN",
      },
      sameAs: [
        "https://linkedin.com/in/rizwanurahman",
        "https://github.com/Rizwanu321",
        BASE_URL,
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Full Stack Development",
        "Frontend Development",
        "AI Integration",
        "Web Performance Optimization",
        "Freelance Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Rizwanu Rahman",
      url: BASE_URL,
      description:
        "Portfolio of Rizwanu Rahman — Full Stack Developer specializing in React, Next.js, TypeScript and AI applications.",
      author: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "en-US",
      copyrightYear: new Date().getFullYear(),
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      name: "Rizwanu Rahman — Full Stack Developer Portfolio",
      url: BASE_URL,
      description:
        "Professional portfolio of Rizwanu Rahman. Full Stack Developer from Kerala, India.",
      mainEntity: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
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
      <head>
        {/* Structured Data — JSON-LD for Google Name-to-Person association */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        {/* Preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
