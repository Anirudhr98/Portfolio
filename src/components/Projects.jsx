import React from 'react'

const projects = [
  {
    title: 'Detection of Depressive & Suicidal Tendency (B.E. Project)',
    desc: 'Academic NLP system to detect depressive and suicidal signals from Twitter; published in Springer & IEEE.',
    live: '',
    code: '',
    links: [
      { label: 'Springer', url: 'https://link.springer.com/chapter/10.1007/978-981-33-4367-2_73' },
      { label: 'IEEE', url: 'https://ieeexplore.ieee.org/document/9155747' }
    ]
  },
  {
    title: 'Food Delivery App',
    desc: 'Full-stack MERN food delivery platform with restaurant owner dashboard and live order tracking.',
    live: 'https://ar7-food-delivery.netlify.app',
    code: 'https://github.com/Anirudhr98'
  },
  {
    title: 'Microservices Food Delivery System',
    desc: 'Distributed architecture version of the food delivery app built with Node.js, Express, and RabbitMQ; includes restaurant, order, delivery and notification services with inter-service communication.',
    live: '',
    code: 'https://github.com/Anirudhr98/Restaurant-Microservices' // replace with repo link if separate
  },
  {
    title: 'Invoice Management System',
    desc: 'Django + React web app for freelancers to create dynamic invoices with PDF export and client management.',
    live: '',
    code: ''
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Django-based e-commerce site with secure Stripe payments, product management, and order history.',
    live: 'https://anirudh98.pythonanywhere.com/',
    code: 'https://github.com/Anirudhr98/Electronic-Market'
  },
]

export default function Projects(){
  return (
    <div className="card panel rounded-2xl p-8">
      <h2 className="text-2xl font-extrabold neon-text">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="p-4 rounded-lg border border-white/6 hover:shadow-neon-lg transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold neon-text">{p.title}</h3>
              <div className="muted text-sm">Personal</div>
            </div>

            <p className="mt-2 muted leading-relaxed">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-md border border-white/6 btn-neon"
                >
                  Live
                </a>
              )}

              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-md border border-white/6 btn-neon"
                >
                  Code
                </a>
              )}

              {p.links &&
                p.links.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-md border border-white/6"
                  >
                    {l.label}
                  </a>
                ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
