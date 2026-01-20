import fs from 'node:fs'
import path from 'node:path'

export type BlogPostMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n/)
  if (!match) return { data: {}, content: raw }
  const fm = match[1]
  const content = raw.slice(match[0].length)
  const data: Record<string, string> = {}
  for (const line of fm.split('\n')) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    const value = line.slice(i + 1).trim().replace(/^"|"$/g, '')
    data[key] = value
  }
  return { data, content }
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data } = parseFrontmatter(raw)
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '',
        category: data.category || 'Blog',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = parseFrontmatter(raw)
  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '',
      category: data.category || 'Blog',
    } as BlogPostMeta,
    content,
  }
}
