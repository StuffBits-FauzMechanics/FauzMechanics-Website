export const company = {
  name: 'Fauz Mechanics',
  tagline: 'Smart Engineering',
  founded: 2006,
  vision:
    'At Fauz Mechanics innovation comes first, meeting challenges with smart engineering and technology. We provide our customers with simpler and easy to use sensing technology.',
  mission:
    'Established in 2006, we started delivering conventional pressure measuring instruments to well-established clients in the pharmaceutical industry. Since then we have moved on to electronic instruments of the highest quality and accuracy. With a professional team of engineers and technicians we meet the challenges faced in the instrumentation sector. Fauz Mechanics has time and again proved itself in manufacturing monitoring and controlling instruments.',
  email: 'fauzmechanics@gmail.com',
  phone: { display: '+91 93215 56894', href: 'tel:+919321556894' },
  whatsapp: { display: '+91 93215 56894', number: '919321556894' },
  director: {
    name: 'Naeemuddin Farooqui',
    role: 'Proprietor',
    phone: { display: '+91 98204 53878', href: 'tel:+919820453878' },
  },
  address: {
    lines: ['227, Nirman Industrial Estate', 'Chincholi Bunder, Link Road', 'Malad (West), Mumbai 400 064'],
    short: 'Malad (West), Mumbai',
    mapsUrl: 'https://maps.google.com/?q=FAUZ+MECHANICS+Nirman+Industrial+Estate+Malad+West+Mumbai',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4030318444356!2d72.83633859999999!3d19.1775913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e815807d15%3A0xb25a9095d0ad460b!2sFAUZ%20MECHANICS!5e0!3m2!1sen!2sin!4v1677340506691!5m2!1sen!2sin',
  },
  formEndpoint: 'https://formspree.io/f/xrgvvvza',
}

export const yearsInBusiness = () => new Date().getFullYear() - company.founded
