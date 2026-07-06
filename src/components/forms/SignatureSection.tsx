"use client"

import React, { useRef, useState, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import confetti from 'canvas-confetti'

interface SignatureSectionProps {
  role: string
  formData: any
  onComplete: () => void
}

export const SignatureSection = ({ role, formData, onComplete }: SignatureSectionProps) => {
  const sigCanvas = useRef<SignatureCanvas | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [signed, setSigned] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Make SignatureCanvas responsive and crisp by matching buffer size to CSS size
  useEffect(() => {
    const handleResize = () => {
      const canvas = sigCanvas.current?.getCanvas()
      if (canvas && canvas.parentElement) {
        // Save drawing data if any
        const temp = sigCanvas.current?.toDataURL()
        
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
        
        // Restore drawing data
        if (temp && signed) {
          sigCanvas.current?.fromDataURL(temp)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [signed])

  const clear = () => {
    sigCanvas.current?.clear()
    setSigned(false)
  }

  const save = async () => {
    if (!signed || sigCanvas.current?.isEmpty()) {
      alert('Please provide a signature / Por favor firme.')
      return
    }
    
    setIsSubmitting(true)
    const signatureData = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png')
    
    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role,
          signature: signatureData,
          contractId: `DFW-2026-${Math.floor(Math.random() * 10000)}`
        }),
      })

      if (response.ok) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#D4AF37', '#000000']
        })
        setTimeout(onComplete, 1500)
      } else {
        const err = await response.json()
        alert(`Error submitting application: ${err.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full space-y-10">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="w-full">
          <div className="mb-8 pb-4 border-b border-white/10 w-full">
            <h4 className="text-xl brand-text uppercase text-accent font-bold">Step 03: Legal Binding</h4>
          </div>
          <p className="camera-hud-text">Candidate Class: {role}</p>
        </div>
        <div className="text-right">
          <span className="camera-hud-text">Contract ID</span>
          <p className="font-mono text-xs opacity-40 text-white">DFW-2026-{Math.floor(Math.random() * 10000)}</p>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 p-6 mb-8 max-h-60 overflow-y-auto font-mono text-[10px] space-y-4 opacity-70 leading-relaxed uppercase tracking-tighter text-justify text-white rounded-lg">
        <p className="brand-text text-base text-accent mb-4 font-bold">
          {role === 'designer' ? 'CONTRATO DE PARTICIPACIÓN PARA DISEÑADORES' : 
           role === 'model' ? 'CONTRATO INTEGRAL DE PARTICIPACIÓN (TALENT)' : 
           'ACUERDO DE COLABORACIÓN Y LIBERACIÓN DE RESPONSABILIDAD'}
        </p>
        
        <p><span className="text-white/80 font-bold">I. DISPOSICIONES FINANCIERAS:</span> Todos los pagos y depósitos son estrictamente no reembolsables. No se emitirán créditos bajo ninguna circunstancia.</p>
        
        <p><span className="text-white/80 font-bold">II. RESPONSABILIDAD:</span> LA COMPAÑÍA no responde por lesiones o pérdida de propiedad. {role !== 'designer' && role !== 'model' && 'No se asume responsabilidad por equipos profesionales (cámaras, lentes).'} EL PARTICIPANTE indemnizará a LA COMPAÑÍA.</p>
        
        <p><span className="text-white/80 font-bold">III. CONFIDENCIALIDAD (NDA):</span> Se prohíbe divulgar secretos comerciales, diseños no publicados o logística a terceros o redes sociales.</p>
        
        {role === 'designer' ? (
          <>
            <p><span className="text-white/80 font-bold">IV. PROPIEDAD INTELECTUAL:</span> El Diseñador garantiza originalidad y asume responsabilidad total ante reclamos por plagio.</p>
            <p><span className="text-white/80 font-bold">V. LOGÍSTICA:</span> El seguro de las piezas es responsabilidad del Diseñador. El incumplimiento de horarios resultará en exclusión.</p>
          </>
        ) : (
          <>
            <p><span className="text-white/80 font-bold">IV. DERECHOS DE IMAGEN:</span> USO IRREVOCABLE Y GLOBAL DE IMAGEN/VOZ CON FINES COMERCIALES. {role !== 'model' && 'MATERIAL CAPTURADO SE CONSIDERA "OBRA POR ENCARGO" (WORK-FOR-HIRE).'}</p>
            <p><span className="text-white/80 font-bold">V. ESTATUS:</span> EL PARTICIPANTE ACTÚA COMO AGENTE INDEPENDIENTE (VOLUNTARIO/PRENSA/CONTRATISTA) Y NO COMO EMPLEADO.</p>
          </>
        )}
        
        <p className="mt-4 border-t border-white/10 pt-4 italic">Al firmar digitalmente, usted confirma que ha leído y acepta todos los términos regidos por las leyes del Estado de Florida.</p>
      </div>

      <div className="flex flex-col items-center w-full form-section-divider">
        <label className="form-label mb-4">Digital Signature Required</label>
        <div ref={containerRef} className="w-full h-64 bg-white/[0.03] border border-white/10 relative cursor-crosshair rounded-lg overflow-hidden mb-8">
          <SignatureCanvas
            ref={sigCanvas}
            penColor="#D4AF37"
            canvasProps={{ className: 'w-full h-full block' }}
            onBegin={() => setSigned(true)}
          />
          {!signed && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white">Sign inside this box / Firme aquí</span>
            </div>
          )}
        </div>

        <div className="flex gap-4 w-full">
          <button 
            type="button"
            onClick={clear}
            disabled={isSubmitting}
            className="portal-button-secondary flex-1"
            style={{ padding: '1.1rem !important' }}
          >
            Clear
          </button>
          <button 
            type="button"
            onClick={save}
            disabled={isSubmitting}
            className="portal-button-primary flex-1"
            style={{ marginTop: 0, padding: '1.1rem !important' }}
          >
            {isSubmitting ? 'Processing...' : 'Authorize & Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}
