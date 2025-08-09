export type Template = {
  id: string
  slug: string
  title: string
  subtitle?: string
  category: "Personal" | "Business" | "IT" | "Student"
  priceUSD: number
  salePriceUSD?: number
  notionDuplicateUrl: string
  description: string
  features: string[]
  version: string
  lastUpdated: string
  coverImg: string
  gallery: string[]
  tags: string[]
  isPublished: boolean
  seo?: { title?: string; description?: string; ogImg?: string }
}

export type Order = {
  id: string
  email?: string
  items: Array<{ templateId: string; pricePaidUSD: number }>
  createdAt: string
  status: "pending" | "paid" | "failed"
}

