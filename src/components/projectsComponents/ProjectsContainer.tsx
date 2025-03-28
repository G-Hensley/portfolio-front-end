import GradientOrbs from "../coreComponents/GradientOrbs";
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from "./ProjectCard";
import "./ProjectsContainer.css";
import renaeeWebsite from "../../assets/images/Screenshot 2025-02-28 143134.png";
import spaceWebsite from "../../assets/images/Screenshot 2025-02-28 143720.png";
import travelNest from "../../assets/images/Screenshot 2025-02-28 143908.png";
import reactPasswordGenerator from "../../assets/images/Screenshot 2025-02-28 145350.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
} from 'react-icons/io';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa6';
// import { RiTailwindCssFill } from 'react-icons/ri';
// import { FaGitAlt, FaTrello, FaFigma } from 'react-icons/fa';
// import {
//   BiLogoPostgresql,
//   BiLogoGraphql,
//   BiLogoTypescript,
// } from 'react-icons/bi';
// import {
//   SiMysql,
//   SiMongodb,
//   SiExpress,
//   SiPrisma,
//   SiPostman,
//   SiAdobephotoshop,
//   SiAdobeillustrator,
// } from 'react-icons/si';
// import { VscVscode } from 'react-icons/vsc';
// import { IoLogoVercel, IoLogoGitlab } from 'react-icons/io5';
// import { GithubLogo } from '@phosphor-icons/react';

export default function ProjectsContainer( {children}: {children: React.ReactNode} ) {

    const projects = [
        {
            key: uuidv4(),
            title: "Custom Personal Portfolio",
            image: renaeeWebsite,
            link: "https://brendahensley.tech",
            description: "Custom personal portfolio built for my wife, Brenda, to showcase her skills as a cybersecurity professional.",
            skills: [
                <IoLogoHtml5 className="project-skill" />,
                <IoLogoCss3 className="project-skill" />,
                <BiLogoJavascript className="project-skill"/>,
            ]
        },
        {
            key: uuidv4(),
            title: "Solar System Simulation",
            image: spaceWebsite,
            link: "https://g-hensley.github.io/earths-orbit/",
            description: "A simulation of the earth's orbit around the sun, and the moon's orbit around the earth.",
            skills: [
                <IoLogoHtml5 className="project-skill" />,
                <IoLogoCss3 className="project-skill" />,
                <BiLogoJavascript className="project-skill"/>,
            ]
        },
        {
            key: uuidv4(),
            title: "Travel Nest",
            image: travelNest,
            link: "https://g-hensley.github.io/travel-nest/",
            description: "Fake travel company landing page.",
            skills: [
                <IoLogoHtml5 className="project-skill" />,
                <IoLogoSass className="project-skill" />,
                <FaBootstrap className="project-skill" />,
                <BiLogoJavascript className="project-skill"/>,
            ]
        },
        {
            key: uuidv4(),
            title: "Password Generator",
            image: reactPasswordGenerator,
            link: "https://react-password-generator-opal.vercel.app/",
            description: "Password generator built that allows users to generate a random password based on the criteria they select.",
            skills: [
                <IoLogoCss3 className="project-skill" />,
                <BiLogoJavascript className="project-skill"/>,
                <FontAwesomeIcon icon={faReact} className="project-skill" />,
            ]
        },
    ]
    
    return (

        <section className="flex flex-col gap-10 md:gap-16 items-center w-full h-fit min-h-fit mt-20 sm:mt-30 relative mb-12 px-4" id="projects-section">
            {children}
            <GradientOrbs />

            <h1 className="text-mobile-h1 md:text-desktop-h1 font-h1-ff relative text-center">My Projects</h1>

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