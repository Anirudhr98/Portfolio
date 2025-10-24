import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 mb-20">
      <div className="container panel rounded-2xl text-center py-6 border border-white/6 backdrop-blur-md">
        <p className="muted text-sm md:text-base mb-6">
          © {new Date().getFullYear()} Anirudh Ramachandran • Built with <span className="neon-text">React</span> & <span className="neon-text">Tailwind</span>
        </p>
      </div>
    </footer>
  )
}
