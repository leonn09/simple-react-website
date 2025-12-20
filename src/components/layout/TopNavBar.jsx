import { useState, useEffect } from "react";
import ReactLogo from "../ui/ReactLogo";

const TopNavBar = () => {
    // Controls mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Tracks scroll position to change navbar appearance
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    // Updates navbar style and auto-closes menu on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsMenuOpen(false);
        } else {
        setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Allows closing the mobile menu using the Escape key
        const handleKey = (e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

  // Toggles Tailwind dark mode by updating the <html> class
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
    <>
        {/* Fixed navigation bar */}
        <nav
        className={`
            fixed top-0 left-1/2 -translate-x-1/2
            z-50 h-16 px-4 py-4
            transition-all duration-200
            ${
            isScrolled
                ? "mt-3 w-[95%] border-2 rounded-full bg-white dark:bg-black md:bg-white/50 md:dark:bg-black/50 md:backdrop-blur-sm shadow-xl"
                : "w-full bg-white dark:bg-black"
            }
        `}
        >
            <div className="relative h-full flex items-center">
            
                {/* Left: branding */}
                <div className="flex items-center gap-1">
                    <ReactLogo className="fill-current w-10 h-10" />
                    <h1 className="text-md">
                        <span className="font-light">simple</span>
                        <span className="font-black">React</span>
                        <span className="font-medium">Website</span>
                    </h1>
                </div>

                {/* Center: desktop navigation (visually centered) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 font-medium">
                    <a href="#hero" className="hover:opacity-70">Home</a>
                    <a href="#about" className="hover:opacity-70">About</a>
                    <a href="#features" className="hover:opacity-70">Features</a>
                    <a href="#footer" className="hover:opacity-70">Contact</a>
                </div>

                {/* Right: actions */}
                <div className="ml-auto flex items-center gap-4">
                    {/* Theme toggle */}
                    <button onClick={toggleTheme} aria-label="Toggle dark mode">
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

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Open navigation menu"
                        className="md:hidden flex flex-col justify-center gap-1.5"
                    >
                        <div className="w-7 h-0.5 bg-black dark:bg-white" />
                        <div className="w-7 h-0.5 bg-black dark:bg-white" />
                        <div className="w-7 h-0.5 bg-black dark:bg-white" />
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div
            id="mobile-menu"
            className={`
                md:hidden fixed top-10 left-1/2 -translate-x-1/2 z-40 shadow-lg
                ${isScrolled ? "w-[80%]" : "w-full"}
                flex flex-col items-center
                font-bold
                bg-white/70 dark:bg-black/70
                ${isScrolled ? "border-2 rounded-2xl backdrop-blur-md" : ""}
                transition-all duration-300 ease-out
                origin-top
                ${
                isMenuOpen
                    ? "opacity-100 pt-10 pb-2 ointer-events-auto"
                    : "opacity-0 pt-0 pb-0 pointer-events-none"
                }
            `}
        >
            <a onClick={() => setIsMenuOpen(false)} href="#hero" className="py-2">Home</a>
            <a onClick={() => setIsMenuOpen(false)} href="#about" className="py-2">About</a>
            <a onClick={() => setIsMenuOpen(false)} href="#features" className="py-2">Features</a>
            <a onClick={() => setIsMenuOpen(false)} href="#footer" className="py-2">Contact</a>
        </div>

    </>
  );
};

export default TopNavBar;
