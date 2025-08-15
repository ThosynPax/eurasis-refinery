"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react"
import type { BlogPost as BlogPostType } from "@/lib/blog"
import { getRelatedPosts, blogCategories } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  const relatedPosts = getRelatedPosts(post.id, post.category, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryName = (categoryId: string) => {
    const category = blogCategories.find((cat) => cat.id === categoryId)
    return category?.name || categoryId
  }

  return (
    <div className="py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-primary/10 text-primary">{getCategoryName(post.category)}</Badge>
              {post.featured && <Badge variant="secondary">Featured</Badge>}
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 font-serif leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

            {/* Author and Meta */}
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />").replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4 - level}xl font-bold text-foreground mb-4 mt-8 font-serif">`
                }),
              }}
            />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-8 font-serif">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="bg-primary/10 text-primary w-fit mb-2">
                      {getCategoryName(relatedPost.category)}
                    </Badge>
                    <CardTitle className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="bg-muted/30 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest industry insights and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
