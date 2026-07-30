"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

export default function TerminalJsonTyper() {
  const commandText = "cat about.json";
  const [typedCommand, setTypedCommand] = useState("");
  const [isCommandDone, setIsCommandDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isFullyDone, setIsFullyDone] = useState(false);

  const totalLines = 12; // Total JSON lines to reveal

  // Stage 1: Type out "cat about.json"
  useEffect(() => {
    if (typedCommand.length < commandText.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(commandText.slice(0, typedCommand.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsCommandDone(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand]);

  // Stage 2: Reveal JSON lines sequentially
  useEffect(() => {
    if (!isCommandDone) return;

    if (visibleLines < totalLines) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsFullyDone(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isCommandDone, visibleLines]);

  return (
    <div
      className="font-mono text-xs sm:text-sm leading-relaxed"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        minHeight: "310px",
      }}
    >
      {/* Command prompt row */}
      <p className="flex items-center gap-2">
        <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
        <span style={{ color: "#00D4FF" }}>~</span>{" "}
        {typedCommand.length > 0 && (
          <span>
            <span style={{ color: "#8B949E" }}>
              {typedCommand.slice(0, Math.min(3, typedCommand.length))}
            </span>
            {typedCommand.length > 3 && (
              <span style={{ color: "#E6EDF3" }}>{typedCommand.slice(3)}</span>
            )}
          </span>
        )}
        {!isCommandDone && (
          <span className="animate-blink" style={{ color: "#00FF88" }}>
            ▊
          </span>
        )}
      </p>

      {/* JSON output lines (revealed line by line) */}
      {isCommandDone && (
        <>
          {visibleLines >= 1 && <p style={{ color: "#6E7681" }}>{"{"}</p>}

          {visibleLines >= 2 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;name&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#00FF88" }}>
                &quot;{personalInfo.name}&quot;
              </span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 3 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;role&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#00FF88" }}>
                &quot;{personalInfo.title}&quot;
              </span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 4 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;mode&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#00D4FF" }}>&quot;fullstack | freelance&quot;</span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 5 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;location&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#00FF88" }}>&quot;Kerala, India&quot;</span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 6 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;skills&quot;</span>
              <span style={{ color: "#6E7681" }}>: [</span>
            </p>
          )}

          {visibleLines >= 7 && (
            <p className="pl-4 sm:pl-9 flex flex-wrap gap-x-1">
              <span style={{ color: "#00FF88" }}>&quot;React&quot;</span>
              <span style={{ color: "#6E7681" }}>, </span>
              <span style={{ color: "#00FF88" }}>&quot;Next.js&quot;</span>
              <span style={{ color: "#6E7681" }}>, </span>
              <span style={{ color: "#00FF88" }}>&quot;TypeScript&quot;</span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 8 && (
            <p className="pl-4 sm:pl-9 flex flex-wrap gap-x-1">
              <span style={{ color: "#00FF88" }}>&quot;Node.js&quot;</span>
              <span style={{ color: "#6E7681" }}>, </span>
              <span style={{ color: "#00FF88" }}>&quot;MongoDB&quot;</span>
              <span style={{ color: "#6E7681" }}>, </span>
              <span style={{ color: "#00FF88" }}>&quot;Tailwind&quot;</span>
            </p>
          )}

          {visibleLines >= 9 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#6E7681" }}>],</span>
            </p>
          )}

          {visibleLines >= 10 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;freelance&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#FBB924" }}>&quot;open_for_projects&quot;</span>
              <span style={{ color: "#6E7681" }}>,</span>
            </p>
          )}

          {visibleLines >= 11 && (
            <p style={{ paddingLeft: "20px" }}>
              <span style={{ color: "#B44AFF" }}>&quot;available&quot;</span>
              <span style={{ color: "#6E7681" }}>: </span>
              <span style={{ color: "#28C840" }}>true</span>
            </p>
          )}

          {visibleLines >= 12 && <p style={{ color: "#6E7681" }}>{"}"}</p>}

          {/* Final command prompt line */}
          {isFullyDone && (
            <p style={{ marginTop: "8px" }}>
              <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
              <span style={{ color: "#00D4FF" }}>~</span>{" "}
              <span className="animate-blink" style={{ color: "#00FF88" }}>
                ▊
              </span>
            </p>
          )}
        </>
      )}
    </div>
  );
}
