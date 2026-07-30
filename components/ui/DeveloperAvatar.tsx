"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Code2, Braces, Database, Globe, Cpu, Terminal } from "lucide-react";

const orbitIcons = [
  { icon: Code2, label: "React", color: "#61DAFB", angle: 0 },
  { icon: Braces, label: "TypeScript", color: "#3178C6", angle: 60 },
  { icon: Database, label: "MongoDB", color: "#47A248", angle: 120 },
  { icon: Globe, label: "Next.js", color: "#FFFFFF", angle: 180 },
  { icon: Cpu, label: "AI", color: "#B44AFF", angle: 240 },
  { icon: Terminal, label: "Node.js", color: "#00FF88", angle: 300 },
];

export default function DeveloperAvatar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center" style={{ width: "100%", maxWidth: 380, aspectRatio: "1/1", willChange: "auto" }}>
      {/* === Outermost Glow Ring === */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #00FF88, #00D4FF, #B44AFF, #FBB924, #00FF88)",
          opacity: 0.12,
          filter: "blur(40px)",
          willChange: "transform",
        }}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* === Rotating Dashed Orbit Ring (outer) === */}
      <motion.div
        className="absolute"
        style={{
          width: "92%",
          height: "92%",
          borderRadius: "50%",
          border: "1.5px dashed rgba(0, 255, 136, 0.15)",
          willChange: "transform",
        }}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* === Rotating Dashed Orbit Ring (inner) === */}
      <motion.div
        className="absolute"
        style={{
          width: "78%",
          height: "78%",
          borderRadius: "50%",
          border: "1px dashed rgba(0, 212, 255, 0.1)",
          willChange: "transform",
        }}
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* === Orbiting Tech Icons === */}
      <motion.div
        className="absolute"
        style={{ width: "92%", height: "92%", willChange: "transform" }}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {orbitIcons.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const radius = 46; // percentage from center
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "rgba(13, 17, 23, 0.9)",
                border: `1.5px solid ${item.color}33`,
                boxShadow: `0 0 12px ${item.color}20, inset 0 0 6px ${item.color}10`,
                backdropFilter: "blur(8px)",
              }}
              animate={shouldReduceMotion ? {} : { rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.3 }}
            >
              <Icon size={16} strokeWidth={1.5} style={{ color: item.color }} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* === Pulsing Glow Rings Behind Avatar === */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "62%",
          height: "62%",
          border: "2px solid rgba(0, 255, 136, 0.15)",
          boxShadow: "0 0 30px rgba(0, 255, 136, 0.08), inset 0 0 30px rgba(0, 255, 136, 0.05)",
        }}
        animate={shouldReduceMotion ? { scale: 1, opacity: 0.5 } : {
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: "68%",
          height: "68%",
          border: "1px solid rgba(0, 212, 255, 0.08)",
        }}
        animate={shouldReduceMotion ? { scale: 1, opacity: 0.3 } : {
          scale: [1.05, 0.95, 1.05],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* === Main Avatar Container === */}
      <div
        className="relative"
        style={{
          width: "58%",
          height: "58%",
          borderRadius: "50%",
        }}
      >
        {/* Animated Border Gradient */}
        <motion.div
          className="absolute -inset-[3px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #00FF88, #00D4FF, #B44AFF, #00FF88)",
            padding: "3px",
          }}
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full" style={{ background: "#0D1117" }} />
        </motion.div>

        {/* Avatar Image */}
        <div
          className="absolute inset-[4px] rounded-full overflow-hidden"
          style={{
            boxShadow: "0 0 40px rgba(0, 255, 136, 0.15), 0 0 80px rgba(0, 212, 255, 0.08)",
          }}
        >
          <Image
            src="/profile.png"
            alt="Rizwanu Rahman — Full Stack Developer"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 280px"
            priority
          />

          {/* === HUD Scan Line Effect === */}
          {/* Primary scan beam — visible glowing line that sweeps top to bottom */}
          <motion.div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent 0%, #00FF88 20%, #00FF88 80%, transparent 100%)",
              boxShadow: "0 0 8px 2px rgba(0, 255, 136, 0.5), 0 0 20px 4px rgba(0, 255, 136, 0.2)",
              zIndex: 2,
            }}
            animate={shouldReduceMotion ? { top: "50%" } : { top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          />

          {/* Scan beam trailing glow — soft gradient that follows the line */}
          <motion.div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              height: "40px",
              background: "linear-gradient(180deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.06) 40%, transparent 100%)",
              zIndex: 1,
            }}
            animate={shouldReduceMotion ? { top: "50%" } : { top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          />

          {/* CRT horizontal scan lines — subtle repeating pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.015) 2px, rgba(0, 255, 136, 0.015) 4px)",
              zIndex: 1,
            }}
          />

          {/* Subtle green overlay for techy tint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(0, 255, 136, 0.04) 0%, transparent 50%, rgba(0, 212, 255, 0.04) 100%)",
              mixBlendMode: "screen",
            }}
          />

          {/* Vignette — darkened edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, transparent 55%, rgba(10, 10, 15, 0.5) 100%)",
            }}
          />
        </div>

        {/* === Online Status Badge === */}
        <motion.div
          className="absolute flex items-center gap-1.5"
          style={{
            bottom: "8%",
            right: "-2%",
            padding: "5px 10px",
            borderRadius: "20px",
            background: "rgba(13, 17, 23, 0.95)",
            border: "1.5px solid rgba(0, 255, 136, 0.4)",
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.15)",
            backdropFilter: "blur(10px)",
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span
            className="inline-block rounded-full animate-pulse"
            style={{
              width: 7,
              height: 7,
              background: "#00FF88",
              boxShadow: "0 0 8px #00FF88, 0 0 16px rgba(0, 255, 136, 0.4)",
            }}
          />
          <span
            className="font-mono font-bold"
            style={{ fontSize: 10, color: "#00FF88", letterSpacing: "0.08em" }}
          >
            ONLINE
          </span>
        </motion.div>

        {/* === Version Badge (Top-Left) === */}
        <motion.div
          className="absolute"
          style={{
            top: "6%",
            left: "-4%",
            padding: "4px 9px",
            borderRadius: "8px",
            background: "rgba(13, 17, 23, 0.95)",
            border: "1.5px solid rgba(0, 212, 255, 0.35)",
            boxShadow: "0 0 14px rgba(0, 212, 255, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span
            className="font-mono font-bold"
            style={{ fontSize: 9, color: "#00D4FF", letterSpacing: "0.06em" }}
          >
            v3.0.0
          </span>
        </motion.div>
      </div>

      {/* === Corner Bracket Decorations === */}
      {/* Top-Left */}
      <div
        className="absolute"
        style={{
          top: "4%",
          left: "4%",
          width: 24,
          height: 24,
          borderTop: "2px solid rgba(0, 255, 136, 0.3)",
          borderLeft: "2px solid rgba(0, 255, 136, 0.3)",
        }}
      />
      {/* Top-Right */}
      <div
        className="absolute"
        style={{
          top: "4%",
          right: "4%",
          width: 24,
          height: 24,
          borderTop: "2px solid rgba(0, 212, 255, 0.3)",
          borderRight: "2px solid rgba(0, 212, 255, 0.3)",
        }}
      />
      {/* Bottom-Left */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          left: "4%",
          width: 24,
          height: 24,
          borderBottom: "2px solid rgba(180, 74, 255, 0.3)",
          borderLeft: "2px solid rgba(180, 74, 255, 0.3)",
        }}
      />
      {/* Bottom-Right */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          right: "4%",
          width: 24,
          height: 24,
          borderBottom: "2px solid rgba(251, 185, 36, 0.3)",
          borderRight: "2px solid rgba(251, 185, 36, 0.3)",
        }}
      />
    </div>
  );
}
