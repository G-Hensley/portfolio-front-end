import GradientOrbs from "../coreComponents/GradientOrbs";
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from "./ProjectCard";
import "./ProjectsContainer.css";
import renaeeWebsite from "../../assets/images/cybersecurity-portfolio.webp";
import spaceWebsite from "../../assets/images/Screenshot 2025-02-28 143720.png";
import reactPasswordGenerator from "../../assets/images/react-password-generator.webp";
import reactNoteApp from "../../assets/images/react-note-app.webp";
import expenseTracker from "../../assets/images/expense-tracker.webp";
import reactToDoApp from "../../assets/images/react-todo-app.webp";
import bookmarkManager from "../../assets/images/bookmark-manager.webp";
import quickStockInventory from "../../assets/images/quickstock.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from 'react-icons/io';
import { BiLogoJavascript } from 'react-icons/bi';
// import { FaBootstrap } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
// import { FaGitAlt, FaTrello, FaFigma } from 'react-icons/fa';
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoGraphql
} from 'react-icons/bi';
import {
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
// import { VscVscode } from 'react-icons/vsc';
// import { IoLogoVercel, IoLogoGitlab } from 'react-icons/io5';
// import { GithubLogo } from '@phosphor-icons/react';

export default function ProjectsContainer( {children}: {children: React.ReactNode} ) {

    const projects = [
        {
            key: uuidv4(),
            title: "Expense Tracker",
            image: expenseTracker,
            link: "https://secure-expense-tracker-front-end.vercel.app/",
            description: "Full stack expense tracker built with Next.js, React, TypeScript, Tailwind, and MongoDB.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-3xl md:text-6xl" />,   
                <IoLogoNodejs className="project-skill text-3xl md:text-6xl" />,
                <BiLogoTypescript className="project-skill text-3xl md:text-6xl" />,
                <RiTailwindCssFill className="project-skill text-3xl md:text-6xl" />,
                <SiMongodb className="project-skill text-3xl md:text-6xl" />,
                <SiExpress className="project-skill text-3xl md:text-6xl" />,
                <BiLogoGraphql className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "Quick Stock Inventory",
            image: quickStockInventory,
            link: "https://github.com/G-Hensley/quickstock.git",
            description: "Full stack inventory management system built with React, TypeScript, Tailwind, and MongoDB.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-3xl md:text-6xl" />,
                <BiLogoTypescript className="project-skill text-3xl md:text-6xl" />,
                <RiTailwindCssFill className="project-skill text-3xl md:text-6xl" />,
                <SiExpress className="project-skill text-3xl md:text-6xl" />,
                <BiLogoPostgresql className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "Custom Personal Portfolio",
            image: renaeeWebsite,
            link: "https://brendahensley.tech",
            description: "Custom personal front end portfolio built for my wife, to showcase her cyberseucrity skills.",
            skills: [
                <IoLogoHtml5 className="project-skill text-3xl md:text-6xl" />,
                <IoLogoCss3 className="project-skill text-3xl md:text-6xl" />,
                <BiLogoJavascript className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "React To Do App",
            image: reactToDoApp,
            link: "https://nextjs-todo-list-tau-topaz.vercel.app/",
            description: "Front end to do app built with React.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-3xl md:text-6xl" />,
                <BiLogoTypescript className="project-skill text-3xl md:text-6xl" />,
                <RiTailwindCssFill className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "Solar System Simulation",
            image: spaceWebsite,
            link: "https://g-hensley.github.io/earths-orbit/",
            description: "Front end solar system simulation built with HTML, CSS, and JavaScript.",
            skills: [
                <IoLogoHtml5 className="project-skill text-3xl md:text-6xl" />,
                <IoLogoCss3 className="project-skill text-3xl md:text-6xl" />,
                <BiLogoJavascript className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "Password Generator",
            image: reactPasswordGenerator,
            link: "https://react-password-generator-opal.vercel.app/",
            description: "Front end password generator built with React.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-3xl md:text-6xl" />,
                <BiLogoTypescript className="project-skill text-3xl md:text-6xl" />,
                <RiTailwindCssFill className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "React Note App",
            image: reactNoteApp,
            link: "https://notes-app-seven-orcin.vercel.app/",
            description: "Front end note taking app built with React that saves to local storage.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-3xl md:text-6xl" />,
                <BiLogoJavascript className="project-skill text-3xl md:text-6xl" />,
                <IoLogoCss3 className="project-skill text-3xl md:text-6xl" />,
            ]
        },
        {
            key: uuidv4(),
            title: "Bookmark Manager",
            image: bookmarkManager,
            link: "https://github.com/G-Hensley/react-bookmark-manager.git",
            description: "Front end bookmark manager built with React.",
            skills: [
                <FontAwesomeIcon icon={faReact} className="project-skill text-4xl md:text-6xl" />,
                <BiLogoTypescript className="project-skill text-3xl md:text-6xl" />,
                <RiTailwindCssFill className="project-skill text-3xl md:text-6xl" />,
            ]
        }
    ]
    
    return (

        <section className="flex flex-col gap-10 md:gap-16 items-center w-full h-max min-h-fit relative mb-12 px-4" id="projects-section">
            {children}
            <GradientOrbs />

            <h1 className="text-mobile-h1 md:text-desktop-h1 font-h1-ff mt-20 md:mt-30 relative text-center">My Projects</h1>

            <div className="projects-container w-full min-h-fit relative px-4">
                {projects.map((project) => { 
                    return (
                        <ProjectCard
                            key={project.key}
                            title={project.title}
                            image={project.image}
                            link={project.link}
                            skills={project.skills}
                            description={project.description}
                        />
                    )
                })}
            </div>

        </section>

    )

}