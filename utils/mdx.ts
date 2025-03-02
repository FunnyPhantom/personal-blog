import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'blogs')

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  [key: string]: unknown
}

interface BlogPostWithContent extends BlogPost {
  content: string
}

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  
  return fileNames.map((fileName) => {
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: fileName.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      description: data.description,
      ...data,
    }
  })
}

export function getBlogPost(slug: string): BlogPostWithContent {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    content,
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    ...data,
  }
} 