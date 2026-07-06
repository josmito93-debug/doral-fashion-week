import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Doral Fashion Week | Quick Links',
  description: 'Official links and applications portal for Doral Fashion Week.',
}

export default function LinksPage() {
  const links = [
    { 
      label: 'Official Website', 
      url: '/', 
      external: false, 
      subtitle: 'Explore Runway and Highlights',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a15 15 0 00-4 9 15 15 0 004 9M12 3a15 15 0 014 9 15 15 0 01-4 9" />
        </svg>
      )
    },
    { 
      label: 'DFW Magazine', 
      url: 'https://www.doralfashionweekmagazine.com', 
      external: true, 
      subtitle: 'Read Digital Issues & Editorials',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    { 
      label: 'Model Application', 
      url: '/apply/model', 
      external: false, 
      subtitle: 'Join the Runway',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    { 
      label: 'Designer Submission', 
      url: '/apply/designer', 
      external: false, 
      subtitle: 'Showcase Your Collection',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m3.813-5.096L15 21m-5.187-5.096L6 15M12.812 15.9L18 15M12 3a9 9 0 100 18 9 9 0 000-18z" />
        </svg>
      )
    },
    { 
      label: 'Photographer Accreditation', 
      url: '/apply/photographer', 
      external: false, 
      subtitle: 'Visual Storytelling Team',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      )
    },
    { 
      label: 'Makeup Artist Application', 
      url: '/apply/makeup', 
      external: false, 
      subtitle: 'Elite Backstage Beauty',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.078 0L3.72 17.587a1.987 1.987 0 00-.97 1.714v.543c0 .621.504 1.125 1.125 1.125h16.25c.621 0 1.125-.504 1.125-1.125v-.543a1.987 1.987 0 00-.97-1.714l-2.732-1.465a3 3 0 00-3.078 0L9.53 16.122z" />
        </svg>
      )
    },
    { 
      label: 'Production & Staff', 
      url: '/apply/staff', 
      external: false, 
      subtitle: 'Backstage Elite Support',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 1021 17.25l-5.83-5.83M11.42 15.17a3 3 0 11-4.24-4.24 3 3 0 014.24 4.24zM11.42 15.17l-3.65-3.65m0 0a3 3 0 10-4.24 4.24 3 3 0 004.24-4.24z" />
        </svg>
      )
    },
    { 
      label: 'Media & Press Pass', 
      url: '/apply/media', 
      external: false, 
      subtitle: 'Press & Broadcast Credentials',
      icon: (
        <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      )
    },
  ]

  return (
    <main className="bg-[#020202] min-h-screen relative py-20 px-6 text-white flex flex-col items-center justify-between overflow-hidden">
      
      {/* Premium Gradient-Border Scoped CSS Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .gradient-border-card {
          position: relative;
          padding: 1px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.5s ease;
          width: 100%;
        }
        .gradient-border-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 180deg,
            transparent 30%,
            #D4AF37 50%,
            transparent 70%
          );
          animation: borderRotate 4s linear infinite;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gradient-border-card:hover::before {
          opacity: 1;
        }
        .gradient-border-card-inner {
          position: relative;
          background: #050505;
          border-radius: 11px;
          padding: 1.5rem 1.8rem;
          z-index: 2;
          transition: background 0.4s ease;
        }
        .gradient-border-card:hover .gradient-border-card-inner {
          background: #000000;
        }
      `}} />

      {/* Atmospheric Soft Lighting Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="w-full max-w-lg mx-auto relative z-10 flex flex-col items-center">
        
        {/* Logo and Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <img 
              src="/logo/logo doral FW.png" 
              alt="Doral Fashion Week Logo" 
              className="h-24 mx-auto mb-6 object-contain hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          <h1 className="text-2xl md:text-3xl font-heading text-white tracking-[0.08em] uppercase">
            DORAL FASHION WEEK
          </h1>
          <span className="text-[9px] tracking-[0.45em] text-[var(--accent)] uppercase block mt-2 opacity-90 font-medium">
            Official Links Portal
          </span>
        </div>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-5 mb-16">
          {links.map((link, idx) => {
            const isExternal = link.external
            const Content = (
              <div className="flex items-center gap-4">
                {/* SVG Icon Box */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/20 transition-all duration-300">
                  {link.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-heading text-base md:text-lg uppercase tracking-wide group-hover:text-[var(--accent)] transition-colors duration-300">
                    {link.label}
                  </span>
                  {link.subtitle && (
                    <span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors duration-300 font-light mt-0.5">
                      {link.subtitle}
                    </span>
                  )}
                </div>
              </div>
            )

            return isExternal ? (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border-card group"
              >
                <div className="gradient-border-card-inner">
                  <div className="flex items-center justify-between w-full">
                    {Content}
                    <span className="text-white/30 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                  </div>
                </div>
              </a>
            ) : (
              <Link 
                key={idx}
                href={link.url}
                className="gradient-border-card group"
              >
                <div className="gradient-border-card-inner">
                  <div className="flex items-center justify-between w-full">
                    {Content}
                    <span className="text-white/30 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                  </div>
                </div>
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
