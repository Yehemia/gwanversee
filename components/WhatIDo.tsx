import React from "react";
import { Code, Smartphone, PenTool } from "lucide-react";

const WhatIDo = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-sky-400" />,
      title: "Frontend Dev",
      description:
        "Building responsive, accessible, and performant web interfaces using modern frameworks like React and Svelte.",
      bgFocus: "group-hover:bg-sky-500/10",
      borderFocus: "group-hover:border-sky-500/30",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Mobile Apps",
      description:
        "Crafting cross-platform mobile experiences with React Native that feel native and smooth on iOS and Android.",
      bgFocus: "group-hover:bg-blue-500/10",
      borderFocus: "group-hover:border-blue-500/30",
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-400" />,
      title: "UI Engineering",
      description:
        "Translating design concepts into pixel-perfect code, bridging the gap between design and technical implementation.",
      bgFocus: "group-hover:bg-indigo-500/10",
      borderFocus: "group-hover:border-indigo-500/30",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          What I Do
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
          I combine technical expertise with design sensibilities to create
          comprehensive digital solutions. Here are my main areas of focus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group relative p-8 rounded-2xl bg-[#111] border border-white/5 transition-all duration-300 hover:-translate-y-2 ${feature.borderFocus}`}
          >
            <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${feature.bgFocus}`} />
            
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
