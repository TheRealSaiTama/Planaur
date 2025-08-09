import { nanoid } from "nanoid"
import type { Template } from "./types"

export const templates: Template[] = [
  {
    id: nanoid(),
    slug: "startup-crm-lite",
    title: "Startup CRM Lite",
    category: "Business",
    priceUSD: 19,
    notionDuplicateUrl: "https://www.notion.so/…",
    description: "Lightweight CRM to track leads, contacts, and deals.",
    features: ["Funnel views", "Kanban pipeline", "Email log", "Notes"],
    version: "1.0.0",
    lastUpdated: "2025-08-09",
    coverImg: "/images/templates/startup-crm-lite/cover.jpg",
    gallery: ["/images/templates/startup-crm-lite/1.jpg"],
    tags: ["CRM", "Sales"],
    isPublished: true,
  },
  {
    id: nanoid(),
    slug: "bug-tracker",
    title: "Bug Tracker (IT)",
    category: "IT",
    priceUSD: 15,
    notionDuplicateUrl: "https://www.notion.so/…",
    description: "Lightweight issue tracker with sprints and priorities.",
    features: ["Sprint board", "Priority matrix", "Release notes"],
    version: "1.0.0",
    lastUpdated: "2025-08-09",
    coverImg: "/images/templates/bug-tracker/cover.jpg",
    gallery: ["/images/templates/bug-tracker/1.jpg"],
    tags: ["Bugs", "Sprints"],
    isPublished: true,
  },
]
