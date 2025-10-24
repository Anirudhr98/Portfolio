import React from 'react';

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Left Column */}
      <div className="md:col-span-7 space-y-6">
        <h1 className="text-5xl md:text-[5.2rem] font-extrabold leading-tight">
          Hi — I’m <span className="neon-text">Anirudh</span>.<br />
          I build fast, beautiful web products.
        </h1>

        <p className="text-lg muted max-w-xl">
          Full Stack Developer (MERN, Golang, Django). I ship reliable backends, fast frontends,
          and polished user experiences. I care about performance, observability, and code quality.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a href="#projects" className="btn-neon">See Projects</a>
         
        </div>

        <div className="flex flex-wrap gap-6 mt-6 text-sm">
          <div>📍 Mumbai</div>
          <div>✉️ <a className="hover:opacity-80 transition" href="mailto:anirudhram10298@gmail.com">anirudhram10298@gmail.com</a></div>
        </div>
      </div>
    </div>
  )
}
