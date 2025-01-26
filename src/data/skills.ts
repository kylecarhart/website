import { tech, type Tech } from "./tech";

const languages: Tech[] = [tech.ts, tech.sql, tech.java, tech.csharp];
const frontend: Tech[] = [tech.react, tech.next, tech.astro, tech.redux];
const backend: Tech[] = [
  tech.nodejs,
  tech.hono,
  tech.express,
  tech.fastify,
  tech.koa,
  tech.nestjs,
];
const libraries: Tech[] = [
  tech.tailwind,
  tech.zod,
  tech.jest,
  tech.vitest,
  tech.drizzle,
  tech.cva,
];
const cloud: Tech[] = [tech.cfp, tech.azure];
const tools: Tech[] = [tech.figma, tech.git, tech.docker, tech.postman];
const database: Tech[] = [tech.postgresql, tech.oracle, tech.sqlite, tech.cfd1];
const specs: Tech[] = [tech.openapi, tech.jsonSchema];

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
