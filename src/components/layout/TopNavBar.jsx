import ReactLogo from "../ui/ReactLogo";

const TopNavBar = () => {

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
        <nav className={`px-4 py-4 flex justify-between items-center`}>
            <div className="flex items-center">
                <ReactLogo className="w-10 h-10" />
                <h1 className="text-md"><span className="font-light">simple</span><span className="font-black">React</span><span className="font-medium">Website</span></h1>
            </div>

            <div className="flex gap-2">
                <button
                    className=""
                    onClick={toggleTheme}
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

                <button
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                    className="flex flex-col justify-center gap-1.5"
                >
                    <div className={`block w-7 h-0.5 bg-black dark:bg-white`}>
                    </div>

                    <div className={`block w-7 h-0.5 bg-black dark:bg-white`}>
                    </div>

                    <div className={`block w-7 h-0.5 bg-black dark:bg-white`}>
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default TopNavBar;