import { ProductDetail } from "@/components/product-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { getProductBySlug } from "@/lib/products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found - Eurasis Refinery",
    }
  }

  return {
    title: `${product.name} - Eurasis Refinery`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  )
}
