/* TODO: point this at the real deployed domain — it drives OG tags,
   the sitemap and canonical URLs. Override per-environment with
   NEXT_PUBLIC_SITE_URL. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alinor.vercel.app";

export const profile = {
  name: "Alinor Abdulgafor",
  firstName: "Alinor",
  lastName: "Abdulgafor",
  role: "Software Developer",
  location: "Marawi City, Philippines",

  /* Hero statement. Set large in Fraunces — kept short on purpose. */
  statement: "I build software for the places I come from.",

  metaDescription:
    "Alinor Abdulgafor is a software developer in Marawi City, Philippines, building full-stack web, IoT and machine-learning projects for Lanao and Mindanao State University.",

  bio: [
    "I'm a developer based in Marawi City, working across the full stack — web platforms, connected hardware, and the occasional machine-learning model. Most of what I build starts with something I can see needs fixing close to home.",
    "That's meant a job platform for Lanao, a specimen catalogue for the MSU herbarium, an irrigation system that waters a greenhouse on its own, and a model that tells engineering students whether they're on track to graduate. Different stacks, same instinct: make the thing useful before making it clever.",
  ],

  facts: [
    { label: "Based in", value: "Marawi City, PH" },
    { label: "Focus", value: "Full-stack · IoT · ML" },
    { label: "Stack", value: "React · Next.js · Firebase · .NET" },
    { label: "Status", value: "Open to work" },
  ],

  email: "alinorabdulgafor@outlook.com",
  phone: "+63 963 135 9614",
  phoneHref: "+639631359614",

  /* The Download Résumé button stays hidden until the PDF exists.
     Drop your CV at public/alinor-abdulgafor-cv.pdf, then flip this
     to true. Shipping a button that 404s is worse than no button. */
  resumeAvailable: false,
  resumePath: "/alinor-abdulgafor-cv.pdf",
} as const;
