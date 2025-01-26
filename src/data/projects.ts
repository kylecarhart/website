export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  isComingSoon?: boolean;
};

const TECH = {
  astro: "Astro",
  cfp: "Cloudflare Pages",
  cfw: "Cloudflare Workers",
  hono: "Hono",
  js: "Javascript",
  next: "Next.js",
  nx: "Nx",
  py: "Python",
  react: "React",
  reactQuery: "React Query",
  redux: "Redux",
  sh: "Shell",
  shadcn: "Shadcn",
  tailwind: "Tailwind",
  ts: "Typescript",
  webExt: "Web Extensions API",
  webpack: "Webpack",
  zod: "Zod",
} as const;

const projects: Project[] = [
  {
    title: "Project Runner",
    description:
      "All-in-one platform for running enthusiasts to sign up for events, track stats, and compete with others!",
    tech: [TECH.astro, TECH.ts, TECH.react, TECH.hono, TECH.cfw, TECH.cfp],
    link: "https://github.com/kylecarhart/Runner",
  },
  {
    title: "Domain Filter for Google™ Search",
    description:
      "Cross platform web extension enabling users to filter domains from search results.",
    tech: [TECH.ts, TECH.react, TECH.redux, TECH.webpack, TECH.webExt],
    link: "https://github.com/kylecarhart/Google-Domain-Filter",
  },
];

export default projects;
