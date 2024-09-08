import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,";

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "In this Project, i have covered all things of MERN Stack(MongoDB, ExpressJS, ReactJS, NodeJS) , Redux and Stripe for Payment Gateway.",
    imgSrc: project1,
    link: "https://example.com/ecommerce-website",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A social media application with real-time chat and notifications.",
    imgSrc: project2,
    link: "https://example.com/social-media-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://example.com/portfolio-website",
  },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description:
  //     "A blogging platform with user authentication and content management.",
  //   imgSrc: project4,
  //   link: "https://example.com/blog-platform",
  // },
  {
    id: 5,
    title: "To Do Application",
    description: "By this application I learn CRUD operation in MERN",
    imgSrc: project5,
    link: "https://example.com/task-management-tool",
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An online learning platform offering various courses and resources.",
  //   imgSrc: project6,
  //   link: "https://example.com/online-learning-platform",
  // },
  // {
  //   id: 7,
  //   title: "Fitness Tracker",
  //   description: "A mobile application to track fitness activities and goals.",
  //   imgSrc: project7,
  //   link: "https://example.com/fitness-tracker",
  // },
  // {
  //   id: 8,
  //   title: "Recipe App",
  //   description: "An app for browsing and saving various cooking recipes.",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "Weather Dashboard",
  //   description:
  //     "A weather dashboard providing current weather data and forecasts.",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React, Next and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "BeyondUrl",
    role: "MERN Developer",
    year: "Nov 2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Urban Educate",
    role: "React Developer",
    year: "Feb 2022 - Aug 2022",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61563443811008",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.hackerrank.com/profile/sonisushil9516",
    icon: <FaHackerrank fontSize={26} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/Sushil9516",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sushil-kumar-soni-05a677243/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. I would love to hear from you if you have a specific project in mind or if you just want to explore potential opportunities. Let's combine our skills and expertise to create something amazing. Please feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "Sonisushil9516@gmail.com",
  phone: "+91 9516341641",
};
