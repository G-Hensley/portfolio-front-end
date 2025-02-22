import './SkillsSection.css';
import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { BiLogoHeroku, BiLogoJavascript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaGitAlt, FaTrello, FaFigma } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoGraphql, BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiMongodb, SiExpress, SiPrisma, SiPostman, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel, IoLogoGitlab  } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

export default function SkillsSection( props: { children: React.ReactNode } ) {

    const frontEndSkills = [
        { icon: <IoLogoHtml5 className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://developer.mozilla.org/en-US/docs/Web/HTML", label: "HTML 5" },
        { icon: <IoLogoCss3 className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://developer.mozilla.org/en-US/docs/Web/CSS", label: "CSS 3" },
        { icon: <IoLogoSass className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://sass-lang.com/", label: "Sass" },
        { icon: <BiLogoJavascript className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", label: "JavaScript" },
        { icon: <BiLogoTypescript className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.typescriptlang.org/", label: "TypeScript" },
        { icon: <FaBootstrap className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://getbootstrap.com/", label: "Bootstrap" },
        { icon: <RiTailwindCssFill className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://tailwindcss.com/", label: "Tailwind CSS" },
        { icon: <FaReact className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://react.dev/", label: "React" },
    ]

    const backEndSkills = [
        { icon: <IoLogoNodejs className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://nodejs.org/en", label: "Node.js" },
        { icon: <SiExpress className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://expressjs.com/", label: "Express.js" },
        { icon: <BiLogoPostgresql className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.postgresql.org/", label: "PostgreSQL" },
        { icon: <SiMysql className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.mysql.com/", label: "MySQL" },
        { icon: <SiMongodb className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.mongodb.com/", label: "MongoDB" },
        { icon: <SiPrisma className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.prisma.io/", label: "Prisma" },
        { icon: <IoLogoPython className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.python.org/", label: "Python" },
        { icon: <BiLogoGraphql className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://graphql.org/", label: "GraphQL" },
    ]

    const toolsSkills = [
        { icon: <FaGitAlt className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://git-scm.com/", label: "Git" },
        { icon: <FiGithub className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://github.com/", label: "GitHub" },
        { icon: <IoLogoGitlab className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://about.gitlab.com/", label: "GitLab" },
        { icon: <FaTrello className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://trello.com/", label: "Trello" },
        { icon: <SiPostman className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.postman.com/", label: "Postman" },
        { icon: <VscVscode className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://code.visualstudio.com/", label: "VS Code" },
        { icon: <IoLogoVercel className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://vercel.com/", label: "Vercel" },
        { icon: <BiLogoHeroku className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.heroku.com/", label: "Heroku" },
    ]

    const designSkills = [
        { icon: <FaFigma className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.figma.com/", label: "Figma" },
        { icon: <SiAdobephotoshop className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.adobe.com/products/photoshop.html", label: "Adobe Photoshop" },
        { icon: <SiAdobeillustrator className='skill-icon text-4xl md:text-6xl hover:animate-pulse'/>, link: "https://www.adobe.com/products/illustrator.html", label: "Adobe Illustrator" },
    ]
 
        return ( 
            
        <section id="skills-section" className="flex flex-col gap-12 items-center min-h-screen w-full py-8 relative z-10">
            {props.children}
            <h2 className='font-h2-ff relative mt-16 text-mobile-h2 md:text-desktop-h2'>Skills</h2>

            <div id="main-skills-container" className='px-4 h-fit w-4/5 z-40'>

                <div id="front-end-container" className='secondary-container h-auto p-8 flex flex-col gap-6 items-center'>
                    <h3 className='container-title font-body-ff relative text-desktop-lg-body'>Front End</h3>
                    <div className="skills-container flex gap-8 flex-wrap justify-center items-center w-full h-auto">
                        {frontEndSkills.map((skill, index) => (
                            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className='skill-link'>
                                {skill.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div id="back-end-container" className='secondary-container h-auto p-8 flex flex-col gap-6 items-center'>
                    <h3 className='container-title font-body-ff relative text-desktop-lg-body'>Back End</h3>
                    <div className="skills-container flex gap-8 flex-wrap justify-center items-center w-full h-auto">
                        {backEndSkills.map((skill, index) => (
                            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className='skill-link'>
                                {skill.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div id="tools-container" className='secondary-container h-auto p-8 flex flex-col gap-6 items-center'>
                    <h3 className='container-title font-body-ff relative text-desktop-lg-body'>Tools</h3>
                    <div className="skills-container flex gap-8 flex-wrap justify-center items-center w-full h-auto">
                        {toolsSkills.map((skill, index) => (
                            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className='skill-link'>
                                {skill.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div id="design-container" className='secondary-container h-auto p-8 flex flex-col gap-6 items-center'>
                    <h3 className='container-title font-body-ff relative text-desktop-lg-body'>Design</h3>
                    <div className="skills-container flex gap-8 flex-wrap justify-center items-center w-full h-auto">
                        {designSkills.map((skill, index) => (
                            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className='skill-link'>
                                {skill.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </section>)
      };