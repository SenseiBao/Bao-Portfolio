"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  devpostUrl?: string;
  repoUrl: string;
  color: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FormLogic",
    subtitle: "AI Fitness Coach · HooHacks 2026",
    description:
      "Real-time AI-powered workout form tracker — no wearables, no gym membership, just your webcam. Uses MediaPipe pose estimation to track squats, bicep curls, and pull-ups, automatically counting reps, measuring range of motion, and generating per-set coaching feedback. Includes strength progress tracking and a ChatGPT-powered coach with full access to your fitness history.",
    tags: ["Python", "MediaPipe", "OpenCV", "OpenAI API", "Tkinter"],
    devpostUrl: "https://devpost.com/software/form-logic",
    repoUrl: "https://github.com/SenseiBao/Form-Logic",
    color: "#10b981",
    screenshot: "/images/formlogic.png",
  },
  {
    id: 2,
    title: "Kinetic Keys",
    subtitle: "Motion-Controlled Gaming · HooHacks 2025",
    description:
      "Play Tetr.io and other games using only your body — no hands required. Maps real-time pose landmarks from your webcam to configurable keyboard and mouse inputs using MediaPipe and OpenCV. Comes with an interactive Tkinter GUI to remap any detected body movement to any key or mouse action.",
    tags: ["Python", "MediaPipe", "OpenCV", "Tkinter", "Pynput"],
    devpostUrl: "https://devpost.com/software/kinetic-keys",
    repoUrl: "https://github.com/liskarmsimp/kinetic-keys",
    color: "#a855f7",
    screenshot: "/images/kinetic-keys.png",
  },
  {
    id: 3,
    title: "AI Letter Generator",
    subtitle: "Generative Typography with cGAN",
    description:
      "Explores generative typography using Conditional Generative Adversarial Networks (cGAN). Generates 32×32 grayscale letters (A–Z) on demand using deep learning, with the long-term goal of extracting text from images and synthesizing custom fonts. Built in collaboration with Noah Cha.",
    tags: ["Python", "PyTorch", "cGAN", "Jupyter Notebook"],
    repoUrl: "https://github.com/SenseiBao/AI-Letter-Generator",
    color: "#f59e0b",
    screenshot: "/images/ai-letter-gen.png",
  },
  {
    id: 4,
    title: "Lock-In",
    subtitle: "Digital Card Game",
    description:
      "A digital implementation of the stack-based party card game Lock-In, built with React, Vite, and Tailwind CSS. Two teams compete with a Describer and Guessers — draw cards, roll dice for power-up rounds (Charades, Low Bandwidth, Simultaneous Guessing), and track scores live. Also features a digital dice mode and background music.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://lock-in-web-kappa.vercel.app/",
    repoUrl: "https://github.com/SenseiBao/Lock-In-Web",
    color: "#eab308",
    screenshot: "/images/lock-in.png",
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6"
      style={{ background: "linear-gradient(180deg, #16213e 0%, #1a1a2e 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading">Projects</h2>
        </div>

        {/* Project switcher tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all duration-200 border cursor-pointer"
              style={{
                background: i === activeProject ? p.color : "transparent",
                color: i === activeProject ? "#fff" : "#888",
                borderColor: i === activeProject ? p.color : "rgba(255,255,255,0.1)",
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Featured project display */}
        <div
          className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Screenshot left */}
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{ background: project.color + "11" }}
          >
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              width={800}
              height={600}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay for readability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent 85%, rgba(15,15,35,0.6))`,
              }}
            />
            {/* Color accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 z-10"
              style={{ background: project.color }}
            />
          </div>

          {/* Info right */}
          <div
            className="p-10 flex flex-col justify-center"
            style={{ background: "rgba(15,15,35,0.8)" }}
          >
            <h3 className="text-2xl font-bold mb-1" style={{ color: "#fff" }}>
              {project.title}
            </h3>
            <p
              className="text-base font-medium mb-6"
              style={{ color: project.color }}
            >
              {project.subtitle}
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#aaa" }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    background: project.color + "22",
                    color: project.color,
                    border: `1px solid ${project.color}44`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-8 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live App
                </a>
              )}
              {project.devpostUrl && (
                <a
                  href={project.devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Devpost
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project grid (all projects small) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className="text-left p-5 rounded-xl transition-all duration-200 cursor-pointer"
              style={{
                background:
                  i === activeProject
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.025)",
                border:
                  i === activeProject
                    ? `1px solid ${p.color}55`
                    : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-6 h-1 rounded mb-3"
                style={{ background: p.color }}
              />
              <h4 className="text-sm font-bold mb-1" style={{ color: "#fff" }}>
                {p.title}
              </h4>
              <p className="text-xs" style={{ color: "#666" }}>
                {p.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
