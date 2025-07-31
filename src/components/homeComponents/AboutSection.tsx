import './AboutSection.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection( { children }: { children: React.ReactNode } ) {

    // Content for the AboutSection component
    const aboutContent = [
      {
        title: 'Personal Story',
        text: "I'm a self-taught full-stack software developer who builds fast, accessible, and user-friendly websites. My love for technology started at age 7 when I got my first laptop and became fascinated by how software could bring ideas to life."
      },
      {
        title: 'Education',
        text: "I hold a B.S. in Software Engineering, earned in July 2025. I also hold certifications including CompTIA Project+, AWS Cloud Essentials, ITIL v4 Foundation, both the WGU Front-End and Back-End Developer certificates, and three certifications from freeCodeCamp."
      },
      {
        title: 'Hobbies',
        text: "I enjoy chess, video games, and exploring the outdoors through hiking, fishing, and travel. I'm also into astronomy and astrophotography, and I spend a lot of time reading and learning new things to expand my knowledge."
      },
      {
        title: 'Future Goals',
        text: "I’m contributing to open source to help launch a social platform for tech creators, building my own SaaS products, and laying the foundation for my freelance business. I'm also open to working with new clients who need help bringing their ideas to life through custom web development & design."
      },
      {
        title: 'Why Web Development?',
        text: "I love web development because it lets me combine creativity with technical problem-solving. I enjoy the challenge of turning ideas into functional, accessible, and well-designed experiences on the web."
      }
    ]

    useEffect(() => {
        const container = document.getElementById('information-grid');
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#about-section',
            scrub: false,
            toggleActions: 'play none none none',
            onEnter: () => {
              if (container && !container.classList.contains('animated')) {
                container.classList.add('animated');
              }
            },
          },
        });
    
        tl.fromTo(
          container,
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.2, ease: 'power2.in' }
        );
    
        return () => {
          if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
      }, []);

    return (

        <section id="about-section" className='flex flex-col gap-12 items-center min-h-screen w-full p-8 md:px-16 relative z-10'>
            {children}

            <h2 id="abt-section-title" className='font-h2-ff md:mt-16 text-mobile-h2 md:text-desktop-h2'>About Me</h2>

            <motion.div className='flex w-full justify-center flex-wrap gap-4 md:gap-8 my-auto md:flex-row flex-col'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}>
              { aboutContent.map((item, index) => (
                <div key={index} className='bg-linear-150 from-secondary-magenta-100/20 via-secondary-magenta-500/40 to-secondary-magenta-100/20 flex flex-col gap-2 2xl:w-1/3
                p-4 rounded-br-2xl rounded-tl-2xl backdrop-blur-md border-[1.5px] border-secondary-magenta-500 hover:border-fuchsia-900
                transition-all duration-300 shadow-md shadow-zinc-950/70 lg:w-2/5'>
                  <h3 className='text-center font-body-ff about-card-title text-2xl'>{item.title}</h3>
                  <p className='font-body-ff text-lg text-fuchsia-400'>{item.text}</p>
                </div>
              ))}
            </motion.div>
            
        </section>

    )

}