export const source = '/images/source/';
export const img = (name: string) => `${source}${name}`;
export const phone = '+91 97249 25394';
export const email = 'salespavitramotor@gmail.com';
export const address = 'Plot No.78 Odhav GIDC, Shed No. 09, Anukul Industrial Estate, Ambika Nagar Road, Nr. National Tank, Odhav, Ahmedabad, Gujarat, 382415';
export const whatsapp = 'https://wa.me/+919724925394?text=Hello+Pavitra+Industries%2C+I+am+interested+in+your+motors.+Please+share+more+details.';
export const social = {
  facebook: 'https://www.facebook.com/share/p/1HyiR6avhX/?mibextid=wwXIfr',
  youtube: 'https://youtube.com/@pavitramotor?si=L0MdkqXSK5zXJiyE',
  instagram: 'https://www.instagram.com/pavitra_industries/',
  linkedin: 'https://www.linkedin.com/company/pavitra-industries/',
  twitter: 'https://twitter.com/pavitra_ind'
};
export const brochure = 'https://pavitraind.com/wp-content/uploads/2025/07/PAVITRA-BROUCH.pdf';

export const locations = {
  headOffice: {
    title: 'PAVITRA INDUSTRIES, HEAD OFFICE',
    shortName: 'Head Office',
    address: 'Plot No.78 Odhav GIDC, Shed No. 09, Anukul Industrial Estate, Ambika Nagar Road, Nr. National Tank, Odhav, Ahmedabad, Gujarat, 382415',
    mapUrl: 'https://maps.google.com/?q=Pavitra+Industries,+Plot+No.78+Odhav+GIDC,+Shed+No.+09,+Anukul+Industrial+Estate,+Ambika+Nagar+Road,+Nr.+National+Tank,+Odhav,+Ahmedabad,+Gujarat+382415',
    qrSvg: '/images/qr-head-office.svg',
    qrPng: '/images/qr-head-office.png'
  },
  works: {
    title: 'PAVITRA INDUSTRIES, WORKS & FACTORY',
    shortName: 'Works & Factory',
    address: 'Shed No. 09, Anukul Industrial Estate, Odhav Industrial Zone, Ahmedabad, Gujarat - 382415, India',
    mapUrl: 'https://maps.google.com/?q=Pavitra+Industries+Works,+Shed+No.+09,+Anukul+Industrial+Estate,+Odhav+Industrial+Zone,+Ahmedabad,+Gujarat+382415',
    qrSvg: '/images/qr-works.svg',
    qrPng: '/images/qr-works.png'
  }
};

export type Product = {
  slug: string;
  title: string;
  image: string;
  intro: string;
  eyebrow?: string;
  specs?: [string, string][];
  features?: string[];
  applications?: string[];
  gallery?: string[];
  tables?: { title: string; headers: string[]; rows: string[][] }[];
};

export const products: Product[] = [
  { slug: 'three-phase-induction-motor', title: 'Three Phase Ac Induction Motor', image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-6.webp', eyebrow: 'Reliable. Efficient. Built for Performance.', intro: 'At Pavitra Industries, we manufacture high-performance three-phase squirrel cage induction motors designed for demanding industrial environments.\n\nAvailable in a wide power range from 0.25 HP to 75 HP, our motors combine durability, energy efficiency, and precision engineering.', specs: [['Power Range', '0.25 HP to 75 HP (0.18 kW to 55 kW)'], ['Voltage', '415V ±10%, 3 Phase, 50 Hz'], ['Custom Voltages', '220V / 380V / 460V / 525V (On Request)'], ['Speeds (RPM)', '750 / 1000 / 1500 / 3000'], ['Insulation Class', 'F (Standard), H (Optional)'], ['Enclosure', 'TEFC (Totally Enclosed Fan Cooled)'], ['Protection Class', 'IP55 (Standard), IP65 (Optional)'], ['Duty Cycle', 'S1 (Continuous Duty)'], ['Frame Sizes', '63 to 225M/L'], ['Mounting Options', 'B3 (Foot), B5 (Flange), B14 (Face), Combination']], features: ['High Efficiency (IE2 / IE3 Optional)', 'Smooth & Silent Operation', 'Minimal Maintenance Design', 'High Starting Torque & Performance', 'Compatible with VFD Drives', 'Robust Design for Industrial Use', 'Custom Shaft / Voltage / Mountings Available'], applications: ['Material Handling Equipment', 'Pumps, Blowers, Compressors', 'Machine Tools', 'Conveyor Systems', 'Textile & Printing Machinery', 'Agricultural & Irrigation Equipment'], gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-6.webp', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-3.webp', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-4.webp'] },
  { slug: 'single-phase-electric-motor', title: 'Single Phase Electric Motor', image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-10.jpg', intro: 'At Pavitra Industries, we manufacture high-performance Single Phase Electric Motors engineered for efficiency, reliability, and durability. Perfect for low-power applications, our motors operate on single-phase AC power and are ideal for domestic, commercial, and light industrial use. Their compact design, energy-saving capability, and rugged construction make them an essential choice across various industries.\n\nAll motors are designed as per IEC:34/7 and available in B3, B5 & B14 mountings.', specs: [['Power Range', '0.25 HP to 5 HP (0.18 kW to 3.7 kW)'], ['Voltage', '230V ±10%, Single Phase, 50 Hz'], ['Custom Voltages', '110V / 220V / 240V (On Request)'], ['Speeds (RPM)', '750 / 1000 / 1500 / 3000'], ['Insulation Class', 'B (Standard), F (Optional)'], ['Enclosure', 'TEFC (Totally Enclosed Fan Cooled)'], ['Protection Class', 'IP44 (Standard), IP55 (Optional)'], ['Duty Cycle', 'S1 (Continuous Duty)'], ['Frame Sizes', '63 to 132'], ['Mounting Options', 'B3 (Foot), B5 (Flange), B14 (Face), B35 (Foot cum Flange)']], features: ['Smooth & Silent Operation', 'High Starting Torque', 'Energy Efficient Design', 'Minimal Maintenance Required', 'Rugged Construction for Various Applications', 'Thermal Overload Protection (Optional)', 'Suitable for VFD Use (With Caution)', 'Custom Shaft / Voltage / Mountings Available'], applications: ['Air Compressors', 'Domestic Water Pumps', 'Small Machine Tools', 'Fans and Blowers', 'Agricultural Equipment', 'Conveyors and Mixers', 'Printing and Packaging Machinery'], gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-10.jpg', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-11.jpg', '2025-06--3-4.webp'] },
  {
    slug: 'ac-dc-brake-motors',
    title: 'AC/DC Brake Motors',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-7.jpg',
    eyebrow: 'Reliable. Efficient. Built for Performance. With Enhanced Control & Safety',
    intro: 'Pavitra Industries reinforces its commitment to quality and performance by introducing a new line of AC and DC Brake Motors, designed to meet the growing demand for applications requiring precise stopping, holding, and enhanced safety.\n\nAvailable across a wide power range, these motors combine our proven efficiency with integrated braking solutions engineered for demanding industrial environments.\n\nVoltage: Single Phase (230V ±10%, 50 Hz) & Three Phase (415V ±10%, 50 Hz). Custom voltages available on request.\n\nBrake Type: AC Electromagnetic Brake (Powered by AC supply) or DC Electromagnetic Brake (Powered by DC supply with internal/external rectifier).',
    specs: [
      ['Power Range', '0.25 HP to 30 HP (0.18 kW to ~22 kW)'],
      ['Speeds (RPM)', '750 / 1000 / 1500 / 3000'],
      ['Insulation Class', 'F (Standard), H (Optional)'],
      ['Enclosure', 'TEFC (Totally Enclosed Fan Cooled)'],
      ['Protection Class', 'IP55 (Standard), IP65 (Optional)'],
      ['Duty Cycle', 'S1 (Continuous Duty), S4 (Intermittent with braking)'],
      ['Frame Sizes', '63 to 200 (or higher for 30 HP)'],
      ['Mounting Options', 'B3 (Foot), B5 (Flange), B14 (Face), B35 (Foot cum Flange)'],
      ['Voltage Range', 'Single Phase 230V / Three Phase 415V (Custom available)'],
      ['Brake Options', 'AC Electromagnetic Brake / DC Electromagnetic Brake']
    ],
    features: [
      'Fast and reliable braking',
      'High starting torque',
      'Robust construction for industrial use',
      'Low maintenance design',
      'Custom shaft, voltage and mountings available',
      'Available with manual release lever (optional)'
    ],
    applications: [
      'Material Handling',
      'Conveyors',
      'Machine Tools',
      'Textile Industry',
      'Packaging Industry',
      'Elevators & Escalators',
      'Printing Industry'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-7.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-8.jpg'
    ]
  },
  {
    slug: 'unbalance-vibratory-motor',
    title: 'Unbalance Vibratory Motor',
    image: '2025-06--WhatsApp-Image-2025-06-10-at-09.33.53_bf3a650f.jpg',
    intro: 'An unbalance vibratory motor is a specialized electromechanical device designed to generate vibratory motion through unbalanced masses attached to its shaft.\n\nAs the shaft rotates, centrifugal force is produced, creating vibrations used for material handling, screening, compaction, and other industrial applications. These motors are compact, durable, and efficient, making them ideal for vibratory feeders, screens, and conveyors.\n\nTheir amplitude and frequency can be adjusted by modifying the unbalanced weights, allowing precise control over vibration intensity.',
    specs: [
      ['Centrifugal Force Range', '0 – 12,000 Kgs/Meter'],
      ['Operating Voltages', 'Standard: 380/440V, 50/60 Hz (Others on request)'],
      ['Ambient Temperature', '25°C to 80°C (Other ranges on request)'],
      ['Insulation Class', 'F'],
      ['Operation', 'Continuous service at maximum indicated centrifugal force and electric power rating'],
      ['Fixing', 'Can be mounted in all positions without limitations'],
      ['Terminal Box', 'Sized for easy electrical connections'],
      ['Bearings', 'Upper and lower bearings designed to support the relative load'],
      ['Drive Shaft', 'Oversized, treated steel to withstand high stress']
    ],
    tables: [
      {
        title: 'Frame & Mounting Table',
        headers: ['No', 'Frame', 'HP', 'Hole Center (A × B)', 'Motor Size (L × W × H)', 'Drill Size'],
        rows: [
          ['1', '63', '0.25', '85 × 85', '270 × 150 × 170', '4 – 14 mm'],
          ['2', '71', '0.5', '120 × 85', '320 × 180 × 195', '4 – 14 mm'],
          ['3', '80', '1.0', '140 × 108', '360 × 200 × 215', '4 – 14 mm'],
          ['4', '90', '2.0', '152 × 130', '460 × 220 × 270', '4 – 18 mm'],
          ['5', '100', '3.0', '200 × 130', '540 × 260 × 320', '6 – 22 mm'],
          ['6', '112', '5.0', '210 × 170', '610 × 270 × 355', '6 – 22 mm'],
          ['7', '132', '7.5', '280 × 200', '650 × 350 × 425', '6 – 22 mm'],
          ['8', '160', '10', '395 × 325', '720 × 380 × 450', '6 – 40 mm']
        ]
      }
    ],
    features: [
      'Versatile for material handling, sorting, and sieving applications.',
      'Corrosion-resistant for longer operational life.',
      'Quiet operation for noise-sensitive environments.',
      'Easy installation with minimal downtime.',
      'Adjustable unbalance weights for tuned amplitude & force.',
      'Designed for 24/7 continuous industrial duty.'
    ],
    applications: [
      'Material Handling – Vibratory Feeders, Conveyors',
      'Sieving & Screening – Sorting and separating materials',
      'Compaction – Powder, concrete, etc.',
      'Separation Processes – Industrial use in chemical & food industries'
    ],
    gallery: [
      '2025-06--WhatsApp-Image-2025-06-10-at-09.33.53_bf3a650f.jpg',
      '2025-06--WhatsApp-Image-2025-06-10-at-09.27.02_9702dfdb.jpg',
      '2025-06--WhatsApp-Image-2025-06-10-at-09.41.19_134e14e7.jpg'
    ]
  },
  {
    slug: 'bench-polisher-machine',
    title: 'Bench Polisher Machine',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-12.jpg',
    intro: 'Pavitra Industries Bench Polisher Machines are built for surface finishing, polishing, buffing, and shining various metal and non-metal components.\n\nEngineered with heavy-duty cast iron body, high-grade dynamic balancing, and double-sealed ball bearings, our polishers deliver smooth, vibration-free operation in workshops, manufacturing plants, and artisanal fabrication facilities.',
    specs: [
      ['Power Rating', '0.25 HP to 10 HP'],
      ['Voltage', '230V (Single Phase) / 415V (Three Phase)'],
      ['Frequency', '50 Hz'],
      ['No Load RPM', '2800 RPM (Standard)'],
      ['Enclosure Type', 'Totally Enclosed Fan Cooled (TEFC)'],
      ['Insulation', 'Class F'],
      ['Duty Cycle', 'S1 (Continuous)'],
      ['Cooling', 'External Fan Cooled'],
      ['Surface Finish', 'Powder Coated Body'],
      ['Body Material', 'Heavy Duty Cast Iron'],
      ['Shaft Material', 'EN8 Steel'],
      ['Mounting', 'Foot Mounting'],
      ['Bearings', 'Double sealed deep groove ball bearings (SKF / NTN / FAG equivalent)']
    ],
    tables: [
      {
        title: 'Mechanical Dimensions (Selected Frames)',
        headers: ['Parameter', 'Unit', '0.25 HP', '0.5 HP', '1 HP', '2 HP', '3 HP', '5 HP', '7.5 HP', '10 HP'],
        rows: [
          ['Rated Power', 'HP / kW', '0.25 / 0.18', '0.5 / 0.37', '1 / 0.75', '2 / 1.5', '3 / 2.2', '5 / 3.7', '7.5 / 5.5', '10 / 7.5'],
          ['Voltage', 'V', '230 / 415', '230 / 415', '415', '415', '415', '415', '415', '415'],
          ['Phase', '-', '1 / 3', '1 / 3', '3', '3', '3', '3', '3', '3'],
          ['Frequency', 'Hz', '50', '50', '50', '50', '50', '50', '50', '50'],
          ['No Load Speed', 'RPM', '2800', '2800', '2800', '2800', '2800', '2800', '2800', '2800'],
          ['Polishing Wheel Diameter', 'mm / inch', '150 / 6', '200 / 8', '250 / 10', '300 / 12', '350 / 14', '400 / 16', '450 / 18', '500 / 20'],
          ['Polishing Wheel Width', 'mm', '25', '38', '50', '63', '63', '75', '75', '75'],
          ['Shaft Diameter', 'mm', '12', '16', '19', '25', '28', '32', '38', '40'],
          ['Bearing Size', '-', '6201', '6203', '6204', '6205', '6206', '6207', '6208', '6308'],
          ['Body Material', '-', 'Cast Iron', 'Cast Iron', 'Cast Iron', 'Cast Iron', 'Cast Iron', 'Cast Iron', 'Cast Iron', 'Cast Iron'],
          ['Insulation Class', '-', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'],
          ['Duty Cycle', '-', 'S1', 'S1', 'S1', 'S1', 'S1', 'S1', 'S1', 'S1'],
          ['Cooling', '-', 'TEFC', 'TEFC', 'TEFC', 'TEFC', 'TEFC', 'TEFC', 'TEFC', 'TEFC'],
          ['Surface Finish', '-', 'Powder Coated', 'Powder Coated', 'Powder Coated', 'Powder Coated', 'Powder Coated', 'Powder Coated', 'Powder Coated', 'Powder Coated'],
          ['Approximate Weight', 'Kg', '20', '30', '45', '60', '75', '110', '145', '180']
        ]
      }
    ],
    features: [
      'Heavy-duty cast iron body ensures minimum vibration and maximum stability',
      'Dual tapered spindle shafts for holding multiple buffing wheels',
      'Dynamically balanced rotor for whisper-quiet and prolonged bearing life',
      'High starting torque with continuous S1 duty rating',
      'Totally enclosed fan cooled (TEFC) construction protects against polishing dust'
    ],
    applications: [
      'Metal fabrication',
      'Jewelry and brass part polishing',
      'Automotive garages and part restoration',
      'Woodcraft and plastic part finishing',
      'General engineering workshops'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-12.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-13-1.webp'
    ]
  },
  {
    slug: 'bench-grinder-machine',
    title: 'Bench & Pedestal Grinder Series (0.12 HP–5 HP)',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-18.jpg',
    intro: 'Engineered for workshop and industrial use, the Bench & Pedestal Grinder series offers dependable power, balanced rotation, and rugged safety.\n\nAvailable in bench models (2,800–3,000 RPM) and heavy-duty pedestal models (1,500–3,000 RPM) with wheel sizes from 100 mm (4″) up to 355 mm (14″).',
    specs: [
      ['Power Range', '0.12 HP (0.09 kW) to 5 HP (3.7 kW)'],
      ['RPM', 'Bench units: 2,800–3,000 RPM | Pedestal units: 1,500–3,000 RPM'],
      ['Wheel Sizes', '100 mm (4″) to 355 mm (14″)'],
      ['Phase Options', 'Single-phase (230–240 V) for ≤1 HP | Three-phase (415–440 V) for ≥2 HP'],
      ['Category', 'Bench & Pedestal Grinders – 1,500 to 3,000 RPM']
    ],
    tables: [
      {
        title: 'Bench Grinders – 2,800–3,000 RPM',
        headers: ['Model', 'Power (kW / HP)', 'Phase / Voltage', 'Wheel Size (mm)', 'Shaft Ø (mm)', 'Weight (kg)'],
        rows: [
          ['PI‑BG‑012', '0.09 kW / 0.12 HP', '1Ø (230 V)', '100 × 13', '12.7', '~9'],
          ['PI‑BG‑025', '0.18 kW / 0.25 HP', '1Ø / 3Ø', '100 × 20', '12.7', '13'],
          ['PI‑BG‑050', '0.37 kW / 0.50 HP', '1Ø / 3Ø', '150–200', '15.8', '22–26'],
          ['PI‑BG‑075', '0.55 kW / 0.75 HP', '1Ø / 3Ø', '200 × 25', '19.0', '35'],
          ['PI‑BG‑100', '0.75 kW / 1.00 HP', '1Ø / 3Ø', '250 × 25', '19.0', '45']
        ]
      },
      {
        title: 'Pedestal & Heavy-Duty Grinders – 1,500–3,000 RPM',
        headers: ['Model', 'Power (kW / HP)', 'Wheel Size (mm)', 'RPM', 'Weight (kg)'],
        rows: [
          ['PI‑PG‑200', '1.50 kW / 2 HP', '300 × 40 / 38', '1,500 / 2,800', '60–80'],
          ['PI‑PG‑300', '2.20 kW / 3 HP', '300 × 40', '1,500 / 2,800', '80–120'],
          ['PI‑PG‑500', '3.70 kW / 5 HP', '355 × 76', '1,500 / 1,800', '150–270']
        ]
      }
    ],
    features: [
      'Heavy-duty cast-iron/steel body for maximal stability and vibration reduction',
      'Dynamically balanced rotors using stamped/die-cast technology for smoother operation',
      'Double-sided wheel mounts, with adjustable tool rests and spark guards',
      'Compatible with pedestal stands, coolant systems, LED lights, safety shields, and electronic brakes',
      '12-month limited warranty with Indian standards (IS-325, IS-2223) compliance',
      'Load- and balance-tested before shipment'
    ],
    applications: [
      'General engineering workshops',
      'Metal fabrication',
      'Tool rooms',
      'Maintenance and repair work'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-18.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-19.jpg'
    ]
  },
  {
    slug: 'needle-vibrator-motors',
    title: 'Needle Vibrator Motor (1 HP to 3 HP)',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-16.jpg',
    intro: 'Needle Vibrator Motors from Pavitra Industries deliver efficient high-speed vibration for superior concrete compaction and dependable construction site performance.\n\nAvailable in Single Phase (230V) and Three Phase (415V) variants with power ratings from 1 HP to 3 HP.\n\nApplications: Concrete slabs, columns, beams, footings, foundations, and precast elements.',
    specs: [
      ['Power Range', '1 HP to 3 HP (0.75 kW to 2.2 kW)'],
      ['Phase Options', 'Single Phase (230V ±10%) & Three Phase (415V ±10%)'],
      ['Operating Speed', '2800 RPM'],
      ['Frequency', '50 Hz'],
      ['Protection Class', 'IP55'],
      ['Needle Diameters', '25 mm, 38 mm, 40 mm, 50 mm, 60 mm'],
      ['Shaft Lengths', '4 m, 6 m, 8 m flexible shafts with quick coupler']
    ],
    tables: [
      {
        title: 'Technical Specifications & Model Matrix',
        headers: ['Model No.', 'Power', 'Phase', 'Voltage', 'Frequency', 'RPM', 'Needle Dia.', 'Shaft Length', 'Weight'],
        rows: [
          ['PNV-1SP', '1 HP (0.75 kW)', 'Single Phase', '230V ±10%', '50 Hz', '2800', '38 / 40 mm', '4m / 6m', '12–15 kg'],
          ['PNV-1TP', '1 HP (0.75 kW)', 'Three Phase', '415V ±10%', '50 Hz', '2800', '38 / 40 mm', '4m / 6m', '11–14 kg'],
          ['PNV-2SP', '2 HP (1.5 kW)', 'Single Phase', '230V ±10%', '50 Hz', '2800', '50 / 60 mm', '4m / 6m', '20–25 kg'],
          ['PNV-2TP', '2 HP (1.5 kW)', 'Three Phase', '415V ±10%', '50 Hz', '2800', '50 / 60 mm', '4m / 6m', '18–23 kg'],
          ['PNV-3SP', '3 HP (2.2 kW)', 'Single Phase', '230V ±10%', '50 Hz', '2800', '60 mm', '4m / 6m', '28–35 kg'],
          ['PNV-3TP', '3 HP (2.2 kW)', 'Three Phase', '415V ±10%', '50 Hz', '2800', '60 mm', '4m / 6m / 8m', '25–32 kg']
        ]
      }
    ],
    features: [
      'Efficient high-speed vibration for superior concrete compaction',
      'Rugged body with IP55 protection against dust and slurry splashes',
      'Low maintenance with heavy-duty flexible shaft and sealed motor housing',
      'Thermal protection and safe, continuous site operation',
      'Accessories: Needle heads (25, 38, 50, 60 mm), flexible shafts, and mounting tripods'
    ],
    applications: [
      'RCC slabs and beams',
      'Precast concrete elements',
      'Bridges, dams, roads, and foundations'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-16.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-17.jpg'
    ]
  },
  {
    slug: 'cooling-tower-motor',
    title: 'Cooling Tower motor',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-15.jpg',
    intro: 'Cooling Tower Motors from Pavitra Industries are specially designed flange mounted in totally enclosed constructions for dependable continuous operation in demanding environments.\n\nAll Cooling Tower Motors are provided with class "F" insulation system and rated for continuous duty type S1 at an ambient of 45°C.\n\nProvided with specialized EPOXY paint to ensure long life against corrosive and moisture-heavy external surfaces.',
    specs: [
      ['Power Range', '0.25 HP to 25 HP (0.18 kW to 18.5 kW)'],
      ['Pole Options', '4P, 6P, 8P, 10P'],
      ['Frame Sizes', '71 ‘F’ to 180 ‘L’'],
      ['Mounting', 'Flange mounted (B5)'],
      ['Voltage', '415 V ± 10% or as required (3 Phase)'],
      ['Frequency', '50 Hz ± 5% or as required'],
      ['Insulation Class', 'Class ‘F’'],
      ['Protection Class', 'IP55'],
      ['Type of Duty', 'S1 (Continuous)'],
      ['Enclosure', 'Totally Enclosed (TE)'],
      ['Ambient Temp.', '45°C'],
      ['Temperature Rise', 'As per Insulation class ‘B’']
    ],
    features: [
      'Performance conforms to IS:325:1996 standards',
      'Motors are rated for continuous duty type S1 at an ambient of 45°C',
      'Provided with Class "F" insulation system with temperature rise limited to Class "B"',
      'Designed for rated voltage of 415 V ±10%, 3 Phase, 50 Hz supply',
      'Coated with protective EPOXY paint to withstand extreme moisture and humidity'
    ],
    applications: [
      'HVAC Systems',
      'Power Plants',
      'Chemical Industry',
      'Petroleum Refineries',
      'Steel Manufacturing',
      'Pharmaceutical Industry',
      'Food Processing'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-15.jpg',
      '2025-06--mechanical-dimensions.jpg'
    ]
  },
  {
    slug: 'top-flange-vibratory-motors',
    title: 'Top Flange Vibratory Motors',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-23.jpg',
    intro: 'At Pavitra Industries, we offer premium-grade Top Flange Vibratory Motors designed for high efficiency, durability, and smooth performance across industrial applications.\n\nOur motors ensure precise vibration output for effective material movement, separation, screening, and sorting in screens, hoppers, feeders, and conveyors.',
    specs: [
      ['Mounting Type', 'Top Flange Mounting'],
      ['Frame Range', '63 to 160'],
      ['Power Range', '0.25 HP to 10 HP'],
      ['RPM Options', '750 / 1000 / 1500 / 3000 RPM'],
      ['Voltage', '415V ±10%, 3 Phase, 50 Hz'],
      ['Insulation Class', 'Class F'],
      ['Protection Rating', 'IP55 / IP65'],
      ['Duty Cycle', 'S1 Continuous Duty'],
      ['Body Construction', 'Heavy-duty Cast Iron / Fabricated Steel']
    ],
    features: [
      'Secure Top Flange Mounting designed for vertical and angled installations',
      'Precise Vibration Output with adjustable unbalance weights',
      'Heavy-Duty Build engineered for high shock loads and prolonged lifecycle',
      'Energy Efficient motor winding providing high starting torque with low power drain',
      'Low Maintenance Design with sealed, high-load roller bearings',
      'Versatile Across Industries for mining, pharmaceuticals, chemicals, and construction'
    ],
    applications: [
      'Vibrating Screens & Sieves',
      'Feeding Systems',
      'Powder & Granule Handling',
      'Concrete Compaction',
      'Pharmaceuticals & Chemicals',
      'Material Sorting'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-23.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-22.jpg'
    ]
  },
  {
    slug: 'double-flange-vibratory-motor',
    title: 'Double Flange Vibratory Motor',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-11.jpg',
    intro: 'At Pavitra Industries, we offer Double Flange Vibratory Motors designed for industrial excellence.\n\nBuilt using MS (Mild Steel) with precision and NJ cylindrical roller bearings, these motors are ideal for heavy-duty applications requiring high vibration force, long duty cycles, and exceptional mechanical stability.',
    specs: [
      ['Power Range', '1 HP to 10 HP'],
      ['Mounting Type', 'Double Flange (Top / Centre Flange)'],
      ['Voltage', '415V ±10%, 3 Phase (Custom voltage available)'],
      ['Frequency', '50 Hz'],
      ['RPM Options', '750 / 1000 / 1500 / 3000 RPM'],
      ['Body Material', 'MS (Mild Steel) Welded Structure'],
      ['Bearing Type', 'NJ series cylindrical roller bearings – High load capacity'],
      ['Insulation Class', 'Class F / H'],
      ['Protection Class', 'IP55 / IP65'],
      ['Duty Cycle', 'S1 – Continuous Duty'],
      ['Design Standards', 'IS: 325 / IEC: 60034']
    ],
    features: [
      'Heavy-duty MS welded structure with ribbed reinforcement for maximal stiffness',
      'NJ series cylindrical roller bearings engineered for high axial and radial load capacity',
      'Ribbed external surface for natural convective air cooling under full load',
      'EN8/EN9 hardened and precision-ground drive shaft',
      'Adjustable unbalance weights for quick, calibrated tuning of centrifugal force',
      'Epoxy powder coated finish for outstanding chemical and weather resistance'
    ],
    applications: [
      'Vibrating Screens',
      'Hopper Dischargers',
      'Compaction Tables',
      'Sand Moulds',
      'Concrete Block Machines',
      'Feeder Machines'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-11.jpg',
      '2025-06--4-4-1024x1024.webp'
    ]
  },
  {
    slug: 'center-flange-vibratory-motor',
    title: 'Center Flange Vibratory Motor',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-20.jpg',
    intro: 'At Pavitra Industries, we specialize in manufacturing premium-quality Center Flange Gyro Motors—built for performance, durability, and energy efficiency.\n\nDesigned to serve diverse industries like material handling, food processing, mining, pharmaceuticals, and construction, our center-flange motors guarantee long-lasting performance with minimal maintenance in gyro screen and separation equipment.',
    specs: [
      ['Centrifugal Force Range', '0 – 12,000 Kgs/Meter'],
      ['Operating Voltage', '380/440V, 50/60Hz (Custom options available)'],
      ['Ambient Temperature', '25°C to 80°C (Others available on request)'],
      ['Insulation Class', 'Class F'],
      ['Operation Mode', 'Continuous duty at rated force and power'],
      ['Fixing Position', 'Center Flange Mounting – Any orientation'],
      ['Drive Shaft', 'Oversized, heat-treated alloy steel shaft'],
      ['Protection Class', 'IP55 / IP65']
    ],
    features: [
      'Heavy-Duty Build designed for high cyclical stress in rotary gyro screen machines',
      'Energy Efficient Design providing consistent centrifugal output at lower operating currents',
      'Versatile Utility across material handling, food processing, mining, and chemical sorting',
      'Low Noise, Smooth Operation due to dynamically balanced eccentric weights',
      'Quick Installation & Easy Service access for unbalance adjustment',
      'Custom Configurations Available for specific flange dimensions and voltages'
    ],
    applications: [
      'Vibrating Screens',
      'Vibratory Feeders',
      'Conveyor Systems',
      'Material Separation Units',
      'Pharmaceutical Machinery',
      'Food Processing Equipment'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-20.jpg',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-21.jpg'
    ]
  },
  {
    slug: 'micro-vibratory-motor',
    title: 'Micro Vibratory Motors',
    image: '2025-06--WhatsApp-Image-2025-06-13-at-09.33.53_da58ed6d.jpg',
    intro: 'Micro Vibratory Motors from Pavitra Industries deliver compact, precise vibration for equipment where low power consumption, lightweight construction, and dependable continuous duty matter.\n\nAvailable in models from 15W up to 120W in both Single Phase (230V) and Three Phase (415V) configurations.',
    specs: [
      ['Power Range', '15W to 120W (0.015 kW to 0.12 kW)'],
      ['RPM', '3000 RPM'],
      ['Frequency', '50 Hz ±3%'],
      ['Voltage Options', 'Single Phase 230V ±10% / Three Phase 415V ±10%'],
      ['Centrifugal Force', '10 Kg to 60 Kg'],
      ['Motor Weight', '1.5 Kg to 2.2 Kg'],
      ['Brand', 'Pavitra Industries'],
      ['Model Series', 'PMV Series']
    ],
    features: [
      'Compact and lightweight design (starting from just 1.5 kg)',
      'High vibration force with minimal power consumption (15W to 120W)',
      'Long service life with maintenance-free, sealed operation',
      'Precision-balanced for minimal noise and ultra-smooth operation',
      'Robust construction suitable for continuous S1 duty cycle',
      'Available in both 230V single-phase and 415V three-phase variants',
      'High operational safety and ingress protection'
    ],
    applications: [
      'Vibrating screens and feeders',
      'Small hoppers and silos',
      'Pharmaceutical and food processing equipment',
      'Lab testing machines and sieving applications',
      'Packaging and compacting machinery',
      'Electronics and powder processing units'
    ],
    gallery: [
      '2025-06--WhatsApp-Image-2025-06-13-at-09.33.53_da58ed6d.jpg',
      '2025-06--4-3-1024x1024.webp'
    ]
  },
  {
    slug: 'sepration-vibrator-motor',
    title: 'Sepration Vibratory Motor',
    image: '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-9.webp',
    intro: 'At Pavitra Industries, we specialize in the manufacturing of high-performance separation vibrator motors engineered for precise material separation and screening.\n\nOur motors are the ideal choice for industries such as mining, food processing, pharmaceuticals, chemicals, recycling, and construction, ensuring maximum efficiency in separation and classification tasks across various industrial processes.',
    specs: [
      ['Centrifugal Force Range', '0 – 12,000 Kgs/Meter'],
      ['Operating Voltages', '380/440 V, 50/60 Hz (Other voltages available on request)'],
      ['Ambient Temperature Range', '-25°C to 80°C (Custom options on request)'],
      ['Insulation Class', 'Class F'],
      ['Operation Mode', 'Continuous duty at maximum rated force and power'],
      ['Mounting', 'Can be installed in any position without limitation'],
      ['Terminal Box', 'Spacious design for safe and easy wiring'],
      ['Bearings', 'Precision high-load bearings designed for heavy vibratory stress'],
      ['Drive Shaft', 'Oversized, stress-resistant, made from treated alloy steel']
    ],
    features: [
      'High-Power Vibration Output ensuring rapid and complete screening separation',
      'Heavy-Duty & Durable Construction with cast iron housing',
      'Energy Efficient winding providing high starting torque with low thermal dissipation',
      'Low Noise, Smooth Operation for worker-friendly environments',
      'Customizable Options in voltage, mounting, and shaft configurations',
      'Easy Installation & Minimal Maintenance lifecycle'
    ],
    applications: [
      'Vibratory Screens & Sieves',
      'Separation & Filtration Systems',
      'Food, Chemical, and Pharmaceutical Industries',
      'Quarrying & Mining Operations',
      'Agricultural Processing',
      'Recycling Units'
    ],
    gallery: [
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-9.webp',
      '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-2-1.webp'
    ]
  },
  {
    slug: 'custmize-motor',
    title: 'Customized Motor',
    image: '2025-05--pavitra-social-media-8.webp',
    intro: 'At Pavitra Industries, we specialize in designing and manufacturing customized electric motors that match your unique application requirements.\n\nWhether you need motors for industrial machinery, automation, vibration applications, or specialized operations, we provide tailor-made solutions with precision engineering and robust performance.',
    specs: [
      ['AC Induction Motors (Customized)', '0.25 HP to 75 HP; 415V / 50 Hz / 3-Phase; frame sizes 63 to 200; 750 / 960 / 1440 / 2880 RPM'],
      ['Vibratory Motors (Customized)', 'Foot / Flange / Wedge / Flameproof; 750 to 3000 RPM; 0.25 HP to 20 HP; force up to 30,000 N'],
      ['Three Phase Double Speed Motors', 'Frame 90 to 160; 0.5 HP to 30 HP; speeds 2880/1440, 1440/960, 960/750 RPM'],
      ['Special Application Custom Motors', 'Brake Motors (AC/DC), Bench Polisher Motors, Gearbox-compatible Motors, IP65/IP66 Rated Motors, Flameproof for hazardous zones'],
      ['Insulation Options', 'Class F / Class H High-Temp Insulation'],
      ['Bearings Customization', 'Premium SKF / FAG / NTN sealed bearings']
    ],
    features: [
      'Shaft Customization & Keyway (Step shaft, spline, stainless steel, threaded)',
      'Special Mounting Dimensions (Custom flanges, foot patterns, and adaptor plates)',
      'Custom Voltage & Frequency Winding (110V, 220V, 380V, 460V, 525V @ 50Hz/60Hz)',
      'High-Temp Class H Insulation for extreme thermal operating conditions',
      'Premium High-Capacity Bearings (SKF/FAG/NTN)',
      'Branded Nameplate & Custom Laser Engraving'
    ],
    applications: [
      'Material Handling Equipment',
      'Foundry & Construction Machinery',
      'Food & Pharmaceutical Processing',
      'Cement & Steel Manufacturing',
      'Packaging Machinery & Automation Systems'
    ],
    gallery: [
      '2025-05--pavitra-social-media-8.webp'
    ]
  },
];

const addSourceData = (slug: string, data: Partial<Product>) => Object.assign(products.find((product) => product.slug === slug)!, data);

export const sourceRows = (text: string) => text.trim().split('\n').map((row) => row.split('|').map((cell) => cell.trim()));

addSourceData('ac-dc-brake-motors', {
  intro: 'its commitment to quality and performance by introducing a new line of AC and DC Brake Motors, designed to meet the growing demand for applications requiring precise stopping, holding, and enhanced safety. Available across a wide power range, these motors combine our proven efficiency with integrated braking solutions',
  specs: [['Power Range', '0.25 HP to 30 HP (0.18 kW to ~22 kW)'], ['Speeds (RPM)', '750 / 1000 / 1500 / 3000'], ['Insulation Class', 'F (Standard), H (Optional)'], ['Enclosure', 'TEFC (Totally Enclosed Fan Cooled)'], ['Protection Class', 'IP55 (Standard), IP65 (Optional)'], ['Duty Cycle', 'S1 (Continuous Duty), S4 (Intermittent with braking)'], ['Frame Sizes', '63 to 200 (or higher for 30 HP)'], ['Mounting Options', 'B3 (Foot), B5 (Flange), B14 (Face), B35 (Foot cum Flange)'], ['Single Phase Voltage', '230V ±10%, 50 Hz (primarily for lower HP)'], ['Three Phase Voltage', '415V ±10%, 50 Hz (typically from 3 HP upwards)'], ['Custom Voltages', '110V/220V/240V/415V (On Request)'], ['Brake Type', 'AC Electromagnetic Brake / DC Electromagnetic Brake']],
  features: ['Integrated Braking System', 'Energy Efficient Design', 'Fail-Safe Operation', 'Rugged Construction', 'VFD Compatibility', 'Smooth & Silent Operation', 'Minimal Maintenance', 'Thermal Overload Protection'],
  gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-7.jpg', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-8.jpg'],
});

addSourceData('unbalance-vibratory-motor', {
  intro: 'An unbalance vibratory motor is a specialized electromechanical device designed to generate vibratory motion through unbalanced masses attached to its shaft. As the shaft rotates, centrifugal force is produced, creating vibrations used for material handling, screening, compaction, and other industrial applications. These motors are compact, durable, and efficient, making them ideal for vibratory feeders, screens, and conveyors. Their amplitude and frequency can be adjusted by modifying the unbalanced weights, allowing precise control over vibration intensity.',
  specs: [['Centrifugal Force Range', '0 – 12,000 Kgs/Meter'], ['Operating Voltages', 'Standard: 380/440V, 50/60 Hz; others on request'], ['Ambient Temperature', '25°C to 80°C (Other ranges on request)'], ['Insulation Class', 'F'], ['Operation', 'Continuous service at maximum indicated centrifugal force and electric power rating'], ['Fixing', 'Can be mounted in all positions without limitations'], ['Terminal Box', 'Sized for easy electrical connections'], ['Bearings', 'Upper and lower bearings designed to support the relative load'], ['Drive Shaft', 'Oversized, treated steel to withstand high stress']],
  gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-8.webp', '2025-06--WhatsApp-Image-2025-06-10-at-09.27.02_9702dfdb.jpg', '2025-06--WhatsApp-Image-2025-06-10-at-09.41.19_134e14e7.jpg'],
  tables: [{ title: 'Frame & Mounting Table', headers: ['No', 'Frame', 'HP', 'Hole Center (A × B)', 'Motor Size (L × W × H)', 'Drill Size'], rows: [['1','63','0.25','85 × 85','270 × 150 × 170','4 – 14 mm'], ['2','71','0.5','120 × 85','320 × 180 × 195','4 – 14 mm'], ['3','80','1.0','140 × 108','360 × 200 × 215','4 – 14 mm'], ['4','90','2.0','152 × 130','460 × 220 × 270','4 – 18 mm'], ['5','100','3.0','200 × 130','540 × 260 × 320','6 – 22 mm'], ['6','112','5.0','210 × 170','610 × 270 × 355','6 – 22 mm'], ['7','132','7.5','280 × 200','650 × 350 × 425','6 – 22 mm'], ['8','160','10','395 × 325','720 × 380 × 450','6 – 40 mm']] }],
});

addSourceData('bench-polisher-machine', {
  intro: 'PAVITRA INDUSTRIES. Comprehensive Specifications, Usage, and Performance Data.',
  specs: [['Power Rating','0.25 HP to 10 HP'], ['Voltage','230V (Single Phase) / 415V (Three Phase)'], ['Frequency','50 Hz'], ['No Load RPM','2800 RPM (Standard)'], ['Enclosure Type','Totally Enclosed Fan Cooled (TEFC)'], ['Insulation','Class F'], ['Duty Cycle','S1 (Continuous)'], ['Cooling','External Fan Cooled'], ['Surface Finish','Powder Coated Body'], ['Body Material','Heavy Duty Cast Iron'], ['Shaft Material','EN8 Steel'], ['Mounting','Foot Mounting'], ['Bearings','Double sealed deep groove ball bearings (SKF / NTN / FAG equivalent)']],
  gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-12.jpg', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-13.webp'],
});

addSourceData('bench-grinder-machine', {
  specs: [['Power Range','0.12 HP (0.09 kW) to 5 HP (3.7 kW)'], ['RPM','Bench units: 2,800–3,000 RPM; Pedestal/Heavy-duty units: 1,500–3,000 RPM'], ['Wheel Sizes','100 mm (4″) to 355 mm (14″)'], ['Phase Options','Single-phase (230–240 V) for ≤1 HP; Three-phase (415–440 V) for ≥2 HP units']],
  gallery: ['2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-18.jpg', '2025-06--Peach-Modern-New-Product-Skincare-Instagram-Post-19.jpg'],
  tables: [{ title: 'Bench Grinders – 2,800–3,000 RPM', headers: ['Model','Power (kW / HP)','Phase / Voltage','Wheel Size (mm)','Shaft Ø (mm)','Weight (kg)'], rows: [['PI‑BG‑012','0.09 kW / 0.12 HP','1Ø (230 V)','100 × 13','12.7','~9'], ['PI‑BG‑025','0.18 kW / 0.25 HP','1Ø / 3Ø','100 × 20','12.7','13'], ['PI‑BG‑050','0.37 kW / 0.50 HP','1Ø / 3Ø','150–200','15.8','22–26'], ['PI‑BG‑075','0.55 kW / 0.75 HP','1Ø / 3Ø','200 × 25','19.0','35'], ['PI‑BG‑100','0.75 kW / 1.00 HP','1Ø / 3Ø','250 × 25','19.0','45']] }, { title: 'Pedestal & Heavy-Duty Grinders – 1,500–3,000 RPM', headers: ['Model','Power (kW / HP)','Wheel Size (mm)','RPM','Weight (kg)'], rows: [['PI‑PG‑200','1.50 kW / 2 HP','300 × 40 / 38','1,500 / 2,800','60–80'], ['PI‑PG‑300','2.20 kW / 3 HP','300 × 40','1,500 / 2,800','80–120'], ['PI‑PG‑500','3.70 kW / 5 HP','355 × 76','1,500 / 1,800','150–270']] }],
});

addSourceData('needle-vibrator-motors', {
  intro: 'Types: Single Phase & Three Phase. Applications: Concrete slabs, columns, beams, footings, foundations, precast elements.',
  tables: [{ title: 'Technical Specifications', headers: ['Model No.','Power','Phase','Voltage','Frequency','RPM','Needle Dia.','Shaft Length','Weight'], rows: [['PNV-1SP','1 HP (0.75 kW)','Single Phase','230V ±10%','50 Hz','2800','38 / 40 mm','4m / 6m','12–15 kg'], ['PNV-1TP','1 HP (0.75 kW)','Three Phase','415V ±10%','50 Hz','2800','38 / 40 mm','4m / 6m','11–14 kg'], ['PNV-2SP','2 HP (1.5 kW)','Single Phase','230V ±10%','50 Hz','2800','50 / 60 mm','4m / 6m','20–25 kg'], ['PNV-2TP','2 HP (1.5 kW)','Three Phase','415V ±10%','50 Hz','2800','50 / 60 mm','4m / 6m','18–23 kg'], ['PNV-3SP','3 HP (2.2 kW)','Single Phase','230V ±10%','50 Hz','2800','60 mm','4m / 6m','28–35 kg'], ['PNV-3TP','3 HP (2.2 kW)','Three Phase','415V ±10%','50 Hz','2800','60 mm','4m / 6m / 8m','25–32 kg']] }],
});

addSourceData('cooling-tower-motor', {
  tables: [
    { title: 'Product range', headers: ['Parameter', 'Specification', 'Parameter', 'Specification'], rows: sourceRows(`
Power|0.25 Hp to 25 Hp (0.18kW to 18.5 kW)|Pole|4P, 6P, 8P, 10P
Frame Size|71 ‘F’ to 180 ‘L’|Mounting|Flange mounted (B5)
Voltage|415 V ± 10% or as required|Frequency|50 Hz ± 5% or as required
Insulation|Class ‘F’|Protection|IP 55
Type of Duty|S1|Enclosure|Totally enclosed (TE)
Ambient Temp.|45°C|Temp. Rise|As per Insulation class ‘B’
`) },
    { title: 'Mechanical Dimensions (Selected Frames)', headers: ['FRAME','D1','D2','D3','G','GA','L','L1','L2','L3','E','F','P','M','N','S','Z','T','LA','X','AD'], rows: sourceRows(`
71|15|14|M12|11|16|278|40|30|30|178|5|160|130|110|10|4|3.5|9|25|195
80|20|19|M16|15.5|21.5|347|55|50|45|197|6|200|165|130|12|4|3.5|10|35|224
90S|30|28|M24|24|31|459|112|55|60|232|8|200|165|130|12|4|3.5|11|45|232
90L|30|28|M24|24|31|484|112|55|60|257|8|200|165|130|12|4|3.5|11|45|232
100L|30|28|M24|24|31|486|112|55|60|259|8|250|215|180|15|4|4|11|45|285
112M|30|28|M24|24|31|505|112|55|60|278|8|250|215|180|15|4|4|11|45|296
112-132|40|38|M30|33|41|508|90|75|65|278|10|300|265|230|15|4|4|13|70|292
132S|40|38|M30|33|41|535|90|75|65|305|10|300|265|230|15|4|4|13|70|338
132M|40|38|M30|33|41|573|90|75|65|343|10|300|265|230|15|4|4|13|70|338
132-160|45|42|M30|37|45|573|90|75|65|343|12|350|300|250|19|4|5|15|65|336
160M|45|42|M30|37|45|644|90|75|65|414|12|350|300|250|19|4|5|15|65|395
160L|45|42|M30|37|45|688|90|75|65|458|12|350|300|250|19|4|5|15|65|395
180L|50|48|M30|42.5|51.5|811|100|105|65|541|14|350|300|250|19|4|5|15|100|430
`) },
  ],
});

addSourceData('micro-vibratory-motor', {
  tables: [
    { title: 'Micro Vibratory Motor – 15W to 40W', headers: ['Model No.','Voltage (V)','Current (A)','Power (W)','Force (Kg)','Frequency (Hz)','RPM','Motor Weight (Kg)'], rows: sourceRows(`
PMV-0.015/1|230V±10%|0.10|15|10|50±3%|3000|1.5
PMV-0.015/3|415V±10%|0.06|15|10|50±3%|3000|1.5
PMV-0.02/1|230V±10%|0.13|20|15|50±3%|3000|1.5
PMV-0.02/3|415V±10%|0.08|20|15|50±3%|3000|1.5
PMV-0.03/1|230V±10%|0.13|30|20|50±3%|3000|1.6
PMV-0.03/3|415V±10%|0.10|30|20|50±3%|3000|1.6
PMV-0.04/1|230V±10%|0.18|40|25|50±3%|3000|1.65
PMV-0.04/3|415V±10%|0.14|40|25|50±3%|3000|1.65
`) },
    { title: 'Micro Vibratory Motor – 50W to 120W', headers: ['Model No.','Voltage (V)','Current (A)','Power (W)','Force (Kg)','Frequency (Hz)','RPM','Motor Weight (Kg)'], rows: sourceRows(`
PMV-0.05/1|230V±10%|0.23|50|30|50±3%|3000|1.9
PMV-0.05/3|415V±10%|0.20|50|30|50±3%|3000|1.9
PMV-0.06/1|230V±10%|0.28|60|35|50±3%|3000|1.9
PMV-0.06/3|415V±10%|0.21|60|35|50±3%|3000|1.9
PMV-0.07/1|230V±10%|0.30|70|40|50±3%|3000|2.0
PMV-0.07/3|415V±10%|0.23|70|40|50±3%|3000|2.0
PMV-0.08/1|230V±10%|0.32|80|45|50±3%|3000|2.0
PMV-0.08/3|415V±10%|0.25|80|45|50±3%|3000|2.0
PMV-0.09/1|230V±10%|0.34|90|50|50±3%|3000|2.05
PMV-0.09/3|415V±10%|0.26|90|50|50±3%|3000|2.05
PMV-0.10/1|230V±10%|0.45|100|55|50±3%|3000|2.1
PMV-0.10/3|415V±10%|0.30|100|55|50±3%|3000|2.1
PMV-0.12/1|230V±10%|0.46|120|60|50±3%|3000|2.2
PMV-0.12/3|415V±10%|0.32|120|60|50±3%|3000|2.2
`) },
  ],
});

addSourceData('sepration-vibrator-motor', {
  tables: [{ title: 'Mechanical Dimensions (Selected Frames)', headers: ['Frame','Shaft Dia (mm)','Shaft Length (mm)','Center Height (mm)','Foot Hole (mm)','Flange PCD (mm)','Key Size (mm)'], rows: sourceRows(`
63|11|23|63|100x80|120|4x4
71|14|30|71|112x90|130|5x5
80|19|40|80|125x100|165|6x6
90S/L|24|50|90|140x110|165/200|8x7
100L|28|60|100|160x125|215|8x7
112M|28|60|112|190x140|215/250|8x7
132S/M|38|80|132|216x140|265/300|10x8
160M/L|48|110|160|254x165|300/350|12x8
180M/L|55|110|180|279x190|350/400|14x9
200L|55|110|200|318x216|400/450|16x10
225S/M|60|140|225|356x241|450/500|18x11
250M|65|140|250|406x279|500/550|18x11
280S/M|75|160|280|457x305|550/600|20x12
`) }],
});

addSourceData('bench-polisher-machine', {
  tables: [{ title: 'Mechanical Dimensions (Selected Frames)', headers: ['Parameter','Unit','0.25 HP','0.5 HP','1 HP','2 HP','3 HP','5 HP','7.5 HP','10 HP'], rows: sourceRows(`
Rated Power|HP / kW|0.25 / 0.18|0.5 / 0.37|1 / 0.75|2 / 1.5|3 / 2.2|5 / 3.7|7.5 / 5.5|10 / 7.5
Voltage|V|230 / 415|230 / 415|415|415|415|415|415|415
Phase|-|1 / 3|1 / 3|3|3|3|3|3|3
Frequency|Hz|50|50|50|50|50|50|50|50
No Load Speed|RPM|2800|2800|2800|2800|2800|2800|2800|2800
Polishing Wheel Diameter|mm / inch|150 / 6|200 / 8|250 / 10|300 / 12|350 / 14|400 / 16|450 / 18|500 / 20
Polishing Wheel Width|mm|25|38|50|63|63|75|75|75
Shaft Diameter|mm|12|16|19|25|28|32|38|40
Bearing Size|-|6201|6203|6204|6205|6206|6207|6208|6308
Body Material|-|Cast Iron|Cast Iron|Cast Iron|Cast Iron|Cast Iron|Cast Iron|Cast Iron|Cast Iron
Insulation Class|-|F|F|F|F|F|F|F|F
Duty Cycle|-|S1|S1|S1|S1|S1|S1|S1|S1
Cooling|-|TEFC|TEFC|TEFC|TEFC|TEFC|TEFC|TEFC|TEFC
Surface Finish|-|Powder Coated|Powder Coated|Powder Coated|Powder Coated|Powder Coated|Powder Coated|Powder Coated|Powder Coated
Approximate Weight|Kg|20|30|45|60|75|110|145|180
`) }],
});

const flangeDimensions = { headers: ['No','Frame','HP','PCD (mm)','OD (mm)','Motor Length (mm)','No. of Holes (Ø)'], rows: sourceRows(`
1|63|0.25|160|180|210|6 × 14 mm
2|71|0.5|180|225|270|6 × 14 mm
3|80|1.10|230|270|370|6 × 15 mm
4|90|2.0|230|270|370|6 × 22 mm
5|100|3.0|270|300|370|6 × 22 mm
6|112|5.0|300|350|440|6 × 27 mm
7|132|7.5|360|410|510|6 × 27 mm
8|160|10|400|450|550|6 × 27 mm
`) };

addSourceData('top-flange-vibratory-motors', { tables: [{ title: 'Top Flange Vibratory Motor Dimensions', ...flangeDimensions }] });
addSourceData('center-flange-vibratory-motor', { tables: [{ title: 'Mechanical Dimensions (Selected Frames)', ...flangeDimensions }] });
addSourceData('double-flange-vibratory-motor', {
  tables: [{ title: 'Performance Data – 1 HP to 10 HP (NJ Bearing + MS Body)', headers: ['Model No.','Power (HP)','RPM','Centrifugal Force (kgf)','Voltage (V)','Current (A)','Bearing Type','Weight (kg)'], rows: sourceRows(`
PAV VMD-80|1.0|1500|450|415|~1.5|NJ 205|38
PAV VMD-90|1.5|1500|750|415|~2.2|NJ 206|48
PAV VMD-100|2.0|1500|1100|415|~2.8|NJ 207|60
PAV VMD-112|3.0|1000|1500|415|~4.2|NJ 208|72
PAV VMD-132|5.0|1000|2200|415|~6.5|NJ 310|105
PAV VMD-160|7.5|1000|7700|415|10.0|NJ 2315|168.3
PAV VMD-180|10.0|1000|9000–11000|415|~12.5|NJ 2317|~200
`) }],
});

export const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));

export type ArticleBlock = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  specs?: [string, string][];
};

export type ArticleData = {
  title: string;
  image?: string;
  blocks: ArticleBlock[];
};

export const articles: Record<string, ArticleData> = {
  supplier: {
    title: 'Choosing the Best Vibratory Motor Supplier in India: A Closer Look at Pavitra Industries',
    blocks: [
      { heading: 'Introduction to Pavitra Industries', paragraphs: ['In the dynamic world of electric motors, Pavitra Industries stands out as a leading manufacturer in India. With a strong commitment to innovation and quality, the company has established itself as a reliable partner for various industries. Understanding the significance of electric motors in modern technology, Pavitra Industries has focused on producing products that meet the highest standards.'] },
      { heading: 'Quality and Innovation', paragraphs: ['Pavitra Industries prioritizes quality in every product it manufactures. Each electric motor produced undergoes rigorous testing to ensure durability and efficiency. The company also invests in research and development to advance its technology, ensuring that their offerings remain competitive and in line with global standards. This dedication to quality and innovation makes Pavitra Industries a trusted name among Indian manufacturers.'] },
      { heading: 'Commitment to Sustainability', paragraphs: ['Moreover, Pavitra Industries understands the importance of sustainability in today’s industrial landscape. The company utilizes eco-friendly materials and efficient production processes, striving to reduce its carbon footprint. By aligning its manufacturing practices with environmental concerns, Pavitra Industries not only enhances its brand reputation but also contributes positively to the community and the planet.', 'In conclusion, Pavitra Industries exemplifies excellence in electric motor manufacturing in India. Through its commitment to quality, innovation, and sustainability, the company is well-positioned to continue its leadership role in the industry. Whether for domestic or international markets, Pavitra Industries is synonymous with reliability and performance in electric motors.'] },
    ],
  },
  guide: {
    title: 'What is a Vibratory Motor? Complete Guide – Working, Types & Applications',
    image: '2025-11--1000040086-1024x1024.jpg',
    blocks: [
      { heading: 'How Does a Vibratory Motor Work?', paragraphs: ['A vibratory motor works on a simple principle: Eccentric weights are mounted on both ends of the motor shaft. When the shaft rotates, these weights create centrifugal force. This force converts into vibration. The vibration force and direction can be adjusted by changing the weight position.', 'In simple words: Motor rotates → unbalanced weight moves → vibration is produced.'] },
      { heading: 'Types of Vibratory Motors', items: ['Foot Mounted Vibratory Motor — Most commonly used. Suitable for vibrating screens, conveyors, and feeders.', 'Centre Flange Vibratory Motor — Mounted at the center on machines. Used for heavy-duty screening applications.', 'Top Flange Vibratory Motor — Ideal for vertical screening machines and compactors.', 'Wedge Mounted Vibratory Motor — Special design for high alignment accuracy. Used in customized vibrating equipment.', 'Flameproof Vibratory Motor — Designed for hazardous areas. Safe for gas zones, chemical industries, and mining applications.'] },
      { heading: 'Technical Specifications (General)', specs: [['Power', '0.25 HP to 20 HP'], ['RPM', '750 / 1000 / 1500 / 3000'], ['Voltage', '415V, Three Phase'], ['Frequency', '50Hz / 60Hz'], ['Bearings', '6306 to 6312 Series'], ['Protection Class', 'IP55 / IP65'], ['Duty', 'S1 – Continuous Duty'], ['Body Material', 'Cast Iron / Aluminium']] },
      { heading: 'Applications of Vibratory Motors', items: ['Construction Industry — Sand screening machines, concrete compactors, vibratory plates', 'Industrial Processing — Vibratory feeders, hopper discharge systems, vibrating conveyors', 'Food & Pharmaceutical — Material grading, powder sieving, packing line conveyors', 'Agriculture — Seed cleaning machines, grain sorting units', 'Chemical & Mineral Industry — Powder separation, pellet screening, mixing and blending equipment'] },
      { heading: 'Why Choose Pavitra Industries Vibratory Motors?', items: ['Heavy-duty cast iron body (CI)', 'Pure copper winding for long life', 'Fully adjustable eccentric weights', 'Accurate vibration force output', 'Available in Foot, Centre Flange, Top Flange, and Wedge Mounting', 'Uses long-life 6300 series bearings', 'Custom-made options for HP, RPM, Flange Type, and Body Material'], paragraphs: ['Pavitra Industries offers 0.25 HP to 20 HP vibratory motors suitable for all vibrating machinery.'] },
      { heading: 'Conclusion', paragraphs: ['Vibratory motors are essential components in many industries. Their ability to generate controlled vibrations makes them ideal for material handling, compacting, conveying, and screening operations. Choosing the right vibratory motor improves machine performance and increases operational efficiency.'] },
    ],
  },
  company: {
    title: 'Pavitra Industries, India’s Leading Manufacturer of Vibratory Motors and Equipment',
    image: '2025-05--pavitra-social-media-8.webp',
    blocks: [
      { heading: 'Introduction', paragraphs: ['In today’s rapidly evolving industrial world, efficiency, reliability, and technological innovation are the backbones of progress. For over 15 years, Pavitra Industries has been a symbol of these values. Based in India and serving customers around the globe, we are proud to be an ISO 9001:2008 certified manufacturer of premium vibratory motors and vibratory equipment. From humble beginnings to a global footprint, our journey reflects dedication to quality, precision engineering, and customer-centric services.'] },
      { heading: 'Our Journey – From Inception to Industry Leader', paragraphs: ['Established with a clear vision of transforming the industrial motor manufacturing segment, Pavitra Industries began as a small-scale unit with a strong commitment to quality and customer satisfaction. Over the years, we expanded our capabilities by incorporating cutting-edge technologies, adopting international standards, and focusing on customized industrial solutions. Today, we proudly serve clients in Europe, Africa, Russia, the Middle East, and Asia, helping them meet their productivity and machinery reliability goals.'] },
      { heading: 'Our Mission and Vision', paragraphs: ['Our mission is to empower industrial operations by delivering reliable, energy-efficient, and high-performance vibratory motors. Our vision is to become a globally recognized name synonymous with trust, quality, and innovation in the vibration technology sector.'] },
      { heading: 'Comprehensive Product Range', paragraphs: ['Pavitra Industries offers a comprehensive portfolio of vibratory solutions designed to suit different industrial applications. Each product undergoes rigorous testing for performance, durability, and environmental compliance.'], items: ['Three Phase Induction Motor', 'Single Phase Induction Motor', 'Ac & Dc Brake Motor', 'Unbalanced Vibratory Motor', 'Bench Polisher Machine', 'Bench Grinder Machine', 'Niddle Vibratory Motor', 'Cooling Tower Motor', 'Customised Motors', 'Center Flange Vibratory Motor', 'Top Flange Vibratory Motot', 'Double Flange Vibratory Motor', 'Micro Vibratory Motor'] },
    ],
  },
};
