import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone,FaLandmark } from 'react-icons/fa'

export default function Contact(){
  return (
    <div className="card panel rounded-2xl p-8">
      <h2 className="text-2xl neon-text font-extrabold">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <p className="">Want to work together or have questions? Reach out.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="mailto:anirudhram10298@gmail.com" className="btn-neon flex items-center gap-3"><FaEnvelope /> Email</a>
            <a href="https://github.com/Anirudhr98" className="px-4 py-2 rounded-md border border-white/6 flex items-center gap-3"><FaGithub /> GitHub</a>
            <a href="https://in.linkedin.com/in/anirudh-ramachandran" className="px-4 py-2 rounded-md border border-white/6 flex items-center gap-3"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="muted text-sm flex items-center gap-2 neon-text"><FaPhone /> Phone</div>
            <div className="font-medium mt-1">9833292469</div>
          </div>

          <div>
            <div className="muted text-sm neon-text"><FaLandmark/>Location</div>
            <div className="font-medium mt-1">Mumbai</div>
          </div>
        </div>
      </div>
    </div>
  )
}
