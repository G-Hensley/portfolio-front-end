import './ProjectCard.css';

export default function ProjectCard( {title, image, link, skills, description }: { title: string, image: string, link: string, skills: React.ReactNode[], description: string } ) {
    return (
        <div className="project-card relative w-full sm:w-4/5 lg:w-[45%] 2xl:w-[31%] h-auto py-2 sm:py-0">
            <img className='relative' src={image} alt={title} />
            <div className="bg-black project-details flex justify-center py-4 px-2 relative project-title-container">
                <h2 className='project-title text-mobile-body sm:text-mobile-lg-body lg:text-desktop-lg-body font-h2-ff text-center'>{title}</h2>
            </div>
            <a href={link} target='_blank' className="project-info-container items-center justify-center flex-col gap-4 h-full w-full absolute left-0 top-0 px-4">
                <p className="project-description text-mobile-body lg:text-desktop-body font-body-ff text-center relative text-primary-cyan-900">
                    {description}
                </p>
                <p className="tools-used text-primary-magenta-700 text-mobile-body lg:text-desktop-body font-h2-ff text-center relative">Tools Used</p>
                <div className="project-skills-container flex gap-4 justify-center relative">
                    {skills.map((skill) => {
                        return (
                            <>
                                {skill}
                            </>
                        )
                    })}
                </div>
                <p className="click-to-view animate-bounce text-primary-cyan-900 text-mobile-body lg:text-desktop-body font-h2-ff text-center relative w-full">Click to View Project</p>
            </a>
        </div>
    );
}
