import React from "react";

export default function About() {
  return (
    <div className="card panel rounded-2xl p-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold neon-text">About</h2>
          <p className="mt-4 leading-relaxed text-base md:text-lg">
            I am a <span className="font-semibold neon-text">Full Stack Developer</span> with experience building and deploying
            web applications using <span className="font-medium neon-text">MERN, Golang, and Django</span>. I enjoy system
            design, optimizing performance, and building <span className="neon-text">user-friendly interfaces</span>. My academic
            publications focus on <span className="font-medium neon-text">ML/NLP for social-media mental-health detection</span>.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg panel hover:shadow-neon-lg transition-shadow">
              <div className="text-xs font-bold neon-text">Education</div>
              <div className="font-medium">B.E. Computer Science — VESIT</div>
            </div>

            <div className="p-3 rounded-lg panel hover:shadow-neon-lg transition-shadow">
              <div className="text-xs font-bold neon-text">Availability</div>
              <div className="font-medium">Open to work</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
