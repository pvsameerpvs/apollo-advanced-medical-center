export const site = {
  name: 'Apollo Advanced Medical Center',
  shortName: 'Apollo AMC',
  description: 'Trusted medical, dental & aesthetic clinic in Deira, Dubai, UAE. DHA-licensed doctors, modern equipment, and personalized care.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  locale: 'en_AE',
  address: {
    street: 'Ba-1 Bin Jarsh Building, Union Metro Station Exit 2, Deira',
    city: 'Dubai',
    region: 'Dubai',
    country: 'UAE',
    postalCode: '',
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_CLINIC_PHONE || '0428644876',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '+971558569418',
    email: process.env.NEXT_PUBLIC_CLINIC_EMAIL || 'appointments@example.com',
  },
  instagram: {
    handle: '@apollo_medical_center',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/apollo_medical_center?igsh=MWdxcmRlYTUwM2duag==',
  },
  openingHours: [
    { day: 'Mon-Sat', hours: '09:00 AM - 09:00 PM' },
    { day: 'Sun', hours: 'Closed' },
  ],
} as const
