'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarClock, CheckCircle2, Loader2, MessageCircle, Phone } from 'lucide-react'

import { appointmentSchema, type AppointmentPayload } from '@/lib/appointment-schema'
import { doctors } from '@/lib/doctors'
import { serviceCategories } from '@/lib/services'
import { site } from '@/lib/site'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'
import { Textarea } from '@/components/ui/textarea'

const allServices = Array.from(new Set(serviceCategories.flatMap((c) => c.items)))

export function AppointmentForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = React.useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentPayload>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: '',
      doctor: '',
      preferredDateTime: '',
      message: '',
    },
  })

  async function onSubmit(values: AppointmentPayload) {
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setMessage('Thanks! We received your request and will confirm your appointment shortly by phone/WhatsApp.')
      reset()
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const waLink = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <Card>
        <CardHeader>
          <CardTitle className="text-brand-green">Book an Appointment</CardTitle>
          <p className="text-sm text-ui-text">
            Share your preferred service, doctor, and timing. Our team will confirm your appointment quickly.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Your full name" {...register('fullName')} />
              {errors.fullName ? <p className="text-sm text-red-600">{errors.fullName.message}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+971 5X XXX XXXX" {...register('phone')} />
                {errors.phone ? <p className="text-sm text-red-600">{errors.phone.message}</p> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
                {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="service">Select Service</Label>
                <SelectNative id="service" {...register('service')} defaultValue="">
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </SelectNative>
                {errors.service ? <p className="text-sm text-red-600">{errors.service.message}</p> : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="doctor">Select Doctor</Label>
                <SelectNative id="doctor" {...register('doctor')} defaultValue="">
                  <option value="" disabled>
                    Choose a doctor...
                  </option>
                  {doctors.map((d) => (
                    <option key={d.slug} value={d.name}>
                      {d.name} — {d.role}
                    </option>
                  ))}
                </SelectNative>
                {errors.doctor ? <p className="text-sm text-red-600">{errors.doctor.message}</p> : null}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="preferredDateTime">Preferred Date & Time</Label>
              <Input id="preferredDateTime" placeholder="e.g., 25 Jan 2026, 6:00 PM" {...register('preferredDateTime')} />
              {errors.preferredDateTime ? (
                <p className="text-sm text-red-600">{errors.preferredDateTime.message}</p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us what you need (optional)" {...register('message')} />
              {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="sm:w-auto" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </Button>

              <Button asChild variant="green" className="sm:w-auto">
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-brand-orange" />
                  WhatsApp Us
                </a>
              </Button>

              <Button asChild variant="outline" className="sm:w-auto">
                <a href={`tel:${site.contact.phone}`} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-orange" />
                  Call
                </a>
              </Button>
            </div>

            {status === 'success' ? (
              <div className="rounded-2xl border border-ui-border bg-brand-orangeSoft p-4 text-ui-text">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-green" />
                  <div>
                    <p className="font-semibold text-brand-green">Request received</p>
                    <p className="text-sm">{message}</p>
                  </div>
                </div>
              </div>
            ) : null}

            {status === 'error' ? (
              <div className="rounded-2xl border border-ui-border bg-white p-4 text-ui-text">
                <div className="flex items-start gap-2">
                  <CalendarClock className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-brand-green">Could not submit</p>
                    <p className="text-sm">{message}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-green">What happens next?</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-ui-text">
            <p>
              1) We review your request. 2) We confirm availability. 3) We message/call you with the appointment
              confirmation.
            </p>
            <ul className="grid gap-2">
              <li className="rounded-xl bg-ui-bg p-3">DHA-licensed doctors & therapists</li>
              <li className="rounded-xl bg-ui-bg p-3">Modern equipment & medical-grade hygiene</li>
              <li className="rounded-xl bg-ui-bg p-3">Clear pricing and affordable packages</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-brand-green">Need faster booking?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-ui-text">
            <p>
              Prefer immediate confirmation? Message us on WhatsApp and share: service, preferred doctor, and preferred
              time.
            </p>
            <div className="mt-4 grid gap-3">
              <Button asChild variant="green">
                <a href={waLink} target="_blank" rel="noreferrer">
                  WhatsApp Now
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${site.contact.phone}`}>Call the Clinic</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
