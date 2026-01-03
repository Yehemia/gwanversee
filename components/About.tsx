import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import SplitText from "./animations/SplitText";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-24 py-20 gap-12 md:gap-24 overflow-hidden"
    >
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
          <SplitText text="About Me" delay={50} className="inline-block" />
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed font-light">
          <p>
            I'm a passionate developer who loves exploring the boundaries of web
            technology. Merging code with creativity to build immersive digital
            experiences is my craft.
          </p>
          <p>
            With a focus on performance and aesthetics, I aim to deliver not
            just websites, but memorable journeys for every visitor. Let's
            create something extraordinary together.
          </p>
        </div>

        <div className="pt-8 flex gap-4">
          <div className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Location
            </span>
            <p className="font-medium text-white">Indonesia</p>
          </div>
          <div className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Experience
            </span>
            <p className="font-medium text-white">3+ Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
