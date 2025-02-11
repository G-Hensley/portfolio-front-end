import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {

    // State management for the nav menu button
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen((prev: boolean) => !prev);
    }

    return (

        <nav className="fixed flex sm:justify-center left-0 p-4 top-0 w-full z-20">

            <button id="nav-menu-btn" className={`absolute cursor-pointer flex flex-col h-10 items-end justify-around right-4 top-8 w-10 z-30 ${menuOpen ? "open-menu" : ""}`} onClick={toggleMenu}>
                <div className="h-1 relative w-10 bg-amber-50 nav-menu-line"></div>
                <div className="h-1 relative w-10 bg-amber-50 nav-menu-line"></div>
                <div className="h-1 relative w-10 bg-amber-50 nav-menu-line"></div>
            </button>

        </nav>

    )

}