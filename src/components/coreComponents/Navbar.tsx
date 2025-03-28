import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Don't run scroll detection on projects page
      if (window.location.pathname === '/projects') {
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset + 100; // Increased offset to trigger later

      // Special case for hero section when at the top
      if (scrollY < 150) {
        setActiveLink('home');
        return;
      }

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionTop = htmlSection.offsetTop - 100; // Increased offset to trigger later
        const sectionBottom = sectionTop + sectionHeight;
        const sectionId = htmlSection.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          if (sectionId === 'hero-section') {
            setActiveLink('home');
          } else if (sectionId === 'about-section') {
            setActiveLink('about');
          } else if (sectionId === 'skills-section') {
            setActiveLink('skills');
          }
        }
      });

      // Check if we're near the footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop =
          footer.getBoundingClientRect().top + window.pageYOffset;
        if (scrollY >= footerTop - 100) {
          setActiveLink('contact');
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      // Handle projects page separately since it's a different route
      if (path === '/projects') {
        setActiveLink('projects');
        return;
      }

      // Handle hash-based navigation
      if (hash) {
        const section = hash.replace('#', '');
        if (section === 'hero-section') {
          setActiveLink('home');
        } else if (section === 'about-section') {
          setActiveLink('about');
        } else if (section === 'skills-section') {
          setActiveLink('skills');
        } else if (section === 'footer') {
          setActiveLink('contact');
        }
      } else if (path === '/') {
        // If no hash and we're on the home page, check scroll position
        handleScroll();
      }
    };

    // Initial check
    handleHashChange();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to toggle the menu
  const toggleMenu = () => {
    if (menuOpen || window.innerWidth <= 640) {
      onToggleMenu();
    }
  };

  return (
    <nav className='flex sm:justify-center left-0 py-4 top-0 w-full z-[100] fixed'>
      <button
        id='nav-menu-btn'
        className={`sm:hidden fixed cursor-pointer flex flex-col h-10 items-end justify-around right-4 top-4 w-10 z-[101] ${
          menuOpen ? 'open-menu' : ''
        }`}
        onClick={toggleMenu}>
        <div className='h-1 relative w-10 nav-menu-line'></div>
        <div className='h-1 relative w-10 nav-menu-line'></div>
        <div className='h-1 relative w-10 nav-menu-line'></div>
      </button>

      {/* Nav Menu Links */}
      <ul
        id='nav-list'
        className={`nav-list absolute flex flex-col gap-12 
                items-center justify-center p-8 sm:py-2 sm:px-4 sm:flex-row sm:top-4 h1-ff 
                desktop-h1 top-24 text-mobile-lg-body sm:text-desktop-body w-full sm:w-auto 
                text-primary-cyan-900 font-body-ff duration-600 sm:translate-0 
                ${menuOpen ? '' : 'transform translate-x-full'} ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        } 
                sm:opacity-100`}>
        <li className='nav-li'>
          <a
            onClick={toggleMenu}
            href='/#hero-section'
            className={`nav-link px-0.5 ${
              activeLink === 'home' ? 'active' : ''
            }`}>
            Home
          </a>
        </li>
        <li className='nav-li'>
          <a
            onClick={toggleMenu}
            href='/#skills-section'
            className={`nav-link px-0.5 ${
              activeLink === 'skills' ? 'active' : ''
            }`}>
            Skills
          </a>
        </li>
        <li className='nav-li'>
          <a
            onClick={toggleMenu}
            href='/#about-section'
            className={`nav-link px-0.5 ${
              activeLink === 'about' ? 'active' : ''
            }`}>
            About
          </a>
        </li>
        <li className='nav-li'>
          <a
            onClick={toggleMenu}
            href='#footer'
            className={`nav-link px-0.5 ${
              activeLink === 'contact' ? 'active' : ''
            }`}>
            Contact
          </a>
        </li>
        <li className='nav-li'>
          <a
            onClick={toggleMenu}
            href='/projects'
            className={`nav-link px-0.5 ${
              activeLink === 'projects' ? 'active' : ''
            }`}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
