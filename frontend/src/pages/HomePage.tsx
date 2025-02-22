import { useState } from "react";
import HeroSection from "../components/HeroSection";
import MouseFollower from "../components/MouseFollower";
import Navbar from "../components/Navbar";
import ScreenCover from "../components/ScreenCover";
import SkillsSection from "../components/SkillsSection";
import "./HomePage.css";
import Footer from "../components/Footer";

export default function HomePage() {
    // State management for the nav menu button
    const [menuOpen, setMenuOpen] = useState(false);
    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen((prev: boolean) => !prev);
        console.log("Menu Open: ", menuOpen);
    }
    return (
        <div id="wrapper" className="flex flex-col">
            <div id="homepage-wrapper">
                <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu}/>
                {menuOpen && <ScreenCover />}
                <MouseFollower />
                <HeroSection />
            </div>
            <SkillsSection>
                {menuOpen && <ScreenCover />}
            </SkillsSection>
            <Footer />
        </div>
    )

}