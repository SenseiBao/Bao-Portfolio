"use client";

import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socials = [
  { Icon: SiGithub, label: "GitHub", href: "https://github.com/SenseiBao/" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/bao-pham1/" },
  { Icon: HiMail, label: "Email", href: "mailto:baodpham29@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px",
    color: "#fff",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6"
      style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f23 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold" style={{ color: "#fff" }}>
              Let&apos;s work together.
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#aaa" }}>
              I&apos;m currently open to new opportunities. Whether you have a
              project idea, a question, or just want to say hi — my inbox is
              always open. I&apos;ll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: "rgba(224,92,119,0.12)",
                      border: "1px solid rgba(224,92,119,0.2)",
                    }}
                  >
                    <Icon size={18} color="#e05c77" />
                  </div>
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: "#bbb" }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "sent" ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-4 rounded-xl p-10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(224,92,119,0.2)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(224,92,119,0.15)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e05c77" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold" style={{ color: "#fff" }}>
                  Message Sent!
                </h4>
                <p className="text-sm text-center" style={{ color: "#aaa" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2 text-sm font-semibold rounded cursor-pointer"
                  style={{ background: "#e05c77", color: "#fff", border: "none" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "#888" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#e05c77")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "#888" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#e05c77")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "#888" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#e05c77")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3 text-sm font-bold tracking-wider uppercase rounded transition-all duration-200 cursor-pointer"
                  style={{
                    background: status === "sending" ? "rgba(224,92,119,0.5)" : "#e05c77",
                    color: "#fff",
                    border: "none",
                    alignSelf: "flex-start",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-20 pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "#555",
          }}
        >
          Designed &amp; Built by <span style={{ color: "#e05c77" }}>Bao</span> &mdash; {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
