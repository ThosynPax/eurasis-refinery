export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  features: string[]
  specifications: Record<string, string>
  applications: string[]
  category: string
  price?: string
  availability: "In Stock" | "Limited" | "Out of Stock"
  certifications: string[]
}

export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "fuels", name: "Fuels" },
  { id: "lubricants", name: "Lubricants" },
  { id: "chemicals", name: "Chemicals" },
  { id: "specialty", name: "Specialty Products" },
]

export const products: Product[] = [
  {
    id: "gasoline",
    slug: "premium-gasoline",
    name: "Premium Gasoline",
    description:
      "High-octane gasoline refined with advanced technology for optimal engine performance and fuel efficiency.",
    longDescription:
      "Our Premium Gasoline is formulated using state-of-the-art refining processes to deliver exceptional performance and fuel economy. With a high octane rating and advanced additive package, this fuel provides superior engine protection while reducing emissions. Ideal for high-performance vehicles and everyday driving alike.",
    features: [
      "High Octane Rating (91-93)",
      "Clean Burning Formula",
      "Engine Protection Additives",
      "Improved Fuel Efficiency",
    ],
    specifications: {
      "Octane Rating": "91-93 RON",
      Density: "0.72-0.78 g/cm³",
      "Sulfur Content": "< 10 ppm",
      "Benzene Content": "< 1% vol",
      "Lead Content": "< 0.005 g/L",
    },
    applications: ["Passenger Vehicles", "Light Commercial Vehicles", "Motorcycles", "Small Engines"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["EPA Certified", "CARB Compliant", "ISO 9001", "ASTM D4814"],
  },
  {
    id: "diesel",
    slug: "ultra-low-sulfur-diesel",
    name: "Ultra-Low Sulfur Diesel",
    description:
      "Clean-burning diesel fuel that meets the highest environmental standards while delivering superior performance.",
    longDescription:
      "Our Ultra-Low Sulfur Diesel (ULSD) represents the pinnacle of clean diesel technology. With sulfur content reduced to less than 15 ppm, this fuel significantly reduces harmful emissions while maintaining the power and efficiency diesel engines are known for. Perfect for modern diesel vehicles and equipment.",

    features: ["Ultra-Low Sulfur Content", "High Energy Density", "Cold Weather Performance", "Emission Compliant"],
    specifications: {
      "Sulfur Content": "< 15 ppm",
      "Cetane Number": "≥ 40",
      Density: "0.82-0.86 g/cm³",
      "Flash Point": "≥ 52°C",
      "Cloud Point": "Variable by season",
    },
    applications: ["Heavy Duty Trucks", "Construction Equipment", "Marine Vessels", "Power Generation"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["EPA ULSD", "ASTM D975", "EN 590", "ISO 8217"],
  },
  {
    id: "jet-fuel",
    slug: "aviation-jet-fuel",
    name: "Aviation Jet Fuel",
    description: "Premium jet fuel meeting international aviation standards for commercial and military aircraft.",
    longDescription:
      "Our Aviation Jet Fuel is produced to the most stringent international specifications, ensuring reliable performance at all altitudes and weather conditions. This fuel undergoes rigorous quality control testing and meets all major aviation fuel standards for both commercial and military applications.",

    features: ["Aviation Grade Quality", "Temperature Stable", "Anti-Icing Properties", "High Performance"],
    specifications: {
      "Fuel Type": "Jet A-1",
      Density: "0.775-0.840 g/cm³",
      "Flash Point": "≥ 38°C",
      "Freezing Point": "≤ -47°C",
      "Smoke Point": "≥ 25 mm",
    },
    applications: ["Commercial Aviation", "Military Aircraft", "Private Jets", "Cargo Aircraft"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ASTM D1655", "DEF STAN 91-91", "IATA Standards", "FAA Approved"],
  },
  {
    id: "heating-oil",
    slug: "heating-oil",
    name: "Heating Oil",
    description: "Efficient heating oil for residential and commercial heating systems with consistent quality.",
    longDescription:
      "Our premium heating oil provides reliable, efficient heating for residential and commercial applications. Refined to strict quality standards, this fuel burns cleanly and efficiently, providing consistent heat output while minimizing maintenance requirements for heating systems.",

    features: ["Clean Burning", "High BTU Content", "Low Sulfur", "Reliable Supply"],
    specifications: {
      Grade: "No. 2 Fuel Oil",
      "Sulfur Content": "< 500 ppm",
      "BTU Content": "≥ 138,000 BTU/gal",
      "Flash Point": "≥ 38°C",
      "Pour Point": "≤ -6°C",
    },
    applications: ["Residential Heating", "Commercial Buildings", "Industrial Heating", "Backup Power"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ASTM D396", "EPA Compliant", "State Regulations", "Quality Assured"],
  },
  {
    id: "lpg",
    slug: "liquefied-petroleum-gas",
    name: "Liquefied Petroleum Gas",
    description: "Clean and efficient LPG for industrial, commercial, and residential applications.",
    longDescription:
      "Our Liquefied Petroleum Gas (LPG) offers a clean, efficient, and versatile energy solution. Composed primarily of propane and butane, our LPG burns cleanly with minimal emissions, making it an environmentally friendly choice for a wide range of applications from cooking to industrial processes.",

    features: ["Clean Energy", "Versatile Use", "High Efficiency", "Environmentally Friendly"],
    specifications: {
      Composition: "Propane/Butane Mix",
      Purity: "≥ 95%",
      "Vapor Pressure": "Variable by mix",
      "Calorific Value": "≥ 46 MJ/kg",
      "Sulfur Content": "≤ 50 mg/kg",
    },
    applications: ["Cooking & Heating", "Industrial Processes", "Automotive Fuel", "Agricultural Applications"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ASTM D1835", "EN 589", "ISO 9001", "Safety Certified"],
  },
  {
    id: "lubricants",
    slug: "industrial-lubricants",
    name: "Industrial Lubricants",
    description: "High-performance lubricants for industrial machinery and automotive applications.",
    longDescription:
      "Our comprehensive range of industrial lubricants is engineered to provide superior protection and performance across diverse applications. From heavy machinery to precision equipment, our lubricants reduce friction, prevent wear, and extend equipment life while operating under extreme conditions.",

    features: ["High Performance", "Extended Equipment Life", "Temperature Resistant", "Corrosion Protection"],
    specifications: {
      "Viscosity Range": "ISO VG 32-680",
      "Temperature Range": "-40°C to +200°C",
      "Oxidation Stability": "Excellent",
      "Wear Protection": "Superior",
      "Water Resistance": "High",
    },
    applications: ["Manufacturing Equipment", "Automotive Industry", "Marine Applications", "Power Generation"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["API Standards", "ISO 9001", "OEM Approvals", "Industry Specifications"],
  },
  {
    id: "marine-fuel",
    slug: "marine-fuel-oil",
    name: "Marine Fuel Oil",
    description: "Heavy fuel oil specially formulated for marine vessels and shipping industry applications.",
    longDescription:
      "Our Marine Fuel Oil is engineered to meet the demanding requirements of marine engines while complying with international maritime emission regulations. This heavy fuel oil provides reliable performance and efficiency for large marine vessels across global shipping routes.",

    features: ["High Viscosity", "Marine Grade", "Sulfur Compliant", "Cost Effective"],
    specifications: {
      Grade: "IFO 180-380",
      "Sulfur Content": "< 0.5%",
      Viscosity: "180-380 cSt",
      "Flash Point": "≥ 60°C",
      "Pour Point": "≤ 30°C",
    },
    applications: ["Cargo Ships", "Tankers", "Container Vessels", "Marine Engines"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ISO 8217", "IMO Compliant", "MARPOL Annex VI", "Global Standards"],
  },
  {
    id: "bitumen",
    slug: "industrial-bitumen",
    name: "Industrial Bitumen",
    description: "Premium grade bitumen for road construction, roofing, and waterproofing applications.",
    longDescription:
      "Our Industrial Bitumen is produced through advanced refining processes to ensure consistent quality and performance. Available in various grades and formulations, our bitumen products meet the specific requirements of construction, infrastructure, and industrial applications.",

    features: ["Durable", "Weather Resistant", "High Adhesion", "Versatile Applications"],
    specifications: {
      Penetration: "40-300 dmm",
      "Softening Point": "35-70°C",
      "Ductility": "100+ cm",
      "Flash Point": "≥ 250°C",
      Purity: "99.5%",
    },
    applications: ["Road Construction", "Roofing Materials", "Waterproofing", "Industrial Coatings"],
    category: "specialty",
    availability: "In Stock",
    certifications: ["ASTM D946", "EN 12591", "ISO 9001", "Quality Certified"],
  },
  {
    id: "petrochemicals",
    slug: "petrochemical-feedstocks",
    name: "Petrochemical Feedstocks",
    description: "High-purity chemical feedstocks for plastics, fertilizers, and chemical manufacturing.",
    longDescription:
      "Our petrochemical feedstocks provide the essential building blocks for countless industrial and consumer products. Produced to exacting purity standards, these feedstocks enable manufacturers to create high-quality plastics, synthetic materials, fertilizers, and specialty chemicals.",

    features: ["High Purity", "Consistent Quality", "Multiple Grades", "Industrial Grade"],
    specifications: {
      Purity: "≥ 99.5%",
      "Composition": "Various Hydrocarbons",
      "Impurity Level": "< 0.5%",
      "Boiling Range": "Variable by product",
      "Sulfur Content": "< 10 ppm",
    },
    applications: ["Plastic Manufacturing", "Fertilizer Production", "Chemical Synthesis", "Polymer Industry"],
    category: "chemicals",
    availability: "In Stock",
    certifications: ["ISO 9001", "Chemical Grade", "Industry Standards", "Quality Assured"],
  },
  {
    id: "base-oils",
    slug: "refined-base-oils",
    name: "Refined Base Oils",
    description: "High-quality base oils for lubricant manufacturing and specialty oil applications.",
    longDescription:
      "Our refined base oils serve as the foundation for premium lubricants and specialty oil products. Available in various viscosity grades and quality levels, these base oils provide excellent oxidation stability, viscosity characteristics, and performance properties for diverse applications.",

    features: ["Group I-IV Available", "High Viscosity Index", "Oxidation Stable", "Custom Blending"],
    specifications: {
      "Viscosity Grade": "ISO VG 32-1500",
      "Viscosity Index": "80-130",
      "Pour Point": "-15°C to -30°C",
      "Flash Point": "200-300°C",
      "Sulfur Content": "< 0.03%",
    },
    applications: ["Lubricant Manufacturing", "Industrial Oils", "Grease Production", "Specialty Fluids"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["API Standards", "ISO 9001", "OEM Specifications", "Quality Certified"],
  },
  {
    id: "avgas",
    slug: "aviation-gasoline",
    name: "Aviation Gasoline",
    description: "Specialized gasoline for piston-engine aircraft with strict quality and performance standards.",
    longDescription:
      "Our Aviation Gasoline (Avgas) is specially formulated for piston-engine aircraft, meeting the rigorous demands of aviation safety and performance. With consistent quality and reliable performance characteristics, this fuel ensures safe operation of general aviation aircraft across various flight conditions.",

    features: ["Aviation Grade", "High Octane", "Lead-Free Options", "Reliable Performance"],
    specifications: {
      Grade: "100LL, 100, 82UL",
      "Octane Rating": "100/130",
      "Lead Content": "< 0.56 g/L",
      "Vapor Pressure": "38-49 kPa",
      "Freezing Point": "≤ -58°C",
    },
    applications: ["General Aviation", "Piston Aircraft", "Flight Training", "Agricultural Aviation"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ASTM D910", "ASTM D7547", "FAA Approved", "International Standards"],
  },
  {
    id: "bunker-fuel",
    slug: "bunker-fuel",
    name: "Bunker Fuel",
    description: "Heavy residual fuel for large ships and power generation with high energy content.",
    longDescription:
      "Our Bunker Fuel is a high-energy density fuel specifically designed for large marine vessels and power generation applications. This heavy residual fuel provides cost-effective energy while meeting international maritime fuel quality and environmental standards.",

    features: ["High Density", "Economic", "ISO Compliant", "Global Availability"],
    specifications: {
      Grade: "RMG 180-700",
      Density: "0.991-1.015 g/cm³",
      Viscosity: "180-700 cSt",
      "Sulfur Content": "< 3.5%",
      "Flash Point": "≥ 60°C",
    },
    applications: ["Large Marine Vessels", "Power Plants", "Industrial Boilers", "Cargo Shipping"],
    category: "fuels",
    availability: "In Stock",
    certifications: ["ISO 8217", "IMO Compliant", "MARPOL Standards", "Global Specifications"],
  },
  {
    id: "transmission-fluid",
    slug: "automatic-transmission-fluid",
    name: "Automatic Transmission Fluid",
    description: "Advanced ATF for smooth shifting, thermal stability, and extended transmission life.",
    longDescription:
      "Our Automatic Transmission Fluid is engineered to provide exceptional performance in modern transmission systems. With advanced additive technology and superior thermal stability, this fluid ensures smooth shifting, reduced wear, and extended transmission life across all driving conditions.",

    features: ["Smooth Shifting", "Thermal Stability", "Wear Protection", "Extended Drain Intervals"],
    specifications: {
      "Viscosity Grade": "Dexron VI/Mercon LV",
      "Viscosity Index": "≥ 160",
      "Flash Point": "≥ 200°C",
      "Pour Point": "≤ -45°C",
      "Oxidation Stability": "Excellent",
    },
    applications: ["Passenger Vehicles", "Commercial Vehicles", "Heavy Equipment", "Industrial Machinery"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["API Standards", "OEM Approvals", "ISO 9001", "Global Specifications"],
  },
  {
    id: "hydraulic-fluid",
    slug: "hydraulic-fluid",
    name: "Hydraulic Fluid",
    description: "High-performance hydraulic fluids for industrial machinery and mobile equipment.",
    longDescription:
      "Our Hydraulic Fluid range is designed to deliver reliable performance in demanding hydraulic systems. These fluids provide excellent anti-wear protection, thermal stability, and water separation characteristics, ensuring optimal performance and extended component life in various industrial applications.",

    features: ["Anti-Wear Protection", "Thermal Stability", "Water Separation", "Rust Protection"],
    specifications: {
      "Viscosity Grade": "ISO VG 32-68",
      "Viscosity Index": "≥ 95",
      "Pour Point": "≤ -30°C",
      "Flash Point": "≥ 200°C",
      "Demulsibility": "Excellent",
    },
    applications: ["Industrial Machinery", "Construction Equipment", "Mobile Hydraulics", "Manufacturing Systems"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["ISO 9001", "DIN 51524", "ASTM Standards", "OEM Approvals"],
  },
  {
    id: "gear-oil",
    slug: "industrial-gear-oil",
    name: "Industrial Gear Oil",
    description: "Specialized lubricants for industrial gears providing extreme pressure protection.",
    longDescription:
      "Our Industrial Gear Oils are formulated to provide superior protection in demanding gear applications. With advanced extreme pressure additives and excellent thermal stability, these oils reduce wear, prevent scoring, and extend gear life in heavy industrial environments.",

    features: ["Extreme Pressure Protection", "Thermal Stability", "Wear Reduction", "Long Service Life"],
    specifications: {
      "Viscosity Grade": "ISO VG 68-680",
      "Viscosity Index": "≥ 90",
      "Pour Point": "≤ -20°C",
      "Flash Point": "≥ 200°C",
      "EP Properties": "Excellent",
    },
    applications: ["Industrial Gearboxes", "Mining Equipment", "Steel Mills", "Heavy Machinery"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["AGMA Standards", "ISO 9001", "DIN 51517", "OEM Approvals"],
  },
  {
    id: "compressor-oil",
    slug: "compressor-oil",
    name: "Compressor Oil",
    description: "Specialized lubricants for air and gas compressors with excellent oxidation stability.",
    longDescription:
      "Our Compressor Oils are engineered to provide reliable performance in various compressor types. These oils offer excellent oxidation stability, water separation, and anti-wear properties, ensuring extended compressor life and reduced maintenance costs in demanding operating conditions.",

    features: ["Oxidation Stability", "Water Separation", "Anti-Wear Protection", "Extended Drain Intervals"],
    specifications: {
      "Viscosity Grade": "ISO VG 32-100",
      "Viscosity Index": "≥ 95",
      "Flash Point": "≥ 200°C",
      "Pour Point": "≤ -25°C",
      "Demulsibility": "Excellent",
    },
    applications: ["Air Compressors", "Gas Compressors", "Refrigeration Systems", "Industrial Compression"],
    category: "lubricants",
    availability: "In Stock",
    certifications: ["ISO 9001", "DIN 51506", "ISO 6743", "OEM Specifications"],
  },
  {
    id: "transformer-oil",
    slug: "transformer-oil",
    name: "Transformer Oil",
    description: "High-quality insulating oils for electrical transformers and power distribution equipment.",
    longDescription:
      "Our Transformer Oils provide excellent electrical insulation and cooling properties for power transformers and electrical equipment. These highly refined mineral oils offer superior dielectric strength, oxidation stability, and thermal conductivity, ensuring reliable performance and extended equipment life.",

    features: ["High Dielectric Strength", "Oxidation Stability", "Thermal Conductivity", "Moisture Resistance"],
    specifications: {
      "Dielectric Strength": "≥ 30 kV",
      "Oxidation Stability": "Excellent",
      "Viscosity": "9-12 cSt",
      "Flash Point": "≥ 140°C",
      "Pour Point": "≤ -40°C",
    },
    applications: ["Power Transformers", "Distribution Transformers", "Circuit Breakers", "Electrical Equipment"],
    category: "specialty",
    availability: "In Stock",
    certifications: ["IEC 60296", "ASTM D3487", "ISO 9001", "Electrical Standards"],
  },
  {
    id: "white-oil",
    slug: "white-mineral-oil",
    name: "White Mineral Oil",
    description: "Highly refined mineral oils for pharmaceutical, food, and cosmetic applications.",
    longDescription:
      "Our White Mineral Oils are ultra-pure, highly refined products suitable for sensitive applications where purity is paramount. These odorless, tasteless oils meet stringent regulatory requirements for pharmaceutical, food processing, and personal care applications.",

    features: ["Ultra-Pure", "Odorless", "Tasteless", "Regulatory Compliant"],
    specifications: {
      Purity: "≥ 99.9%",
      "Viscosity": "10-100 cSt",
      "Flash Point": "≥ 160°C",
      "Pour Point": "≤ -15°C",
      "Color": "Water White",
    },
    applications: ["Pharmaceuticals", "Food Processing", "Cosmetics", "Personal Care"],
    category: "specialty",
    availability: "In Stock",
    certifications: ["USP/NF", "FDA Compliant", "EP Standards", "ISO 9001"],
  },
  {
    id: "process-oil",
    slug: "process-oil",
    name: "Process Oil",
    description: "Specialty oils for rubber, plastic, and chemical processing industries.",
    longDescription:
      "Our Process Oils are specially formulated for use in rubber compounding, plastic manufacturing, and various chemical processes. These oils provide excellent compatibility, consistent quality, and specific performance characteristics tailored to different industrial processing requirements.",

    features: ["Consistent Quality", "Excellent Compatibility", "Custom Formulations", "Process Specific"],
    specifications: {
      "Viscosity": "50-5000 cSt",
      "Pour Point": "≤ -10°C",
      "Flash Point": "≥ 180°C",
      "Aniline Point": "Variable",
      "Color": "Light to Dark",
    },
    applications: ["Rubber Compounding", "Plastic Manufacturing", "Chemical Processing", "Industrial Applications"],
    category: "chemicals",
    availability: "In Stock",
    certifications: ["ISO 9001", "Industry Standards", "Quality Assured", "Custom Specifications"],
  },
  {
    id: "solvents",
    slug: "industrial-solvents",
    name: "Industrial Solvents",
    description: "High-purity solvents for cleaning, degreasing, and chemical processing applications.",
    longDescription:
      "Our Industrial Solvents range includes high-purity products designed for various cleaning, degreasing, and chemical processing applications. These solvents offer excellent solvency power, consistent evaporation rates, and specific properties tailored to different industrial needs.",
    features: ["High Purity", "Excellent Solvency", "Controlled Evaporation", "Versatile Applications"],
    specifications: {
      Purity: "≥ 99%",
      "Evaporation Rate": "Variable",
      "Flash Point": "Variable",
      "Density": "0.7-1.0 g/cm³",
      "Solvency Power": "Excellent",
    },
    applications: ["Industrial Cleaning", "Degreasing", "Chemical Processing", "Manufacturing"],
    category: "chemicals",
    availability: "In Stock",
    certifications: ["ISO 9001", "Industry Standards", "Quality Control", "Safety Certified"],
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}