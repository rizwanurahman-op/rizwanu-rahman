"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Shield,
  TrendingUp,
  FileText,
  PenTool,
  Car,
  Coffee,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  bot: Bot,
  shield: Shield,
  "trending-up": TrendingUp,
  "file-text": FileText,
  "pen-tool": PenTool,
  car: Car,
  coffee: Coffee,
};

/* All design tokens as plain CSS values — guaranteed rendering in Tailwind v4 */
const categoryConfig: Record<string, {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  bannerGlow: string;
  cardHoverShadow: string;
  cardHoverBorder: string;
  spotlightColor: string;
}> = {
  "AI / ML": {
    badgeBg: "rgba(0,255,136,0.1)",
    badgeText: "#00FF88",
    badgeBorder: "rgba(0,255,136,0.3)",
    iconBg: "rgba(0,255,136,0.1)",
    iconBorder: "rgba(0,255,136,0.25)",
    iconColor: "#00FF88",
    bannerGlow: "rgba(0,255,136,0.08)",
    cardHoverShadow: "0 8px 40px rgba(0,255,136,0.14)",
    cardHoverBorder: "rgba(0,255,136,0.4)",
    spotlightColor: "rgba(0,255,136,0.07)",
  },
  "Cybersecurity": {
    badgeBg: "rgba(0,212,255,0.1)",
    badgeText: "#00D4FF",
    badgeBorder: "rgba(0,212,255,0.3)",
    iconBg: "rgba(0,212,255,0.1)",
    iconBorder: "rgba(0,212,255,0.25)",
    iconColor: "#00D4FF",
    bannerGlow: "rgba(0,212,255,0.07)",
    cardHoverShadow: "0 8px 40px rgba(0,212,255,0.14)",
    cardHoverBorder: "rgba(0,212,255,0.4)",
    spotlightColor: "rgba(0,212,255,0.06)",
  },
  "Marketing Tech": {
    badgeBg: "rgba(180,74,255,0.1)",
    badgeText: "#B44AFF",
    badgeBorder: "rgba(180,74,255,0.3)",
    iconBg: "rgba(180,74,255,0.1)",
    iconBorder: "rgba(180,74,255,0.25)",
    iconColor: "#B44AFF",
    bannerGlow: "rgba(180,74,255,0.07)",
    cardHoverShadow: "0 8px 40px rgba(180,74,255,0.14)",
    cardHoverBorder: "rgba(180,74,255,0.4)",
    spotlightColor: "rgba(180,74,255,0.06)",
  },
  "Enterprise": {
    badgeBg: "rgba(251,191,36,0.1)",
    badgeText: "#FBB924",
    badgeBorder: "rgba(251,191,36,0.3)",
    iconBg: "rgba(251,191,36,0.1)",
    iconBorder: "rgba(251,191,36,0.25)",
    iconColor: "#FBB924",
    bannerGlow: "rgba(251,191,36,0.07)",
    cardHoverShadow: "0 8px 40px rgba(251,191,36,0.14)",
    cardHoverBorder: "rgba(251,191,36,0.4)",
    spotlightColor: "rgba(251,191,36,0.06)",
  },
  "Web Platform": {
    badgeBg: "rgba(0,212,255,0.1)",
    badgeText: "#00D4FF",
    badgeBorder: "rgba(0,212,255,0.3)",
    iconBg: "rgba(0,212,255,0.1)",
    iconBorder: "rgba(0,212,255,0.25)",
    iconColor: "#00D4FF",
    bannerGlow: "rgba(0,212,255,0.07)",
    cardHoverShadow: "0 8px 40px rgba(0,212,255,0.14)",
    cardHoverBorder: "rgba(0,212,255,0.4)",
    spotlightColor: "rgba(0,212,255,0.06)",
  },
};

const fallbackCfg = categoryConfig["AI / ML"];

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="relative section-padding overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute top-1/3 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] max-w-full rounded-full bg-neon-purple/3 blur-[120px] md:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon/3 blur-[120px] md:blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Featured"
          highlight="Projects"
          subtitle="A selection of high-impact web, AI, and security platforms built with modern architectures"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="sync">
            {visibleProjects.map((project, i) => {
              const IconComponent = iconMap[project.icon] || Bot;
              const cfg = categoryConfig[project.category] ?? fallbackCfg;
              const num = String(i + 1).padStart(2, "0");

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i < 6 ? i * 0.06 : (i - 6) * 0.08 }}
                  className="group"
                >
                  {/* ── CARD SHELL ─────────────────────────── */}
                  <div
                    className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    style={{ background: "#161B22", border: "1px solid #21262D" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cfg.cardHoverBorder;
                      e.currentTarget.style.boxShadow = cfg.cardHoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#21262D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* ── BANNER ─────────────────────────────── */}
                    <div
                      className="relative flex-shrink-0 flex items-center justify-center overflow-hidden"
                      style={{
                        height: "180px",
                        background: "linear-gradient(145deg, #1C2333 0%, #0D1117 100%)",
                        borderBottom: "1px solid rgba(33,38,45,0.9)",
                      }}
                    >
                      {project.image ? (
                        <div className="relative w-full h-full overflow-hidden group/img">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(13,17,23,0.2) 0%, rgba(13,17,23,0.85) 100%)",
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          {/* Subtle grid texture */}
                          <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

                          {/* Radial spotlight glow centred on icon */}
                          <div
                            className="absolute pointer-events-none"
                            style={{
                              inset: 0,
                              background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${cfg.spotlightColor}, transparent 70%)`,
                            }}
                          />

                          {/* Bottom-edge glow on hover */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                              background: `radial-gradient(ellipse 80% 50% at 50% 110%, ${cfg.bannerGlow}, transparent 60%)`,
                            }}
                          />

                          {/* Icon box */}
                          <div
                            className="relative z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                            style={{
                              width: "72px",
                              height: "72px",
                              borderRadius: "18px",
                              background: cfg.iconBg,
                              border: `1.5px solid ${cfg.iconBorder}`,
                              color: cfg.iconColor,
                              boxShadow: `0 0 24px ${cfg.bannerGlow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
                            }}
                          >
                            <IconComponent size={32} strokeWidth={1.5} />
                          </div>
                        </>
                      )}

                      {/* Project number — top left */}
                      <span
                        className="absolute font-mono z-20"
                        style={{
                          top: "12px",
                          left: "14px",
                          fontSize: "10px",
                          color: project.image ? "#E6EDF3" : "rgba(110,118,129,0.8)",
                          background: project.image ? "rgba(13,17,23,0.8)" : "transparent",
                          padding: project.image ? "3px 8px" : "0",
                          borderRadius: "4px",
                          letterSpacing: "0.15em",
                          backdropFilter: project.image ? "blur(4px)" : "none",
                          border: project.image ? "1px solid rgba(255,255,255,0.1)" : "none",
                        }}
                      >
                        #{num}
                      </span>

                      {/* Category badge — top right */}
                      <div
                        className="absolute font-mono font-semibold uppercase z-20 flex items-center gap-1.5"
                        style={{
                          top: "12px",
                          right: "12px",
                          fontSize: "9px",
                          letterSpacing: "0.08em",
                          padding: "4px 9px",
                          borderRadius: "6px",
                          background: "#0D1117",
                          color: cfg.badgeText,
                          border: `1px solid ${cfg.badgeBorder}`,
                          boxShadow: `0 0 10px ${cfg.badgeBg}`,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
                          style={{
                            background: cfg.badgeText,
                            boxShadow: `0 0 6px ${cfg.badgeText}`,
                          }}
                        />
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* ── BODY ───────────────────────────────── */}
                    <div
                      className="flex-1 flex flex-col"
                      style={{ padding: "22px 22px 18px 22px" }}
                    >
                      {/* Title */}
                      <h3
                        className="font-bold leading-snug"
                        style={{
                          fontSize: "15px",
                          marginBottom: "10px",
                          color: "#E6EDF3",
                          transition: "color 0.25s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = cfg.iconColor;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#E6EDF3";
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="font-sans flex-1"
                        style={{
                          fontSize: "12.5px",
                          lineHeight: "1.68",
                          marginBottom: "16px",
                          color: "#8B949E",
                        }}
                      >
                        {project.longDescription}
                      </p>

                      {/* Tech tags — first tag uses category accent */}
                      <div
                        className="flex flex-wrap"
                        style={{ gap: "6px", marginBottom: "16px" }}
                      >
                        {project.techStack.map((tech, ti) => (
                          <span
                            key={tech}
                            className="font-mono"
                            style={{
                              fontSize: "10px",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              background: ti === 0 ? cfg.badgeBg : "rgba(22,27,34,0.8)",
                              color: ti === 0 ? cfg.badgeText : "#8B949E",
                              border: ti === 0 ? `1px solid ${cfg.badgeBorder}` : "1px solid #30363D",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer button — Live Demo or Enterprise indicator */}
                      <div
                        className="flex items-center"
                        style={{
                          paddingTop: "14px",
                          borderTop: "1px solid #21262D",
                        }}
                      >
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center font-mono font-semibold"
                            style={{
                              gap: "6px",
                              fontSize: "12px",
                              padding: "8px 16px",
                              borderRadius: "8px",
                              color: cfg.badgeText,
                              background: cfg.badgeBg,
                              border: `1px solid ${cfg.badgeBorder}`,
                              cursor: "pointer",
                              transition: "all 0.25s ease-in-out",
                              boxShadow: `0 0 10px ${cfg.bannerGlow}`,
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget;
                              el.style.boxShadow = `0 0 18px ${cfg.badgeBorder}`;
                              el.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget;
                              el.style.boxShadow = `0 0 10px ${cfg.bannerGlow}`;
                              el.style.transform = "none";
                            }}
                          >
                            <ArrowUpRight size={14} />
                            Live Demo
                          </a>
                        ) : (
                          <span
                            className="w-full flex items-center justify-center font-mono font-medium opacity-60 select-none"
                            style={{
                              gap: "6px",
                              fontSize: "11px",
                              padding: "8px 16px",
                              borderRadius: "8px",
                              color: "#6E7681",
                              background: "rgba(22, 27, 34, 0.6)",
                              border: "1px solid #21262D",
                            }}
                          >
                            Enterprise Application
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── SHOW MORE / SHOW LESS BUTTON ─────────────────────── */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center w-full"
            style={{
              marginTop: "32px",
              paddingBottom: "12px",
            }}
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group relative font-mono font-semibold flex items-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer"
              style={{
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "13px",
                background: "#0D1117",
                color: showAllProjects ? "#8B949E" : "#00FF88",
                border: showAllProjects ? "1px solid #30363D" : "1px solid rgba(0, 255, 136, 0.4)",
                boxShadow: showAllProjects ? "none" : "0 0 20px rgba(0, 255, 136, 0.15)",
              }}
              onMouseEnter={(e) => {
                if (!showAllProjects) {
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(0, 255, 136, 0.25)";
                }
              }}
              onMouseLeave={(e) => {
                if (!showAllProjects) {
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.15)";
                }
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse inline-block shadow-[0_0_8px_#00FF88]" />
              <span>{showAllProjects ? "Show Less Projects" : `Show All Projects (${projects.length})`}</span>
              {showAllProjects ? (
                <ChevronUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
