export type ServiceCategory = {
  title: string
  description: string
  href: string
  items: string[]
  image: string
  imageAlt: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Dental Services',
    description: 'Comprehensive dental care: whitening, scaling, fillings, root canal, crowns, veneers, and more.',
    href: '/services/dental-services',
    image: '/images/services/service-1.jpeg',
    imageAlt: 'Dental care and smile treatment services at Apollo Advanced Medical Center in Al Rigga, Union Dubai',
    items: [
      'Teeth Whitening',
      'Scaling & Polishing',
      'Root Canal Treatment',
      'Dental Fillings',
      'Crowns & Veneers',
      'Dental Dentures',
      'Tooth Extraction',
      'Cosmetic Dentistry',
    ],
  },
  {
    title: 'Aesthetic & Beauty Services',
    description: 'Laser, facial, and beauty treatments for smooth skin, glow, and confidence with medical-grade safety.',
    href: '/services/aesthetic-beauty-services',
    image: '/images/services/service-4.jpeg',
    imageAlt: 'Aesthetic, laser, facial, and beauty services at Apollo Advanced Medical Center in Al Rigga, Union Dubai',
    items: [
      'Laser Hair Removal',
      'Facial Treatments',
      'Hydrafacial',
      'BB Glow',
      'Lip Blushing',
      'Micro Shading',
      'Slimming Treatment',
    ],
  },
  {
    title: 'Laser Hair Removal',
    description: 'Safe, effective hair reduction for face and body with tailored settings for your skin type.',
    href: '/services/laser-hair-removal',
    image: '/images/services/service-5.jpeg',
    imageAlt: 'Laser hair removal treatment for face and body at Apollo Advanced Medical Center in Al Rigga, Union Dubai',
    items: ['Full Body', 'Face & Neck', 'Underarms', 'Bikini', 'Legs', 'Arms'],
  },
  {
    title: 'Facial & Skin Care',
    description: 'Personalized facials, deep cleansing, hydration, and rejuvenation for healthier-looking skin.',
    href: '/services/facial-skin-care',
    image: '/images/services/service-6.jpeg',
    imageAlt: 'Facial and skin care treatment service at Apollo Advanced Medical Center in Al Rigga, Union Dubai',
    items: ['Deep Cleansing', 'Hydration & Glow', 'Acne Care', 'Skin Rejuvenation'],
  },
  {
    title: 'Slimming & Body Contouring',
    description: 'Non-invasive solutions to support body shaping goals with professional supervision.',
    href: '/services/slimming-body-contouring',
    image: '/images/services/service-2.jpeg',
    imageAlt: 'Slimming and body contouring treatment service at Apollo Advanced Medical Center in Al Rigga, Union Dubai',
    items: ['Slimming Treatment', 'Body Contouring', 'Targeted Areas'],
  },
]
