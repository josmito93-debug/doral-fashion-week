import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Doral Fashion Week',
  description: 'Official privacy policy and data protection guidelines of Doral Fashion Week.',
}

export default function PrivacyPage() {
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
          <span className="text-[10px] tracking-[0.4em] font-mono text-accent uppercase block mb-4">Data Governance</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white tracking-wide uppercase leading-none">
            Privacy Policy
          </h1>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-3xl px-6 md:px-8 mt-16 relative z-10">
        <div className="prose prose-invert max-w-none font-body text-sm md:text-base leading-relaxed text-white/70 space-y-8 text-justify">
          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">1. Information We Collect</h2>
            <p>
              When you apply to join Doral Fashion Week as a model, designer, photographer, makeup artist, or volunteer staff, we collect personal information necessary to manage the intake process. This includes your full name, email address, physical address, telephone number, identification number (DNI/Passport), date of birth, age, profile measurements, and professional portfolio links. In addition, when completing agreements, we record your legally binding digital signature canvas data.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">2. How We Use Your Data</h2>
            <p>
              Your data is processed strictly for administrative and casting operations. Specifically, we use your information to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Validate candidate qualifications and verify age compliance.</li>
              <li>Compile legally binding contractor or volunteer agreements.</li>
              <li>Generate and deliver executed contract copies in PDF format via email.</li>
              <li>Coordinate backstage fitting, event scheduling, credentials, and security clearance.</li>
              <li>Perform marketing communication regarding upcoming casting calls, events, and brand announcements (you can opt-out at any time).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">3. Data Sharing and Third-Party Integrations</h2>
            <p>
              We do not sell, rent, or trade your personal data. To provide casting portals and process applications, we utilize safe integrations with third-party service providers:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Airtable:</strong> To securely store casting applications and intake records.</li>
              <li><strong>Resend / Email Services:</strong> To deliver official notifications and PDF contracts.</li>
              <li><strong>Google Drive / Cloud Storage:</strong> To archive signed PDF agreements securely.</li>
              <li><strong>Stripe:</strong> For processing application casting fees where applicable.</li>
            </ul>
            <p className="mt-4">
              All third-party services are contractually bound to protect your data and are prohibited from using it for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">4. Digital Signatures and Legal PDF Storage</h2>
            <p>
              The digital signature canvas captures coordinate buffers to render your signature directly onto the legal contract. This contract is converted into an unmodifiable PDF format, which is emailed to you and archived securely on our encrypted cloud storage server. By signing, you explicitly authorize the capture and processing of your digital signature for execution purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">5. Data Retention & Security</h2>
            <p>
              We implement industry-standard physical, electronic, and administrative safeguards to protect your data from unauthorized access, alteration, or disclosure. We retain your information only as long as necessary to fulfill casting, administrative, or legal contract retention compliance. Once the retention period expires, your data is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights under the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), or Florida statutes, including the right to request access, correction, or deletion of your personal data, or to restrict its processing. To exercise these rights, please contact our casting office at casting@doralfashionweek.com.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs font-mono opacity-50 text-center">
            Last Updated: July 2026 // Doral Fashion Week Compliance Office
          </div>
        </div>
      </section>
    </main>
  )
}
