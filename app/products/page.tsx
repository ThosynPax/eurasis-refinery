import { ProductCatalog } from "@/components/product-catalog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Products - Eurasia Energy | Premium Petroleum Products",
  description:
    "Explore our comprehensive range of refined petroleum products including gasoline, diesel, jet fuel, and industrial lubricants.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}
