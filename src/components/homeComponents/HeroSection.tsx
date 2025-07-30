import { TypeAnimation } from 'react-type-animation';
import { GrDocumentDownload } from 'react-icons/gr';
import '../../styles/retroWaveGrid.css';
import './HeroSection.css';
import avatarContainer from '../../assets/images/avatar-container.svg';
import avatar from '../../assets/images/avatar.webp';
import Button from '../coreComponents/Button';
import Resume from '../../assets/files/Gavin_Hensley_FullStack_Engineer.pdf';
import GradientOrbs from '../coreComponents/GradientOrbs';
import { RiArrowDownSFill } from 'react-icons/ri';

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const typingSequence = [
    'Full Stack Engineer',
    2000,
    'Prompt Engineer',
    2000,
    'Gamer',
    2000,
    'Chess Enthusiast',
    2000,
    'Web Designer',
    2000,
    'WGU SWE Student',
    2000,
  ];

  return (
    <main
      id='hero-section'
      className='flex flex-col items-center min-h-fit md:min-h-screen w-full relative top-0 left-0 overflow-x-hidden z-10'
      aria-labelledby='welcome-heading'>
      {children}
      <GradientOrbs />

      <header className='flex flex-col min-h-fit w-full items-center mt-20 md:mt-32 relative text-center px-8'>
        <h1
          id='welcome-heading'
          className='text-mobile-h1 md:text-desktop-h1 font-h1-ff'>
          Welcome User
        </h1>
        <h2 className='text-mobile-h2 md:text-desktop-h2 font-h2-ff mt-2 md:mt-6 relative'>
          I'm Gavin Hensley
        </h2>
      </header>

      <section
        className='flex flex-col md:flex-row items-center justify-center relative h-fit w-full mx-auto z-20'
        id='avatar-section'
        aria-label='Self portrait and role description'>
        <div
          id='avatar-container'
          className='min-h-fit relative md:w-1/2 flex justify-end items-center'>
          <img
            id='avatar-frame'
            src={avatarContainer}
            alt='Decorative frame for avatar'
            className='h-auto relative w-72 z-20'
            aria-hidden='true'
          />
          <img
            id='avatar'
            src={avatar}
            alt='Gavin Hensley portrait'
            className='absolute h-44 bottom-14 right-14'
          />
        </div>
        <TypeAnimation
          sequence={typingSequence}
          repeat={Infinity}
          className='type-animation font-body-ff text-desktop-lg-body md:text-mobile-h2 relative md:w-1/2 -top-4 md:top-0'
          speed={35}
          aria-label='Rotating role descriptions: Full Stack Engineer, Prompt Engineer, Gamer, Chess Enthusiast, Web Designer, WGU SWE Student'
        />
      </section>

      <a
        className='relative z-10 -mt-4 sm:mt-0'
        href={Resume}
        id='resume-download'
        download='Gavin_Hensley_Resume.pdf'
        aria-label="Download Gavin's Resume (PDF)">
        <Button
          buttonStyle='resume-btn relative flex gap-2 items-center text-primary-cyan-900 md:text-desktop-body text-mobile-body'
          buttonSize=''
          type='button'>
          <p>RESUME</p>
          <GrDocumentDownload
            className='download-icon text-xl md:text-2xl'
            aria-hidden='true'
          />
        </Button>
      </a>

      <div
        id='scroll-indicator'
        className='flex flex-col min-h-fit items-center gap-0 justify-center relative mt-20 z-10 px-8'
        aria-hidden='true'>
        <a href='#skills-section' aria-label='Scroll to Skills section'>
          <h2
            id='scroll-header'
            className='text-mobile-h2 md:text-desktop-h2 font-h2-ff relative m-0 text-center z-10'>
            View Skills
          </h2>
        </a>
        <a href='#skills-section' aria-label='Scroll to Skills section'>
          <RiArrowDownSFill
            id='down-arrow'
            className='text-transparent text-7xl md:text-9xl p-0 stroke-[0.7] 
                    stroke-primary-magenta-700 animate-bounce duration-[2000] relative'
            aria-hidden='true'
          />
        </a>
      </div>

    </main>
  );
}
