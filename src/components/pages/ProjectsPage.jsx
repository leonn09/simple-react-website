import { useState } from "react";
import PricingTableComponent from "../projects/PricingTableComponent";
import PricingTableLogo from "../ui/PricingTableLogo";
import TODOLogo from "../ui/TODOLogo";
import WeatherLogo from "../ui/WeatherLogo";
import WeatherDashboard from "../projects/WeatherDashboard";
import TODOApp from "../projects/TODOApp";

const ProjectsPage = ({ projectsButton }) => {

  // Tracks which project is currently selected
  // 0 = Pricing Table
  // 1 = Weather Dashboard
  // 2 = Todo App
  // 3 = Show all
  const [project, setProject] = useState(0);

  return (
    <>
      {/* 
        Main projects section.
        Relative positioning is required for absolutely
        positioned background and header elements.
      */}
      <section
        className="
          relative
          w-full h-full
          py-4
        "
      >

        {/* 
          Fixed top navigation bar for project selection.
          Contains back navigation and project filters.
        */}
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
          {/* 
            Go back to the previous section/page.
            Button is correct because this triggers
            a JS-controlled navigation action.
          */}
          <button
            onClick={projectsButton}
            className="
              absolute left-3 top-3 z-30 px-4 py-1
              text-white dark:text-black/90
              bg-black/70 dark:bg-white/90
              hover:opacity-90
              rounded-full
            "
          >
            &#x2190; Go Back
          </button>

          {/* 
            Project selector controls.
            Uses buttons for accessibility and keyboard support.
          */}
          <div className="flex justify-end sm:justify-center items-center gap-4 z-20 w-full pr-4">
            <h1 className="hidden md:block font-semibold">
              Sample Components :
            </h1>

            {/* Pricing Table selector */}
            <button
                aria-label="Show Pricing Table project"
                onClick={() => setProject(0)}>
              <PricingTableLogo
                className={`w-12 h-12 ${
                  project === 0
                    ? "fill-zinc-950 dark:fill-zinc-50"
                    : "fill-zinc-600 dark:fill-zinc-500 hover:animate-pulse"
                }`}
              />
            </button>

            {/* Weather Dashboard selector */}
            <button
                aria-label="Show Weather Dashboard project"
                onClick={() => setProject(1)}>
              <WeatherLogo
                className={`w-8 h-8 ${
                  project === 1
                    ? "fill-zinc-950 dark:fill-zinc-50"
                    : "fill-zinc-600 dark:fill-zinc-500 hover:animate-pulse"
                }`}
              />
            </button>

            {/* Todo App selector */}
            <button
                aria-label="Show TODO App project"
                onClick={() => setProject(2)}>
              <TODOLogo
                className={`w-8 h-8 ${
                  project === 2
                    ? "fill-zinc-950 dark:fill-zinc-50"
                    : "fill-zinc-600 dark:fill-zinc-500 hover:animate-pulse"
                }`}
              />
            </button>

            {/* Show all projects */}
            <button onClick={() => setProject(3)}>
              <p
                className={`flex justify-center items-center text-xl font-extrabold ${
                  project === 3
                    ? "text-zinc-950 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-500 hover:animate-pulse"
                }`}
              >
                ALL
              </p>
            </button>
          </div>
        </div>

        {/* 
          Project content container.
          Padding-top offsets the fixed header height.
        */}
        <div
          className="
            relative pt-16
            w-full h-full z-10
            flex flex-col items-center
          "
        >
          {/* Conditionally render projects based on selection */}
          {(project === 0 || project === 3) && <PricingTableComponent />}
          {(project === 1 || project === 3) && <WeatherDashboard />}
          {(project === 2 || project === 3) && <TODOApp />}
        </div>

        {/* 
          Decorative radial background effects.
          These are purely visual and do not affect layout.
        */}
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
  );
};

export default ProjectsPage;
