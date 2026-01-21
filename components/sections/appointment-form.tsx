'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  CalendarClock, 
  CheckCircle2, 
  Loader2, 
  MessageCircle, 
  Phone, 
  User, 
  Mail, 
  Stethoscope, 
  Calendar, 
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react'

import { appointmentSchema, type AppointmentPayload } from '@/lib/appointment-schema'
import { doctors } from '@/lib/doctors'
import { serviceCategories } from '@/lib/services'
import { site } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons/whatsapp'

import { Button } from '@/components/ui/button'
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
    <div className="grid gap-12 lg:grid-cols-12">
      {/* Left Column: Form */}
      <div className="lg:col-span-12 xl:col-span-7">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-brand-green/5 border border-ui-border/50 md:p-12">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-green">Request a Consultation</h2>
            <p className="mt-3 text-ui-text/60">Fill out the form below and our team will get back to you within 2 hour.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            <div className="grid gap-6">
               {/* Full Name */}
               <div className="grid gap-3">
                  <Label htmlFor="fullName" className="flex items-center gap-2 font-bold text-brand-green">
                    <User className="h-4 w-4 text-brand-orange" /> Full Name
                  </Label>
                  <Input 
                    id="fullName" 
                    placeholder="E.g. John Doe" 
                    className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all"
                    {...register('fullName')} 
                  />
                  {errors.fullName ? <p className="text-sm font-medium text-red-500">{errors.fullName.message}</p> : null}
               </div>

               {/* Contact Grid */}
               <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="phone" className="flex items-center gap-2 font-bold text-brand-green">
                      <Phone className="h-4 w-4 text-brand-orange" /> Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="+971 5X XXX XXXX" 
                      className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all"
                      {...register('phone')} 
                    />
                    {errors.phone ? <p className="text-sm font-medium text-red-500">{errors.phone.message}</p> : null}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email" className="flex items-center gap-2 font-bold text-brand-green">
                      <Mail className="h-4 w-4 text-brand-orange" /> Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@email.com" 
                      className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all"
                      {...register('email')} 
                    />
                    {errors.email ? <p className="text-sm font-medium text-red-500">{errors.email.message}</p> : null}
                  </div>
               </div>

               {/* Service & Doctor Grid */}
               <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="service" className="flex items-center gap-2 font-bold text-brand-green">
                      <Stethoscope className="h-4 w-4 text-brand-orange" /> Service Needed
                    </Label>
                    <SelectNative 
                      id="service" 
                      className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all appearance-none bg-white"
                      {...register('service')} 
                      defaultValue=""
                    >
                      <option value="" disabled>Choose a service...</option>
                      {allServices.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </SelectNative>
                    {errors.service ? <p className="text-sm font-medium text-red-500">{errors.service.message}</p> : null}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="doctor" className="flex items-center gap-2 font-bold text-brand-green">
                      <User className="h-4 w-4 text-brand-orange" /> Preferred Specialist
                    </Label>
                    <SelectNative 
                      id="doctor" 
                      className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all appearance-none bg-white"
                      {...register('doctor')} 
                      defaultValue=""
                    >
                      <option value="" disabled>Any Available Specialist</option>
                      {doctors.map((d) => (
                        <option key={d.slug} value={d.name}>{d.name}</option>
                      ))}
                    </SelectNative>
                    {errors.doctor ? <p className="text-sm font-medium text-red-500">{errors.doctor.message}</p> : null}
                  </div>
               </div>

               {/* Date & Time */}
               <div className="grid gap-3">
                  <Label htmlFor="preferredDateTime" className="flex items-center gap-2 font-bold text-brand-green">
                    <Calendar className="h-4 w-4 text-brand-orange" /> Preferred Date & Time
                  </Label>
                  <Input 
                    id="preferredDateTime" 
                    placeholder="E.g. Monday morning or Jan 25th at 4pm" 
                    className="h-14 rounded-xl text-lg focus:ring-brand-green transition-all"
                    {...register('preferredDateTime')} 
                  />
                  {errors.preferredDateTime ? (
                    <p className="text-sm font-medium text-red-500">{errors.preferredDateTime.message}</p>
                  ) : null}
               </div>

               {/* Message */}
               <div className="grid gap-3">
                  <Label htmlFor="message" className="flex items-center gap-2 font-bold text-brand-green">
                    <MessageSquare className="h-4 w-4 text-brand-orange" /> Additional Notes
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about any specific concerns (optional)" 
                    className="min-h-[120px] rounded-xl text-lg focus:ring-brand-green transition-all"
                    {...register('message')} 
                  />
                  {errors.message ? <p className="text-sm font-medium text-red-500">{errors.message.message}</p> : null}
               </div>
            </div>

            <div className="flex flex-col gap-6 pt-4">
              <Button type="submit" size="lg" className="h-16 rounded-xl text-xl font-bold bg-brand-green hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span className="flex items-center gap-3">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    Sending Request...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Request <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ui-text/50">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-orange" /> 100% Encrypted & Secure
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-orange" /> Confirmation within 2 Hours
                 </div>
              </div>
            </div>

            {status === 'success' && (
              <div className="rounded-2xl bg-green-50 p-6 border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-green-800">Request Sent Successfully</h3>
                    <p className="mt-1 text-green-700 leading-relaxed">{message}</p>
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="rounded-2xl bg-red-50 p-6 border border-red-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex gap-4">
                  <CalendarClock className="h-8 w-8 text-red-600 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800">Submission Error</h3>
                    <p className="mt-1 text-red-700 leading-relaxed">{message}</p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right Column: Trust & Guidance */}
      <div className="lg:col-span-12 xl:col-span-5 space-y-12 lg:pt-12">
         {/* Trust Section */}
         <div className="space-y-10 px-4 md:px-0">
            <div className="space-y-4">
               <h3 className="text-2xl font-bold text-brand-green">Why Choose Apollo?</h3>
               <p className="text-ui-text/70 leading-relaxed">
                  Join thousands of satisfied patients who trust us for their health and aesthetic goals in Dubai.
               </p>
            </div>

            <div className="grid gap-8">
               <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                     <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-brand-green">DHA-Licensed Experts</h4>
                     <p className="mt-1 text-sm text-ui-text/60 leading-relaxed">All our doctors and therapists are certified by the Dubai Health Authority for your safety.</p>
                  </div>
               </div>
               <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                     <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-brand-green">Premium Technology</h4>
                     <p className="mt-1 text-sm text-ui-text/60 leading-relaxed">We use the latest medical-grade equipment for precise results and maximum comfort.</p>
                  </div>
               </div>
               <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                     <Clock className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-brand-green">Convenient Timings</h4>
                     <p className="mt-1 text-sm text-ui-text/60 leading-relaxed">Flexible morning and evening slots to suit your busy schedule in Deira.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Faster Contact */}
         <div className="rounded-[2.5rem] bg-brand-orangeSoft px-8 py-10">
            <h3 className="text-2xl font-bold text-brand-green">Need Help?</h3>
            <p className="mt-4 text-ui-text/70 leading-relaxed">
               Can&apos;t wait for a callback? Reach out to us directly via WhatsApp or call for immediate assistance.
            </p>
            <div className="mt-8 grid gap-4">
               <Button asChild size="lg" className="h-14 rounded-xl bg-brand-green hover:bg-brand-green/90 text-white shadow-lg shadow-brand-green/10" variant="green">
                  <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                    <WhatsAppIcon className="h-6 w-6" />
                    Chat on WhatsApp
                  </a>
               </Button>
               <Button asChild size="lg" className="h-14 rounded-xl border-brand-green text-brand-green hover:bg-brand-green/5" variant="outline">
                  <a href={`tel:${site.contact.phone}`} className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call {site.contact.phone}
                  </a>
               </Button>
            </div>
         </div>

         {/* Steps Info */}
         <div className="px-6 py-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-6 text-center">The Booking Process</h4>
            <div className="flex items-center justify-between max-w-[300px] mx-auto opacity-50">
               <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-green text-white flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-[10px] font-bold">Request</span>
               </div>
               <div className="h-px bg-brand-green flex-1 mx-2" />
               <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-[10px] font-bold">Confirm</span>
               </div>
               <div className="h-px bg-brand-green flex-1 mx-2" />
               <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-[10px] font-bold">Visit</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
