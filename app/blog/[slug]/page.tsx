import { BlogPost } from "@/components/blog-post"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Eurasis Refinery Blog",
    }
  }

  return {
    title: `${post.title} - Eurasis Refinery Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  )
}
