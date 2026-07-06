import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Doral Fashion Week | Quick Links',
  description: 'Official links and applications portal for Doral Fashion Week.',
}

export default function LinksPage() {
  const links = [
    { label: 'Official Website', url: '/', external: false, subtitle: 'Explore Runway and Highlights' },
    { label: 'DFW Magazine', url: 'https://www.doralfashionweekmagazine.com', external: true, subtitle: 'Read Digital Issues & Editorials' },
    { label: 'Model Application', url: '/apply/model', external: false, subtitle: 'Join the Runway' },
    { label: 'Designer Submission', url: '/apply/designer', external: false, subtitle: 'Showcase Your Collection' },
    { label: 'Photographer Accreditation', url: '/apply/photographer', external: false, subtitle: 'Visual Storytelling Team' },
    { label: 'Makeup Artist Application', url: '/apply/makeup', external: false, subtitle: 'Elite Backstage Beauty' },
    { label: 'Production & Staff', url: '/apply/staff', external: false, subtitle: 'Backstage Elite Support' },
    { label: 'Media & Press Pass', url: '/apply/media', external: false, subtitle: 'Press & Broadcast Credentials' },
  ]

  return (
    <main className="bg-black min-h-screen relative py-16 px-4 text-white flex flex-col items-center justify-between">
      
      {/* Background radial gradient to look expensive */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none z-0" />
      
      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center">
        
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <Link href="/">
            <img 
              src="/logo/logo doral FW.png" 
              alt="Doral Fashion Week Logo" 
              className="h-20 mx-auto mb-6 object-contain hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <h1 className="text-2xl font-heading text-white tracking-[0.1em] uppercase">
            DORAL FASHION WEEK
          </h1>
          <span className="text-[9px] tracking-[0.4em] text-[var(--accent)] uppercase block mt-2 opacity-80">
            Official Links Portal
          </span>
        </div>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-4 mb-16">
          {links.map((link, idx) => {
            const isExternal = link.external
            const Content = (
              <div className="flex flex-col text-left">
                <span className="font-heading text-lg uppercase tracking-wide group-hover:text-[var(--accent)] transition-colors duration-300">
                  {link.label}
                </span>
                {link.subtitle && (
                  <span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors duration-300 font-light mt-0.5">
                    {link.subtitle}
                  </span>
                )}
              </div>
            )

            const classes = "group w-full block p-5 bg-gradient-to-r from-black to-white/[0.02] border border-white/5 hover:border-[var(--accent)]/30 rounded-lg transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden"

            return isExternal ? (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
              >
                <div className="flex items-center justify-between w-full">
                  {Content}
                  <span className="text-white/30 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                </div>
                {/* Micro Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)]/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ) : (
              <Link 
                key={idx}
                href={link.url}
                className={classes}
              >
                <div className="flex items-center justify-between w-full">
                  {Content}
                  <span className="text-white/30 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                </div>
                {/* Micro Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)]/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer Info Box */}
      <div className="w-full max-w-sm mx-auto relative z-10 text-center text-white/40 text-[11px] leading-relaxed border-t border-white/5 pt-8">
        <p className="uppercase tracking-wider font-semibold text-white/60 mb-2">
          Doral Fashion Week LLC
        </p>
        <p className="mb-2">
          Alhambra Business Center<br />
          4805 NW 79th Ave #3, Doral, FL 33166, USA
        </p>
        <p className="mb-4">
          Phone: <a href="tel:+17866475982" className="text-[var(--accent)] hover:underline">+1 786-647-5982</a>
        </p>
        <div className="flex items-center justify-center gap-2 text-[9px] tracking-wider mb-6">
          <span className="text-[var(--accent)]">★ 4.6</span> 
          <span>Google Rating</span>
          <span className="text-white/10">|</span>
          <span>Haute Couture Fashion House</span>
        </div>
        <p className="text-[9px] opacity-50">&copy; 2026 Doral Fashion Week. All Rights Reserved.</p>
      </div>

    </main>
  )
}
