"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  prefix?: string;
}

export default function TypewriterText({
  texts,
  speed = 70,
  deleteSpeed = 35,
  pauseTime = 2200,
  className = "",
  prefix = "",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const fullText = texts[currentIndex] || "";

    if (phase === "typing") {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("deleting");
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase("typing");
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, phase, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {prefix && <span style={{ color: "#00FF88", fontWeight: 700 }}>{prefix}</span>}
      <span
        style={{
          background: "linear-gradient(135deg, #00FF88 0%, #00D4FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
          filter: "drop-shadow(0 0 16px rgba(0, 255, 136, 0.35))",
        }}
      >
        {displayText}
      </span>
      <span
        className="animate-blink font-mono"
        style={{
          color: "#00FF88",
          fontWeight: 700,
          marginLeft: "2px",
          textShadow: "0 0 12px #00FF88",
        }}
      >
        _
      </span>
    </span>
  );
}
