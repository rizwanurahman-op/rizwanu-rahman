"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Code, Folder, Building2, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/data";

function DeveloperSystemConsole() {
  const [activeTab, setActiveTab] = React.useState<"logs" | "specs">("logs");
  const [isScanning, setIsScanning] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [logs, setLogs] = React.useState<string[]>([
    "rizwanu.initSystem({ env: 'production', mode: 'fullstack' })",
    "→ Verification: 15+ Core Technologies & Frameworks [ACTIVE]",
    "→ Architecture: Clean, Scalable, Component-Driven Design [VERIFIED]",
    "→ Performance Benchmark: 99.8% Efficiency & Fast Response Time",
    "→ Ready for new engineering projects and collaborations...",
  ]);

  const handleDiagnosticScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    const newLogs = [
      "Executing system diagnostics scanner v3.4.2...",
      "✔ Inspecting React.js & Next.js App Router state... OK",
      "✔ Checking TypeScript static types & interface definitions... 0 ERRORS",
      "✔ Verifying API endpoints & backend data flow... 24ms AVG",
      "✔ Optimization scan complete: System operating at peak performance!",
    ];

    setLogs(["$ rizwanu --run-diagnostics --verbose"]);
    newLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === newLogs.length - 1) {
          setIsScanning(false);
        }
      }, (index + 1) * 450);
    });
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(
      `Developer Spec: Rizwanu Rahman | Full Stack Software Engineer | 3+ Years Exp | React, Next.js, Node.js, TypeScript`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Console Header Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#21262D] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
          </div>
          <span className="font-mono text-xs text-[#00FF88] font-semibold flex items-center gap-1.5">
            <span>rizwanu_runtime_env.sh</span>
            {isScanning && <span className="animate-pulse text-[#00D4FF] text-[10px]">[SCANNING]</span>}
          </span>
        </div>

        {/* Console Mode Switcher */}
        <div className="flex items-center gap-1 bg-[#0D1117] p-1 rounded-lg border border-[#21262D]">
          <button
            onClick={() => setActiveTab("logs")}
            className={`font-mono text-[11px] px-3 py-1 rounded-md transition-all ${activeTab === "logs"
              ? "bg-[#161B22] text-[#00FF88] border border-[rgba(0,255,136,0.3)] shadow-[0_0_12px_rgba(0,255,136,0.15)] font-semibold"
              : "text-[#8B949E] hover:text-[#C9D1D9]"
              }`}
          >
            Live Logs
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`font-mono text-[11px] px-3 py-1 rounded-md transition-all ${activeTab === "specs"
              ? "bg-[#161B22] text-[#00D4FF] border border-[rgba(0,212,255,0.3)] shadow-[0_0_12px_rgba(0,212,255,0.15)] font-semibold"
              : "text-[#8B949E] hover:text-[#C9D1D9]"
              }`}
          >
            System Specs
          </button>
        </div>
      </div>

      {/* Tab 1: Live Terminal Log Console */}
      {activeTab === "logs" ? (
        <div className="bg-[#0D1117] rounded-xl p-4 border border-[#21262D] font-mono text-xs leading-relaxed space-y-2.5 min-h-[190px] flex flex-col justify-between">
          <div className="space-y-2 max-h-[160px] overflow-y-auto scrollbar-none">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[#00FF88] shrink-0 font-bold">$</span>
                <span
                  className={`break-words ${log.startsWith("✔")
                    ? "text-[#00FF88]"
                    : log.startsWith("Executing")
                      ? "text-[#FBB924]"
                      : "text-[#C9D1D9]"
                    }`}
                >
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#21262D]/60 text-[11px] text-[#8B949E]">
            <span className="flex items-center gap-1.5 text-[#00FF88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-ping" />
              Runtime Active
            </span>
            <button
              onClick={handleDiagnosticScan}
              disabled={isScanning}
              className="px-3 py-1 rounded-md bg-[#161B22] hover:bg-[#21262D] text-[#00FF88] border border-[rgba(0,255,136,0.3)] transition-all font-semibold hover:shadow-[0_0_12px_rgba(0,255,136,0.2)] disabled:opacity-50"
            >
              {isScanning ? "Scanning System..." : "▶ Run Diagnostics"}
            </button>
          </div>
        </div>
      ) : (
        /* Tab 2: System Spec Dashboard */
        <div className="bg-[#0D1117] rounded-xl p-4 border border-[#21262D] space-y-3 font-mono text-xs min-h-[190px]">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2.5 rounded-lg bg-[#161B22] border border-[#21262D]">
              <span className="text-[#8B949E] text-[10px] block">CODE QUALITY</span>
              <span className="text-[#00FF88] font-bold text-sm">100% Type-Safe</span>
              <div className="w-full bg-[#21262D] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#00FF88] h-full rounded-full w-[100%] shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#161B22] border border-[#21262D]">
              <span className="text-[#8B949E] text-[10px] block">AVG API LATENCY</span>
              <span className="text-[#00D4FF] font-bold text-sm">~24ms TTFB</span>
              <div className="w-full bg-[#21262D] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#00D4FF] h-full rounded-full w-[92%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#161B22] border border-[#21262D]">
              <span className="text-[#8B949E] text-[10px] block">ARCHITECTURE</span>
              <span className="text-[#B44AFF] font-bold text-sm">Clean & Modular</span>
              <div className="w-full bg-[#21262D] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#B44AFF] h-full rounded-full w-[96%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#161B22] border border-[#21262D]">
              <span className="text-[#8B949E] text-[10px] block">CI/CD DEPLOY</span>
              <span className="text-[#FBB924] font-bold text-sm">99.9% Uptime</span>
              <div className="w-full bg-[#21262D] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#FBB924] h-full rounded-full w-[99%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[#8B949E]">System Environment: Production Ready</span>
            <button
              onClick={handleCopySpec}
              className="px-3 py-1 rounded-md bg-[#161B22] hover:bg-[#21262D] text-[#00D4FF] border border-[rgba(0,212,255,0.3)] transition-all font-semibold hover:shadow-[0_0_12px_rgba(0,212,255,0.2)]"
            >
              {copied ? "✓ Spec Copied!" : "📋 Copy Spec"}
            </button>
          </div>
        </div>
      )}

      {/* Metrics Footnote Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-center">
        <div className="p-2 rounded-lg bg-[#161B22] border border-[#21262D]">
          <span className="text-[10px] text-[#8B949E] block">SYSTEM ROLE</span>
          <span className="text-xs font-bold text-[#00FF88]">Full Stack Eng.</span>
        </div>
        <div className="p-2 rounded-lg bg-[#161B22] border border-[#21262D]">
          <span className="text-[10px] text-[#8B949E] block">EXPERIENCE</span>
          <span className="text-xs font-bold text-[#00D4FF]">3+ Years</span>
        </div>
        <div className="p-2 rounded-lg bg-[#161B22] border border-[#21262D]">
          <span className="text-[10px] text-[#8B949E] block">WORK STATUS</span>
          <span className="text-xs font-bold text-[#FBB924]">Open for Roles</span>
        </div>
      </div>
    </div>
  );
}

const statConfig: Record<string, {
  color: string;
  bg: string;
  border: string;
  glow: string;
  shadow: string;
}> = {
  "Years Experience": {
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.1)",
    border: "rgba(0, 255, 136, 0.25)",
    glow: "rgba(0, 255, 136, 0.4)",
    shadow: "0 8px 32px rgba(0, 255, 136, 0.12)",
  },
  "Projects Delivered": {
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.1)",
    border: "rgba(0, 212, 255, 0.25)",
    glow: "rgba(0, 212, 255, 0.4)",
    shadow: "0 8px 32px rgba(0, 212, 255, 0.12)",
  },
  "Technologies": {
    color: "#B44AFF",
    bg: "rgba(180, 74, 255, 0.1)",
    border: "rgba(180, 74, 255, 0.25)",
    glow: "rgba(180, 74, 255, 0.4)",
    shadow: "0 8px 32px rgba(180, 74, 255, 0.12)",
  },
  "Companies": {
    color: "#FBB924",
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.25)",
    glow: "rgba(251, 191, 36, 0.4)",
    shadow: "0 8px 32px rgba(251, 191, 36, 0.12)",
  },
};

const fallbackStatCfg = statConfig["Years Experience"];

export default function About() {
  const iconMap: Record<string, React.ElementType> = {
    calendar: Calendar,
    folder: Folder,
    code: Code,
    building: Building2,
  };

  return (
    <section id="about" className="relative section-padding overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/4 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon/3 blur-[120px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] max-w-full rounded-full bg-neon-purple/3 blur-[120px] md:blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="About"
          highlight="Me"
          subtitle="A passionate developer who loves turning complex ideas into elegant, scalable web solutions"
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Bio & Heatmap Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Bio Card */}
            <div
              className="rounded-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                background: "#161B22",
                border: "1px solid #21262D",
                padding: "22px 22px 18px 22px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 255, 136, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#21262D";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header Window Bar */}
              <div
                className="flex items-center justify-between"
                style={{
                  marginBottom: "16px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid rgba(33, 38, 45, 0.9)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span
                    className="font-mono text-xs ml-2"
                    style={{ color: "#8B949E" }}
                  >
                    developer_profile.tsx
                  </span>
                </div>
                <div
                  className="font-mono text-xs font-semibold flex items-center gap-2"
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
                  <span>mode: fullstack</span>
                </div>
              </div>

              {/* Bio Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0, 255, 136, 0.1)",
                      border: "1.5px solid rgba(0, 255, 136, 0.25)",
                      color: "#00FF88",
                      boxShadow: "0 0 16px rgba(0, 255, 136, 0.05)",
                    }}
                  >
                    <Code size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className="font-bold leading-tight"
                      style={{ fontSize: "20px", color: "#E6EDF3" }}
                    >
                      {personalInfo.name}
                    </h3>
                    <p
                      className="font-mono"
                      style={{ fontSize: "12px", color: "#00FF88", marginTop: "3px" }}
                    >
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                <p
                  className="font-sans leading-relaxed"
                  style={{ fontSize: "14px", color: "#C9D1D9", lineHeight: "1.7" }}
                >
                  {personalInfo.bio}
                </p>

                {/* Metadata Grid Chips */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3"
                  style={{
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(33, 38, 45, 0.9)",
                  }}
                >
                  <div
                    className="flex items-center gap-2.5 font-mono"
                    style={{ fontSize: "12px", color: "#8B949E" }}
                  >
                    <MapPin size={15} style={{ color: "#00FF88" }} className="shrink-0" />
                    <span>{personalInfo.location.split(",")[0]}, Kerala</span>
                  </div>
                  <div
                    className="flex items-center gap-2.5 font-mono"
                    style={{ fontSize: "12px", color: "#8B949E" }}
                  >
                    <Briefcase size={15} style={{ color: "#00D4FF" }} className="shrink-0" />
                    <span>3+ Years Exp.</span>
                  </div>
                  <div
                    className="flex items-center gap-2.5 font-mono"
                    style={{ fontSize: "12px", color: "#8B949E" }}
                  >
                    <Calendar size={15} style={{ color: "#B44AFF" }} className="shrink-0" />
                    <span>Available Now</span>
                  </div>
                  <div
                    className="flex items-center gap-2.5 font-mono"
                    style={{ fontSize: "12px", color: "#8B949E" }}
                  >
                    <Terminal size={15} style={{ color: "#FBB924" }} className="shrink-0" />
                    <span>20+ Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Heatmap Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="rounded-2xl transition-all duration-500 relative overflow-hidden"
                style={{
                  background: "#161B22",
                  border: "1px solid #21262D",
                  padding: "20px 22px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 255, 136, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#21262D";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <DeveloperSystemConsole />
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-5 content-start"
          >
            {stats.map((stat, i) => {
              const IconComponent = iconMap[stat.icon] || Code;
              const cfg = statConfig[stat.label] ?? fallbackStatCfg;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <div
                    className="rounded-2xl transition-all duration-500 flex flex-col items-center justify-center text-center relative overflow-hidden"
                    style={{
                      background: "#161B22",
                      border: "1px solid #21262D",
                      padding: "22px 18px",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cfg.border;
                      e.currentTarget.style.boxShadow = cfg.shadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#21262D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Icon Box */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        marginBottom: "16px",
                        background: cfg.bg,
                        border: `1.5px solid ${cfg.border}`,
                        color: cfg.color,
                        boxShadow: `0 0 16px ${cfg.bg}`,
                      }}
                    >
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>

                    {/* Stat Value */}
                    <p
                      className="font-mono font-extrabold tracking-tight"
                      style={{
                        fontSize: "32px",
                        color: cfg.color,
                        marginBottom: "6px",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>

                    {/* Stat Label */}
                    <p
                      className="font-sans font-medium"
                      style={{ fontSize: "12px", color: "#8B949E" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
