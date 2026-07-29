"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/lib/data";

const certConfig = [
  {
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.1)",
    border: "rgba(0, 255, 136, 0.25)",
    shadow: "0 8px 32px rgba(0, 255, 136, 0.12)",
    hoverBorder: "rgba(0, 255, 136, 0.4)",
  },
  {
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.1)",
    border: "rgba(0, 212, 255, 0.25)",
    shadow: "0 8px 32px rgba(0, 212, 255, 0.12)",
    hoverBorder: "rgba(0, 212, 255, 0.4)",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative section-padding overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/3 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon/3 blur-[120px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon-cyan/3 blur-[120px] md:blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Education &"
          highlight="Certifications"
          subtitle="Academic degree credentials and professional technology certifications"
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Education Timeline Column */}
          <div className="lg:col-span-7">
            <div
              className="flex items-center"
              style={{ gap: "12px", marginBottom: "28px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(0, 255, 136, 0.1)",
                  border: "1.5px solid rgba(0, 255, 136, 0.25)",
                  color: "#00FF88",
                }}
              >
                <GraduationCap size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="font-mono font-bold leading-tight"
                  style={{ fontSize: "18px", color: "#E6EDF3" }}
                >
                  education.log
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "#8B949E", marginTop: "2px" }}
                >
                  Academic Credentials
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute top-6 bottom-6 w-[2px] pointer-events-none"
                style={{
                  left: "11px",
                  background: "linear-gradient(180deg, #00FF88 0%, rgba(0, 255, 136, 0.2) 100%)",
                  opacity: 0.6,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative group"
                    style={{ paddingLeft: "42px" }}
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className="absolute z-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        left: "2px",
                        top: "22px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#0D1117",
                        border: "2px solid #00FF88",
                        boxShadow: "0 0 12px rgba(0, 255, 136, 0.6)",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#00FF88",
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
                        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 255, 136, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#21262D";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                        style={{ marginBottom: "12px" }}
                      >
                        <div>
                          <h4
                            className="font-bold leading-snug"
                            style={{ fontSize: "17px", color: "#E6EDF3" }}
                          >
                            {edu.degree}
                          </h4>
                          <p
                            className="font-mono font-semibold"
                            style={{ fontSize: "13px", color: "#00FF88", marginTop: "4px" }}
                          >
                            {edu.institution}
                          </p>
                        </div>
                        <span
                          className="font-mono font-bold shrink-0 flex items-center gap-1.5"
                          style={{
                            fontSize: "12px",
                            padding: "5px 12px",
                            borderRadius: "8px",
                            background: "#0D1117",
                            color: "#00FF88",
                            border: "1px solid rgba(0, 255, 136, 0.35)",
                            boxShadow: "0 0 12px rgba(0, 255, 136, 0.1)",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] inline-block shadow-[0_0_6px_#00FF88]" />
                          <span>{edu.grade} {edu.gradeType === "CGPA" ? "CGPA" : ""}</span>
                        </span>
                      </div>
                      <div
                        className="flex items-center font-mono"
                        style={{ gap: "6px", fontSize: "12px", color: "#8B949E", marginTop: "8px" }}
                      >
                        <Calendar size={14} style={{ color: "#00FF88" }} />
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5">
            <div
              className="flex items-center"
              style={{ gap: "12px", marginBottom: "28px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(0, 212, 255, 0.1)",
                  border: "1.5px solid rgba(0, 212, 255, 0.25)",
                  color: "#00D4FF",
                }}
              >
                <Award size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="font-mono font-bold leading-tight"
                  style={{ fontSize: "18px", color: "#E6EDF3" }}
                >
                  certs.log
                </h3>
                <p
                  className="font-mono text-xs"
                  style={{ color: "#8B949E", marginTop: "2px" }}
                >
                  Verified Technical Certifications
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {certifications.map((cert, i) => {
                const cfg = certConfig[i % certConfig.length];

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div
                      className="rounded-2xl transition-all duration-500 relative overflow-hidden"
                      style={{
                        background: "#161B22",
                        border: "1px solid #21262D",
                        padding: "20px 22px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cfg.hoverBorder;
                        e.currentTarget.style.boxShadow = cfg.shadow;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#21262D";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center" style={{ gap: "16px" }}>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: cfg.bg,
                            border: `1.5px solid ${cfg.border}`,
                            color: cfg.color,
                            boxShadow: `0 0 16px ${cfg.bg}`,
                          }}
                        >
                          <Award size={22} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4
                            className="font-bold leading-snug"
                            style={{ fontSize: "15px", color: "#E6EDF3" }}
                          >
                            {cert.title}
                          </h4>
                          <p
                            className="font-mono font-semibold"
                            style={{ fontSize: "12px", color: cfg.color, marginTop: "4px" }}
                          >
                            Issued by {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Engineering Philosophy Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  className="rounded-2xl transition-all duration-500 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, #161B22 100%)",
                    border: "1px solid rgba(0, 255, 136, 0.2)",
                    padding: "20px 22px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.4)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 255, 136, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p
                    className="font-mono text-xs flex items-center gap-2"
                    style={{ color: "#00FF88", marginBottom: "10px" }}
                  >
                    <Terminal size={14} />
                    engineering_philosophy.md
                  </p>
                  <p
                    className="font-sans leading-relaxed"
                    style={{ fontSize: "13px", color: "#8B949E", lineHeight: "1.68" }}
                  >
                    <span style={{ color: "#00FF88", fontWeight: 700 }}>{">"}</span>{" "}
                    Continuously expanding engineering capabilities through competitive programming, active open-source engagement, and real-world system architectural challenges.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
