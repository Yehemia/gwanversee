import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-4xl">
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
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
