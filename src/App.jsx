import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

export default function App() {
  return (
    <>
      <div className="bg-animated" aria-hidden>
        <div className="blob a" />
        <div className="blob b" />
        <div className="blob c" />
      </div>

      <Navbar />

      <main className="pt-24">
        <div className="container">
          <section id="home" className="min-h-[82vh] flex items-center" data-aos="fade-up">
            <Hero />
          </section>

          <section id="about" className="mt-20" data-aos="fade-up" data-aos-delay="80">
            <About />
          </section>
          
            <section id="experience" className="mt-20" data-aos="fade-up" data-aos-delay="100">
            <Experience />
          </section>

          <section id="skills" className="mt-20" data-aos="fade-up" data-aos-delay="120">
            <Skills />
          </section>

          <section id="projects" className="mt-20" data-aos="fade-up" data-aos-delay="160">
            <Projects />
          </section>

          <section id="publications" className="mt-20" data-aos="fade-up" data-aos-delay="200">
            <Publications />
          </section>

          <section id="contact" className="mt-20 mb-32" data-aos="fade-up" data-aos-delay="240">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
