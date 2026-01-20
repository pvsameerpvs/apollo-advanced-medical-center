import { z } from 'zod'

export const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number.')
    .max(20, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().min(2, 'Please select a service.'),
  doctor: z.string().min(2, 'Please select a doctor.'),
  preferredDateTime: z.string().min(4, 'Please choose your preferred date and time.'),
  message: z.string().max(1000, 'Message is too long.').optional().or(z.literal('')),
})

export type AppointmentPayload = z.infer<typeof appointmentSchema>
