import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "The International Dossier",
  DESCRIPTION: "Where politics, society, and humanity intersect",
  AUTHOR: "Carolina Tonarelli",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Observing the world, one story at a time",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts by keywords",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "carolinamariaisara.tonarelli@gmail.com",
    HREF: "carolinamariaisara.tonarelli@gmail.com",
  },
]

