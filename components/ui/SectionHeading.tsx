"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={isCenter ? "text-center" : "text-left"}
      style={{ marginBottom: "56px" }}
    >
      {/* Decorative Eyebrow */}
      <div
        className={`flex items-center gap-1.5 sm:gap-3 mb-3 md:mb-4 ${isCenter ? "justify-center" : "justify-start"
          }`}
      >
        <div className="h-px w-4 sm:w-8 md:w-14 bg-gradient-to-r from-transparent to-neon/60 shrink-0" />
        <span className="text-neon font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold flex items-center gap-1 sm:gap-1.5 text-center">
          <span className="text-neon-cyan font-bold">&lt;</span>
          <span>{title} {highlight}</span>
          <span className="text-neon-cyan font-bold">/&gt;</span>
        </span>
        <div className="h-px w-4 sm:w-8 md:w-14 bg-gradient-to-l from-transparent to-neon/60 shrink-0" />
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
        <span>{title} </span>
        <span className="neon-text">{highlight}</span>
      </h2>

      {/* Subtitle Tech Badge Container */}
      {subtitle && (
        <div
          style={{
            marginTop: "16px",
            marginBottom: "28px",
            display: "flex",
            justifyContent: isCenter ? "center" : "flex-start",
            width: "100%",
          }}
        >
          <div
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full backdrop-blur-md transition-all duration-300 max-w-2xl"
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
              <span style={{ color: "#00FF88", fontWeight: 700, marginRight: "8px" }}>{"//"}</span>
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

