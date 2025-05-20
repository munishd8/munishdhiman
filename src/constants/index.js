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
  aws,
  php,
  shopify,
  wordpress,
  laravel,
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
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },  
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Database',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Wordpress',
    icon: wordpress,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'laravel',
    icon: laravel,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'shopify',
    icon: shopify,
  },
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
    name: 'Tailwind CSS',
    icon: tailwind,
  },    
  {
    name: 'graphql',
    icon: graphql,
  },  
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws,
  },  
];

const experiences = [
  {
    title: 'Data Operator',
    company_name: 'HPSEB DHARMSHALA.',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2013 - May 2014',
  },
  {
    title: 'Front-End Developer',
    company_name: 'W3MONKS PVT LTD',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2016 - May 2017',
  },  
  {
    title: 'Senior Wordperess Developer',
    company_name: 'AMAKEIN TECHNOLOGIES PVT LTD',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2017 - May 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'OneWord Solutions PVT LTD',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2022 - March 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Vending Hive',
    description: 'Vending Hive is a vending industry to connect, share insights, and manage operations. Built with ReactJS and Laravel, it features real-time chat via WebSockets and scalable Node.js microservices for efficient data handling and communication.',
    tags: [
      { name: 'Laravel', color: 'blue-text-gradient' },
      { name: 'MYSQL', color: 'pink-text-gradient' },
      { name: 'Web Socket', color: 'blue-text-gradient' },
      { name: 'NodeJs Microservices', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://vendinghive.com/',  
  },
  {
    id: 'project-2',
    name: 'Yolop',
    description: 'Yolop is a real-time auction platform with a ReactJS frontend and a Laravel–Node.js microservice backend. It uses WebSockets for live bidding and millisecond-level cron jobs to sync data across web and mobile clients.',
    tags: [
      { name: 'ReactJs', color: 'blue-text-gradient' },
      { name: 'Laravel', color: 'green-text-gradient' },
      { name: 'Web Socket', color: 'blue-text-gradient' },
      { name: 'NodeJs Microservices', color: 'pink-text-gradient' },
      { name: 'React Bootstrap', color: 'blue-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://yolop.net/',
  },
  {
    id: 'project-3',
    name: 'PGTI',
    description: 'The official PGTI website features a Laravel backend with a responsive front-end built using HTML, jQuery, and Bootstrap. It dynamically manages golf events, rankings, and player data, delivering a seamless and interactive user experience.',
    tags: [
      { name: 'Laravel', color: 'blue-text-gradient' },
      { name: 'MySQL', color: 'green-text-gradient' },
      { name: 'Bootstrap', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://www.pgtofindia.com/',
  },
  {
    id: 'project-4',
    name: 'Rozana Himachal',
    description: 'Rozana Himachal is a multi-user news portal for Himachal, supporting multiple languages and a reward system to enhance engagement. SEO-friendly, with an HTML/jQuery frontend and a CodeIgniter backend for solid performance.',
    tags: [
      { name: 'Codeigniter', color: 'blue-text-gradient' },
      { name: 'MySQL', color: 'green-text-gradient' },
      { name: 'HTML-CSS', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://rozanahimachal.com',
  },
  {
    id: 'project-5',
    name: 'Cottage9',
    description: 'Cottage9 is an eCommerce platform with a React-based front-end and Laravel-powered back-end, using MySQL for data storage and React Bootstrap for responsive UI.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Laravel', color: 'green-text-gradient' },
      { name: 'MySQL', color: 'pink-text-gradient' },
      { name: 'React Bootstrap', color: 'blue-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://www.cottage9.com/',
  },
];
const projects2 = [
  {
    id: 'project-1',
    name: 'Buy a Warranty',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://buyawarranty.co.uk/',
  },
  {
    id: 'project-2',
    name: 'Biznob',
    description: 'Biznob information get by URL.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://www.biznob.com/',
  },
  {
    id: 'project-3',
    name: 'TBWE',
    description: 'TBWE website data fetched from URL.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://tbwe.com/',
  },
  {
    id: 'project-4',
    name: 'Geevice',
    description: 'Geevice platform showcase.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://geevice.com/',
  },
  {
    id: 'project-5',
    name: 'Rush Hour Daily',
    description: 'Rush Hour Daily content platform.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: '#',
    demo: 'https://rushhourdaily.com/',
  },
];


export { services, technologies, experiences, projects };
