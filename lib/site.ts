const clinicPhone = process.env.NEXT_PUBLIC_CLINIC_PHONE || '+971 4 286 4876'
const clinicPhoneDigits = clinicPhone.replace(/\D/g, '')
const clinicPhoneE164 = clinicPhone.trim().startsWith('0')
  ? `+971${clinicPhoneDigits.slice(1)}`
  : `+${clinicPhoneDigits}`

export const site = {
  name: 'Apollo Advanced Medical Center',
  shortName: 'Apollo AMC',
  description: 'Trusted medical centre in Rigga, Deira, Dubai for dental, aesthetic & laser treatments. DHA-licensed medical center near Union. Book your appointment today.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://apolloadvancemedicalcenter.com',
  locale: 'en_AE',
  address: {
    street: 'BA1 Mezzanine floor Bin jarsh building, near fish roundabout, Al Rigga, Union Dubai',
    city: 'Dubai',
    region: 'Dubai',
    country: 'UAE',
    countryCode: 'AE',
    postalCode: '',
  },
  contact: {
    phone: clinicPhone,
    phoneE164: clinicPhoneE164,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '+971 52 892 0301',
    email: process.env.NEXT_PUBLIC_CLINIC_EMAIL || 'apolloadvancedmedicalcenter@gmail.com',
  },
  instagram: {
    handle: '@apollo_medical_center',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/apollo_medical_center?igsh=MWdxcmRlYTUwM2duag==',
  },
  facebook: {
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61582317335218',
  },
  linkedin: {
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/apollo-advanced-medical-center/',
  },
  openingHours: [
    { day: 'Mon-Sat', hours: '09:00 AM - 11:00 PM' },
    { day: 'Sun', hours: 'Closed' },
  ],
} as const
