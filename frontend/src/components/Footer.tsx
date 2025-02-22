import './Footer.css';
import ClickableIcon from './ClickableIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { BiLogoPostgresql, BiLogoTypescript, BiLogoTailwindCss, BiLogoHeroku, BiLogoGraphql } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";

export default function Footer() {

    let date = new Date();
    let year = date.getFullYear();

    const techStack = [
        { icon: <FontAwesomeIcon icon={faReact} className="icon text-4xl md:text-5xl" />, link: "https://react.dev/", label: "React" },
        { icon: <FontAwesomeIcon icon={faNode} className="icon text-4xl md:text-5xl" />, link: "https://nodejs.org/", label: "Node.js" },
        { icon: <BiLogoPostgresql className="icon text-4xl md:text-5xl" />, link: "https://www.postgresql.org/", label: "PostgreSQL" },
        { icon: <SiPrisma className="icon text-4xl md:text-5xl" />, link: "https://www.prisma.io/", label: "Prisma" },
        { icon: <BiLogoTypescript className="icon text-4xl md:text-5xl" />, link: "https://www.typescriptlang.org/", label: "TypeScript" },
        { icon: <BiLogoTailwindCss className="icon text-4xl md:text-5xl" />, link: "https://tailwindcss.com/", label: "Tailwind CSS" },
        { icon: <BiLogoGraphql className="icon text-4xl md:text-5xl" />, link: "https://graphql.org/", label: "GraphQL" },
        { icon: <BiLogoHeroku className="icon text-4xl md:text-5xl" />, link: "https://www.heroku.com/", label: "Heroku" },
        { icon: <IoLogoVercel className="icon text-4xl md:text-5xl" />, link: "https://vercel.com/", label: "Vercel" },
    ];

    const socialIcons = [
        { icon: <GithubLogo className='icon text-4xl md:text-5xl' />, link: "https://github.com/G-Hensley/", label: "GitHub" },
        { icon: <LinkedinLogo className='icon text-4xl md:text-5xl' />, link: "https://linkedin.com/in/g-hensley/", label: "LinkedIn" },
        { icon: <XLogo className='icon text-4xl md:text-5xl' />, link: "https://x.com/GavinHensleyDev", label: "X" }
    ]

    return (

        <footer className='bottom-0 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-32 py-6 relative pb-12 text-primary-cyan-900 w-full'>

            <section id='tech-stack-section' className='flex flex-col gap-2 items-center mx-4 md:mx-0 md:ml-4 2xl:w-1/3'>

                <h3 className="footer-title text-mobile-lg-body md:text-desktop-lg-body">Tech Stack</h3>
                
                <div className="icon-container flex gap-y-4 gap-x-8 flex-wrap 2xl:w-3/4 justify-center">
                    {techStack.map((tech, index) => (
                        <ClickableIcon key={index} icon={tech.icon} link={tech.link} label={tech.label} />
                    ))}
                </div>

            </section>

            <section id="contact-section" className='self-center h-fit w-fit md:justify-bottom'>

                <h3 className="footer-title text-mobile-lg-body md:text-desktop-lg-body">Contact Me</h3>

                <form className='flex flex-col items-center md:mb-4'>
                    <div id="name-email-container" className='flex flex-col xl:flex-row xl:gap-4 w-full'>
                        <div className="input-container flex flex-col">
                            <label htmlFor="name" className="font-body-ff md:text-desktop-body">Name:</label>
                            <input type="text" id="name" className="contact-input" placeholder='Your Name' required/>
                        </div>

                        <div className="input-container flex flex-col">
                            <label htmlFor="email" className="font-body-ff md:text-desktop-body">Email:</label>
                            <input type="email" id="email" className="contact-input" placeholder='Your Email' required/>
                        </div>
                    </div>
                    <div className="message-btn-container flex flex-col gap-4 items-center w-full">
                        <div className="input-container flex flex-col w-full">
                            <label htmlFor="message" className="font-body-ff md:text-desktop-body">Message:</label>
                            <textarea id="contact-message" className="contact-input" placeholder='Your Message Here...' rows={4} required/>
                        </div>

                        <button onClick={(e) => e.preventDefault()} id='contact-btn' type="submit" className="btn py-2 px-4 font-body-ff h-fit md:text-desktop-body">SUBMIT</button>
                    </div>
                </form>

            </section>

            <section id="social-section" className='flex flex-col gap-2 justify-center items-center md:mr-4 2xl:w-1/3 h-full'>

                <h3 className="footer-title text-mobile-lg-body md:text-desktop-lg-body">Social</h3>

                <div className="icon-container flex md:flex-col gap-y-4 gap-x-8 items-center 2xl:w-3/4">
                    {socialIcons.map((tech, index) => (
                        <ClickableIcon key={index} icon={tech.icon} link={tech.link} label={tech.label} />
                    ))}
                </div>

            </section>

            <p id='copyright' className='absolute bottom-0 text-md text-primary-magenta-900 font-body-ff w-full text-center bg-charcoal py-2'>
                © {year} Gavin Hensley. All Rights Reserved.
            </p>

        </footer>

    )

}