"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Terminal,
  Code2,
  Braces,
  Database,
  Globe,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import TypewriterText from "@/components/ui/TypewriterText";
import TerminalWindow from "@/components/ui/TerminalWindow";
import TerminalJsonTyper from "@/components/ui/TerminalJsonTyper";
import DeveloperAvatar from "@/components/ui/DeveloperAvatar";
import { personalInfo } from "@/lib/data";

const floatingIcons = [
  { icon: Code2, label: "React", delay: 0, x: "5%", y: "22%" },
  { icon: Braces, label: "TypeScript", delay: 0.5, x: "91%", y: "18%" },
  { icon: Database, label: "Node.js", delay: 1, x: "5%", y: "68%" },
  { icon: Globe, label: "Next.js", delay: 1.5, x: "92%", y: "62%" },
  { icon: Cpu, label: "AI", delay: 2, x: "82%", y: "82%" },
  { icon: Terminal, label: "Dev", delay: 2.5, x: "15%", y: "82%" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full max-w-full lg:min-h-screen lg:flex lg:items-center lg:justify-center"
      style={{
        paddingTop: "128px",
        paddingBottom: "80px",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[750px] h-[320px] sm:h-[500px] md:h-[750px] max-w-full rounded-full bg-neon/5 blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[250px] md:w-[380px] h-[200px] sm:h-[250px] md:h-[380px] max-w-full rounded-full bg-neon-cyan/5 blur-[90px] md:blur-[110px] pointer-events-none" />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden xl:flex items-center gap-2 text-text-muted/30 pointer-events-none select-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon size={28} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 order-first lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
              style={{ marginBottom: "32px" }}
            >
              {/* Status: Open for Opportunities */}
              <div
                className="inline-flex items-center font-mono font-semibold text-xs"
                style={{
                  gap: "10px",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#0D1117",
                  color: "#00FF88",
                  border: "1px solid rgba(0, 255, 136, 0.35)",
                  boxShadow: "0 0 16px rgba(0, 255, 136, 0.12)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse inline-block shadow-[0_0_8px_#00FF88]" />
                <span>status: OPEN_FOR_OPPORTUNITIES</span>
              </div>
              {/* Freelance Badge */}
              <div
                className="inline-flex items-center font-mono font-semibold text-xs"
                style={{
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#0D1117",
                  color: "#FBB924",
                  border: "1px solid rgba(251, 185, 36, 0.35)",
                  boxShadow: "0 0 16px rgba(251, 185, 36, 0.1)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#FBB924] animate-pulse inline-block shadow-[0_0_8px_#FBB924]" />
                <span>freelance: AVAILABLE</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
              className="text-text-secondary text-base md:text-lg mb-3 font-mono flex items-center gap-2"
            >
              <span style={{ color: "#00FF88", fontWeight: 700 }}>{">"}</span>
              Hello World, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]"
            >
              <span className="text-text-primary">{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span className="neon-text">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 min-h-[3rem] flex items-center"
            >
              <TypewriterText
                prefix="> "
                texts={[
                  "Full Stack Developer",
                  "Frontend Specialist",
                  "Freelance Developer",
                  "React & Next.js Expert",
                  "UI/UX Enthusiast",
                  "AI Integration Developer",
                ]}
                speed={65}
                deleteSpeed={35}
                pauseTime={2200}
                className="font-mono"
              />
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              className="font-sans max-w-xl leading-relaxed"
              style={{
                fontSize: "15px",
                color: "#8B949E",
                marginBottom: "40px",
                lineHeight: "1.7",
              }}
            >
              Crafting high-performance web experiences with modern technologies.
              Specializing in React, Next.js, TypeScript, and AI-powered applications.
              Also available as a{" "}
              <span style={{ color: "#FBB924", fontWeight: 600 }}>freelance developer</span>
              {" "}— shipping production-ready apps for clients worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5"
              style={{ marginBottom: "40px" }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative font-bold rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.98]"
                style={{
                  padding: "16px 28px",
                  background: "#00FF88",
                  color: "#0B0F17",
                  boxShadow: "0 0 25px rgba(0, 255, 136, 0.35)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3 font-mono text-sm tracking-wide">
                  <Code2 size={18} />
                  View Projects
                </span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-semibold rounded-xl transition-all duration-300 active:scale-[0.98]"
                style={{
                  padding: "15px 28px",
                  background: "transparent",
                  color: "#00FF88",
                  border: "1px solid rgba(0, 255, 136, 0.35)",
                  boxShadow: "0 0 15px rgba(0, 255, 136, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 136, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 255, 136, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.05)";
                }}
              >
                <span className="flex items-center gap-3 font-mono text-sm tracking-wide">
                  <Download size={18} />
                  Download CV
                </span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-5 max-w-xl"
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(33, 38, 45, 0.9)",
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: "13px", color: "#6E7681", letterSpacing: "0.05em" }}
              >
                {"//"} Find me on
              </span>
              <div className="flex items-center gap-3">
                {[
                  { href: personalInfo.github, icon: <GithubIcon size={18} />, label: "GitHub", target: "_blank", rel: "noopener noreferrer" },
                  { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
                  { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="rounded-xl transition-all duration-300 flex items-center justify-center"
                    style={{
                      padding: "12px 14px",
                      background: "#161B22",
                      border: "1px solid #21262D",
                      color: "#8B949E",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00FF88";
                      e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.4)";
                      e.currentTarget.style.background = "rgba(0, 255, 136, 0.08)";
                      e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8B949E";
                      e.currentTarget.style.borderColor = "#21262D";
                      e.currentTarget.style.background = "#161B22";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content — Avatar + Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 order-last lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Developer Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full flex justify-center"
            >
              <DeveloperAvatar />
            </motion.div>

            {/* Terminal Window */}
            <div className="animate-float-slow max-w-lg mx-auto lg:max-w-none w-full">
              <TerminalWindow title="rizwanu@dev ~ %">
                <TerminalJsonTyper />
              </TerminalWindow>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-scroll hidden md:block"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-neon transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll down</span>
          <ArrowDown size={14} />
        </a>
      </motion.div>
    </section>
  );
}
