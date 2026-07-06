import React, { Suspense } from 'react'
import { ApplicationPortal } from '@/components/forms/ApplicationPortal'
import { Metadata } from 'next'
import Link from 'next/link'

// Generate metadata dynamically for SEO and premium feel
export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params
  const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1)
  return {
    title: `${capitalizedRole} Application | Doral Fashion Week`,
    description: `Official ${role} admission protocol for Doral Fashion Week. Join the elite creative event.`,
  }
}

export default async function ApplyPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params
  const roleLower = role.toLowerCase()

  // High-end curated runway images for the banner based on role
  const bannerImages: Record<string, string> = {
    model: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    designer: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    photographer: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    makeup: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    staff: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1200&q=80',
    media: 'https://images.unsplash.com/photo-1539109132332-629bb4aa9116?auto=format&fit=crop&w=1200&q=80'
  }

  const activeBanner = bannerImages[roleLower] || bannerImages.media

  const roleTitles: Record<string, string> = {
    model: 'Models Admission Protocol',
    designer: 'Designers Admission Protocol',
    photographer: 'Photographers Admission Protocol',
    makeup: 'Makeup Artists Admission Protocol',
    staff: 'Staff & Backstage Admission Protocol',
    media: 'Media & Press Accreditation',
  }

  const activeTitle = roleTitles[roleLower] || 'Admission Protocol'

  return (
    <main className="bg-black min-h-screen relative pb-24 text-white">
      {/* Floating Symmetric Pill Navbar (To navigate back Home easily) */}
      <nav className="fixed top-8 left-50 -translate-x-1/2 z-50">
        <div className="nav-col-left">
          <Link href="/#home">Home</Link>
          <Link href="/#applications">Applications</Link>
        </div>
        <div className="logo">
          <Link href="/">
            <img src="/logo/logo doral FW.png" alt="Doral Fashion Week Logo" />
          </Link>
        </div>
        <div className="nav-col-right">
          <Link href="/#about">About</Link>
          <Link href="/#editions">Editions</Link>
          <Link href="/#magazine">MAGAZINE</Link>
        </div>
      </nav>

      {/* Aesthetic Banner Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={activeBanner} 
            alt={activeTitle} 
            className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Banner content */}
        <div className="relative z-10 text-center px-4 mt-20">
          <span className="text-[10px] tracking-[0.4em] font-mono text-accent uppercase block mb-4">DFW Intake Protocol</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white tracking-wide uppercase leading-none">
            {activeTitle}
          </h1>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Main Form Portal Container (Centered and Aesthetic) */}
      <section className="container max-w-4xl px-4 mt-12 relative z-10">
        <Suspense fallback={
          <div className="w-full h-96 flex items-center justify-center bg-black">
            <div className="camera-hud-text animate-pulse">INITIALIZING_{roleLower.toUpperCase()}_PROTOCOL...</div>
          </div>
        }>
          <ApplicationPortal defaultRole={roleLower} />
        </Suspense>
      </section>
    </main>
  )
}
