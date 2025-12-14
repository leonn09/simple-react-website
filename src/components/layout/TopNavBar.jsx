import { useState, useEffect } from 'react';
import ReactLogo from "../ui/ReactLogo";

const TopNavBar = () => {

    // Tracks whether the page has been scrolled past a certain point
    // Used to change the navbar appearance on scroll
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Runs on every scroll event
        const handleScroll = () => {
            // "50" is the scroll threshold (in pixels)
            // If the user scrolls more than 50px, we switch navbar styles
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach scroll listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Cleanup: remove listener when component unmounts
        // This prevents memory leaks and duplicate listeners
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggles dark/light mode by adding or removing the "dark" class
    // Tailwind uses this class to switch themes
    const toggleTheme = () => {
        const html = document.documentElement;

        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <nav
            className={`
                fixed top-0 left-1/2 transform -translate-x-1/2
                z-50 h-16 px-4 py-4 flex justify-between items-center
                transition-all duration-100
                ${
                    // When scrolled:
                    // - slightly pushed down
                    // - narrower width
                    // - rounded with border
                    // - semi-transparent + blur
                    isScrolled
                        ? "mt-3 w-[95%] border-2 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-sm"
                        // When at top:
                        // - full width
                        // - solid background
                        : "w-full bg-white dark:bg-black"
                }
            `}
        >
            {/* Left side: logo + site title */}
            <div className="flex items-center">
                <ReactLogo className="w-10 h-10" />
                <h1 className="text-md">
                    <span className="font-light">simple</span>
                    <span className="font-black">React</span>
                    <span className="font-medium">Website</span>
                </h1>
            </div>

            {/* Right side: theme toggle + menu button */}
            <div className="flex gap-2">
                {/* Theme toggle button */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                >
                    <svg
                        className="w-7 h-7 stroke-black dark:stroke-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="nightModeIconTitle"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title id="nightModeIconTitle">Night Mode</title>
                            <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path>
                            <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"></path>
                            <path d="M12 5V3M12 21v-2"></path>
                            <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"></path>
                        </g>
                    </svg>
                </button>

                {/* Mobile menu button (hamburger icon) */}
                <button
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                    className="flex flex-col justify-center gap-1.5"
                >
                    <div className="w-7 h-0.5 bg-black dark:bg-white" />
                    <div className="w-7 h-0.5 bg-black dark:bg-white" />
                    <div className="w-7 h-0.5 bg-black dark:bg-white" />
                </button>
            </div>
        </nav>
    );
};

export default TopNavBar;
