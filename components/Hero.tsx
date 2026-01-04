import React from "react";
import Link from "next/link";
import BlurText from "@/components/animations/BlurText";
import SplitText from "@/components/animations/SplitText";
import ScrollVelocity from "@/components/animations/ScrollVelocity";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 md:px-24"
    >
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center z-10 space-y-8 max-w-4xl py-20">
        <div className="relative">
          <BlurText
            text="Gwanverse"
            delay={150}
            animateBy="letters"
            direction="top"
            className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <SplitText
            text="Frontend & Mobile Developer building modern web and app experiences"
            delay={30}
            splitType="chars"
            from={{ opacity: 0, y: -50 }}
            className="text-xl md:text-3xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <Link
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-medium text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Contact Me
          </Link>
          {/* Scroll Velocity */}
          <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden pointer-events-none translate-y-38">
            <ScrollVelocity
              texts={[
                "Next.js • React • Flutter • Dart •",
                "Frontend • Mobile • UI Engineering •",
              ]}
              velocity={50}
              className="text-white/50 hover:text-white transition-colors cursor-default"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
