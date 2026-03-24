"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 15, 35, 0.97)"
          : "rgba(15, 15, 35, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(224,92,119,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-xl font-bold tracking-wide cursor-pointer"
          style={{ color: "#e05c77" }}
          onClick={() => handleClick("Home", "#home")}
        >
          Bao
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleClick(link.label, link.href)}
                className="text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{
                  color: active === link.label ? "#e05c77" : "#ccc",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "#e05c77" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4"
          style={{ background: "rgba(15,15,35,0.97)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.label, link.href)}
              className="block w-full text-left py-3 text-sm font-medium border-b bg-transparent border-none cursor-pointer"
              style={{
                color: active === link.label ? "#e05c77" : "#ccc",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
