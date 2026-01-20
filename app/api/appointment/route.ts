import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { appointmentSchema } from '@/lib/appointment-schema'
import { site } from '@/lib/site'

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = appointmentSchema.parse(json)

    const to = process.env.APPOINTMENT_TO_EMAIL || site.contact.email
    const from = process.env.APPOINTMENT_FROM_EMAIL || site.contact.email

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpUser || !smtpPass) {
      // Allow development without SMTP configured.
      console.log('[Appointment]', { to, from, ...data })
      return NextResponse.json({ ok: true, dev: true })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const subject = `New Appointment Request — ${data.fullName} (${data.service})`

    const text = [
      `New appointment request received:`,
      '',
      `Full Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Doctor: ${data.doctor}`,
      `Preferred Date & Time: ${data.preferredDateTime}`,
      `Message: ${data.message || '-'}`,
      '',
      `Clinic: ${site.name}`,
      `Location: ${site.address.city}, ${site.address.region}, ${site.address.country}`,
    ].join('\n')

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color:#1F2937;">
        <h2 style="margin:0 0 12px; color:#097140;">New Appointment Request</h2>
        <table style="width:100%; border-collapse:collapse;">
          ${row('Full Name', data.fullName)}
          ${row('Phone', data.phone)}
          ${row('Email', data.email)}
          ${row('Service', data.service)}
          ${row('Doctor', data.doctor)}
          ${row('Preferred Date & Time', data.preferredDateTime)}
          ${row('Message', data.message || '-')}
        </table>
        <p style="margin:16px 0 0;">Clinic: <strong>${site.name}</strong> — Deira, Dubai</p>
      </div>
    `

    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      html,
      replyTo: data.email,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return NextResponse.json({ ok: false, error: message }, { status: 400 })
  }
}

function row(label: string, value: string) {
  const safe = escapeHtml(value)
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid #E5E7EB; width:180px; color:#065C34; font-weight:600;">${escapeHtml(
        label
      )}</td>
      <td style="padding:10px 0; border-bottom:1px solid #E5E7EB;">${safe}</td>
    </tr>
  `
}

function escapeHtml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
