import { useState, useEffect } from 'react';
import HeroSection from '../components/homeComponents/HeroSection';
import MouseFollower from '../components/coreComponents/MouseFollower';
import Navbar from '../components/coreComponents/Navbar';
import ScreenCover from '../components/coreComponents/ScreenCover';
import SkillsSection from '../components/homeComponents/SkillsSection';
import './HomePage.css';
import Footer from '../components/coreComponents/Footer';
import AboutSection from '../components/homeComponents/AboutSection';
import { motion } from 'framer-motion';

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
    <motion.div id='wrapper' className='flex flex-col'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}>
      <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <MouseFollower />
      <HeroSection>{menuOpen && <ScreenCover />}</HeroSection>
      <SkillsSection>{menuOpen && <ScreenCover />}</SkillsSection>
      <AboutSection>{menuOpen && <ScreenCover />}</AboutSection>
      <Footer>{menuOpen && <ScreenCover />}</Footer>
    </motion.div>
  );
}
