import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import React from 'react'
import { renderToBuffer } from '@react-pdf/renderer'
import { ApplicationPDF } from '@/components/forms/ApplicationPDF'
import fs from 'fs'
import path from 'path'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!data.email || !data.fullName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Generate PDF Buffer
    let ownerSignature = undefined
    let logoBase64 = undefined

    try {
      // 1. Get Owner Signature
      const SIGNATURE_PATH = path.join(process.cwd(), 'src/lib/owner-signature.json')
      if (fs.existsSync(SIGNATURE_PATH)) {
        const sigFile = fs.readFileSync(SIGNATURE_PATH, 'utf8')
        ownerSignature = JSON.parse(sigFile).signature
      }

      // 2. Get Logo as Base64 for the PDF
      const logoPath = path.join(process.cwd(), 'public/logo/logo doral FW.png')
      if (fs.existsSync(logoPath)) {
        logoBase64 = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
      }
    } catch (e) {
      console.warn('PDF asset preparation failed:', e)
    }

    const pdfBuffer = await renderToBuffer(<ApplicationPDF data={data} ownerSignature={ownerSignature} logoBase64={logoBase64} />)

    // Send Email via Resend
    if (!resend) {
      console.error('Resend API Key is missing')
      return NextResponse.json({ message: 'Email service unconfigured' }, { status: 500 })
    }

    // Define role-specific email content
    const roleContent: Record<string, { subject: string, title: string, message: string }> = {
      model: {
        subject: `Doral Fashion Week Application: ${data.fullName} [Model Division]`,
        title: 'Talent Application Received',
        message: 'Your application for the Model Division at Doral Fashion Week has been successfully filed. Our team will review your profile and measurements shortly.'
      },
      designer: {
        subject: `Doral Fashion Week Collaboration: ${data.fullName} [Designer]`,
        title: 'Designer Submission Received',
        message: 'Thank you for submitting your portfolio to Doral Fashion Week. We look forward to reviewing your creative vision and potential participation.'
      },
      media: {
        subject: `Doral Fashion Week Accreditation: ${data.fullName} [Media/Press]`,
        title: 'Accreditation Request Filed',
        message: 'Your request for media/press accreditation for Doral Fashion Week has been recorded. Our press team will contact you regarding credentials.'
      },
      staff: {
        subject: `Doral Fashion Week Application: ${data.fullName} [Staff/Production]`,
        title: 'Production Team Application',
        message: 'Your application for our production and backstage team at Doral Fashion Week has been received. Thank you for your interest in joining.'
      },
      makeup: {
        subject: `Doral Fashion Week Application: ${data.fullName} [Make-Up Artist]`,
        title: 'Make-Up Artist Application',
        message: 'Your application for our hair and make-up team at Doral Fashion Week has been received. Thank you for your interest.'
      },
      photographer: {
        subject: `Doral Fashion Week Application: ${data.fullName} [Photographer]`,
        title: 'Photographer Application',
        message: 'Your application for our photography/media team at Doral Fashion Week has been received. Thank you for your interest.'
      }
    }

    const content = roleContent[data.role] || {
      subject: `Doral Fashion Week Application: ${data.fullName}`,
      title: 'Application Received',
      message: 'Your professional application has been received and is now under review by our executive team at Doral Fashion Week.'
    }

    const { data: emailData, error } = await resend.emails.send({
      from: 'Doral Fashion Week HQ <registrations@doralfashionweek.com>',
      to: [data.email, 'jose@idolfashiontheelitelab.com'],
      subject: content.subject,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #050505; padding: 40px 20px; color: #ffffff; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 8px; text-align: left; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
            
            <!-- Top Brand Header Banner -->
            <div style="background-color: #000000; padding: 40px 30px; border-bottom: 1px solid rgba(255,255,255,0.06); text-align: center;">
              <!-- Elegant DFW Typographic Logo -->
              <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 26px; font-weight: bold; letter-spacing: 6px; color: #ffffff; display: block; line-height: 1.1; text-transform: uppercase;">DORAL</span>
              <span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; letter-spacing: 8px; color: #D4AF37; display: block; margin-top: 5px; text-transform: uppercase;">FASHION WEEK</span>
            </div>

            <!-- Email Content Body -->
            <div style="padding: 40px 30px; line-height: 1.7; color: rgba(255, 255, 255, 0.85); font-size: 14px;">
              <h2 style="color: #ffffff; font-size: 18px; font-weight: 300; letter-spacing: 1px; text-transform: uppercase; margin-top: 0; margin-bottom: 25px; border-left: 3px solid #D4AF37; padding-left: 15px;">
                ${content.title}
              </h2>
              
              <p style="margin-bottom: 20px;">Dear <strong>${data.fullName}</strong>,</p>
              
              <p style="margin-bottom: 20px; font-weight: 300;">${content.message}</p>
              
              <p style="margin-bottom: 30px; font-weight: 300;">Please find your signed agreement attached to this email as a PDF copy for your professional records.</p>
              
              <!-- Status Box -->
              <div style="background-color: rgba(212, 175, 55, 0.05); border: 1px solid rgba(212, 175, 55, 0.15); border-radius: 6px; padding: 20px; text-align: center;">
                <span style="font-size: 10px; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; display: block; margin-bottom: 5px;">Admission Status</span>
                <span style="font-size: 14px; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">UNDER EXECUTIVE REVIEW</span>
              </div>
            </div>

            <!-- Corporate Footer -->
            <div style="background-color: #030303; padding: 40px 30px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; line-height: 1.6; color: rgba(255,255,255,0.45);">
              
              <div style="margin-bottom: 20px;">
                <span style="font-size: 14px; font-weight: bold; letter-spacing: 2px; color: #ffffff; display: block; text-transform: uppercase; margin-bottom: 5px;">DORAL FASHION WEEK</span>
                <span style="font-size: 11px; color: #D4AF37; display: block; font-weight: bold; margin-bottom: 8px;">Haute Couture Fashion House</span>
                <div style="display: inline-block; background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 5px 10px; border-radius: 4px;">
                  <span style="color: #D4AF37; font-size: 12px; margin-right: 5px;">★ 4.6</span>
                  <span style="color: rgba(255,255,255,0.6); font-size: 10px;">Google Rating (Reviews)</span>
                </div>
              </div>
              
              <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                <p style="margin: 0 0 10px 0;">
                  <strong>Showroom & HQ Address:</strong><br />
                  Alhambra Business Center<br />
                  4805 NW 79th Ave #3, Doral, FL 33166, USA
                </p>
                <p style="margin: 0 0 10px 0;">
                  <strong>Phone:</strong> <a href="tel:+17866475982" style="color: #D4AF37; text-decoration: none;">+1 786-647-5982</a>
                </p>
                <p style="margin: 0 0 15px 0;">
                  <strong>Hours:</strong> Open · Closes 7 PM
                </p>
              </div>
              
              <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; text-align: center; font-size: 10px; color: rgba(255,255,255,0.3);">
                &copy; 2026 Doral Fashion Week LLC. All Rights Reserved.
              </div>
              
            </div>

          </div>
        </div>
      `,
      attachments: [
        {
          filename: `contract_${data.fullName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer,
        },
      ],
    })

    if (error) {
      console.error('Resend Error:', error)
      return NextResponse.json({ message: `Email dispatch failed: ${error.message || JSON.stringify(error)}`, error }, { status: 500 })
    }

    return NextResponse.json({ message: 'Application filed successfully', emailData }, { status: 200 })
  } catch (error) {
    console.error('Submission Error:', error)
    return NextResponse.json({ message: 'Internal Server Error', error: String(error) }, { status: 500 })
  }
}
