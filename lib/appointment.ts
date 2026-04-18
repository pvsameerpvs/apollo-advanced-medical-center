import type { AppointmentPayload } from '@/lib/appointment-schema'
import { site } from '@/lib/site'

export function formatPreferredDateTime(preferredDateTime: string) {
  const parsed = new Date(preferredDateTime)

  if (Number.isNaN(parsed.getTime())) {
    return preferredDateTime
  }

  return new Intl.DateTimeFormat('en-AE', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(parsed)
}

export function formatDateTimeLocalValue(date: Date) {
  const timezoneOffset = date.getTimezoneOffset() * 60 * 1000
  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 16)
}

export function formatStartOfDayLocalValue(date: Date) {
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)
  return formatDateTimeLocalValue(startOfDay)
}

export function buildAppointmentWhatsAppUrl(
  values: AppointmentPayload,
  whatsappNumber: string
) {
  const normalizedNumber = whatsappNumber.replace(/\D/g, '')
  const formattedPreferredDateTime = formatPreferredDateTime(values.preferredDateTime)
  const lines = [
    `Hello ${site.shortName},`,
    '',
    'I would like to book an appointment.',
    '',
    `Full Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    `Preferred Specialist: ${values.doctor}`,
    `Preferred Date & Time: ${formattedPreferredDateTime}`,
    `Additional Notes: ${values.message?.trim() || '-'}`,
    '',
    'Please confirm the available slot. Thank you.',
  ]

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(lines.join('\n'))}`
}
