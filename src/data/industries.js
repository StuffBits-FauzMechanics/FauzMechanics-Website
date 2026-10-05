import { Building2, Fan, FlaskConical, Factory, PaintBucket, PackageOpen } from 'lucide-react'

export const industries = [
  {
    id: 'clean-rooms',
    title: 'Pharmaceutical clean rooms',
    icon: Building2,
    image: '/images/scenes/cleanroom.webp',
    summary:
      'Maintain the pressure cascade between grades and catch door-open or filter-loading events before they become compliance issues.',
    points: [
      'Room-to-room differential pressure monitoring',
      'Audio-visual alarms with programmable delay',
      'Flush panel mounting on clean room walls',
      '4–20 mA / RS485 outputs for BMS and EMS integration',
    ],
    products: ['digimacks', 'digisense', 'digitrans'],
  },
  {
    id: 'hvac',
    title: 'HVAC & air handling units',
    icon: Fan,
    image: '/images/scenes/hvac-ahu.webp',
    summary:
      'Track pressure drop across pre-filters, fine filters and HEPA banks to plan replacements and protect fan energy efficiency.',
    points: [
      'Filter differential pressure monitoring',
      'Duct and plenum static pressure',
      'Analog outputs for building automation systems',
      'IP65 transmitters for plant-room conditions',
    ],
    products: ['digitrans', 'digimacks'],
  },
  {
    id: 'laminar-flow',
    title: 'Laminar flow & biosafety cabinets',
    icon: FlaskConical,
    image: '/images/scenes/biosafety-lab.webp',
    summary:
      'Give operators an instant, readable indication of HEPA filter health on LAF benches, biosafety cabinets and fume hoods.',
    points: [
      'Compact panel-mount gauges for OEM integration',
      'Low ranges from 0–10 mm Wc',
      'Green / red status indication at a glance',
      'Customised ranges for OEM equipment builders',
    ],
    products: ['digisense', 'digimacks'],
  },
  {
    id: 'pharma-equipment',
    title: 'Pharmaceutical equipment & process',
    icon: Factory,
    image: '/images/scenes/pharma-production.webp',
    summary:
      'Reliable low-pressure measurement for isolators, dispensing booths, process equipment and containment systems.',
    points: [
      'Stable MEMS sensing with ±0.5% FS accuracy',
      'Optional password protection against tampering',
      'Relay outputs for interlocks and control',
      'User-friendly field calibration',
    ],
    products: ['digimacks', 'digitrans'],
  },
]

export const moreApplications = [
  { title: 'Pass boxes', icon: PackageOpen },
  { title: 'Paint booths', icon: PaintBucket },
]
