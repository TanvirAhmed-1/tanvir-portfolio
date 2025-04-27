// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/s1.png';
import csprepLogo from './assets/work_logo/s2.png';
import movierecLogo from './assets/work_logo/s3.png';
import taskremLogo from './assets/work_logo/s4.png';
import npmLogo from './assets/work_logo/s5.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];



export const projects = [
  {
    
      id: 0,
      title: "Victory Zone E-Commerce Website",
      description: "Victory Zone is a modern E-Commerce platform where users can add, view, update, and delete their own products (Full CRUD functionality). The website is built using React.js for the frontend, Express.js for the backend, and MongoDB for the database.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Express.js", "MongoDB", "Node.js"],
      github: "https://github.com/TanvirAhmed-1/Sports-Equipment-Store-client2",
      webapp: "https://victoryzone.netlify.app/"
    
    
  },
  {
    id: 1,
    title: "Career Gateline",
    description:
      "Career Gateline is a web application designed to help users find and book online career counseling services. Built with React.js (using Vite for faster development) and styled with Tailwind CSS, the platform ensures a modern and responsive user experience. Firebase is used for hosting and backend support.",
    image: csprepLogo,
    tags: ["React.js", "Swiper.js", "Toastify", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/TanvirAhmed-1/career-gateline",
    webapp: "https://elevatecareers.netlify.app/"
  },
  
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React.js", "Swiper.js", "Toastify", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "online library ",
    description:
      "BDLIBRARY is a simple and modern online library management system where users can explore a collection of books. Built with React.js and styled using Tailwind CSS, it provides a clean user experience. The project setup uses Vite for fast development and hot reloading. It showcases a frontend design for a digital library experience",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/TanvirAhmed-1/library",
    webapp: "https://bdlibrarycom.netlify.app/",
  },
  {
    id: 4,
    title: "Gadgets E-Commerce Website",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/TanvirAhmed-1/E-Commerce-Mobile-Shop",
    webapp: "https://bdgadgetcom.netlify.app/",
  },
  {
    id: 5,
    title: "Gadgets E-Commerce Website ",
    description:
      "BDGadget is a modern e-commerce web application focused on mobile phones and gadgets. Built using React.js (with Vite.js for fast setup), styled with Tailwind CSS, and supported by Firebase authentication and hosting. It allows users to browse, view, and interact with product listings in a responsive and user-friendly layout",
    image: npmLogo,
    tags: ["HTML", "CSS", "Tailwind CSS", "javaScript"],
    github: "https://github.com/TanvirAhmed-1/All-country-details",
    webapp: "https://paddylover.netlify.app/",
  }
];  