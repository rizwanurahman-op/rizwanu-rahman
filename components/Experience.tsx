"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute top-1/3 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon/3 blur-[120px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon-cyan/3 blur-[120px] md:blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Work"
          highlight="Experience"
          subtitle="Building impactful, high-performance web products at innovative tech companies"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Connector Line */}
          <div
            className="absolute top-6 bottom-6 w-[2px] pointer-events-none"
            style={{
              left: "15px",
              background: "linear-gradient(180deg, #00FF88 0%, #00D4FF 50%, #21262D 100%)",
              opacity: 0.6,
            }}
          />

          {/* Cards Container */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {experiences.map((exp, index) => {
              const isCurrent = index === 0;
              const accentColor = isCurrent ? "#00FF88" : "#00D4FF";
              const accentBg = isCurrent ? "rgba(0, 255, 136, 0.1)" : "rgba(0, 212, 255, 0.1)";
              const accentBorder = isCurrent ? "rgba(0, 255, 136, 0.25)" : "rgba(0, 212, 255, 0.25)";
              const hoverShadow = isCurrent
                ? "0 8px 32px rgba(0, 255, 136, 0.12)"
                : "0 8px 32px rgba(0, 212, 255, 0.12)";
              const hoverBorder = isCurrent ? "rgba(0, 255, 136, 0.4)" : "rgba(0, 212, 255, 0.4)";

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                  style={{ paddingLeft: "48px" }}
                >
                  {/* Timeline Node Icon/Dot */}
                  <div
                    className="absolute z-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      left: "3px",
                      top: "22px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#0D1117",
                      border: `2px solid ${accentColor}`,
                      boxShadow: `0 0 14px ${accentColor}80`,
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: accentColor,
                      }}
                    />
                  </div>

                  {/* Card Shell */}
                  <div
                    className="rounded-2xl transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: "#161B22",
                      border: "1px solid #21262D",
                      padding: "22px 22px 18px 22px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = hoverBorder;
                      e.currentTarget.style.boxShadow = hoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#21262D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Header Top Row */}
                    <div
                      className="flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                      style={{ marginBottom: "16px" }}
                    >
                      <div>
                        {/* Role Title */}
                        <h3
                          className="font-bold leading-snug transition-colors duration-300"
                          style={{
                            fontSize: "20px",
                            color: "#E6EDF3",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = accentColor;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#E6EDF3";
                          }}
                        >
                          {exp.role}
                        </h3>

                        {/* Company & Metadata Chips */}
                        <div
                          className="flex flex-wrap items-center font-mono"
                          style={{ gap: "10px", marginTop: "6px", fontSize: "13px" }}
                        >
                          <span
                            className="font-semibold"
                            style={{ color: accentColor }}
                          >
                            @ {exp.company}
                          </span>
                          <span
                            className="flex items-center"
                            style={{ gap: "5px", color: "#8B949E" }}
                          >
                            <MapPin size={13} style={{ color: accentColor }} />
                            {exp.location}
                          </span>
                          <span
                            className="rounded-md"
                            style={{
                              padding: "2px 8px",
                              fontSize: "11px",
                              background: "rgba(33, 38, 45, 0.8)",
                              color: "#8B949E",
                              border: "1px solid #30363D",
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div
                        className="flex items-center font-mono font-semibold shrink-0"
                        style={{
                          gap: "8px",
                          fontSize: "12px",
                          padding: "6px 12px",
                          borderRadius: "8px",
                          background: "#0D1117",
                          color: accentColor,
                          border: `1px solid ${accentBorder}`,
                          boxShadow: `0 0 12px ${accentBg}`,
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full animate-pulse inline-block"
                          style={{
                            background: accentColor,
                            boxShadow: `0 0 8px ${accentColor}`,
                          }}
                        />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <div>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start font-sans"
                            style={{ gap: "10px", fontSize: "13.5px", lineHeight: "1.65", color: "#8B949E" }}
                          >
                            <span
                              className="font-mono flex-shrink-0"
                              style={{
                                color: accentColor,
                                fontSize: "14px",
                                marginTop: "1px",
                                fontWeight: 700,
                              }}
                            >
                              ▹
                            </span>
                            <span style={{ color: "#C9D1D9" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Footer */}
                    <div
                      className="flex flex-wrap items-center"
                      style={{
                        gap: "8px",
                        marginTop: "18px",
                        paddingTop: "14px",
                        borderTop: "1px solid #21262D",
                      }}
                    >
                      <span
                        className="font-mono flex items-center"
                        style={{
                          fontSize: "11px",
                          color: "#6E7681",
                          marginRight: "6px",
                          gap: "4px",
                        }}
                      >
                        <Terminal size={12} style={{ color: accentColor }} />
                        tech:
                      </span>
                      {exp.techStack.map((tech, ti) => (
                        <span
                          key={tech}
                          className="font-mono transition-colors duration-200"
                          style={{
                            fontSize: "11px",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            background: ti === 0 ? accentBg : "rgba(13, 17, 23, 0.7)",
                            color: ti === 0 ? accentColor : "#8B949E",
                            border: ti === 0 ? `1px solid ${accentBorder}` : "1px solid #30363D",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
