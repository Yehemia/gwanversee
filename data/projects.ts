export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kenangan Inn",
    description:
      "Hotel Management System - A comprehensive desktop application for managing hotel operations including reservations, check-ins, billing, and reporting with PDF generation and QR code features.",
    image: "/projects/project-1.png",
    tags: ["Java", "JavaFX", "MySQL"],
    category: "Desktop",
  },
  {
    id: 2,
    title: "Dede Clothing",
    description:
      "Store Management System - A complete retail management solution for clothing stores with inventory tracking, sales management, and customer records.",
    image: "/projects/project-2.png",
    tags: ["Java", "JavaFX", "MySQL"],
    category: "Desktop",
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    description:
      "Mobile productivity app for task management with local storage, state management, and a clean intuitive interface for iOS and Android.",
    image: "/projects/project-3.png",
    tags: ["Flutter", "Dart", "Hive"],
    category: "Mobile",
  },
  {
    id: 4,
    title: "Singkong Keju POS",
    description:
      "Point of Sale MVP for a food business. A modern, fast web application with real-time updates and beautiful UI built with React ecosystem.",
    image: "/projects/project-4.png",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    category: "Web",
  },
];
