import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Relevel',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2022 - April 2023',
  },
  {
    title: 'Web Pentesting',
    company_name: 'Tryhackme',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2020 ( still learning new things )',
  },
  {
    title: 'Web Development (Intern)',
    company_name: 'CodingRaja Tech',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2023 - Oct 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Wingify',
    icon: dcc,
    iconBg: '#333333',
    date: 'April 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Infiniti Plane',
    description: 'This is a 3D plane with infinite mountains and valleys.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Dhanush2468/Threejs-plane-with-mountains',
    demo: 'https://threejs-plane-with-mountains.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Imaginary',
    description:
      'This Is Used For To Clear An Image With An Ai.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Dhanush2468/imaginify-using-tyoescript',
    demo: 'https://imaginary-sable.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Sumz',
    description: 'This is a single-page Sumz app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/Dhanush2468/Summarize-Articles-with-OpenAI-GPT-4',
    demo: 'https://summarizearticleswithopenaigpt.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Scroll To Look Inside',
    description: `A single-page application that allows users to scroll and lokk inside.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Dhanush2468/Threejs-Christmas-Wishes',
    demo: 'https://threejs-christmas-wishes.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Interface',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/Dhanush2468/Threejs-InterFace-Portfolio',
    demo: 'https://dhanushkumar-threejs-portfolio.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
