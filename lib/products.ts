export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
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
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}
