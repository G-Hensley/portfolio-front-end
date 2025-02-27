import './AboutSection.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection( { children }: { children: React.ReactNode } ) {

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

            <div id="information-grid">

                <div id="personal-story" className="info-container">
                    <h3 className='info-title font-body-ff relative text-desktop-lg-body'>Personal Story</h3>
                    <p className='info-text font-body-ff text-mobile-body md:text-desktop-body'>
                      I am a self-taught full stack developer with a passion for creating beautiful and functional websites. My love for technology began at 7 years old
                      when I received my first laptop. I was fascinated by the power of technology and how it could be used to create amazing things.
                    </p>
                </div>

                <div id="education" className="info-container">
                    <h3 className='info-title font-body-ff relative text-desktop-lg-body'>Education</h3>
                    <p className='info-text font-body-ff text-mobile-body md:text-desktop-body'>
                      I'm currently enrolled in the Software Engineering program through Western Governors University. I'm expected to graduate in May 2025. I currently hold 3 certifcations
                      from freeCodeCamp, and will be completing more soon.
                    </p>
                </div>

                <div id="hobbies" className="info-container">
                    <h3 className='info-title font-body-ff relative text-desktop-lg-body'>Hobbies</h3>
                    <p className='info-text font-body-ff text-mobile-body md:text-desktop-body'>I thoroughly enjoy playing chess and video games. I also love to travel, hike, and go fishing.
                      Astronomy is another one of my passions, along with astrophotography. I love to read and learn every day, and I'm always looking for new ways to expand my knowledge.
                    </p>
                </div>

                <div id="future" className="info-container">
                    <h3 className='info-title font-body-ff relative text-desktop-lg-body'>Future Goals</h3>
                    <p className='info-text font-body-ff text-mobile-body md:text-desktop-body'>I am currently working on a few personal projects that I hope to launch in the near future. I am also looking for opportunities to collaborate with other developers and designers.</p>
                </div>

                <div id="why" className="info-container">
                    <h3 className='info-title font-body-ff relative text-desktop-lg-body'>Why Web Development?</h3>
                    <p className='info-text font-body-ff text-mobile-body md:text-desktop-body'>I love web development because it allows me to combine my creativity with my technical skills. I enjoy the challenge of solving complex problems and creating innovative solutions.</p>
                </div>

            </div>

        </section>

    )

}