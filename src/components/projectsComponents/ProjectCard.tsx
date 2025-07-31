import { ReactElement } from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  image,
  index,
  description,
  link,
  skills,
  openModal,
}: {
  title: string;
  image: string;
  index: number;
  description: string;
  link?: string;
  skills: ReactElement[];
  openModal: (project: {
    image: string;
    title: string;
    description: string;
    link?: string;
    skills: ReactElement[];
  }) => void;
}) {

  const motionDelay = index * 0.1;

  return (
    <motion.div className='group relative flex flex-col items-center rounded-tr-xl rounded-bl-xl shadow-lg shadow-black/40 hover:shadow-xl 2xl:w-[21%]
      border-2 border-cyan-900 cursor-pointer hover:scale-[1.02] hover:border-cyan-700 active:scale-100 w-full sm:w-3/5 md:w-[45%] lg:w-1/3 h-64 md:h-76'
      onClick={() => {
        openModal({
          image,
          title,
          description,
          link,
          skills,
        });
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay: motionDelay }}
      viewport={{ once: true }}>
      <img src={image} alt={title} className='h-full object-cover rounded-tr-lg border-b border-cyan-900 w-full overflow-hidden' />
      <div className='py-1 backdrop-blur-md w-full text-center rounded-bl-lg'>
        <h3 className='font-h2-ff text-lg md:text-xl project-card-title text-primary-cyan-700'>{title}</h3>
      </div>
      <div className="hidden absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md group-hover:flex rounded-bl-lg rounded-tr-lg
        transition-all duration-200 justify-center items-center">
        <button className='animate-bounce font-h2-ff text-2xl text-primary-magenta-900 glow-text cursor-pointer'>Click To Open</button>
      </div>
    </motion.div>
  );
}
