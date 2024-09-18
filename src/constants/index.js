import { codsoft, uniqtechnologies, skt } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Python Application Developer",
        company_name: "Uniq Technologies",
        icon: uniqtechnologies,
        iconBg: "#accbe1",
        date: "August 2023 - October 2023",
        points: [
            "Completed a guided mini-project to develop a comprehensive Net Banking System using Python.",
            "Implemented features such as user authentication, account management, and transaction processing under the guidance of senior developers.",
            "Utilized Python libraries to handle backend processes and ensure data security and integrity",
            "Independently managed the project while incorporating feedback and support from the team.",
        ],
    },
   
    {
        title: "Web Developer",
        company_name: "CodSoft",
        icon: codsoft,
        iconBg: "#b7e4c7",
        date: "Feb 2024 - March 2024",
        points: [
            "Completed guided mini-projects, including designing a Landing page and developing a Calculator application using HTML, CSS, and JavaScript",
            "Engineered responsive web pages to ensure seamless functionality and optimal user experience across various devices with CSS media queries and flexible grid systems.",
            "Employed Git for version control, enhancing project management and collaboration in a remote setting.",
            "Applied advanced JavaScript techniques, such as Event handling and DOM manipulation, to create interactive and user-friendly web components.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "SKT Softwares",
        icon: skt,
        iconBg: "#a2d2ff",
        date: "April 2024 - June 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/haseena027',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sheikhaseena',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        
    },

    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        
    },
 

];