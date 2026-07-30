"use client";

import { Mail, Heart, ArrowUp, Terminal, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GithubIcon,
    color: "#B44AFF",
    bg: "rgba(180, 74, 255, 0.1)",
    border: "rgba(180, 74, 255, 0.25)",
    shadow: "0 0 16px rgba(180, 74, 255, 0.2)",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    color: "#FBB924",
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.25)",
    shadow: "0 0 16px rgba(251, 191, 36, 0.2)",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.1)",
    border: "rgba(0, 255, 136, 0.25)",
    shadow: "0 0 16px rgba(0, 255, 136, 0.2)",
  },
];

const navLinks = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden w-full max-w-full"
      style={{
        background: "#0D1117",
        borderTop: "1px solid #21262D",
        padding: "52px 0 36px 0",
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center" style={{ marginBottom: "40px" }}>
          {/* Logo & Bio Info (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a href="#home" className="inline-flex items-center gap-1.5 group w-fit">
              <span
                className="font-mono text-xl font-bold transition-colors group-hover:text-neon"
                style={{ color: "#00FF88" }}
              >
                &lt;
              </span>
              <span
                className="font-mono text-xl font-bold transition-colors"
                style={{ color: "#E6EDF3" }}
              >
                RZ
              </span>
              <span
                className="font-mono text-xl font-bold transition-colors group-hover:text-neon"
                style={{ color: "#00FF88" }}
              >
                /&gt;
              </span>
            </a>
            <p
              className="font-sans leading-relaxed text-xs md:text-sm max-w-md"
              style={{ color: "#8B949E" }}
            >
              Rizwanu Rahman — Full Stack Developer engineering modern, high-performance web applications with React, Next.js &amp; TypeScript.
            </p>
          </div>

          {/* Quick Nav Links (4 Columns) */}
          <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs transition-all duration-300 rounded-lg"
                style={{
                  padding: "7px 14px",
                  background: "#161B22",
                  border: "1px solid #21262D",
                  color: "#8B949E",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                  e.currentTarget.style.color = "#00FF88";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 255, 136, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#21262D";
                  e.currentTarget.style.color = "#8B949E";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                #{link.toLowerCase()}
              </a>
            ))}
          </div>

          {/* Social Icon Cards (3 Columns) */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-xl transition-all duration-300 flex items-center justify-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#161B22",
                    border: "1px solid #21262D",
                    color: "#8B949E",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.border;
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.background = social.bg;
                    e.currentTarget.style.boxShadow = social.shadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#21262D";
                    e.currentTarget.style.color = "#8B949E";
                    e.currentTarget.style.background = "#161B22";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* System Bar Shell */}
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center md:text-left"
          style={{
            background: "#161B22",
            border: "1px solid #21262D",
            padding: "16px 20px",
          }}
        >
          <div className="flex items-center justify-center md:justify-start gap-2" style={{ color: "#8B949E" }}>
            <Terminal size={14} style={{ color: "#00FF88" }} className="flex-shrink-0" />
            <span>© {new Date().getFullYear()} Rizwanu Rahman. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <div
              className="font-mono text-xs font-semibold flex items-center gap-2 flex-shrink-0"
              style={{
                padding: "5px 12px",
                borderRadius: "8px",
                background: "#0D1117",
                color: "#00FF88",
                border: "1px solid rgba(0, 255, 136, 0.35)",
                boxShadow: "0 0 16px rgba(0, 255, 136, 0.12)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse inline-block shadow-[0_0_8px_#00FF88]" />
              <span>HTTP 200 OK</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0" style={{ color: "#8B949E" }}>
              <Cpu size={13} style={{ color: "#00D4FF" }} className="flex-shrink-0" />
              <span>Built with Next.js &amp;</span>
              <Heart size={13} className="text-red-500 fill-red-500 inline flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 rounded-xl transition-all duration-300 z-40 active:scale-95 flex items-center justify-center"
        style={{
          width: "46px",
          height: "46px",
          background: "rgba(22, 27, 34, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1.5px solid rgba(0, 255, 136, 0.3)",
          color: "#00FF88",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 255, 136, 0.35)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.3)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.4)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
