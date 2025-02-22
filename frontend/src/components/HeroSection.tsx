import { TypeAnimation } from 'react-type-animation';
import { GrDocumentDownload } from "react-icons/gr";
import '../styles/retroWaveGrid.css';
import './HeroSection.css';
import avatarContainer from '../assets/images/avatar-container.svg';
import avatar from '../assets/images/avatar.webp';
import Button from './Button';
import Resume from '../assets/files/Gavin_Hensley_Full_Stack_Developer_Resume.pdf';
import GradientOrbs from './GradientOrbs';
import { RiArrowDownSFill } from "react-icons/ri";

export default function HeroSection() {

    const typingSequence = [
        "Full Stack Developer",
        2000,
        "Prompt Engineer",
        2000,
        "Gamer",
        2000,
        "Chess Enthusiast",
        2000,
        "Web Designer",
        2000,
        "WGU SWE Student",
        2000,
    ]

    return (

        <main id='hero-section' className='flex flex-col items-center h-screen w-full relative top-0 left-0 overflow-hidden'>
            <GradientOrbs />

            <header className='flex flex-col h-fit w-full items-center mt-32 relative text-center px-8'>
                <h1 className='text-mobile-h1 md:text-desktop-h1 font-h1-ff'>Welcome User</h1>
                <h2 className='text-mobile-h2 md:text-desktop-h2 font-h2-ff relative'>I'm Gavin Hensley</h2>
            </header>

            <section className='flex flex-col md:flex-row items-center justify-center relative w-full mx-auto z-20' id="avatar-section">
                <div id="avatar-container" className='h-fit relative md:w-1/2 flex justify-end items-center'>
                    <img id='avatar-frame' src={avatarContainer} alt="Avatar Frame" className='h-auto relative w-72 z-20'/>
                    <img id="avatar" src={avatar} alt="Self Portrait" className='absolute h-44 bottom-14 right-14'/>
                </div>
                <TypeAnimation
                    sequence={typingSequence}
                    repeat={Infinity}
                    className='type-animation font-body-ff text-desktop-lg-body md:text-mobile-h2 relative md:w-1/2 -top-4 md:top-0'
                    speed={35}
                />
            </section>

            <a className='relative z-10' href={Resume} id="resume-download" download="Gavin_Hensley_Resume.pdf">
                <Button
                    buttonStyle='resume-btn relative flex gap-2 items-center text-primary-cyan-900 md:text-desktop-body text-mobile-body'
                    buttonSize=''
                    type='button'
                >
                    <p>RESUME</p>
                    <GrDocumentDownload className='download-icon text-xl md:text-2xl'/>
                </Button>
            </a>

            <div id="scroll-indicator" className='flex flex-col items-center gap-0 justify-center relative top-20 z-10 px-8'>
                <a href="#skills-section">
                    <h2 id='scroll-header' className='text-mobile-h2 md:text-desktop-h2 font-h2-ff relative m-0 text-center z-10'>View Skills</h2>
                </a>
                <a href="#skills-section">
                    <RiArrowDownSFill id='down-arrow' className='text-transparent text-7xl md:text-9xl md:-mt-4 p-0 stroke-[0.7] 
                    stroke-primary-magenta-700 animate-bounce duration-[2000]'/>
                </a>
            </div>
            

            <div className="grid-container">
                <div className="grid"></div>
            </div>

        </main>

    )

}