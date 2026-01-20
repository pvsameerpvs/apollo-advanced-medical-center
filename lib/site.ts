export const site = {
  name: 'Apollo Advanced Medical Center',
  shortName: 'Apollo AMC',
  description: 'Trusted medical, dental & aesthetic clinic in Deira, Dubai, UAE. DHA-licensed doctors, modern equipment, and personalized care.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  locale: 'en_AE',
  address: {
    street: 'Deira',
    city: 'Dubai',
    region: 'Dubai',
    country: 'AE',
    postalCode: '',
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_CLINIC_PHONE || '+971000000000',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '+971000000000',
    email: process.env.NEXT_PUBLIC_CLINIC_EMAIL || 'appointments@example.com',
  },
  instagram: {
    handle: '@apolloadvancedmedicalcenter',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/',
  },
  openingHours: [
    { day: 'Mon-Sat', hours: '10:00 AM - 10:00 PM' },
    { day: 'Sun', hours: 'Closed' },
  ],
} as const
