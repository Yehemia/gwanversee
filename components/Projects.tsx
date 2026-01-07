"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { ExternalLink, Github } from "lucide-react";
import { projects, Project } from "@/data/projects";

// Tech icon mapping
const techIcons: Record<string, React.ElementType> = {
  Java: FaJava,
  JavaFX: FaJava,
  MySQL: SiMysql,
  Flutter: SiFlutter,
  Dart: SiDart,
  React: SiReact,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
};

export default function ProjectsSplitScreen() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section id="projects" className="relative z-10 min-h-screen ">
      {/* Section Header */}
      <div className="py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-sm uppercase tracking-widest mb-4"
        >
          Selected Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Projects
          </span>
        </motion.h2>
      </div>

      {/* Split Screen Container */}
      <div className="flex flex-col lg:flex-row min-h-[80vh] max-w-7xl mx-auto px-4 gap-8">
        {/* Left Side - Fixed Screenshot */}
        <div className="lg:w-[55%] lg:sticky lg:top-24 lg:h-[70vh]">
          <div className="relative w-full h-[300px] lg:h-full rounded-3xl overflow-hidden bg-[#111] border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Active project title overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                  {activeProject.category}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Project List */}
        <div className="lg:w-[45%] flex flex-col gap-4 pb-20">
          {projects.map((project, index) => {
            const isActive = activeProject.id === project.id;
            const spotlightColor =
              index % 2 === 0
                ? "rgba(0, 229, 255, 0.15)"
                : "rgba(255, 0, 200, 0.15)";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveProject(project)}
                onClick={() => setActiveProject(project)}
              >
                <SpotlightCard
                  className={`cursor-pointer transition-all duration-300 p-6 ${
                    isActive
                      ? "bg-white/5 border-cyan-500/50"
                      : "bg-[#0A0A0A] border-white/5 hover:border-white/20"
                  }`}
                  spotlightColor={spotlightColor}
                >
                  {/* Active Indicator */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-1 h-full min-h-[80px] rounded-full transition-all duration-300 ${
                        isActive ? "bg-cyan-400" : "bg-white/10"
                      }`}
                    />

                    <div className="flex-1">
                      {/* Project Number & Title */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/30 text-sm font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`text-xl font-bold transition-colors ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => {
                          const Icon = techIcons[tag];
                          return (
                            <div
                              key={tag}
                              className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full text-xs"
                            >
                              {Icon && (
                                <Icon className="w-3 h-3 text-cyan-400" />
                              )}
                              <span className="text-gray-300">{tag}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Action Links (if available) */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="flex gap-3 mt-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
