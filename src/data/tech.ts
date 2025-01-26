// Define a type for tech items
export type Tech = {
  name: string;
  url: string;
  proficient?: boolean;
};

export const tech = {
  astro: {
    name: "Astro",
    url: "https://astro.build",
  },
  azure: {
    name: "Azure",
    url: "https://azure.microsoft.com",
  },
  cf: {
    name: "Cloudflare",
    url: "https://cloudflare.com",
  },
  cfd1: {
    name: "Cloudflare D1",
    url: "https://developers.cloudflare.com/d1",
  },
  cfp: {
    name: "Cloudflare Pages",
    url: "https://pages.cloudflare.com",
    proficient: true,
  },
  cfw: {
    name: "Cloudflare Workers",
    url: "https://workers.cloudflare.com",
  },
  csharp: {
    name: "C#",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp",
  },
  cva: {
    name: "cva",
    url: "https://cva.style",
  },
  docker: {
    name: "Docker",
    url: "https://www.docker.com",
  },
  drizzle: {
    name: "Drizzle",
    url: "https://orm.drizzle.team",
  },
  express: {
    name: "Express",
    url: "https://expressjs.com",
  },
  fastify: {
    name: "Fastify",
    url: "https://fastify.dev",
  },
  figma: {
    name: "Figma",
    url: "https://www.figma.com",
    proficient: true,
  },
  git: {
    name: "Git",
    url: "https://git-scm.com",
  },
  hono: {
    name: "Hono",
    url: "https://hono.dev",
    proficient: true,
  },
  java: {
    name: "Java",
    url: "https://www.java.com",
  },
  jest: {
    name: "Jest",
    url: "https://jestjs.io",
  },
  js: {
    name: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  jsonSchema: {
    name: "JSON Schema",
    url: "https://json-schema.org",
  },
  koa: {
    name: "Koa",
    url: "https://koajs.com",
  },
  nestjs: {
    name: "Nest.js",
    url: "https://nestjs.com",
  },
  next: {
    name: "Next.js",
    url: "https://nextjs.org",
  },
  nodejs: {
    name: "Node.js",
    url: "https://nodejs.org",
    proficient: true,
  },
  nx: {
    name: "Nx",
    url: "https://nx.dev",
  },
  openapi: {
    name: "OpenAPI",
    url: "https://www.openapis.org",
    proficient: true,
  },
  oracle: {
    name: "Oracle",
    url: "https://www.oracle.com/database",
  },
  postgresql: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    proficient: true,
  },
  postman: {
    name: "Postman",
    url: "https://www.postman.com",
  },
  py: {
    name: "Python",
    url: "https://python.org",
  },
  react: {
    name: "React",
    url: "https://react.dev",
    proficient: true,
  },
  reactQuery: {
    name: "React Query",
    url: "https://tanstack.com/query",
  },
  redux: {
    name: "Redux Toolkit",
    url: "https://redux-toolkit.js.org/",
  },
  shadcn: {
    name: "Shadcn",
    url: "https://ui.shadcn.com",
  },
  sh: {
    name: "Shell",
    url: "https://www.gnu.org/software/bash",
  },
  sql: {
    name: "SQL",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  sqlite: {
    name: "SQLite",
    url: "https://www.sqlite.org",
  },
  tailwind: {
    name: "Tailwind",
    url: "https://tailwindcss.com",
    proficient: true,
  },
  ts: {
    name: "Typescript",
    url: "https://www.typescriptlang.org",
    proficient: true,
  },
  vitest: {
    name: "Vitest",
    url: "https://vitest.dev",
  },
  webExt: {
    name: "Web Extensions API",
    url: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions",
  },
  webpack: {
    name: "Webpack",
    url: "https://webpack.js.org",
  },
  zod: {
    name: "Zod",
    url: "https://zod.dev",
  },
} as const satisfies Record<string, Tech>;
