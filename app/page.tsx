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
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <LiquidEther />
      </div>
      <main>
        <Hero />
      </main>
      <About />
    </>
  );
}
