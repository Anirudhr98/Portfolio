import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 dark:bg-white/10 backdrop-blur-lg shadow-lg">
      <div className="container flex items-center justify-between py-6 md:py-8">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="text-2xl md:text-3xl font-extrabold neon-text">Anirudh</div>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8 text-base md:text-lg">
          <a href="#about" className="muted hover:neon-hover transition-colors">About</a>
          <a href="#skills" className="muted hover:neon-hover transition-colors">Skills</a>
          <a href="#projects" className="muted hover:neon-hover transition-colors">Projects</a>
          <a href="#contact" className="muted hover:neon-hover transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
