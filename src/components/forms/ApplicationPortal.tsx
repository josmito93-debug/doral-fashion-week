"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, User, PenTool, Scissors, Briefcase, Paintbrush, Newspaper } from 'lucide-react'
import { SignatureSection } from './SignatureSection'
import { useSearchParams } from 'next/navigation'

const ROLES = [
  { id: 'model', label: 'Model', icon: User, description: 'High-fashion model applicant' },
  { id: 'designer', label: 'Designer', icon: PenTool, description: 'Creative director & fashion architect' },
  { id: 'photographer', label: 'Photographer', icon: Camera, description: 'Visual storyteller & lighting expert' },
  { id: 'makeup', label: 'Make-Up', icon: Paintbrush, description: 'Elite beauty & transformation specialist' },
  { id: 'media', label: 'Media-Press', icon: Newspaper, description: 'Industry coverage & high-fashion news' },
  { id: 'staff', label: 'Staff/Backstage', icon: Scissors, description: 'Backstage elite support' },
  { id: 'sponsor', label: 'Sponsor', icon: Briefcase, description: 'Strategic industry partner' },
]

interface ApplicationPortalProps {
  defaultRole?: string
  onClose?: () => void
  isStandalone?: boolean
}

export const ApplicationPortal = ({ defaultRole: initialRole, onClose, isStandalone = false }: ApplicationPortalProps) => {
  const searchParams = useSearchParams()
  const [role, setRole] = useState<string | null>(null)
  const [step, setStep] = useState(0) // 0: Select Role, 1: Details, 2: Signature, 3: Success

  React.useEffect(() => {
    const roleFromQuery = searchParams.get('role')
    const finalRole = initialRole || roleFromQuery
    
    if (finalRole && ROLES.find(r => r.id === finalRole)) {
      setRole(finalRole)
      setStep(1) // Jump straight to details
    }
  }, [searchParams, initialRole])

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    email: '',
    phone: '',
    portfolio: '',
    address: '',
    cityState: '',
    zip: '',
    experience: '',
    experienceDetails: '',
    measurements: {
      height: '',
      shoe: '',
      size: '',
      eyes: '',
      bust: '',
      waist: '',
      hips: '',
      hair: ''
    },
    fiscalStatus: 'contractor',
    idNumber: ''
  })

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateMeasurement = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      measurements: { ...prev.measurements, [field]: value }
    }))
  }

  const handleNext = () => setStep(prev => prev + 1)
  const handleBack = () => setStep(prev => Math.max(0, prev - 1))
  const handleReset = () => {
    setRole(null)
    setStep(0)
    setFormData({
      fullName: '',
      dob: '',
      age: '',
      email: '',
      phone: '',
      portfolio: '',
      address: '',
      cityState: '',
      zip: '',
      experience: '',
      experienceDetails: '',
      measurements: {
        height: '',
        shoe: '',
        size: '',
        eyes: '',
        bust: '',
        waist: '',
        hips: '',
        hair: ''
      },
      fiscalStatus: 'contractor',
      idNumber: ''
    })
  }

  return (
    <div className="portal-container">
      {/* Close Button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl font-mono cursor-pointer z-10"
        >
          ✕
        </button>
      )}

      {/* Header & Progress (Stay Centered) */}
      <div className="w-full mb-10 relative">
        {step > 0 && step < 3 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="absolute -top-8 left-0 camera-hud-text text-accent hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">{"<"}</span>
            BACK // RE-CALIBRATE
          </motion.button>
        )}
        
        {!isStandalone && (
          <div className="portal-header">
            <img 
              src="/logo/logo doral FW.png" 
              alt="Doral Fashion Week Logo" 
              className="h-16 md:h-20 mb-4 object-contain"
            />
            <h2 className="portal-subtitle">
              {role ? `PROTOCOL: ${role.toUpperCase()}_INTAKE` : 'Where style meets high-fashion evolution.'}
            </h2>
            <h3 className="portal-title">
              {role ? `${role} admission` : "Admission portal"}
            </h3>
          </div>
        )}

        <div className="w-full h-1 bg-white/5 mb-4 relative mt-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent"
            animate={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col pt-6 pb-10"
          >
            {ROLES.map((r) => (
              <div
                key={r.id}
                className="group w-full flex flex-col md:flex-row md:items-end justify-between gap-4 py-10 px-6 md:py-14 md:px-12 relative overflow-hidden border-b border-white/10 hover:bg-white/[0.02] transition-colors"
              >
                  <div className="flex-1 text-left">
                    <motion.h4 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="brand-text text-4xl md:text-5xl lg:text-6xl transition-all duration-500 group-hover:text-accent tracking-tighter leading-[0.9]"
                    >
                      {r.label}
                    </motion.h4>
                    <p className="detail-text mt-2 opacity-40 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] md:text-xs">
                       <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100" />
                       {r.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end h-full mt-4 md:mt-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setRole(r.id); handleNext(); }}
                      className="detail-text px-4 py-2 bg-transparent border border-white/10 text-white tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all z-10 text-[9px] md:text-xs cursor-pointer"
                    >
                      Initialize {">"}
                    </motion.button>
                    <span className="camera-hud-text mt-2 opacity-20 hidden md:block tracking-[0.5em] text-[9px]">
                      0{ROLES.indexOf(r) + 1} // DFW-PROTOCOL
                    </span>
                  </div>

                {/* Full Width Animated Line under the role */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 0.8 }}
                     className="h-full bg-accent"
                   />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Step 1 & 2 (Keep Centered) */}
        {(step === 1 || step === 2 || step === 3) && (
          <div className="w-full">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full relative"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
                  <span className="big-text brand-text text-6xl">02</span>
                </div>

                <div className="mb-10 pb-4 border-b border-white/10 w-full">
                  <h4 className="text-xl brand-text uppercase text-accent font-bold">Step 02: Candidate Data</h4>
                </div>
                <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                  <div className="form-grid">
                    <div className="flex flex-col">
                      <label className="form-label">Full Name / Nombre Completo</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className="form-input" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">DNI / Pasaporte</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.idNumber}
                        onChange={(e) => updateField('idNumber', e.target.value)}
                        className="form-input" 
                        placeholder="ID NUMBER"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="form-label">DOB / Nacimiento</label>
                      <input 
                        type="date" 
                        required 
                        value={formData.dob}
                        onChange={(e) => updateField('dob', e.target.value)}
                        className="form-input" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Age / Edad</label>
                      <input 
                        type="number" 
                        required 
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="form-input" 
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="form-label">Professional Email</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="form-input" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Mobile Contact</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="form-input" 
                      />
                    </div>
                    
                    <div className="flex flex-col form-full-width">
                       <label className="form-label">Instagram / LinkedIn / Portfolio</label>
                       <input 
                         type="text" 
                         required 
                         placeholder="@handle or url" 
                         value={formData.portfolio}
                         onChange={(e) => updateField('portfolio', e.target.value)}
                         className="form-input" 
                       />
                    </div>

                    {['staff', 'makeup', 'media'].includes(role || '') && (
                      <>
                        <div className="flex flex-col form-full-width">
                          <label className="form-label">Home Address / Dirección de Habitación</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.address}
                            onChange={(e) => updateField('address', e.target.value)}
                            className="form-input" 
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="form-label">City/State</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.cityState}
                            onChange={(e) => updateField('cityState', e.target.value)}
                            className="form-input" 
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="form-label">Zip Code</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.zip}
                            onChange={(e) => updateField('zip', e.target.value)}
                            className="form-input" 
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {role === 'model' && (
                    <div className="space-y-10 form-section-divider">
                      <h5 className="brand-text text-xl text-accent font-bold">Measurements & Profile</h5>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { l: 'Estatura (Height)', n: 'height' },
                          { l: 'Calzado (Shoe)', n: 'shoe' },
                          { l: 'Talla (Dress/Suit)', n: 'size' },
                          { l: 'Ojos (Eyes)', n: 'eyes' },
                          { l: 'Busto/Chest', n: 'bust' },
                          { l: 'Cintura (Waist)', n: 'waist' },
                          { l: 'Cadera (Hips)', n: 'hips' },
                          { l: 'Cabello (Hair)', n: 'hair' },
                        ].map((f) => (
                          <div key={f.n} className="flex flex-col">
                            <label className="form-label" style={{ fontSize: '0.55rem' }}>{f.l}</label>
                            <input 
                              type="text" 
                              value={(formData.measurements as any)[f.n]}
                              onChange={(e) => updateMeasurement(f.n, e.target.value)}
                              className="form-input" 
                              style={{ padding: '0.8rem 1rem' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col form-section-divider">
                     <label className="form-label">Past Experience? / Experiencia Previa?</label>
                     <div className="flex gap-8 mb-4">
                        <label className="radio-container">
                           <input 
                             type="radio" 
                             name="experience" 
                             className="hidden" 
                             checked={formData.experience === 'yes'}
                             onChange={() => updateField('experience', 'yes')}
                           />
                           <div className="radio-custom">
                              <div className="radio-dot" style={{ opacity: formData.experience === 'yes' ? 1 : 0 }} />
                           </div>
                           <span className="font-mono text-xs uppercase text-white">Yes / Si</span>
                        </label>
                        <label className="radio-container">
                           <input 
                             type="radio" 
                             name="experience" 
                             className="hidden" 
                             checked={formData.experience === 'no'}
                             onChange={() => updateField('experience', 'no')}
                           />
                           <div className="radio-custom">
                              <div className="radio-dot" style={{ opacity: formData.experience === 'no' ? 1 : 0 }} />
                           </div>
                           <span className="font-mono text-xs uppercase text-white">No</span>
                        </label>
                     </div>
                     <textarea 
                        placeholder="Highlight previous projects... / Proyectos anteriores destacados..." 
                        value={formData.experienceDetails}
                        onChange={(e) => updateField('experienceDetails', e.target.value)}
                        className="form-textarea"
                     />
                  </div>

                  {['staff', 'makeup', 'media'].includes(role || '') && (
                    <div className="flex flex-col form-section-divider">
                      <label className="form-label">Fiscal Status / Estatus Legal-Fiscal</label>
                      <select 
                        value={formData.fiscalStatus}
                        onChange={(e) => updateField('fiscalStatus', e.target.value)}
                        className="form-select"
                      >
                        <option value="contractor">Option A: Contractor (W-9 required)</option>
                        <option value="volunteer">Option B: Voluntario (Learning/Networking)</option>
                      </select>
                    </div>
                  )}
                  
                  <button type="submit" className="portal-button-primary">
                    Validate & Generate Contract
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
               <motion.div 
                 key="step2"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="w-full"
               >
                 <SignatureSection role={role || ''} formData={formData} onComplete={handleNext} />
               </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center py-12"
              >
                <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-8">
                  <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                </div>
                <h4 className="portal-title">Protocol Complete</h4>
                <p className="font-mono opacity-50 uppercase tracking-widest max-w-sm mx-auto text-xs text-white">
                  Candidate data has been encrypted and sent to HQ. You will receive the signed contract shortly in your inbox.
                </p>
                <button 
                  onClick={handleReset}
                  className="portal-button-primary"
                  style={{ maxWidth: '300px', margin: '3rem auto 0' }}
                >
                  New Application
                </button>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
