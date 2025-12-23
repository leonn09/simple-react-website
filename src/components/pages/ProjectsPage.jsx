import { useState } from "react";
import PricingTableComponent from "../projects/PricingTableComponent";
import PricingTableLogo from "../ui/PricingTableLogo";
import TODOLogo from "../ui/TODOLogo";
import WeatherLogo from "../ui/WeatherLogo";
import WeatherDashboard from "../projects/WeatherDashboard";

const ProjectsPage = ({ projectsButton }) => {

    const [ projectComponent, setProjectComponent ] = useState(<PricingTableComponent />);

    return (
        <>
            <section
                className="
                    relative
                    w-full h-full
                    py-4
                "
            >

                <div
                    className="
                        absolute top-0
                        w-full h-14
                        flex items-center justify-center
                        text-center
                        bg-zinc-950/10
                        shadow-2xs dark:shadow-zinc-900
                    "
                >
                    <button
                        onClick={projectsButton}
                        className="
                            absolute left-2 top-2 z-30 px-4 py-2
                            text-white dark:text-black/90
                            bg-black/70 dark:bg-white/90 hover:opacity-90 rounded-full
                        "
                    >
                        &#x2190; Go Back
                    </button>
                    <div className="flex justify-end sm:justify-center items-center gap-4 z-20 w-full pr-4">
                        <h1 className="hidden md:block font-semibold">Sample Components :</h1>
                        <button onClick={() => setProjectComponent(<PricingTableComponent />)}>
                            <PricingTableLogo className="w-15 h-15 fill-zinc-500 dark:fill-zinc-300 hover:animate-pulse" />
                        </button>
                        <button  onClick={() => setProjectComponent(<WeatherDashboard />)}>
                            <WeatherLogo className="w-11 h-11 fill-zinc-500 dark:fill-zinc-300 hover:animate-pulse" />
                        </button>
                        <button>
                            <TODOLogo className="w-11 h-11 fill-zinc-500 dark:fill-zinc-300 hover:animate-pulse" />
                        </button>
                    </div>
                </div>

                <div
                    className="
                        relative pt-16
                        w-full h-full z-10
                        flex flex-col items-center
                    "
                    >
                    {projectComponent}
                </div>

                {/*Radial Background*/}
                <div
                    className="
                        w-full h-80
                        absolute top-0
                        dark:shadow-zinc-900
                        bg-radial-[at_100%_100%] from-transparent from-70% to-120% to-zinc-500
                    "
                />
                <div
                    className="
                        w-full h-80
                        absolute bottom-0
                        dark:shadow-zinc-900
                        bg-radial-[at_0%_0%] from-transparent from-70% to-120% to-zinc-500
                    "
                />

            </section>
        </>
    )
}

export default ProjectsPage;