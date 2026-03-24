"use client";

import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 fade-in-up">
        <h1
          className="text-4xl md:text-6xl font-light mb-4"
          style={{ color: "#fff", letterSpacing: "-0.5px" }}
        >
          Hello, I&apos;m{" "}
          <span style={{ color: "#e05c77" }} className="font-semibold">
            Bao
          </span>
          .
        </h1>
        <p
          className="text-2xl md:text-4xl font-light mb-10"
          style={{ color: "#ddd" }}
        >
          I&apos;m an aspiring software engineer.
        </p>

        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer"
          style={{
            color: "#fff",
            border: "1.5px solid rgba(255,255,255,0.5)",
            background: "transparent",
            letterSpacing: "2px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e05c77";
            (e.currentTarget as HTMLButtonElement).style.color = "#e05c77";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.5)";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
        >
          View my work{" "}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: "fadeInUp 1.5s ease 0.8s both" }}
      >
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, transparent, #e05c77)",
          }}
        />
      </div>
    </section>
  );
}
