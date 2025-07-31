import { X } from "@phosphor-icons/react";
import { ReactElement } from "react";

export default function ProjectModal( {image, title, description, link, skills, closeModal}: 
  {image: string; title: string; description: string; link: string; skills: ReactElement[]; closeModal: ()=> void} ) {

  return (
    
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-40 backdrop-blur-md px-4" 
      onClick={closeModal}>
      <div className="relative bg-linear-120 from-charcoal/30 via-secondary-blue-500/30 to-charcoal/30 rounded-lg shadow-lg w-full max-w-2xl
        border-2 border-cyan-950 flex flex-col items-center pb-2 gap-2">
        <button onClick={closeModal} className="absolute top-3 right-3 text-red-600 cursor-pointer hover:text-red-800 transition-all duration-200
          active:scale-95 border-[2px] rounded-full">
          <X size={28} />
        </button>
        <img src={image} alt={title} className="w-full h-56 sm:h-84 object-cover rounded-t-lg border-b border-cyan-950" />
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex gap-4 w-full px-4 pt-4 pb-2 md:flex-row flex-col items-center">
          <div className="flex flex-col justify-self-start gap-2 md:items-start items-center md:max-w-3/5">
            <p className="text-cyan-600 font-body-ff md:text-lg">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 border w-fit px-4 py-2 bg-secondary-blue-300
              text-base font-h2-ff hover:bg-secondary-blue-500 hover:text-cyan-300 transition-all duration-200 active:scale-95 rounded-tl-lg rounded-br-lg">
              View Project
            </a>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto md:mt-auto">
            {skills.map((skill, index) => (
              <span key={index} className="text-primary-magenta-900">
                {skill}
              </span>
            ))}
        </div>
        </div>
      </div>
    </div>

  )

}