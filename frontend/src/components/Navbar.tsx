import "./Navbar.css";

export default function Navbar({ menuOpen, onToggleMenu }: { menuOpen: boolean, onToggleMenu: () => void }) {
    // Function to toggle the menu
    const toggleMenu = () => {
        onToggleMenu();
    }

    return (

        
        <nav className="flex sm:justify-center left-0 py-4 top-0 w-full z-50 fixed">

            {/* Logo */}

            <button id="nav-menu-btn" className={`sm:hidden absolute cursor-pointer flex flex-col h-10 items-end justify-around right-4 top-4 w-10 z-30 ${menuOpen ? "open-menu" : ""}`} onClick={toggleMenu}>
                <div className="h-1 relative w-10 nav-menu-line"></div>
                <div className="h-1 relative w-10 nav-menu-line"></div>
                <div className="h-1 relative w-10 nav-menu-line"></div>
            </button>

            {/* Nav Menu Links */}
            <ul id="nav-list" className={`nav-list absolute flex flex-col gap-12 
                items-center justify-center p-8 sm:py-2 sm:px-4 sm:flex-row sm:top-4 h1-ff 
                desktop-h1 top-24 text-mobile-lg-body sm:text-desktop-body w-full sm:w-auto 
                text-primary-cyan-900 font-body-ff duration-600 sm:translate-0 
                ${menuOpen ? "" : "transform translate-x-full"} ${menuOpen ? "opacity-100" : "opacity-0"} 
                sm:opacity-100`}>

                <li className="nav-li"><a href="#" className="nav-link px-0.5">About</a></li>
                <li className="nav-li"><a href="#" className="nav-link px-0.5">Contact</a></li>
                <li className="nav-li"><a href="#" className="nav-link px-0.5">Home</a></li>
                <li className="nav-li"><a href="#" className="nav-link px-0.5">Projects</a></li>
                <li className="nav-li"><a href="#skills-section" className="nav-link px-0.5">Skills</a></li>

            </ul>

        </nav>

    )

}