"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: "#161B22",
        border: "1px solid #21262D",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 255, 136, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#21262D";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: "14px 20px",
          background: "linear-gradient(135deg, #1C2333 0%, #161B22 100%)",
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
            {title}
          </span>
        </div>
        <span
          className="font-mono"
          style={{
            background: "rgba(0, 255, 136, 0.1)",
            color: "#00FF88",
            border: "1px solid rgba(0, 255, 136, 0.25)",
            fontSize: "10px",
            padding: "2px 8px",
            borderRadius: "999px",
          }}
        >
          zsh
        </span>
      </div>

      {/* Body */}
      <div
        className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto max-w-full"
        style={{
          color: "#E6EDF3",
        }}
      >
        {children}
      </div>
    </div>
  );
}
