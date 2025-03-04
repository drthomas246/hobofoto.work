import { defineCollection, z } from "astro:content"

const software = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string()
  })
})

const math = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string(),
    grad: z.number(),
    field: z.string(),
  })
})

export const collections = {software, math}
