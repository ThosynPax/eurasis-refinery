export interface Product {
  name: string
  specifications: Record<string, string>
  slug: string
  category: string
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
    name: "Premium Gasoline",
    slug: "premium-gasoline",
    category: "fuels",
    specifications: {
      "Octane Rating": "91-93 RON",
      Density: "0.72-0.78 g/cm³",
      "Sulfur Content": "< 10 ppm",
      "Benzene Content": "< 1% vol",
      "Lead Content": "< 0.005 g/L",
    },
  },
  {
    name: "Ultra-Low Sulfur Diesel",
    slug: "ultra-low-sulfur-diesel",
    category: "fuels",
    specifications: {
      "Sulfur Content": "< 15 ppm",
      "Cetane Number": "≥ 40",
      Density: "0.82-0.86 g/cm³",
      "Flash Point": "≥ 52°C",
      "Cloud Point": "Variable by season",
    },
  },
  {
    name: "Aviation Jet Fuel",
    slug: "aviation-jet-fuel",
    category: "fuels",
    specifications: {
      "Fuel Type": "Jet A-1",
      Density: "0.775-0.840 g/cm³",
      "Flash Point": "≥ 38°C",
      "Freezing Point": "≤ -47°C",
      "Smoke Point": "≥ 25 mm",
    },
  },
  {
    name: "Heating Oil",
    slug: "heating-oil",
    category: "fuels",
    specifications: {
      Grade: "No. 2 Fuel Oil",
      "Sulfur Content": "< 500 ppm",
      "BTU Content": "≥ 138,000 BTU/gal",
      "Flash Point": "≥ 38°C",
      "Pour Point": "≤ -6°C",
    },
  },
  {
    name: "Liquefied Petroleum Gas",
    slug: "liquefied-petroleum-gas",
    category: "fuels",
    specifications: {
      Composition: "Propane/Butane Mix",
      Purity: "≥ 95%",
      "Vapor Pressure": "Variable by mix",
      "Calorific Value": "≥ 46 MJ/kg",
      "Sulfur Content": "≤ 50 mg/kg",
    },
  },
  {
    name: "Industrial Lubricants",
    slug: "industrial-lubricants",
    category: "lubricants",
    specifications: {
      "Viscosity Range": "ISO VG 32-680",
      "Temperature Range": "-40°C to +200°C",
      "Oxidation Stability": "Excellent",
      "Wear Protection": "Superior",
      "Water Resistance": "High",
    },
  },
  {
    name: "Marine Fuel Oil",
    slug: "marine-fuel-oil",
    category: "fuels",
    specifications: {
      Grade: "IFO 180-380",
      "Sulfur Content": "< 0.5%",
      Viscosity: "180-380 cSt",
      "Flash Point": "≥ 60°C",
      "Pour Point": "≤ 30°C",
    },
  },
  {
    name: "Industrial Bitumen",
    slug: "industrial-bitumen",
    category: "specialty",
    specifications: {
      Penetration: "40-300 dmm",
      "Softening Point": "35-70°C",
      "Ductility": "100+ cm",
      "Flash Point": "≥ 250°C",
      Purity: "99.5%",
    },
  },
  {
    name: "Petrochemical Feedstocks",
    slug: "petrochemical-feedstocks",
    category: "chemicals",
    specifications: {
      Purity: "≥ 99.5%",
      "Composition": "Various Hydrocarbons",
      "Impurity Level": "< 0.5%",
      "Boiling Range": "Variable by product",
      "Sulfur Content": "< 10 ppm",
    },
  },
  {
    name: "Refined Base Oils",
    slug: "refined-base-oils",
    category: "lubricants",
    specifications: {
      "Viscosity Grade": "ISO VG 32-1500",
      "Viscosity Index": "80-130",
      "Pour Point": "-15°C to -30°C",
      "Flash Point": "200-300°C",
      "Sulfur Content": "< 0.03%",
    },
  },
  {
    name: "Aviation Gasoline",
    slug: "aviation-gasoline",
    category: "fuels",
    specifications: {
      Grade: "100LL, 100, 82UL",
      "Octane Rating": "100/130",
      "Lead Content": "< 0.56 g/L",
      "Vapor Pressure": "38-49 kPa",
      "Freezing Point": "≤ -58°C",
    },
  },
  {
    name: "Bunker Fuel",
    slug: "bunker-fuel",
    category: "fuels",
    specifications: {
      Grade: "RMG 180-700",
      Density: "0.991-1.015 g/cm³",
      Viscosity: "180-700 cSt",
      "Sulfur Content": "< 3.5%",
      "Flash Point": "≥ 60°C",
    },
  },
  {
    name: "Automatic Transmission Fluid",
    slug: "automatic-transmission-fluid",
    category: "lubricants",
    specifications: {
      "Viscosity Grade": "Dexron VI/Mercon LV",
      "Viscosity Index": "≥ 160",
      "Flash Point": "≥ 200°C",
      "Pour Point": "≤ -45°C",
      "Oxidation Stability": "Excellent",
    },
  },
  {
    name: "Hydraulic Fluid",
    slug: "hydraulic-fluid",
    category: "lubricants",
    specifications: {
      "Viscosity Grade": "ISO VG 32-68",
      "Viscosity Index": "≥ 95",
      "Pour Point": "≤ -30°C",
      "Flash Point": "≥ 200°C",
      "Demulsibility": "Excellent",
    },
  },
  {
    name: "Industrial Gear Oil",
    slug: "industrial-gear-oil",
    category: "lubricants",
    specifications: {
      "Viscosity Grade": "ISO VG 68-680",
      "Viscosity Index": "≥ 90",
      "Pour Point": "≤ -20°C",
      "Flash Point": "≥ 200°C",
      "EP Properties": "Excellent",
    },
  },
  {
    name: "Compressor Oil",
    slug: "compressor-oil",
    category: "lubricants",
    specifications: {
      "Viscosity Grade": "ISO VG 32-100",
      "Viscosity Index": "≥ 95",
      "Flash Point": "≥ 200°C",
      "Pour Point": "≤ -25°C",
      "Demulsibility": "Excellent",
    },
  },
  {
    name: "Transformer Oil",
    slug: "transformer-oil",
    category: "specialty",
    specifications: {
      "Dielectric Strength": "≥ 30 kV",
      "Oxidation Stability": "Excellent",
      "Viscosity": "9-12 cSt",
      "Flash Point": "≥ 140°C",
      "Pour Point": "≤ -40°C",
    },
  },
  {
    name: "White Mineral Oil",
    slug: "white-mineral-oil",
    category: "specialty",
    specifications: {
      Purity: "≥ 99.9%",
      "Viscosity": "10-100 cSt",
      "Flash Point": "≥ 160°C",
      "Pour Point": "≤ -15°C",
      "Color": "Water White",
    },
  },
  {
    name: "Process Oil",
    slug: "process-oil",
    category: "chemicals",
    specifications: {
      "Viscosity": "50-5000 cSt",
      "Pour Point": "≤ -10°C",
      "Flash Point": "≥ 180°C",
      "Aniline Point": "Variable",
      "Color": "Light to Dark",
    },
  },
  {
    name: "Industrial Solvents",
    slug: "industrial-solvents",
    category: "chemicals",
    specifications: {
      "Purity": "≥ 99%",
      "Evaporation Rate": "Variable",
      "Flash Point": "Variable",
      "Density": "0.7-1.0 g/cm³",
      "Solvency Power": "Excellent",
    },
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}