"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Hide navbar when scrolled past hero section
      if (currentScrollY > heroHeight * 0.8) {
        // Scrolling down past hero - hide
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          // Scrolling up - show
          setIsVisible(true);
        }
      } else {
        // Within hero section - always show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-4xl transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-md">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center p-1 transition-transform group-hover:scale-110">
            <Image
              src="/assets/logo.svg"
              alt="Gwanverse Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-medium text-lg tracking-tight">
            Gwanverse
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
}
