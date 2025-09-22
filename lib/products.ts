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
      name: "Crude Oil ESPO",
      slug: "crude-oil-espo",
      category: "fuels",
      specifications: {"Freezing point": "-45°C", "GOST R 51858-2002 Standard": ""}
    },
    {
      name: "Light Crude Oil (LCO)",
      slug: "light-crude-oil-lco",
      category: "fuels",
      specifications: {"Freezing point": "-60°C", "30-40° Standard": ""}
    },
    {
      name: "EN 590-10ppm",
      slug: "en-590-10ppm",
      category: "fuels",
      specifications: {"Freezing point": "-10°C", "Euro 5 Standard": ""}
    },
    {
      name: "Virgin Base Oil",
      slug: "virgin-base-oil",
      category: "fuels",
      specifications: {"Freezing point": "+20-30°C", "ISO 8217 Standard": ""}
    },
    {
      name: "Diesel Fuel Oil D6",
      slug: "diesel-fuel-oil-d6",
      category: "fuels",
      specifications: {"Freezing point": "+20-40°C", "ASTM D396 Standard": ""}
    },
    {
      name: "Petroleum Coke",
      slug: "petroleum-coke",
      category: "fuels",
      specifications: {"Freezing point": "NA", "ASTM D4931/ISO 12982": ""}
    },
    {
      name: "Bitumen",
      slug: "bitumen",
      category: "fuels",
      specifications: {"Freezing point": "NA", "ASTM D946/EN12591 Standard": ""}
    },
    {
      name: "Jet A-1",
      slug: "jet-a-1",
      category: "fuels",
      specifications: {"Freezing point": "≤ - 47°C", "DEF STAN 91-091/ASTM D1655": ""}
    },
    {
      name: "UREA",
      slug: "urea",
      category: "chemicals",
      specifications: {"Freezing point": "-11°C", "ISO 22241 Standard": ""}
    },
    {
      name: "D2",
      slug: "d2",
      category: "fuels",
      specifications: {"Freezing point": "-10°C", "GOST 305-82 Standard": ""}
    },
    {
      name: "LNG",
      slug: "lng",
      category: "fuels",
      specifications: {"Freezing point": "-162°C", "ISO 16903/ASTM D1945 Standard": ""}
    },
    {
      name: "LPG",
      slug: "lpg",
      category: "fuels",
      specifications: {"Freezing point": "NA", "ASTM D1825/ISO 9162 Standard": ""}
    }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}