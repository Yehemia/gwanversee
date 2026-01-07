import LiquidEther from "@/components/LiquidEther";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
  }

  const myProject: Project[] = [
    {
      id: 1,
      name: "web portofolio",
      description: "Dibuat menggunakan Next.js 16 dan Tailwind CSS 5",
      link: "#",
    },
    {
      id: 2,
      name: "web janggal",
      description: "Dibuat menggunakan Next.js 16 dan Tailwind CSS 5",
      link: "#",
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 h-screen w-screen bg-gray-950">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <Hero />
      <About />
    </>
  );
}
