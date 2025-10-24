import React from 'react'
import { FaReact,  FaDatabase, FaTools, FaGithub } from 'react-icons/fa'
import { SiFlask, SiDjango, SiMongodb, SiPostgresql, SiRender, SiNetlify, SiStripe, SiPython, SiJavascript } from 'react-icons/si'
import { FaGolang } from "react-icons/fa6";

const groups = [
  {
    title: 'Frontend',
    icon: <FaReact className="text-sky-400" />,
    items: [
      { name: 'ReactJS', icon: <FaReact /> },
      { name: 'Javascript', icon: <SiJavascript /> },
    ]
  },
  {
    title: 'Backend',
    icon: <FaTools className="text-green-300" />,
    items: [
      { name: 'Golang (Gin)', icon: <FaGolang /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Flask', icon: <SiFlask /> },
    ]
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-purple-300" />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Postgres', icon: <SiPostgresql /> },
      { name: 'Redis', icon: <FaDatabase /> },
    ]
  },
  {
    title: 'Tools & Deployment',
    icon: <FaTools className="text-amber-300" />,
    items: [
      { name: 'Git/GitHub', icon: <FaGithub /> },
      { name: 'Render', icon: <SiRender /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Stripe', icon: <SiStripe /> },
    ]
  }
]

export default function Skills() {
  return (
    <div className="card panel rounded-2xl p-8">
      <h2 className="text-2xl md:text-3xl font-extrabold neon-text flex items-center gap-3">
        <FaTools className="text-neon text-3xl md:text-4xl glow-icon" /> Skills
      </h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <div key={i} className="p-4 rounded-lg border border-white/6">
            {/* Group header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl md:text-3xl glow-icon">{g.icon}</div>
              <div>
                <div className="text-xs md:text-sm">{g.title}</div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {g.items.map((s, idx) => (
                <div key={idx} className="skill-chip flex items-center gap-2 px-3 py-2">
                  <div className="text-2xl md:text-3xl glow-icon">{s.icon}</div>
                  <div className="text-sm md:text-base">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
