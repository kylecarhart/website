export type Project = {
  title: string;
  techs: string[];
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
    techs: [TECH.astro, TECH.ts, TECH.react, TECH.hono, TECH.cfw, TECH.cfp],
    link: "https://github.com/kylecarhart/Runner",
  },
  {
    title: "Domain Filter for Google™ Search",
    techs: [TECH.ts, TECH.react, TECH.redux, TECH.webpack, TECH.webExt],
    link: "https://github.com/kylecarhart/Google-Domain-Filter",
  },
];

export default projects;
