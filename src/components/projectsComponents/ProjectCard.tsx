import './ProjectCard.css';
import React from 'react';

export default function ProjectCard({
  title,
  image,
  link,
  skills,
  description,
}: {
  title: string;
  image: string;
  link: string;
  skills: React.ReactNode[];
  description: string;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className='project-card relative w-full sm:w-4/5 lg:w-[45%] 2xl:w-[31%] sm:py-0 flex flex-col'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role='article'
      aria-label={`Project: ${title}`}>
      <div className='image-container relative w-full aspect-[16/9] overflow-hidden'>
        <img
          className='absolute w-full h-full object-cover'
          src={image}
          alt={`Screenshot of ${title} project`}
        />
      </div>
      <div className='bg-black project-details flex justify-center py-2 sm:py-4 px-2 relative project-title-container'>
        <h2 className='project-title text-mobile-body sm:text-mobile-lg-body lg:text-desktop-lg-body font-h2-ff text-center'>
          {title}
        </h2>
      </div>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='project-info-container items-center justify-center flex-col gap-3 h-full w-full absolute left-0 top-0 p-2'
        aria-label={`View ${title} project`}
        tabIndex={-1} // Focus will be handled by the parent div for better accessibility
      >
        <p className='project-description text-[1rem] sm:text-desktop-body font-body-ff text-center relative text-primary-cyan-900'>
          {description}
        </p>
        <p className='tools-used text-primary-magenta-700 text-[1rem] sm:text-desktop-body font-h2-ff text-center relative'>
          Tools Used
        </p>
        <div
          className='project-skills-container flex flex-wrap gap-4 justify-center relative'
          aria-label='Project technologies'>
          {skills.map((skill, index) => {
            return <React.Fragment key={index}>{skill}</React.Fragment>;
          })}
        </div>
        <p className='click-to-view animate-bounce text-primary-cyan-900 text-[1rem] sm:text-desktop-body font-h2-ff text-center relative w-full'>
          Click to View Project
        </p>
      </a>
    </div>
  );
}
