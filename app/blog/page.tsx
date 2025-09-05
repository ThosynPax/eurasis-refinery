import { BlogListing } from "@/components/blog-listing"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Eurasia Energy | Industry Insights & Updates",
  description:
    "Stay informed with the latest insights on oil refining, market trends, technology innovations, and company updates from Eurasia Energy.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogListing />
      </main>
      <Footer />
    </div>
  )
}
