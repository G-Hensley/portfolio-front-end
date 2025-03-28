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

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav
      className='flex sm:justify-center left-0 py-4 top-0 w-full z-[100] fixed'
      aria-label='Main Navigation'>
      {/* Skip to main content link for keyboard users */}
      <a
        href='#hero-section'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[200] bg-primary-cyan-900 text-charcoal p-2 m-2'>
        Skip to main content
      </a>

      <button
        id='nav-menu-btn'
        className={`sm:hidden fixed cursor-pointer flex flex-col h-10 items-end justify-around right-4 top-4 w-10 z-[101] ${
          menuOpen ? 'open-menu' : ''
        }`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-expanded={menuOpen}
        aria-controls='nav-list'
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
        <div className='h-1 relative w-10 nav-menu-line'></div>
        <div className='h-1 relative w-10 nav-menu-line'></div>
        <div className='h-1 relative w-10 nav-menu-line'></div>
      </button>

      {/* Nav Menu Links */}
      <ul
        id='nav-list'
        role='menubar'
        aria-label='Site Pages'
        className={`nav-list absolute flex flex-col gap-12 
                items-center justify-center p-8 sm:py-2 sm:px-4 sm:flex-row sm:top-4 h1-ff 
                desktop-h1 top-24 text-mobile-lg-body sm:text-desktop-body w-full sm:w-auto 
                text-primary-cyan-900 font-body-ff duration-600 sm:translate-0 
                ${menuOpen ? '' : 'transform translate-x-full'} ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        } 
                sm:opacity-100`}>
        <li className='nav-li' role='none'>
          <a
            role='menuitem'
            onClick={toggleMenu}
            href='/#hero-section'
            className={`nav-link px-0.5 ${
              activeLink === 'home' ? 'active' : ''
            }`}
            aria-current={activeLink === 'home' ? 'page' : undefined}>
            Home
          </a>
        </li>
        <li className='nav-li' role='none'>
          <a
            role='menuitem'
            onClick={toggleMenu}
            href='/#skills-section'
            className={`nav-link px-0.5 ${
              activeLink === 'skills' ? 'active' : ''
            }`}
            aria-current={activeLink === 'skills' ? 'page' : undefined}>
            Skills
          </a>
        </li>
        <li className='nav-li' role='none'>
          <a
            role='menuitem'
            onClick={toggleMenu}
            href='/#about-section'
            className={`nav-link px-0.5 ${
              activeLink === 'about' ? 'active' : ''
            }`}
            aria-current={activeLink === 'about' ? 'page' : undefined}>
            About
          </a>
        </li>
        <li className='nav-li' role='none'>
          <a
            role='menuitem'
            onClick={toggleMenu}
            href='#footer'
            className={`nav-link px-0.5 ${
              activeLink === 'contact' ? 'active' : ''
            }`}
            aria-current={activeLink === 'contact' ? 'page' : undefined}>
            Contact
          </a>
        </li>
        <li className='nav-li' role='none'>
          <a
            role='menuitem'
            onClick={toggleMenu}
            href='/projects'
            className={`nav-link px-0.5 ${
              activeLink === 'projects' ? 'active' : ''
            }`}
            aria-current={activeLink === 'projects' ? 'page' : undefined}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
