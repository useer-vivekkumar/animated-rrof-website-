import SplitText from './SplitText'
import { useRef } from 'react'
import Contact from './components/contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })
      
      gsap.from('.services-preview .section-label', {
  y: 30,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.services-preview',
    start: 'top 75%',
  },
})

gsap.from('.services-preview h2', {
  y: 50,
  opacity: 0,
  duration: 0.7,
  delay: 0.1,
  scrollTrigger: {
    trigger: '.services-preview',
    start: 'top 75%',
  },
})

gsap.from('.service-card', {
  y: 35,
  opacity: 0,
  duration: 0.45,
  stagger: 0.08,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.service-grid',
    start: 'top 80%',
    once: true,
  },
})
gsap.from('.cta-section .section-label', {
  y: 25,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%',
  },
})

gsap.from('.cta-section h2', {
  y: 45,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%',
  },
})

gsap.from('.cta-section .primary-btn', {
  y: 25,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%',
  },
})
      tl.from('.nav', {
        y: -30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          '.eyebrow',
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3',
        )
      
        .from(
          '.hero-text',
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.4',
        )
        .from(
          '.hero-buttons',
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3',
        )
        .from(
          '.stats',
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3',
        )
        .from(
          '.house-image',
          {
            x: 100,
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
          },
          '-=0.7',
        )
        
        gsap.to('.house-image', {
  y: -10,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
})


    },
    { scope: container },
  )

  return (
    <main ref={container}>
      <nav className="nav">
        <a href="/" className="logo">
          <span>◆</span>
          ROOFCRAFT
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
  Free Inspection
</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span></span>
            PREMIUM ROOFING SERVICES
          </div>

          <div className="hero-title">
  <SplitText
    text="Stronger roofs."
    className="hero-line"
    tag="div"
    splitType="chars"
    delay={25}
    duration={0.8}
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    textAlign="left"
  />

  <SplitText
    text="Safer homes."
    className="hero-line hero-orange"
    tag="div"
    splitType="chars"
    delay={25}
    duration={0.8}
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    textAlign="left"
  />
</div>

          <p className="hero-text">
            Professional roofing solutions built to protect
            your home, withstand the weather, and last for years.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
  Get Free Inspection
  <span>→</span>
</a>
            <a href="#services" className="secondary-btn">
              Explore Services
              <span>→</span>
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>

            <div className="stat">
              <strong>4.9★</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <img
            src="/images/hero-house.png"
            alt="Modern home with premium roofing"
            className="house-image"
          />

        
        </div>
      </section>

      <section className="services-preview" id="services">
        <div className="section-label">WHAT WE DO</div>

        <h2>
          Everything your
          <br />
          <span>roof needs.</span>
        </h2>

        <div className="service-grid">
          <article className="service-card">
            <span className="number">01</span>
            <h3>Roof Replacement</h3>
            <p>
              Complete roof replacement using premium,
              weather-resistant materials.
            </p>
          </article>

          <article className="service-card">
            <span className="number">02</span>
            <h3>Roof Repair</h3>
            <p>
              Fast professional repairs designed to prevent
              small problems from becoming expensive ones.
            </p>
          </article>

          <article className="service-card">
            <span className="number">03</span>
            <h3>Roof Inspection</h3>
            <p>
              Detailed inspections to identify damage,
              leaks, and potential roofing issues.
            </p>
          </article>

          <article className="service-card">
            <span className="number">04</span>
            <h3>Storm Damage</h3>
            <p>
              Professional roofing solutions after severe
              weather, wind, hail, or storm damage.
            </p>
          </article>
        </div>
            </section>

      <section className="projects-section" id="projects">
        <div className="projects-header">
          <div className="section-label">OUR WORK</div>

          <h2>
            Roofing projects
            <br />
            <span>built to last.</span>
          </h2>
        </div>

        <div className="projects-grid">

          <article className="project-card">
            <img
              src="/images/project-1.jpg"
              alt="Roof replacement project"
              className="project-image"
            />

            <div className="project-overlay">
              <span>ROOF REPLACEMENT</span>
              <h3>Modern Residential Roof</h3>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/images/project-2.jpg"
              alt="Storm damage restoration project"
              className="project-image"
            />

            <div className="project-overlay">
              <span>STORM DAMAGE</span>
              <h3>Complete Roof Restoration</h3>
            </div>
          </article>

        </div>
      </section>

     <Contact />
    <footer className="site-footer">
  <div className="footer-grid">

    <div className="footer-brand">
      <a href="/" className="logo">
        <span>◆</span>
        ROOFCRAFT
      </a>

      <p>
        Professional roofing solutions built to protect
        your home and give you peace of mind.
      </p>
    </div>

    <div className="footer-column">
      <h4>NAVIGATE</h4>

      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-column">
      <h4>SERVICES</h4>

      <a href="#services">Roof Replacement</a>
      <a href="#services">Roof Repair</a>
      <a href="#services">Roof Inspection</a>
      <a href="#services">Storm Damage</a>
    </div>

    <div className="footer-column">
      <h4>CONTACT</h4>

      <a href="tel:+18005550199">+1 (800) 555-0199</a>
      <a href="mailto:hello@roofcraft.com">
        hello@roofcraft.com
      </a>
      <span>Serving Your Local Area</span>
    </div>

  </div>

  <div className="footer-bottom">
    <span>© 2026 RoofCraft. All rights reserved.</span>
    <span>Professional Roofing Services</span>
  </div>
</footer>
    </main>
  )
}

export default App