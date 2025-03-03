import { Github, Linkedin } from "lucide-react";

const data = {
  home: {
    name: "Quassain Raza",
    description: "I'm a Software Engineer for Mobile and Web. ", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/quassainraza",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/quassain-raza/",
        icon: Linkedin,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Coder Woman Platform",
        description:
          "Platform to sell online courses, helping empower women in tech by making coding education accessible.\n\n Technologies Used: Next.js, React.js, CSS, Stripe API.",
        image: "/projects-imgs/cw.png",
        previewLink: "https://coderwoman.com",
      },
      {
        id: 2,
        title: "RetroCech Website",
        description:
          "A professional and visually appealing website that captures the vintage style of the business while ensuring smooth performance and easy navigation. \n\n Technologies Used: Next.js, Tailwind CSS, React.js.",
        image: "/projects-imgs/retrocech.png",
        previewLink: "https://retrocech.com",
      },
      {
        id: 3,
        title: "E-commerce Platform",
        description:
          "Worked on one of a biggest e-commerce platform in Poland, as part of a Scrum team for 1.5 years, focusing on checkout and payment workflows. \n\n Technologies Used: Next.js, React.js, Tailwind CSS, Stripe API.",
        image: "/projects-imgs/e-commerce.png",
        previewLink: "https://x-kom.pl",
      },
      {
        id: 4,
        title: "Personal Portfolio Website",
        description:
          "A reliable and polished website that makes it easy for the expert to share their skills and impress potential clients or employers. \n\n Technologies Used: Next.js, React.js, CSS.",
        image: "/projects-imgs/lukaskadela.png",
        previewLink: "https://lukaskadela.com",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "quassainraza84@gmail.com",
  },
};

export default data;
