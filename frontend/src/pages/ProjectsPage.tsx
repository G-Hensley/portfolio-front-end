import { useState } from 'react';
import MouseFollower from '../components/coreComponents/MouseFollower';
import Navbar from '../components/coreComponents/Navbar';
import ScreenCover from '../components/coreComponents/ScreenCover';
import Footer from '../components/coreComponents/Footer';
import './ProjectsPage.css';
import ProjectsContainer from '../components/projectsComponents/ProjectsContainer';
export default function ProjectsPage() {
    // State management for the nav menu button
  const [menuOpen, setMenuOpen] = useState(false);
  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prev: boolean) => !prev);
    console.log('Menu Open: ', menuOpen);
  };
  return (
    <div id='wrapper' className='flex flex-col h-fit'>
      <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <MouseFollower />
      <ProjectsContainer>{menuOpen && <ScreenCover />}</ProjectsContainer>
      <Footer>{menuOpen && <ScreenCover />}</Footer>
    </div>
  );
}

