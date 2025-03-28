import { useState, useEffect } from 'react';
import HeroSection from '../components/homeComponents/HeroSection';
import MouseFollower from '../components/coreComponents/MouseFollower';
import Navbar from '../components/coreComponents/Navbar';
import ScreenCover from '../components/coreComponents/ScreenCover';
import SkillsSection from '../components/homeComponents/SkillsSection';
import './HomePage.css';
import Footer from '../components/coreComponents/Footer';
import AboutSection from '../components/homeComponents/AboutSection';

export default function HomePage() {
  // State management for the nav menu button
  const [menuOpen, setMenuOpen] = useState(false);
  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prev: boolean) => !prev);
    console.log('Menu Open: ', menuOpen);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div id='wrapper' className='flex flex-col'>
      <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <MouseFollower />
      <HeroSection>{menuOpen && <ScreenCover />}</HeroSection>
      <SkillsSection>{menuOpen && <ScreenCover />}</SkillsSection>
      <AboutSection>{menuOpen && <ScreenCover />}</AboutSection>
      <Footer>{menuOpen && <ScreenCover />}</Footer>
    </div>
  );
}
