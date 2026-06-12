import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const siteUrl = 'https://apolloadvancemedicalcenter.com'

const staticPages = [
  { path: '/', source: 'app/(site)/page.tsx' },
  { path: '/about-us/', source: 'app/(site)/about-us/page.tsx' },
  { path: '/doctors/', source: 'app/(site)/doctors/page.tsx' },
  { path: '/blog/', source: 'app/(site)/blog/page.tsx' },
  { path: '/appointment/', source: 'app/(site)/appointment/page.tsx' },
  { path: '/contact-us/', source: 'app/(site)/contact-us/page.tsx' },
  { path: '/services/', source: 'app/(site)/services/page.tsx' },
  { path: '/services/dental-services/', source: 'app/(site)/services/dental-services/page.tsx' },
  { path: '/services/aesthetic-beauty-services/', source: 'app/(site)/services/aesthetic-beauty-services/page.tsx' },
  { path: '/services/laser-hair-removal/', source: 'app/(site)/services/laser-hair-removal/page.tsx' },
  { path: '/services/facial-skin-care/', source: 'app/(site)/services/facial-skin-care/page.tsx' },
  { path: '/services/slimming-body-contouring/', source: 'app/(site)/services/slimming-body-contouring/page.tsx' },
]

const doctors = [
  'dr-shaziaanjum',
  'dr-farida',
  'hind-belharar',
  'ellie-lolita-cruz',
  'dr-rishin-basheer',
  'dr-hiba-zaffar',
]

const blogDir = path.join(root, 'content', 'blog')
const blogPosts = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''))
  : []

function lastModified(source) {
  return fs.statSync(path.join(root, source)).mtime.toISOString()
}

const entries = [
  ...staticPages,
  ...doctors.map((slug) => ({
    path: `/doctors/${slug}/`,
    source: 'lib/doctors.ts',
  })),
  ...blogPosts.map((slug) => ({
    path: `/blog/${slug}/`,
    source: `content/blog/${slug}.mdx`,
  })),
]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for (const entry of entries) {
  xml += '  <url>\n'
  xml += `    <loc>${siteUrl}${entry.path}</loc>\n`
  xml += `    <lastmod>${lastModified(entry.source)}</lastmod>\n`
  xml += '  </url>\n'
}

xml += '</urlset>\n'

const publicDir = path.join(root, 'public')
fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8')

console.log(`Sitemap generated with ${entries.length} final URLs at public/sitemap.xml`)
