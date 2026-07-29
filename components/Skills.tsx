"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Database, Cpu } from "lucide-react";
import { skillCategories } from "@/lib/data";

/* ─── Brand SVG Icon Definitions ───────────────────────────────────── */
const TECH_ICONS: { name: string; color: string; svg: string }[] = [
  {
    name: "React",
    color: "#61DAFB",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill="#61DAFB"><circle cx="20" cy="20" r="3.2"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2" transform="rotate(120 20 20)"/></svg>`,
  },
  {
    name: "Next.js",
    color: "#E6EDF3",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#111"/><text x="6" y="26" font-family="Arial Black,sans-serif" font-size="14" font-weight="900" fill="white">N</text></svg>`,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#3178C6"/><text x="4" y="28" font-family="Arial Black,sans-serif" font-size="15" font-weight="900" fill="white">TS</text></svg>`,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#F7DF1E"/><text x="4" y="28" font-family="Arial Black,sans-serif" font-size="15" font-weight="900" fill="#222">JS</text></svg>`,
  },
  {
    name: "Node.js",
    color: "#8CC84B",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#333"/><text x="5" y="26" font-family="Arial,sans-serif" font-size="10" font-weight="bold" fill="#8CC84B">Node</text></svg>`,
  },
  {
    name: "Python",
    color: "#FFD43B",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#2B5B84"/><text x="6" y="28" font-family="Arial Black,sans-serif" font-size="15" font-weight="900" fill="#FFD43B">Py</text></svg>`,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#13AA52"/><text x="5" y="28" font-family="Arial Black,sans-serif" font-size="12" font-weight="900" fill="white">Mg</text><rect x="20" y="5" width="3" height="30" rx="1.5" fill="white" opacity="0.9"/></svg>`,
  },
  {
    name: "Git",
    color: "#F05032",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#F05032"/><path d="M32 18.6L21.4 8a2.6 2.6 0 00-3.6 0L15.4 10.4l3.6 3.6a3.1 3.1 0 013.9 3.9l3.5 3.5a3.1 3.1 0 11-1.9 1.9l-3.3-3.3v8.6a3.1 3.1 0 11-2.5-.1V19.7a3.1 3.1 0 01-1.7-4L13.4 12l-5.5 5.5a2.6 2.6 0 000 3.6l10.7 10.7a2.6 2.6 0 003.6 0L32 22.2a2.6 2.6 0 000-3.6z" fill="white"/></svg>`,
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#0DB7ED"/><rect x="5" y="14" width="7" height="5" rx="1" fill="white"/><rect x="13" y="14" width="7" height="5" rx="1" fill="white"/><rect x="21" y="14" width="7" height="5" rx="1" fill="white"/><rect x="13" y="22" width="7" height="5" rx="1" fill="white"/><rect x="21" y="22" width="7" height="5" rx="1" fill="white"/></svg>`,
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#0EA5E9"/><path d="M10 17c1.8-7 7-8.8 9.8-4.4-1.4 2.1-2.8 5.6-1.2 8.4C20.1 23.4 23 25 26 23c-1.8 7-7 8.8-9.8 4.4 1.4-2.1 2.8-5.6 1.2-8.4C16 17 13 15.4 10 17z" fill="white"/><path d="M22 25c1.8-7 7-8.8 9.8-4.4-1.4 2.1-2.8 5.6-1.2 8.4C32 31.4 35 33 38 31c-1.8 7-7 8.8-9.8 4.4 1.4-2.1 2.8-5.6 1.2-8.4C28 25 25 23.4 22 25z" fill="white" opacity="0.6"/></svg>`,
  },
  {
    name: "HTML5",
    color: "#E34F26",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#E34F26"/><text x="4" y="28" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="white">H5</text></svg>`,
  },
  {
    name: "CSS3",
    color: "#1572B6",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#1572B6"/><text x="4" y="28" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="white">CSS</text></svg>`,
  },
  {
    name: "Redux",
    color: "#764ABC",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#764ABC"/><text x="5" y="28" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="white">Rx</text></svg>`,
  },
  {
    name: "Express",
    color: "#C9D1D9",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#282828"/><text x="4" y="28" font-family="Arial Black,sans-serif" font-size="9" font-weight="900" fill="white">Ex.js</text></svg>`,
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#FF6D00"/><polygon points="12,32 20,8 28,20 23,14 20,32" fill="#FFCA28"/><polygon points="8,32 20,32 14,20" fill="#FFA000" opacity="0.8"/></svg>`,
  },
  {
    name: "GitHub",
    color: "#E6EDF3",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#24292E"/><path d="M20 5C11.7 5 5 11.7 5 20c0 6.6 4.3 12.2 10.2 14.2.7.1 1-.3 1-.7v-2.6c-4.1.9-5-2-5-2-.7-1.7-1.6-2.2-1.6-2.2-1.3-.9.1-.9.1-.9 1.5.1 2.2 1.5 2.2 1.5 1.3 2.2 3.4 1.6 4.2 1.2.1-.9.5-1.6 1-2-3.3-.4-6.7-1.6-6.7-7.3 0-1.6.6-2.9 1.5-4-.2-.4-.7-1.9.2-4 0 0 1.2-.4 4 1.5 1.2-.3 2.4-.5 3.6-.5s2.4.2 3.6.5c2.8-1.9 4-1.5 4-1.5.9 2.1.3 3.6.2 4 1 1.1 1.5 2.4 1.5 4 0 5.7-3.5 7-6.8 7.3.5.5 1 1.4 1 2.8v4.2c0 .4.3.8 1 .7C30.7 32.2 35 26.6 35 20c0-8.3-6.7-15-15-15z" fill="white"/></svg>`,
  },
  {
    name: "VS Code",
    color: "#007ACC",
    svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="6" fill="#007ACC"/><path d="M28 8l-10 10-5-4L8 17l7 3-7 3 5 3 10-4v10l5-4V12z" fill="white"/></svg>`,
  },
];

/* ─── Category configs ──────────────────────────────────────────────── */
interface CategoryConfig {
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  accent: string;
  hoverBorder: string;
  hoverShadow: string;
}

const categoryConfig: Record<string, CategoryConfig> = {
  Frontend: {
    iconBg: "rgba(0,255,136,0.1)",
    iconBorder: "rgba(0,255,136,0.25)",
    iconColor: "#00FF88",
    accent: "#00FF88",
    hoverBorder: "rgba(0,255,136,0.35)",
    hoverShadow: "0 8px 32px rgba(0,255,136,0.1)",
  },
  Backend: {
    iconBg: "rgba(0,212,255,0.1)",
    iconBorder: "rgba(0,212,255,0.25)",
    iconColor: "#00D4FF",
    accent: "#00D4FF",
    hoverBorder: "rgba(0,212,255,0.35)",
    hoverShadow: "0 8px 32px rgba(0,212,255,0.1)",
  },
  Database: {
    iconBg: "rgba(180,74,255,0.1)",
    iconBorder: "rgba(180,74,255,0.25)",
    iconColor: "#B44AFF",
    accent: "#B44AFF",
    hoverBorder: "rgba(180,74,255,0.35)",
    hoverShadow: "0 8px 32px rgba(180,74,255,0.1)",
  },
  "AI & Dev Tools": {
    iconBg: "rgba(251,191,36,0.1)",
    iconBorder: "rgba(251,191,36,0.25)",
    iconColor: "#FBB924",
    accent: "#FBB924",
    hoverBorder: "rgba(251,191,36,0.35)",
    hoverShadow: "0 8px 32px rgba(251,191,36,0.1)",
  },
};

const fallbackCfg = categoryConfig["Frontend"];

/* ─── Skill brand map ───────────────────────────────────────────────── */
const SKILL_BRAND: Record<string, { color: string; abbr: string }> = {
  "React.js": { color: "#61DAFB", abbr: "Re" },
  "Next.js": { color: "#E6EDF3", abbr: "Nx" },
  TypeScript: { color: "#3178C6", abbr: "TS" },
  "JavaScript (ES6+)": { color: "#F7DF1E", abbr: "JS" },
  "Tailwind CSS": { color: "#38BDF8", abbr: "TW" },
  "HTML5 & CSS3": { color: "#E34F26", abbr: "H5" },
  Redux: { color: "#764ABC", abbr: "Rx" },
  "Shadcn UI": { color: "#E6EDF3", abbr: "Sh" },
  "Node.js": { color: "#8CC84B", abbr: "No" },
  "Express.js": { color: "#C9D1D9", abbr: "Ex" },
  Python: { color: "#FFD43B", abbr: "Py" },
  "REST API": { color: "#00D4FF", abbr: "API" },
  MongoDB: { color: "#47A248", abbr: "Mg" },
  Firebase: { color: "#FFCA28", abbr: "Fb" },
  SQLite: { color: "#0F80CC", abbr: "SQ" },
  Cursor: { color: "#00FF88", abbr: "Cu" },
  "Claude Code": { color: "#C96442", abbr: "CC" },
  "GitHub Copilot": { color: "#E6EDF3", abbr: "GH" },
  ChatGPT: { color: "#10A37F", abbr: "GP" },
  Git: { color: "#F05032", abbr: "Gt" },
};

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  cpu: Cpu,
};

/* ─── Marquee Item ──────────────────────────────────────────────────── */
function MarqueeItem({ tech }: { tech: (typeof TECH_ICONS)[0] }) {
  return (
    <div
      className="flex-shrink-0 flex items-center"
      style={{ gap: "10px", padding: "0 24px" }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        dangerouslySetInnerHTML={{ __html: tech.svg }}
      />
      <span
        className="font-mono whitespace-nowrap"
        style={{
          fontSize: "12.5px",
          color: tech.color,
          fontWeight: 600,
          letterSpacing: "0.03em",
          textShadow: `0 0 10px ${tech.color}55`,
        }}
      >
        {tech.name}
      </span>
      <span style={{ marginLeft: "16px", color: "#21262D", fontSize: "16px", lineHeight: 1 }}>
        /
      </span>
    </div>
  );
}

/* ─── Skill Chip ────────────────────────────────────────────────────── */
function SkillChip({
  name,
  level,
  cfg,
  delay,
}: {
  name: string;
  level: number;
  cfg: CategoryConfig;
  delay: number;
}) {
  const brand = SKILL_BRAND[name];
  const chipColor = brand?.color ?? cfg.accent;
  const abbr = brand?.abbr ?? name.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <div
        className="rounded-lg transition-all duration-200 cursor-default"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 12px",
          background: "#0D1117",
          border: "1px solid #30363D",
          borderRadius: "10px",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = `${chipColor}55`;
          el.style.boxShadow = `0 0 14px ${chipColor}22`;
          el.style.background = `${chipColor}0A`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "#30363D";
          el.style.boxShadow = "none";
          el.style.background = "#0D1117";
        }}
      >
        {/* Logo badge */}
        <div
          className="flex items-center justify-center font-mono font-bold flex-shrink-0"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "7px",
            background: `${chipColor}1A`,
            border: `1px solid ${chipColor}44`,
            color: chipColor,
            fontSize: "8.5px",
            letterSpacing: "0.04em",
            boxShadow: `0 0 8px ${chipColor}22`,
          }}
        >
          {abbr}
        </div>

        {/* Skill name */}
        <span
          className="font-sans flex-1 truncate"
          style={{ fontSize: "11.5px", color: "#C9D1D9", fontWeight: 500 }}
        >
          {name}
        </span>

        {/* Level badge */}
        <span
          className="font-mono font-semibold flex-shrink-0"
          style={{
            fontSize: "10px",
            color: chipColor,
            background: `${chipColor}14`,
            border: `1px solid ${chipColor}33`,
            borderRadius: "5px",
            padding: "3px 6px",
            letterSpacing: "0.04em",
          }}
        >
          {level}%
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Skills Section ────────────────────────────────────────────────── */
export default function Skills() {
  const doubled = [...TECH_ICONS, ...TECH_ICONS];

  return (
    <section id="skills" className="relative section-padding overflow-hidden w-full max-w-full">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div
        className="absolute top-1/3 left-0 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] max-w-full rounded-full pointer-events-none"
        style={{
          background: "rgba(0,255,136,0.03)",
          filter: "blur(130px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] max-w-full rounded-full pointer-events-none"
        style={{
          background: "rgba(0,212,255,0.03)",
          filter: "blur(130px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Section Heading ─────────────────────────────── */}
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#00FF88",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#00FF88" }} />
            TECHNICAL SKILLS
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#00FF88" }} />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold"
            style={{
              fontSize: "clamp(28px,5vw,46px)",
              color: "#E6EDF3",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Technical{" "}
            <span style={{ color: "#00FF88", textShadow: "0 0 32px rgba(0,255,136,0.35)" }}>
              Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              marginTop: "20px",
              marginBottom: "28px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-md transition-all duration-300 max-w-2xl"
              style={{
                background: "#161B22",
                border: "1px solid #21262D",
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.03)",
              }}
            >
              <p
                className="text-text-secondary text-xs sm:text-sm md:text-base font-mono leading-relaxed text-center"
                style={{ textWrap: "balance" }}
              >
                <span style={{ color: "#00FF88", fontWeight: 700, marginRight: "8px" }}>//</span>
                Modern technologies, frameworks, and tools I use to engineer robust applications
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Marquee Ticker ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "52px" }}
        >
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              background: "#161B22",
              border: "1px solid #21262D",
            }}
          >
            {/* Terminal header bar */}
            <div
              style={{
                padding: "0 16px",
                height: "30px",
                background: "#0D1117",
                borderBottom: "1px solid #21262D",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA41", display: "inline-block" }} />
              <span className="font-mono" style={{ fontSize: "10px", color: "#8B949E", marginLeft: "10px", letterSpacing: "0.08em" }}>
                tech_stack.sh
              </span>
              <span className="font-mono ml-auto" style={{ fontSize: "9px", color: "#30363D" }}>
                live • always updating
              </span>
            </div>

            {/* Marquee track with fade edges */}
            <div style={{ position: "relative", padding: "16px 0", overflow: "hidden" }}>
              {/* Left fade */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "80px",
                  background: "linear-gradient(to right, #161B22, transparent)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              {/* Right fade */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "80px",
                  background: "linear-gradient(to left, #161B22, transparent)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              {/* Scrolling row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  animation: "skillsMarquee 40s linear infinite",
                  willChange: "transform",
                  minWidth: "max-content",
                }}
              >
                {doubled.map((tech, i) => (
                  <MarqueeItem key={`${tech.name}-${i}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Skill Category Cards ─────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = iconMap[category.icon] || Monitor;
            const cfg = categoryConfig[category.title] ?? fallbackCfg;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                style={{ height: "100%" }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col box-border transition-all duration-300"
                  style={{
                    background: "#161B22",
                    border: "1px solid #21262D",
                    padding: "22px 22px 18px 22px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = cfg.hoverBorder;
                    el.style.boxShadow = cfg.hoverShadow;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#21262D";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* ── Card Header ───────────────────── */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      paddingBottom: "16px",
                      borderBottom: `1px solid ${cfg.accent}20`,
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: cfg.iconBg,
                        border: `1.5px solid ${cfg.iconBorder}`,
                        color: cfg.iconColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-bold" style={{ fontSize: "17px", color: "#E6EDF3" }}>
                        {category.title}
                      </h3>
                      <p
                        className="font-mono"
                        style={{ fontSize: "10.5px", color: cfg.accent, marginTop: "3px", letterSpacing: "0.05em" }}
                      >
                        {category.skills.length} core technologies
                      </p>
                    </div>

                    {/* Active badge */}
                    <div
                      className="font-mono text-[10px] font-semibold flex items-center gap-1.5 ml-auto"
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#0D1117",
                        color: cfg.accent,
                        border: `1px solid ${cfg.accent}40`,
                        boxShadow: `0 0 10px ${cfg.accent}18`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
                        style={{
                          background: cfg.accent,
                          boxShadow: `0 0 6px ${cfg.accent}`,
                        }}
                      />
                      <span>ACTIVE</span>
                    </div>
                  </div>

                  {/* ── Skill Chips Grid ──────────────── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4 flex-1 content-start">
                    {category.skills.map((skill, skillIdx) => {
                      const isLastOdd =
                        category.skills.length % 2 !== 0 &&
                        skillIdx === category.skills.length - 1;
                      return (
                        <div
                          key={skill.name}
                          className={isLastOdd ? "sm:col-span-2" : ""}
                        >
                          <SkillChip
                            name={skill.name}
                            level={skill.level}
                            cfg={cfg}
                            delay={catIdx * 0.08 + skillIdx * 0.04}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* ── Card Footer ───────────────────── */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "14px",
                      borderTop: "1px solid #21262D",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span className="font-mono" style={{ fontSize: "9.5px", color: "#8B949E" }}>
                      <span style={{ color: cfg.accent }}>✓</span>{" "}
                      {category.skills.length} modules loaded —
                    </span>
                    <span className="font-mono" style={{ fontSize: "9.5px", color: cfg.accent }}>
                      proficiency verified
                    </span>
                    <span
                      className="animate-blink font-mono ml-auto"
                      style={{ fontSize: "12px", color: cfg.accent }}
                    >
                      _
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Terminal Pill ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center"
          style={{ marginTop: "52px" }}
        >
          <div
            className="inline-flex items-center font-mono"
            style={{
              gap: "10px",
              padding: "14px 26px",
              borderRadius: "999px",
              background: "#161B22",
              border: "1px solid #21262D",
              fontSize: "13px",
              color: "#8B949E",
              boxShadow: "0 0 20px rgba(0,255,136,0.05)",
            }}
          >
            <span style={{ color: "#00FF88", fontWeight: 700 }}>{">"}</span>
            Always learning, always building
            <span className="animate-blink" style={{ color: "#00FF88" }}>_</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes skillsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
