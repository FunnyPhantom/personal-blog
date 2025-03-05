import { getBlogPost, getBlogPosts } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Button } from '@/components/ui/button'


// Add any components you want to use in MDX files here
const components = {
  Button,
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  console.log(posts)
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  return (
    <div className="max-w-4xl mx-auto py-8 prose">
      <h1>{post.title}</h1>
      <time className="text-gray-500">{post.date}</time>
      <MDXRemote 
        source={post.content} 
        components={components}
      />
    </div>
  )
} 