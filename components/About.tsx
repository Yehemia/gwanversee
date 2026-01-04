import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import SplitText from "./animations/SplitText";
import WhatIDo from "./WhatIDo";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { Download } from "lucide-react";
import SkillsTech from "./SkillsTech";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 mt-60 flex flex-col items-center justify-center min-h-screen px-4 md:px-24 py-20 gap-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
        {/* Left Column - Profile Card */}
        <div className="shrink-0 w-full max-w-75 md:max-w-110 perspective-1000">
          <ProfileCard
            behindGlowColor="hsla(329, 100%, 70%, 0.6)"
            innerGradient="linear-gradient(145deg,hsla(329, 40%, 45%, 0.55) 0%,hsla(149, 60%, 70%, 0.27) 100%)"
          />
        </div>

        {/* Right Column - Description */}
        <div className="flex flex-col space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <SplitText
              text="Hello i'm Yehemia Gauand"
              delay={50}
              className="inline-block"
            />
          </h2>

          <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed font-light">
            <p>
              I'm a passionate developer who loves exploring the boundaries of
              web technology. Merging code with creativity to build immersive
              digital experiences is my craft.
            </p>
            <p>
              With a focus on performance and aesthetics, I aim to deliver not
              just websites, but memorable journeys for every visitor. Let's
              create something extraordinary together.
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <a href="/assets/resume.pdf" download="Resume_Yehemia_Gauand.pdf">
              <InteractiveHoverButton className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors">
                Download Resume
              </InteractiveHoverButton>
            </a>
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-[#222] border border-white/10 text-white font-semibold hover:bg-[#333] transition-all"
            >
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </div>

      <WhatIDo />
      <SkillsTech />
    </section>
  );
};

export default About;
