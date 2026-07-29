"use client";

import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  hoverEffect = true,
}: GlowCardProps) {
  return (
    <div
      className={`
        relative rounded-xl p-6 
        bg-surface-light border border-border
        transition-all duration-500 ease-out
        ${
          hoverEffect
            ? "hover:border-neon/40 hover:shadow-[0_0_15px_rgba(0,255,136,0.1),0_0_30px_rgba(0,255,136,0.05)] hover:-translate-y-1"
            : ""
        }
        ${className}
      `}
    >
      {hoverEffect && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
