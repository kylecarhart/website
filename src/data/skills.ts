export interface Skill {
  name: string;
  proficient?: boolean;
}

const languages: Skill[] = [
  { name: "Typescript", proficient: true },
  { name: "SQL" },
  { name: "Java" },
  { name: "C#" },
];

const frontend: Skill[] = [
  { name: "React", proficient: true },
  { name: "Next.js" },
  { name: "Astro" },
  { name: "Redux" },
];

const backend: Skill[] = [
  { name: "Node.js", proficient: true },
  { name: "Hono", proficient: true },
  { name: "Express" },
  { name: "Fastify" },
  { name: "Koa" },
  { name: "Nest.js" },
];

const libraries: Skill[] = [
  { name: "Tailwind CSS", proficient: true },
  { name: "Zod" },
  { name: "Jest" },
  { name: "Vitest" },
  { name: "cva" },
  { name: "drizzle" },
];

const cloud: Skill[] = [
  { name: "Cloudflare", proficient: true },
  { name: "Azure" },
];

const tools: Skill[] = [
  { name: "Figma", proficient: true },
  { name: "Git" },
  { name: "Docker" },
  { name: "Postman" },
];

const database: Skill[] = [
  { name: "PostgreSQL", proficient: true },
  { name: "Oracle" },
  { name: "SQLite" },
  { name: "Cloudflare D1" },
];

const specs: Skill[] = [
  { name: "OpenAPI", proficient: true },
  { name: "JSON Schema" },
];

export const skills = {
  languages,
  frontend,
  backend,
  libraries,
  cloud,
  tools,
  database,
  specs,
};
