import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tempo,
  autocoin,
  UofT,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Solidity Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "solidity",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Co-founder and Software Engineer",
    company_name: " The Autocoin",
    icon: autocoin,
    iconBg: "#000000",
    date: "January 2021 - Present",
    points: [
      "  Spearheaded the development and successful launch of Autocoin's cutting-edge cryptocurrency platform, leading a team of engineers to design and implement innovative solutions for secure and efficient transactions.",
      "  Collaborated with cross-functional teams to develop and refine Autocoin's software architecture, utilizing agile methodologies to ensure scalability, reliability, and flexibility in a rapidly evolving market.",
      "Implemented rigorous quality assurance processes, conducting comprehensive testing and debugging to optimize Autocoin's platform performance. Resulted in a 30% increase in transaction speed and a 20% reduction in system downtime.",
      "Played a pivotal role in securing partnerships with major financial institutions, driving revenue growth by 40% within the first year of operations. Positioned Autocoin as a key player in the cryptocurrency market.",
      "Successfully implemented a groundbreaking monthly cashback rewards system, streamlined online insurance processes, and facilitated hassle-free door-to-door car delivery. Revolutionized the car buying process for Canadian consumers.",
      "Developed Ethereum Smart Contracts to demonstrate proficiency in blockchain technology and decentralized application (DApp) development",
    ],
  },

  {
    title: "React.js and React Native Developer",
    company_name: "Tempo.fit",
    icon: tempo,
    iconBg: "#F0FFFF",
    date: "September 2019 - January 2021",
    points: [
      "Developed an internal search result side-by-side comparison tool utilizing Node.js backend and React frontend.",
      "Executed full stack development tasks encompassing MySQL database management, backend algorithm implementation, HTTP API integration, and UI design and implementation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhanced trainer tools to optimize efficiency, minimizing time spent on class planning for trainers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "University of Toronto",
    icon: UofT,
    iconBg: "#F0FFFF",
    date: "Jan 2020 - July 2020",
    points: [
      "Developed and optimized webpages, significantly improving browser render performance..",
      "Created multiple front-end websites from the ground up.",
      "Constructed full-stack, single-page web applications utilizing RESTful routes and AJAX methods.",
      "Built webpages with dynamic content and implemented user-authentication schemes by integrating various database types such as MySQL, MongoDB, and Firebase.",
      "Demonstrated consistent utilization of source control, issue tracking, and functional feedback systems.",
      "Proficiently employed a wide range of technologies including React, JavaScript, Node.js, HTML, CSS, jQuery, Java, MongoDB, MySQL, and Firebase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
