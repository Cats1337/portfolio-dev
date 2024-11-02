import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faDiscord,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faDiscord,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there.",

		"I code things sometimes.",
    "I'm a full-stack developer, software developer, and computer science student.",
    "Anticipated graduation: 2026",
    "Resume available upon request.",
  ],
};

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
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "iROV",
    description: 'Internet Remotely Operated Underwater Submersible Vehicle, or iROV for short, was developed to allow students anywhere across the globe to explore the ocean. Built from the ground up, designed to be low-cost, easy to use, and accessible to anyone with a web browser and keyboard, game controller, or touchscreen. It can be deployed using anything with an internet connection, such as a Smartphone. The iROV Drone is coded in JavaScript, TypeScript, C++, C, and Python.',
    image: iROVWeb,
    type: 'contain',
    source_code_link: 'https://github.com/KW-M/rov-web',
    demo_link: 'https://www.twitch.tv/irovweb/clips?filter=clips&range=all',
  },
  {
    name: '24hr',
    description: "24hr is a non-profit charity that hosts quarterly! From 24hr SMP to 24hr UHC, and more exciting variations in the future. Our aim is to have fun while raising money. As of Season 5 we've raised nearly $23,000 for various important causes!",
    image: "https://avatars.githubusercontent.com/u/140990128",
    type: 'contain',
    source_code_link: 'https://github.com/24hrSMP',
    demo_link: 'https://twitter.com/24HRSMP',
  },
  {
    name: 'RSA',
    description: 'The Rochester Subway is a now-defunct underground rail system that operated in Rochester, New York from 1927 to 1956. The Rochester Subway Archive is a digital collection to preserve the history of the Rochester Subway from its inception to its modern day usage as a haven for graffiti artists.',
    image: "https://avatars.githubusercontent.com/u/144469964?s=200&v=4",
    type: 'contain',
    source_code_link: "",
    demo_link: 'https://rocsubway.cad.rit.edu/',
  },
  {
    name: 'CatsAroundTonight',
    description: 'Customized Windows theme created using msstyleEditor, and learning from decompiling other themes to understand how they work. I wanted a dark mode theme with blue highlights and text it also features a custom start icon.',
    image: CatsAroundTonight,
    type: 'cover',
    source_code_link: 'https://github.com/Cats1337/CatsAroundTonight',
    demo_link: '',
  },
  {
    name: 'BiomeBattle',
    description: 'Website for a Minecraft event with hundreds of creators. The website features a custom-built backend for managing player data, a custom-built frontend for displaying player data, and a custom-built API for handling player data.',
    image: BiomeBattle,
    type: 'contain',
    source_code_link: '',
    demo_link: 'https://biomebattle.xyz/',
  }

];

const memoji = {
  image: [avatar],
};


const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  introduction,
  projects,
  memoji,
  markerSvg,
  icons,
  media,
  skills,
};


import {
  catsIcon,
  avatar,
  iROVWeb,
  CatsAroundTonight,
  BiomeBattle,
} from '../portfolioAssets';
import { styles } from '../styles';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  catsIcon,
};

const skills = [
  // Proficient Skills
  {
    id: 'java',
    title: 'Java',
    year: 2019,
    category: 'proficient',
  },
  {
    id: 'python',
    title: 'Python',
    year: 2020,
    category: 'proficient',
  },
  {
    id: 'lua',
    title: 'LUA',
    year: 2018,
    category: 'proficient',
  },
  {
    id: 'html5',
    title: 'HTML5',
    year: 2020,
    category: 'proficient',
  },
  {
    id: 'css3',
    title: 'CSS3',
    year: 2020,
    category: 'proficient',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    year: 2020,
    category: 'proficient',
  },
  {
    id: 'php',
    title: 'PHP',
    year: 2021,
    category: 'proficient',
  },
  {
    id: 'mysql',
    title: 'MySQL',
    year: 2021,
    category: 'proficient',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    year: 2022,
    category: 'proficient',
  },
  {
    id: 'git',
    title: 'Git',
    year: 2020,
    category: 'proficient',
  },
  // Known Skills
  {
    id: 'csharp',
    title: 'C#',
    year: 2021,
    category: 'known',
  },
  {
    id: 'c',
    title: 'C',
    year: 2023,
    category: 'known',
  },
  {
    id: 'react',
    title: 'React',
    year: 2022,
    category: 'known',
  },
  {
    id: 'svelte',
    title: 'Svelte',
    year: 2023,
    category: 'known',
  },
  {
    id: 'laravel',
    title: 'Laravel',
    year: 2024,
    category: 'known',
  },
  // Interested Skills
  {
    id: 'cplusplus',
    title: 'C++',
    year: 2023,
    category: 'interested',
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    year: 2023,
    category: 'interested',
  },
  {
    id: 'cobol',
    title: 'COBOL',
    year: 2024,
    category: 'interested',
  },
  // Tools
  {
    id: 'vscode',
    title: 'VSCode',
    year: 2018,
    category: 'tool',
  },
  {
    id: 'intellij',
    title: 'IntelliJ',
    year: 2022,
    category: 'tool',
  },
  {
    id: 'eclipse',
    title: 'Eclipse',
    year: 2019,
    category: 'tool',
  },
];
