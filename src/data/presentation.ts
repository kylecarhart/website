type Social = {
  label: string;
  link: string;
  icon?: string;
};

type Presentation = {
  email: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

export const presentation: Presentation = {
  email: "kyle@carh.art",
  title: "Hi, I’m Kyle 🚀",
  // profile: "/profile.webp",
  description:
    "I am Senior Software Engineer @ Capgemini providing fullstack Typescript and React solutions.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/kylecarhart",
      icon: "/github.svg",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kyle-carhart/",
    },
    {
      label: "Bluesky",
      link: "https://bsky.app/profile/carhart.dev",
      icon: "/bluesky.svg",
    },
  ],
};
