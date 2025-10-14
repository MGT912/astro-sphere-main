import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { CollectionEntry } from 'astro:content'
import { SITE } from "@consts"

type Context = {
  site: string
}

type BlogOrProject = CollectionEntry<'blog'> | CollectionEntry<'projects'>

export async function GET(context: Context) {
  const posts = await getCollection("blog")
  const projects = await getCollection("projects")
  
  const items: BlogOrProject[] = [...posts, ...projects]
  
  items.sort((a: BlogOrProject, b: BlogOrProject) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )
  
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item: BlogOrProject) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog")
        ? `/blog/${item.slug}/`
        : `/projects/${item.slug}/`,
    })),
  })
}