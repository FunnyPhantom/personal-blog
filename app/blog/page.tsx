import { getBlogPosts } from '@/utils/mdx'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  description: string
  date: string
}

export default async function BlogIndex() {
  const posts = getBlogPosts()
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">{post.description}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  )
} 