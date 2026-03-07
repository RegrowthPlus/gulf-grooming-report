export const siteConfig = {
  // Identity
  name: "Gulf Grooming Report",
  tagline: "Tested Advice for Men in the Gulf",
  domain: "https://gulfgrooming.com",
  language: "en",
  timezone: "Asia/Dubai",

  // Template variant
  variant: "wirecutter" as const, // "healthline" | "wirecutter"

  // Brand colors
  colors: {
    primary: "#1B2D4F",
    primaryDark: "#111D33",
    text: "#1A1A1A",
    textMuted: "#555555",
    background: "#F7F6F3",
    surface: "#EEECEA",
    border: "#D8D4CE",
  },

  // Typography
  fonts: {
    heading: "Playfair Display",
    body: "Source Sans 3",
    mono: "JetBrains Mono",
  },

  // Navigation categories
  categories: [
    {
      name: "Hair Loss & Thinning",
      slug: "hair-loss-thinning",
      description: "Minoxidil, finasteride, PRP, DHT blockers, hair transplants, and everything men in the Gulf need to know about slowing and reversing hair loss.",
    },
    {
      name: "Grooming Routines",
      slug: "grooming-routines",
      description: "Practical daily systems for men living in hot, hard water climates. Beard care, morning routines, and scalp maintenance.",
    },
    {
      name: "Products We've Tested",
      slug: "products-we-tested",
      description: "Shampoos, scalp scrubs, moisturisers, and styling products tested in Gulf conditions. Clear verdicts, no affiliate pressure.",
    },
    {
      name: "Skin & Body",
      slug: "skin-body",
      description: "Sun protection, workout skincare, and humidity-proof routines for men dealing with extreme heat.",
    },
    {
      name: "Gulf-Specific Advice",
      slug: "gulf-specific",
      description: "Hard water, TDS levels, climate adaptation, water testing, and the environmental factors that make grooming in the Gulf different.",
    },
    {
      name: "Health & Performance",
      slug: "health-performance",
      description: "Vitamin D, sleep, cortisol, iron, nutrition, and the health factors that show up in your hair and skin.",
    },
  ],

  // Social links
  social: {
    facebook: "",
    twitter: "",
    pinterest: "",
    instagram: "",
  },

  // Affiliate disclosure
  disclosureText: "When you buy through our links, we may earn a commission. This does not influence our testing process or editorial verdicts.",

  // Analytics
  analyticsId: "",
};
