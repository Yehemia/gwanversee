"use client";

import React, { useState } from "react";
import useSWR from "swr";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiSupabase,
  SiPrisma,
  SiGithub,
  SiVite,
  SiDocker,
  SiGo,
  SiUml,
  SiMysql,
  SiFlask,
  SiSvelte,
  SiBootstrap,
} from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
}

const SkillsTech = () => {
  const { data: contributionData, error } = useSWR<ContributionCalendar>(
    "/api/github",
    fetcher
  );

  const [activeCategory, setActiveCategory] = useState("All Skills");

  const skills = [
    {
      name: "React",
      icon: SiReact,
      category: "Frontend",
      color: "#61DAFB",
      desc: "Frontend Library",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "Frontend",
      color: "#ffffff",
      desc: "React Framework",
    },
    {
      name: "Svelte",
      icon: SiSvelte,
      category: "Frontend",
      color: "#FF3E00",
      desc: "JS Framework",
    }, // Using Vite as placeholder/generic or import Svelte if available
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Frontend",
      color: "#06B6D4",
      desc: "CSS Framework",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      category: "Frontend",
      color: "#7952B3",
      desc: "CSS Framework",
    }, // Placeholder
    {
      name: "Flutter",
      icon: SiFlutter,
      category: "Mobile",
      color: "#02569B",
      desc: "UI Toolkit",
    },
    {
      name: "Dart",
      icon: SiDart,
      category: "Mobile",
      color: "#0175C2",
      desc: "Language",
    },
    {
      name: "Hive",
      icon: SiFirebase,
      category: "Mobile",
      color: "#FFCA28",
      desc: "NoSQL DB",
    }, // Placeholder icon
    {
      name: "Provider",
      icon: SiFlutter,
      category: "Mobile",
      color: "#00ADD8",
      desc: "State Mgmt",
    }, // Placeholder icon
    {
      name: "Java",
      icon: SiVite,
      category: "Backend",
      color: "#007396",
      desc: "Language",
    }, // Placeholder
    {
      name: "Python",
      icon: SiPython,
      category: "Backend",
      color: "#3776AB",
      desc: "Language",
    },
    {
      name: "Flask",
      icon: SiFlask,
      category: "Backend",
      color: "",
      desc: "Microframework",
    }, // Placeholder
    {
      name: "MySQL",
      icon: SiMysql,
      category: "Backend",
      color: "#4479A1",
      desc: "Relational DB",
    }, // Placeholder
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "Backend",
      color: "#4169E1",
      desc: "Relational DB",
    },
    {
      name: "JavaFX",
      icon: SiVite,
      category: "Desktop",
      color: "#007396",
      desc: "GUI Framework",
    }, // Placeholder
    {
      name: "OOP",
      icon: SiVite,
      category: "Architecture",
      color: "#00ADD8",
      desc: "Paradigm",
    }, // Placeholder
    {
      name: "UML",
      icon: SiUml,
      category: "Architecture",
      color: "#00ADD8",
      desc: "Modeling",
    }, // Placeholder
    {
      name: "DB Design",
      icon: SiPostgresql,
      category: "Architecture",
      color: "#4479A1",
      desc: "Schema Design",
    }, // Placeholder
    {
      name: "MVC",
      icon: SiVite,
      category: "Architecture",
      color: "#00ADD8",
      desc: "Pattern",
    }, // Placeholder
    {
      name: "Layered Arch",
      icon: SiVite,
      category: "Architecture",
      color: "#00ADD8",
      desc: "Pattern",
    }, // Placeholder
    {
      name: "Git",
      icon: SiGit,
      category: "Tools",
      color: "#F05032",
      desc: "Version Control",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      category: "Tools",
      color: "#02569B",
      desc: "Hosting",
    }, // Reuse Git icon or specific Github
    {
      name: "VS Code",
      icon: SiVite,
      category: "Tools",
      color: "#007ACC",
      desc: "IDE",
    }, // Placeholder
  ];

  const categories = [
    "All Skills",
    "Frontend",
    "Mobile",
    "Backend & DB",
    "Desktop",
    "Architecture",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "All Skills"
      ? skills
      : skills.filter((skill) => {
          if (activeCategory === "Backend & DB")
            return skill.category === "Backend";
          return skill.category === activeCategory;
        });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 pb-40">
      {" "}
      {/* added extra padding bottom */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Explore My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Filter through my technical expertise by category. From building
          intuitive user interfaces to designing robust backend architectures.
        </p>
      </div>
      {/* GitHub Contribution Graph */}
      <div className="bg-[#111] border border-white/5 rounded-3xl p-8 mb-20 overflow-hidden relative group">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl">
              <SiGit className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Contribution Activity
              </h3>
              <p className="text-gray-400 text-sm">
                {contributionData?.totalContributions
                  ? `${contributionData.totalContributions} contributions in the last year`
                  : "Loading contributions..."}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 overflow-x-auto pb-4 custom-scrollbar">
          {contributionData ? (
            <div className="flex gap-[3px] min-w-max">
              {contributionData.weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day, dIndex) => {
                    // Normalize color for dark theme if needed, or use GitHub's colors directly
                    // Adjust logic to map GitHub colors to your theme if strict color matching is desired
                    // Using provided color or fallback
                    return (
                      <div
                        key={`${wIndex}-${dIndex}`}
                        className="w-[10px] h-[10px] rounded-[2px]"
                        style={{
                          backgroundColor:
                            day.contributionCount > 0 ? day.color : "#1f2937", // Fallback for 0 formatted nicely
                          opacity: day.contributionCount > 0 ? 0.8 : 0.3,
                        }}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[100px] flex items-center justify-center text-gray-500 animate-pulse">
              Loading GitHub Graph...
            </div>
          )}
        </div>
      </div>
      {/* Skills Filter & Grid */}
      <div className="space-y-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-white/10 text-white border-white/20 shadow-lg shadow-white/5"
                  : "bg-[#111] text-gray-400 border-white/5 hover:border-white/10 hover:text-white hover:bg-white/5"
              }`}
            >
              {/* You could add icons for categories here if needed */}
              {category}
            </button>
          ))}
        </div>

        {/* Grid/Flex Layout for Skills */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 pr-8 flex items-center gap-4 hover:border-white/10 transition-colors pointer-events-none hover:bg-[#111]"
                style={{ pointerEvents: "auto" }} // Re-enable pointer events
              >
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <skill.icon
                    className="w-6 h-6"
                    style={{ color: skill.color }}
                  />
                </div>

                <div className="text-left">
                  <h4 className="text-white font-semibold text-sm leading-tight">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {skill.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsTech;
