"use client"

import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import Link from 'next/link'

export default function Home() {
  const lottieContainerRef = useRef<HTMLDivElement>(null)

  // Initialize Lottie Animation
  useEffect(() => {
    let anim: any = null
    if (lottieContainerRef.current) {
      anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://cdn.prod.website-files.com/64cd7f5a31615eaba3c0956d/64d5976ec05e491caa0d75ff_banner-phone.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })
    }
    return () => {
      if (anim) anim.destroy()
    }
  }, [])

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
          revealObserver.unobserve(target)
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal-el')
    revealElements.forEach(el => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(30px)'
      htmlEl.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      revealObserver.observe(htmlEl)
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const extraEditions = [
    { season: 'FOURTH', num: 4, year: 2024 },
    { season: 'FIFTH', num: 5, year: 2025 },
    { season: 'SIXTH', num: 6, year: 2026 },
    { season: 'SEVENTH', num: 7, year: 2027 },
    { season: 'EIGHTH', num: 8, year: 2028 },
    { season: 'NINTH', num: 9, year: 2029 },
    { season: 'TENTH', num: 10, year: 2030 }
  ]

  return (
    <>
      {/* Floating Symmetric Pill Navbar */}
      <nav>
        <div className="nav-col-left">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
          <a href="#applications" onClick={(e) => handleSmoothScroll(e, '#applications')}>Applications</a>
        </div>
        <div className="logo">
          <img src="/logo/logo doral FW.png" alt="Doral Fashion Week Logo" />
        </div>
        <div className="nav-col-right">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
          <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')}>Editions</a>
          <a href="#magazine" onClick={(e) => handleSmoothScroll(e, '#magazine')}>MAGAZINE</a>
        </div>
      </nav>

      <main id="home">
        {/* Hero Section (Contains local Lottie background and bottom fade overlay) */}
        <section className="hero container">
          <div ref={lottieContainerRef} id="lottie-container" className="global-background" />
          <div className="hero-fade-overlay" />
          <div className="hero-content">
            <h1 className="reveal-el">The most prominent<br />and innovative EVENT</h1>
            <p className="reveal-el">
              Miami's premier avant-garde fashion and visual arts incubator. Discover the future of style and shape the global runway from Doral.
            </p>
            <a href="#applications" onClick={(e) => handleSmoothScroll(e, '#applications')} className="btn-premium">APPLICATIONS</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container section-spacer">
          <h2 className="section-title reveal-el mb-12">About Us</h2>
          <div className="about-grid reveal-el">
            <div className="about-col">
              <p className="premium-text">
                Celebramos la diversidad, creatividad artística y vanguardia del diseño en Miami. Uniendo la moda de lujo con las artes plásticas.
              </p>
            </div>
            <div className="about-col">
              <p className="secondary-text">
                Doral Fashion Week es la plataforma definitiva donde convergen diseñadores internacionales, talentos emergentes y amantes del arte. Diseñado para proyectar la identidad multicultural de nuestra ciudad al mundo a través de puestas en escena inmersivas y colecciones exclusivas.
              </p>
              <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')} className="link-luxury">EXPLORE MORE &rarr;</a>
            </div>
          </div>
        </section>

        {/* Applications Section (Stacked Rows with bottom animated gold lines) */}
        <section id="applications" className="container section-spacer">
          <h2 className="section-title reveal-el mb-4 text-center">Applications</h2>
          <p className="section-subtitle reveal-el text-center max-w-3xl mx-auto mb-20 text-white/50">
            Doral Fashion Week: Unleash Your Inner Creativity – Become a Model, Designer, Photographer, Makeup Artist, or Event Staff. Your Path to Fashion Stardom Begins Here
          </p>
          
          <div className="app-rows-container reveal-el">
            {/* Model Application Row */}
            <Link href="/apply/model" className="app-row-btn">
              <div className="app-row-left">
                <div>
                  <span className="app-row-title">Models Application</span>
                  <span className="app-row-desc">Your Gateway to Runway Stardom – Shine Bright and Define Fashion Trends</span>
                </div>
              </div>
              <div className="app-row-right">
                <span className="app-row-cta">Initialize intake</span>
                <span className="app-row-arrow">&rarr;</span>
              </div>
            </Link>

            {/* Staff Application Row */}
            <Link href="/apply/staff" className="app-row-btn">
              <div className="app-row-left">
                <div>
                  <span className="app-row-title">Staff Application</span>
                  <span className="app-row-desc">Behind-the-Scenes Excellence – Join Our Backstage Elite Team</span>
                </div>
              </div>
              <div className="app-row-right">
                <span className="app-row-cta">Initialize intake</span>
                <span className="app-row-arrow">&rarr;</span>
              </div>
            </Link>

            {/* Designer Application Row */}
            <Link href="/apply/designer" className="app-row-btn">
              <div className="app-row-left">
                <div>
                  <span className="app-row-title">Designers Application</span>
                  <span className="app-row-desc">Cultivate Your Vision, Transform the Fashion Landscape and Runway</span>
                </div>
              </div>
              <div className="app-row-right">
                <span className="app-row-cta">Initialize intake</span>
                <span className="app-row-arrow">&rarr;</span>
              </div>
            </Link>

            {/* Makeup Application Row */}
            <Link href="/apply/makeup" className="app-row-btn">
              <div className="app-row-left">
                <div>
                  <span className="app-row-title">Make-Ups Application</span>
                  <span className="app-row-desc">Unleash Your Artistry, Transform Beauty and Direct Visual Aesthetics</span>
                </div>
              </div>
              <div className="app-row-right">
                <span className="app-row-cta">Initialize intake</span>
                <span className="app-row-arrow">&rarr;</span>
              </div>
            </Link>

            {/* Photographer Application Row */}
            <Link href="/apply/photographer" className="app-row-btn">
              <div className="app-row-left">
                <div>
                  <span className="app-row-title">Photographers Application</span>
                  <span className="app-row-desc">Capture Fashion's Essence, Frame Elegance and Tell Brand Stories</span>
                </div>
              </div>
              <div className="app-row-right">
                <span className="app-row-cta">Initialize intake</span>
                <span className="app-row-arrow">&rarr;</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Magazine / Sponsor Callout (Interactive Accordion Covers Slider linking to doralfashionweekmagazine.com) */}
        <section id="magazine" className="container section-spacer">
          <div className="magazine-grid reveal-el">
            
            {/* Left Column: Info and Custom Logo */}
            <div className="magazine-info-col">
              {/* Custom Typographic Logo */}
              <div className="magazine-logo-block">
                <span className="magazine-logo-title">DORAL</span>
                <span className="magazine-logo-sub">FASHION WEEK</span>
                <span className="magazine-logo-tag">M A G A Z I N E</span>
              </div>
              
              <p className="secondary-text" style={{ textJustify: 'unset', textAlign: 'left', marginBottom: '2.5rem' }}>
                Explore exclusive interviews with world-class designers, editorial runway highlights, backstage secrets, and the vibrant evolution of Miami's high-fashion landscapes. Read the digital copies of DFW Magazine online.
              </p>
              
              <a 
                href="https://www.doralfashionweekmagazine.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-premium"
              >
                DISCOVER THE MAGAZINE &rarr;
              </a>
            </div>

            {/* Right Column: Interactive Accordion Covers */}
            <div className="magazine-accordion">
              {[
                { 
                  img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&h=600&q=80', 
                  tag: 'Issue 08 // Spring 2026', 
                  title: 'THE FUTURE OF COUTURE' 
                },
                { 
                  img: 'https://images.unsplash.com/photo-1539109132332-629bb4aa9116?auto=format&fit=crop&w=400&h=600&q=80', 
                  tag: 'Issue 07 // Autumn 2025', 
                  title: 'MIAMI SOUL & SUN' 
                },
                { 
                  img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&h=600&q=80', 
                  tag: 'Issue 06 // Summer 2025', 
                  title: 'AVANT GARDE VOL. I' 
                },
                { 
                  img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&h=600&q=80', 
                  tag: 'Issue 05 // Winter 2024', 
                  title: 'THE INAUGURAL RUN' 
                },
                { 
                  img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&h=600&q=80', 
                  tag: 'Issue 04 // Spring 2024', 
                  title: 'COLOR & GEOMETRY' 
                }
              ].map((cover, i) => (
                <a 
                  key={i}
                  href="https://www.doralfashionweekmagazine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accordion-panel animate-panel"
                >
                  <img src={cover.img} alt={cover.title} />
                  <div className="accordion-overlay" />
                  <span className="accordion-masthead">DORAL</span>
                  <div className="accordion-info">
                    <span className="accordion-panel-tag">{cover.tag}</span>
                    <h3 className="accordion-panel-title">{cover.title}</h3>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* Editions Section */}
        <section id="editions" className="container section-spacer">
          <h2 className="section-title reveal-el mb-16">Editions</h2>
          
          {/* Season 1 */}
          <div className="edition-block reveal-el">
            <div className="edition-header">
              <span className="edition-tag">FIRST SEASON</span>
              <h3>1st Edition - Doral Fashion Week 2019: "The Inaugural Extravaganza"</h3>
              <p>In 2019, Doral Fashion Week made its grand debut, igniting the runway with an inaugural extravaganza of style, creativity, and innovation...</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1539109132332-629bb4aa9116?auto=format&fit=crop&w=400" alt="DFW 1" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400" alt="DFW 2" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400" alt="DFW 3" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1470309727768-330m7efbaef4?auto=format&fit=crop&w=400" alt="DFW 4" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400" alt="DFW 5" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400" alt="DFW 6" /></div>
            </div>
          </div>

          {/* Season 2 */}
          <div className="edition-block reveal-el">
            <div className="edition-header">
              <span className="edition-tag">SECOND SEASON</span>
              <h3>2nd Edition - Doral Fashion Week 2020: "Fashion Through Adversity"</h3>
              <p>In 2020, Doral Fashion Week faced unprecedented challenges... It emerged as a beacon of resilience.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400" alt="DFW 2_1" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400" alt="DFW 2_2" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400" alt="DFW 2_3" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400" alt="DFW 2_4" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400" alt="DFW 2_5" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1529139513402-748467bc300b?auto=format&fit=crop&w=400" alt="DFW 2_6" /></div>
            </div>
          </div>

          {/* Season 3 */}
          <div className="edition-block reveal-el">
            <div className="edition-header">
              <span className="edition-tag">THIRD SEASON</span>
              <h3>3rd Edition - Doral Fashion Week 2023: "Fashion Reimagined"</h3>
              <p>In 2023, Doral Fashion Week returned with a fresh perspective... emphasizing sustainability and the digital age.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400" alt="DFW 3_1" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1533107862482-0e6974b0cc6c?auto=format&fit=crop&w=400" alt="DFW 3_2" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1524041255072-7df05355a39b?auto=format&fit=crop&w=400" alt="DFW 3_3" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=400" alt="DFW 3_4" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=400" alt="DFW 3_5" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=400" alt="DFW 3_6" /></div>
            </div>
          </div>

          {/* Dynamic Editions 4-10 */}
          {extraEditions.map((ed) => {
            const photoIds = [
              'photo-1539109132332-629bb4aa9116',
              'photo-1490481651871-ab68de25d43d',
              'photo-1445205170230-053b83016050',
              'photo-1470309727768-330m7efbaef4',
              'photo-1509631179647-0177331693ae',
              'photo-1558769132-cb1aea458c5e',
              'photo-1515886657613-9f3515b0c78f',
              'photo-1483985988355-763728e1935b',
              'photo-1469334031218-e382a71b716b',
              'photo-1496747611176-843222e1e57c',
              'photo-1503342217505-b0a15ec3261c',
              'photo-1529139513402-748467bc300b',
              'photo-1512436991641-6745cdb1723f',
              'photo-1533107862482-0e6974b0cc6c',
              'photo-1524041255072-7df05355a39b',
              'photo-1505022610485-0249ba5b3675',
              'photo-1492707892479-7bc8d5a4ee93',
              'photo-1551232864-3f0890e580d9'
            ]
            return (
              <div key={ed.num} className="edition-block reveal-el">
                <div className="edition-header">
                  <span className="edition-tag">{ed.season} SEASON</span>
                  <h3>{ed.num}th Edition - Doral Fashion Week {ed.year}: "Future of Elegance"</h3>
                  <p>Continuing the legacy of innovation, the {ed.num}th edition pushed the boundaries of fashion and technology...</p>
                </div>
                <div className="gallery-grid">
                  {[1, 2, 3, 4, 5, 6].map((i) => {
                    const photoId = photoIds[(ed.num * 6 + i) % photoIds.length]
                    return (
                      <div key={i} className="gallery-item">
                        <img 
                          src={`https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=400`} 
                          alt={`DFW ${ed.num} - Image ${i}`} 
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="container section-spacer">
          <div className="newsletter-box reveal-el">
            <div className="newsletter-info">
              <h2>Newsletter</h2>
              <p>Be the first to know about upcoming editions, special events, and exclusive fashion insights.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed! / ¡Suscrito!'); }}>
              <input type="email" placeholder="Enter your email address" required />
              <div className="checkbox-group">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy" className="text-white/60">
                  I agree with the <Link href="/privacy" className="underline text-accent hover:text-white transition-colors">Privacy Policy</Link> and <Link href="/terms" className="underline text-accent hover:text-white transition-colors">Terms & Conditions</Link>
                </label>
              </div>
              <button type="submit" className="btn-premium">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo-text">DORAL<br />FASHION<br />WEEK</h2>
            <p>Have a question in mind? <a href="mailto:info@doralfashionweek.com">talk to us</a></p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Editions</h4>
              <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')}>Edition 1</a>
              <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')}>Edition 2</a>
              <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')}>Edition 3</a>
              <a href="#editions" onClick={(e) => handleSmoothScroll(e, '#editions')}>Show All</a>
            </div>
            <div className="footer-col">
              <h4>Applications</h4>
              <Link href="/apply/model" className="block text-left text-[var(--text-secondary)] hover:text-[var(--accent)] mb-4 transition-all duration-300 hover:pl-2">Models</Link>
              <Link href="/apply/staff" className="block text-left text-[var(--text-secondary)] hover:text-[var(--accent)] mb-4 transition-all duration-300 hover:pl-2">Staff</Link>
              <Link href="/apply/designer" className="block text-left text-[var(--text-secondary)] hover:text(--accent) mb-4 transition-all duration-300 hover:pl-2">Designers</Link>
              <Link href="/apply/photographer" className="block text-left text-[var(--text-secondary)] hover:text-[var(--accent)] mb-4 transition-all duration-300 hover:pl-2">Photographers</Link>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>Features</a>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Sponsors</a>
              <Link href="/privacy" className="block text-left text-[var(--text-secondary)] hover:text-[var(--accent)] mb-4 transition-all duration-300 hover:pl-2">Privacy Policy</Link>
              <Link href="/terms" className="block text-left text-[var(--text-secondary)] hover:text-[var(--accent)] mb-4 transition-all duration-300 hover:pl-2">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 All Right Reserved. Doral Fashion Week</p>
          <p>Made with &hearts; in Miami</p>
        </div>
      </footer>
    </>
  )
}
