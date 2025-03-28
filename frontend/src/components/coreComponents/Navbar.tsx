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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // For debouncing scroll events
    let scrollTimeout: number | null = null;
    let scrollingTimeout: number | null = null;

    const updateActiveLinkFromURL = () => {
      // Only update from URL if user is not actively scrolling
      if (isScrolling) return;

      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === '/projects') {
        setActiveLink('projects');
        return;
      }

      if (hash) {
        switch (hash) {
          case '#about-section':
            setActiveLink('about');
            return;
          case '#contact-section':
            setActiveLink('contact');
            return;
          case '#skills-section':
            setActiveLink('skills');
            return;
          case '#hero-section':
            setActiveLink('home');
            return;
          default:
            break;
        }
      } else if (path === '/' || path === '') {
        // Default to home if no hash and we're on the homepage
        setActiveLink('home');
      }
    };

    const updateActiveLinkFromScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');

      console.log('Scroll position:', scrollY);

      // Convert NodeList to Array for easier management
      const sectionsArray = Array.from(sections);

      console.log(
        'Sections found:',
        sectionsArray.map((s) => s.id)
      );

      // Sort sections by their position from top to bottom
      sectionsArray.sort((a, b) => {
        const aTop = (a as HTMLElement).offsetTop;
        const bTop = (b as HTMLElement).offsetTop;
        return aTop - bTop;
      });

      // Flag to track if we found an active section
      let foundActiveSection = false;

      // Special case for top of page
      if (scrollY < 300) {
        console.log('Near top of page, setting hero section as active');
        setActiveLink('home');
        return;
      }

      // Find the section that is currently in view
      for (const section of sectionsArray) {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 150;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const sectionId = htmlSection.getAttribute('id');

        console.log(`Section ${sectionId}:`, {
          top: sectionTop,
          bottom: sectionBottom,
          isInView: scrollY >= sectionTop && scrollY < sectionBottom,
        });

        // Simple check - if we're within the section bounds
        if (scrollY >= sectionTop && scrollY < sectionBottom && sectionId) {
          foundActiveSection = true;
          console.log(`Setting active link to section: ${sectionId}`);

          switch (sectionId) {
            case 'hero-section':
              setActiveLink('home');
              return;
            case 'about-section':
              setActiveLink('about');
              return;
            case 'skills-section':
              setActiveLink('skills');
              return;
            case 'contact-section':
              setActiveLink('contact');
              return;
            default:
              break;
          }
        }
      }

      // If no section was found, try with more generous bounds
      if (!foundActiveSection) {
        for (const section of sectionsArray) {
          const htmlSection = section as HTMLElement;
          const sectionTop = htmlSection.offsetTop - 200;
          const sectionHeight = htmlSection.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight + 200;
          const sectionId = htmlSection.getAttribute('id');

          // More generous bounds check
          if (scrollY >= sectionTop && scrollY < sectionBottom && sectionId) {
            console.log(
              `Setting active link (generous bounds) to section: ${sectionId}`
            );

            switch (sectionId) {
              case 'hero-section':
                setActiveLink('home');
                return;
              case 'about-section':
                setActiveLink('about');
                return;
              case 'skills-section':
                setActiveLink('skills');
                return;
              case 'contact-section':
                setActiveLink('contact');
                return;
              default:
                break;
            }
          }
        }
      }
    };

    // Debounced scroll handler to improve performance
    const handleScroll = () => {
      // Mark that we're scrolling
      setIsScrolling(true);

      // Clear existing timeouts
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
      if (scrollingTimeout) {
        window.clearTimeout(scrollingTimeout);
      }

      // Update active link after a short delay
      scrollTimeout = window.setTimeout(updateActiveLinkFromScroll, 50);

      // Reset scrolling state after scrolling stops
      scrollingTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const handleHashChange = () => {
      // When hash changes through navigation, update from URL
      updateActiveLinkFromURL();
    };

    // Run once on mount
    updateActiveLinkFromURL();

    // Set up event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Cleanup event listeners
    return () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
      if (scrollingTimeout) {
        window.clearTimeout(scrollingTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [isScrolling]);

  // Function to toggle the menu
  const toggleMenu = () => {
    if (menuOpen || window.innerWidth <= 640) {
      onToggleMenu();
    }
  };

  return (
    <nav className='flex sm:justify-center left-0 py-4 top-0 w-full z-50 fixed'>
      <button
        id='nav-menu-btn'
        className={`sm:hidden absolute cursor-pointer flex flex-col h-10 items-end justify-around right-4 top-4 w-10 z-50 ${
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
            href='#contact-section'
            className={`nav-link px-0.5 ${
              activeLink === 'contact' ? 'active' : ''
            }`}>
            Contact
          </a>
        </li>
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
            href='/projects'
            className={`nav-link px-0.5 ${
              activeLink === 'projects' ? 'active' : ''
            }`}>
            Projects
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
      </ul>
    </nav>
  );
}
