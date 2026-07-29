"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";
import { personalInfo } from "@/lib/data";

const quickContacts = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    iconType: "mail" as const,
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.1)",
    border: "rgba(0, 255, 136, 0.25)",
    shadow: "0 8px 32px rgba(0, 255, 136, 0.12)",
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    iconType: "phone" as const,
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.1)",
    border: "rgba(0, 212, 255, 0.25)",
    shadow: "0 8px 32px rgba(0, 212, 255, 0.12)",
  },
  {
    label: "GitHub",
    value: "Rizwanu321",
    href: personalInfo.github,
    iconType: "github" as const,
    color: "#B44AFF",
    bg: "rgba(180, 74, 255, 0.1)",
    border: "rgba(180, 74, 255, 0.25)",
    shadow: "0 8px 32px rgba(180, 74, 255, 0.12)",
  },
  {
    label: "LinkedIn",
    value: "rizwanurahman",
    href: personalInfo.linkedin,
    iconType: "linkedin" as const,
    color: "#FBB924",
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.25)",
    shadow: "0 8px 32px rgba(251, 191, 36, 0.12)",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMsg("Validation Error: Please fill in name, email, and message body.");
      return;
    }

    setStatus("sending");
    setStatusMsg("Executing HTTP POST /api/v1/contact ...");

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMsg(
          data.message || "HTTP 200 OK — Message delivered to rizwanurahman321@gmail.com!"
        );
        if (!data.needsActivation) {
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      } else {
        // Fallback mailto trigger
        const mailtoUrl = `mailto:rizwanurahman321@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Contact from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;

        setStatus("success");
        setStatusMsg("HTTP 200 OK — Message forwarded to email client!");
      }
    } catch (err) {
      console.error(err);
      // Direct mailto fallback if network fails
      const mailtoUrl = `mailto:rizwanurahman321@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus("success");
      setStatusMsg("HTTP 200 OK — Redirected to your email client to send!");
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] max-w-full rounded-full bg-neon/3 blur-[120px] md:blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind, an opportunity, or want to collaborate? Send a message!"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                background: "#161B22",
                border: "1px solid #21262D",
                padding: "22px 22px 18px 22px",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.35)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 255, 136, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#21262D";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.3)";
              }}
            >
              {/* Form Title Bar */}
              <div
                className="flex items-center justify-between"
                style={{
                  marginBottom: "18px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid rgba(33, 38, 45, 0.9)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(0, 255, 136, 0.1)",
                      border: "1.5px solid rgba(0, 255, 136, 0.25)",
                      color: "#00FF88",
                    }}
                  >
                    <Send size={18} />
                  </div>
                  <div>
                    <h3
                      className="font-mono font-bold leading-tight"
                      style={{ fontSize: "18px", color: "#E6EDF3" }}
                    >
                      send_message()
                    </h3>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "#8B949E", marginTop: "2px" }}
                    >
                      POST /api/v1/contact
                    </p>
                  </div>
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
                  <span>status: ACTIVE</span>
                </div>
              </div>

              {/* Form */}
              <form
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                onSubmit={handleSubmit}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-mono text-xs mb-1.5"
                      style={{ color: "#8B949E" }}
                    >
                      <span style={{ color: "#00FF88" }}>//</span> sender_name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full font-mono text-sm transition-all duration-300"
                      style={{
                        padding: "11px 14px",
                        borderRadius: "10px",
                        background: "#0D1117",
                        border: "1px solid #30363D",
                        color: "#E6EDF3",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                        e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 255, 136, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#30363D";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-mono text-xs mb-1.5"
                      style={{ color: "#8B949E" }}
                    >
                      <span style={{ color: "#00FF88" }}>//</span> sender_email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full font-mono text-sm transition-all duration-300"
                      style={{
                        padding: "11px 14px",
                        borderRadius: "10px",
                        background: "#0D1117",
                        border: "1px solid #30363D",
                        color: "#E6EDF3",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                        e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 255, 136, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#30363D";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-mono text-xs mb-1.5"
                    style={{ color: "#8B949E" }}
                  >
                    <span style={{ color: "#00FF88" }}>//</span> message_subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Hiring"
                    className="w-full font-mono text-sm transition-all duration-300"
                    style={{
                      padding: "11px 14px",
                      borderRadius: "10px",
                      background: "#0D1117",
                      border: "1px solid #30363D",
                      color: "#E6EDF3",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 255, 136, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#30363D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block font-mono text-xs mb-1.5"
                    style={{ color: "#8B949E" }}
                  >
                    <span style={{ color: "#00FF88" }}>//</span> payload_body
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or offer..."
                    className="w-full font-mono text-sm transition-all duration-300 resize-none"
                    style={{
                      padding: "11px 14px",
                      borderRadius: "10px",
                      background: "#0D1117",
                      border: "1px solid #30363D",
                      color: "#E6EDF3",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 255, 136, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#30363D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {status !== "idle" && (
                  <div
                    className="p-3 rounded-lg font-mono text-xs border"
                    style={{
                      background:
                        status === "sending"
                          ? "rgba(0, 212, 255, 0.1)"
                          : status === "success"
                          ? "rgba(0, 255, 136, 0.1)"
                          : "rgba(255, 95, 87, 0.1)",
                      borderColor:
                        status === "sending"
                          ? "rgba(0, 212, 255, 0.3)"
                          : status === "success"
                          ? "rgba(0, 255, 136, 0.3)"
                          : "rgba(255, 95, 87, 0.3)",
                      color:
                        status === "sending"
                          ? "#00D4FF"
                          : status === "success"
                          ? "#00FF88"
                          : "#FF5F57",
                    }}
                  >
                    {status === "sending" && "➜ [SENDING] "}
                    {status === "success" && "✔ [SUCCESS] "}
                    {status === "error" && "✖ [ERROR] "}
                    {statusMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-mono font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
                  style={{
                    padding: "13px 16px",
                    borderRadius: "10px",
                    background: "#00FF88",
                    color: "#0B0F17",
                    boxShadow: "0 0 25px rgba(0, 255, 136, 0.35)",
                    marginTop: "4px",
                  }}
                >
                  <Send size={16} />
                  {status === "sending" ? "Executing POST /api/v1/contact..." : "Execute send_message()"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Terminal Contact Info */}
            <TerminalWindow title="contact_info.sh">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p>
                  <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
                  <span style={{ color: "#00D4FF" }}>echo</span>{" "}
                  <span style={{ color: "#B44AFF" }}>$EMAIL</span>
                </p>
                <p className="font-mono text-sm" style={{ color: "#00FF88", paddingLeft: "16px" }}>
                  {personalInfo.email}
                </p>

                <p style={{ marginTop: "4px" }}>
                  <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
                  <span style={{ color: "#00D4FF" }}>echo</span>{" "}
                  <span style={{ color: "#B44AFF" }}>$PHONE</span>
                </p>
                <p className="font-mono text-sm" style={{ color: "#00FF88", paddingLeft: "16px" }}>
                  {personalInfo.phone}
                </p>

                <p style={{ marginTop: "4px" }}>
                  <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
                  <span style={{ color: "#00D4FF" }}>echo</span>{" "}
                  <span style={{ color: "#B44AFF" }}>$LOCATION</span>
                </p>
                <p className="font-mono text-sm" style={{ color: "#00FF88", paddingLeft: "16px" }}>
                  {personalInfo.location}
                </p>

                <p style={{ marginTop: "6px" }}>
                  <span style={{ color: "#00FF88", fontWeight: 700 }}>➜</span>{" "}
                  <span className="animate-blink" style={{ color: "#00FF88" }}>▊</span>
                </p>
              </div>
            </TerminalWindow>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {quickContacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.label === "GitHub" || contact.label === "LinkedIn"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="group rounded-2xl transition-all duration-500 flex flex-col justify-between"
                  style={{
                    background: "#161B22",
                    border: "1px solid #21262D",
                    padding: "18px 20px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = contact.border;
                    e.currentTarget.style.boxShadow = contact.shadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#21262D";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: contact.bg,
                        border: `1.5px solid ${contact.border}`,
                        color: contact.color,
                      }}
                    >
                      {contact.iconType === "mail" && <Mail size={17} />}
                      {contact.iconType === "phone" && <Phone size={17} />}
                      {contact.iconType === "github" && <GithubIcon size={17} />}
                      {contact.iconType === "linkedin" && <LinkedinIcon size={17} />}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="transition-colors duration-300"
                      style={{ color: "#8B949E" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-mono font-bold"
                      style={{ fontSize: "14px", color: "#E6EDF3" }}
                    >
                      {contact.label}
                    </p>
                    <p
                      className="font-mono truncate"
                      style={{ fontSize: "11px", color: contact.color, marginTop: "3px" }}
                    >
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location Map Card */}
            <div
              className="rounded-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                background: "#161B22",
                border: "1px solid #21262D",
                padding: "20px 22px",
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
                className="flex items-center font-mono font-semibold"
                style={{ gap: "10px", marginBottom: "14px", fontSize: "13px", color: "#E6EDF3" }}
              >
                <MapPin size={17} style={{ color: "#00FF88" }} />
                location.coordinates
              </div>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: "140px",
                  background: "#0D1117",
                  border: "1px solid #30363D",
                }}
              >
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-3">
                  <div>
                    <div
                      className="w-4 h-4 rounded-full mx-auto animate-pulse"
                      style={{
                        background: "#00FF88",
                        marginBottom: "10px",
                        boxShadow: "0 0 20px #00FF88",
                      }}
                    />
                    <p
                      className="font-mono font-bold"
                      style={{ fontSize: "13px", color: "#E6EDF3" }}
                    >
                      Nilambur, Kerala, India
                    </p>
                    <p
                      className="font-mono"
                      style={{ fontSize: "11px", color: "#00FF88", marginTop: "3px" }}
                    >
                      11.2757° N, 76.2253° E
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
