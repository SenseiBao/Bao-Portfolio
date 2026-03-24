"use client";

import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiPython,
  SiDocker,
} from "react-icons/si";

const skills = [
  { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: SiCss, label: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { Icon: SiExpress, label: "Express.js", color: "#ffffff" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6"
      style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: avatar + bio */}
          <div className="flex flex-col gap-8">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start">
              <div
                className="w-44 h-44 rounded-full overflow-hidden relative flex-shrink-0"
                style={{
                  border: "3px solid rgba(224,92,119,0.6)",
                  boxShadow: "0 0 35px rgba(224,92,119,0.2)",
                }}
              >
                <Image
                  src="/images/avatar.png"
                  alt="Bao Pham"
                  fill
                  className="object-cover object-top"
                  sizes="176px"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
                I&apos;m a Computer Science student at the{" "}
                <span style={{ color: "#e05c77" }}>University of Virginia</span>{" "}
                with a passion for machine learning, AI, and full-stack &amp; back-end
                development. I&apos;ve applied that hands-on through an internship at{" "}
                <span style={{ color: "#e05c77" }}>Raytheon</span>{" "}
                in Huntsville, where I worked as a Systems Integration &amp; Testing Engineer
                on radar systems. I&apos;m actively building toward a career as a Software
                or Systems Engineer, one project at a time.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
                Outside of the keyboard, I&apos;ve been playing piano for 17 years, spend time
                at the gym, collect and solve Rubik&apos;s cubes, and enjoy a good game of
                bowling. I believe the same drive that gets you to the gym or through a tough
                solve is what makes you a better engineer.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 text-sm font-semibold tracking-wider transition-all duration-200"
                style={{
                  background: "#e05c77",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                HIRE ME
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2.5 text-sm font-semibold tracking-wider transition-all duration-200"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                RESUME
              </a>
            </div>
          </div>

          {/* Right: skills grid */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{ color: "#fff" }}
            >
              Technologies &amp; Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skills.map(({ Icon, label, color }) => (
                <div key={label} className="skill-card">
                  <Icon size={32} color={color} />
                  <span
                    className="text-xs font-medium text-center"
                    style={{ color: "#aaa" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
