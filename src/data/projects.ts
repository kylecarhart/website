import { tech, type Tech } from "./tech";

// Update Project type to use TechItem
export type Project = {
  title: string;
  description: string;
  tech: Tech[];
  url: string;
  isComingSoon?: boolean;
};

const projects = {
  runner: {
    title: "Project: Runner",
    description:
      "All-in-one platform for running enthusiasts to sign up for events, track stats, and compete with others.",
    tech: [tech.astro, tech.ts, tech.react, tech.hono, tech.cfw, tech.cfp],
    url: "https://github.com/kylecarhart/Runner",
  },
  domainFilter: {
    title: "Domain Filter for Google™ Search",
    description:
      "Cross platform web extension enabling users to filter domains from Google™ search results.",
    tech: [tech.ts, tech.react, tech.redux, tech.webpack, tech.webExt],
    url: "https://github.com/kylecarhart/Google-Domain-Filter",
  },
} as const satisfies Record<string, Project>;

export default projects;
