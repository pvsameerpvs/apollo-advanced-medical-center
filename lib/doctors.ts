export type DoctorProfile = {
  slug: string
  name: string
  role: string
  qualifications: string
  dha: string
  expertise: string[]
  services: string[]
  bio: string
  image: string
}

export const doctors: DoctorProfile[] = [
  {
    slug: 'dr-shaziaanjum',
    name: 'Dr. Shaziaanjum',
    role: 'General Dentist',
    qualifications: 'General Dentistry',
    dha: 'DHA Licensed Dentist',
    expertise: ['Comprehensive oral exams', 'Preventive dentistry', 'Cosmetic dentistry', 'Patient comfort & pain management'],
    services: ['Scaling & Polishing', 'Teeth Whitening', 'Dental Fillings', 'Tooth Extraction'],
    bio: 'Dr. Shaziaanjum focuses on gentle, patient-first dental care with clear treatment explanations and a strong emphasis on prevention and long-term oral health.',
    image: '/images/doctors/dr-shaziaanjum.png',
  },
  {
    slug: 'dr-farida',
    name: 'Dr. Farida',
    role: 'Dental Surgeon',
    qualifications: 'BDS, Dental Surgeon',
    dha: 'DHA Licensed Dental Surgeon',
    expertise: ['Root canal treatment', 'Restorative dentistry', 'Crowns & veneers', 'Complex extractions'],
    services: ['Root Canal Treatment', 'Crowns & Veneers', 'Dental Dentures', 'Cosmetic Dentistry'],
    bio: 'Dr. Farida provides precise, evidence-based dental treatment with a focus on restoring function, aesthetics, and patient confidence.',
    image: '/images/doctors/dr-farida.png',
  },
  {
    slug: 'hind-belharar',
    name: 'Hind Belharar',
    role: 'Skin Care Therapist',
    qualifications: 'Certified Skin Care Therapist',
    dha: 'DHA Licensed Therapist',
    expertise: ['Skin analysis', 'Deep cleansing facials', 'Hydration & glow protocols', 'Acne care routines'],
    services: ['Facial Treatments', 'Hydrafacial', 'Facial & Skin Care'],
    bio: 'Hind customizes every facial to your skin goals, using safe protocols and aftercare routines that help you maintain results between sessions.',
    image: '/images/doctors/dr-hind-belharar.png',
  },
  {
    slug: 'ellie-lolita-cruz',
    name: 'Ellie (Lolita Cruz)',
    role: 'Aesthetic & Laser Therapist',
    qualifications: 'Certified Aesthetic & Laser Therapist',
    dha: 'DHA Licensed Laser Therapist',
    expertise: ['Laser hair removal', 'BB Glow', 'Lip blushing & micro shading', 'Client education and aftercare'],
    services: ['Laser Hair Removal', 'BB Glow', 'Lip Blushing', 'Micro Shading', 'Slimming Treatment'],
    bio: 'Ellie is known for meticulous treatment planning, comfort-focused sessions, and aftercare guidance that supports safe, consistent results.',
    image: '/images/doctors/dr-ellie-lolita-cruz.png',
  },
  {
    slug: 'dr-rishin-basheer',
    name: 'Dr. Rishin Basheer',
    role: 'Specialist Orthodontist',
    qualifications: 'MDS (Orthodontics), BDS',
    dha: 'DHA Licensed Specialist Orthodontist',
    expertise: ['Metal & Ceramic Braces', 'Clear Aligners (Invisalign)', 'Bite Correction', 'Smile Design'],
    services: ['Orthodontic Consultation', 'Braces Treatment', 'Clear Aligners', 'Retainers'],
    bio: 'Dr. Rishin Basheer is a dedicated Specialist Orthodontist focused on delivering precision-based orthodontic care to achieve perfectly aligned smiles for patients of all ages.',
    image: '/images/doctors/dr-rishin-Basheer.png',
  },
]

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug)
}
