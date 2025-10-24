import React from 'react'

const items = [
  {
    company: 'SimSol Technologies & Services Pvt Ltd',
    role: 'Full Stack Developer',
    duration: '1.5 Years',
    bullets: [
      'Developed CHASSIST using Golang, Gin, and MongoDB.',
      'Worked on Flask/Python services and PostgreSQL backend.',
      'Managed data ingestion from CSV/XLSX files and performed application testing.'
    ]
  }
]

export default function Experience() {
  return (
    <div className="card panel rounded-2xl p-8">
      <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 neon-text">Experience</h2>
      <div className="mt-6 space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="p-6 rounded-xl panel border border-white/6 hover:shadow-neon-lg transition-shadow">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="font-semibold text-lg md:text-xl neon-text">{it.role}</div>
                <div className="text-sm md:text-base ">{it.company}</div>
              </div>
              <div className="text-sm md:text-base">{it.duration}</div>
            </div>

            <ul className="mt-4 list-disc ml-5 text-sm md:text-base">
              {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
