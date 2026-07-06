import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Doral Fashion Week',
  description: 'Official terms and conditions governing participation, admissions, and digital platforms of Doral Fashion Week.',
}

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen relative pb-24 text-white">
      {/* Floating Symmetric Pill Navbar */}
      <nav>
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

      {/* Hero Header */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black z-0" />
        <div className="relative z-10 text-center px-4 mt-20">
          <span className="text-[10px] tracking-[0.4em] font-mono text-accent uppercase block mb-4">Legal Framework</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white tracking-wide uppercase leading-none">
            Terms & Conditions
          </h1>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-3xl px-6 md:px-8 mt-16 relative z-10">
        <div className="prose prose-invert max-w-none font-body text-sm md:text-base leading-relaxed text-white/70 space-y-8 text-justify">
          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">1. Scope and Acceptance</h2>
            <p>
              By accessing, browsing, or using the platforms, websites, or registering for any Doral Fashion Week event, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, applicants, designers, models, staff, and partners. If you disagree with any part of these terms, you must cease all usage of our digital assets and event portals immediately.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">2. Application and Intake Protocol</h2>
            <p>
              Submitting an application through our portals does not guarantee admission or selection for Doral Fashion Week. All entries are subject to review by the Executive Committee. Candidates are required to provide accurate, current, and complete details. Providing false information (including fake measurements, credentials, or documentation) will result in immediate disqualification and termination of any associated agreements.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">3. Fees and Financial Disclosures</h2>
            <p>
              Certain application tiers or event credentials may require processing fees or reservation deposits. Unless explicitly stated otherwise in a separate signed contract, all fees, ticket purchases, registration deposits, and payments are strictly <strong>non-refundable</strong>. LA COMPAÑÍA does not issue refunds, credits, or transfers under any circumstances, including event rescheduling, cancellation due to force majeure, or candidate withdrawals.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">4. Intellectual Property & Image Rights</h2>
            <p>
              By attending or participating in Doral Fashion Week, models, designers, volunteers, and staff grant DFW and its parent organizations an irrevocable, worldwide, perpetual, royalty-free license to use, reproduce, broadcast, edit, and distribute their likeness, voice, photos, and video recordings in any medium for marketing, commercial, and promotional activities. All materials captured by our media crews are considered "Work-for-Hire" and remain the exclusive property of DFW.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">5. Code of Conduct and NDA</h2>
            <p>
              Participants must conduct themselves with professionalism at all times. Any form of harassment, discrimination, or behavior that tarnishes the brand reputation of Doral Fashion Week will lead to immediate expulsion from the runway and venues. Furthermore, participants agree to sign and abide by Non-Disclosure Agreements (NDA) regarding logistical details, stage layouts, designer schedules, and backstage protocols. Breach of confidentiality will subject the offending party to legal damages.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">6. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Doral Fashion Week, its organizers, directors, employees, sponsors, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from participation in the event, equipment damage (including professional camera gear), personal injury, or travel delays. All participants take part in the event at their own risk and are encouraged to secure independent liability and health coverage.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles. Any legal disputes or claims arising out of these terms or event participation shall be resolved exclusively in the state or federal courts located in Miami-Dade County, Florida.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs font-mono opacity-50 text-center">
            Last Updated: July 2026 // Doral Fashion Week Legal Dept.
          </div>
        </div>
      </section>
    </main>
  )
}
