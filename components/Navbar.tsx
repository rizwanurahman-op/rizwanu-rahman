"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: isScrolled ? "12px 24px" : "20px 24px",
          background: isScrolled
            ? "rgba(13, 17, 23, 0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(33, 38, 45, 0.9)"
            : "1px solid transparent",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.4)" : "none",
        }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="flex items-center group"
            style={{ padding: "4px 8px", gap: "6px" }}
          >
            <span
              className="font-mono font-bold"
              style={{ fontSize: "22px", color: "#00FF88" }}
            >
              &lt;
            </span>
            <span
              className="font-mono font-bold tracking-wider group-hover:transition-colors duration-300"
              style={{ fontSize: "22px", color: "#E6EDF3" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00FF88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#E6EDF3";
              }}
            >
              RZ
            </span>
            <span
              className="font-mono font-bold"
              style={{ fontSize: "22px", color: "#00FF88" }}
            >
              /&gt;
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="relative font-mono transition-all duration-200 flex items-center"
                  style={{
                    fontSize: "13px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    color: isActive ? "#00FF88" : "#8B949E",
                    background: isActive ? "rgba(0, 255, 136, 0.1)" : "transparent",
                    border: isActive ? "1px solid rgba(0, 255, 136, 0.25)" : "1px solid transparent",
                    boxShadow: isActive ? "0 0 12px rgba(0, 255, 136, 0.08)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#E6EDF3";
                      e.currentTarget.style.background = "rgba(22, 27, 34, 0.8)";
                      e.currentTarget.style.borderColor = "#30363D";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#8B949E";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex items-center justify-center transition-all duration-200"
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              background: "#161B22",
              border: "1px solid #21262D",
              color: isMobileOpen ? "#00FF88" : "#8B949E",
            }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(13, 17, 23, 0.8)",
                backdropFilter: "blur(12px)",
              }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <div
              className="absolute right-0 top-0 bottom-0 w-72 flex flex-col justify-between"
              style={{
                background: "#161B22",
                borderLeft: "1px solid #21262D",
                padding: "80px 24px 32px 24px",
                boxShadow: "-12px 0 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p
                  className="font-mono text-xs mb-2 flex items-center gap-2"
                  style={{ color: "#6E7681", paddingLeft: "8px" }}
                >
                  <Terminal size={12} style={{ color: "#00FF88" }} />
                  navigation_menu
                </p>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="font-mono flex items-center transition-all duration-200"
                      style={{
                        fontSize: "14px",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        gap: "10px",
                        color: isActive ? "#00FF88" : "#C9D1D9",
                        background: isActive ? "rgba(0, 255, 136, 0.1)" : "transparent",
                        border: isActive ? "1px solid rgba(0, 255, 136, 0.25)" : "1px solid transparent",
                      }}
                    >
                      <span style={{ color: "#00FF88", fontWeight: 700 }}>{">"}</span>
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div
                className="font-mono text-xs text-center"
                style={{
                  paddingTop: "16px",
                  borderTop: "1px solid #21262D",
                  color: "#6E7681",
                }}
              >
                rizwanu@portfolio v2.0
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
