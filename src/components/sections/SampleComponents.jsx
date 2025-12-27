import PricingTableLogo from "../ui/PricingTableLogo";
import TODOLogo from "../ui/TODOLogo";
import WeatherLogo from "../ui/WeatherLogo";

const SampleComponents = ({ projectsButton }) => {
  return (
    <section
      id ="sample" className="relative z-10"
    >
          {/* 
            Section showcasing selected sample components
            built from my worksheet projects
          */}

      {/* 
        Decorative background layer.
        Marked aria-hidden so screen readers ignore it.
      */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-br
          from-zinc-100 via-white to-zinc-200
          dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-800
        "
      />

      {/* 
        Content wrapper:
        - Creates a new stacking context above the background
        - Centers content both visually and structurally
      */}
      <div
        className="
          relative z-10 p-6
          flex flex-col items-center
          gap-4
          text-center
        "
      >
        {/* 
          h2 is appropriate here because this section
          follows the main page h1 (Hero section)
        */}
        <h2 className="relative text-2xl font-bold">
          Sample Components
        </h2>

        {/* 
          Width constraint improves readability on large screens
          and prevents the list from stretching too wide
        */}
        <div
          className="
            max-w-xl py-4
            flex
            overflow-hidden
          "
        >
          {/* 
            Unordered list is used because
            the items are related but not sequential
          */}
          <ul className="flex gap-6 sm:gap-25">

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">
                Pricing Table
              </h3>
              <PricingTableLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">
                Weather Dashboard
              </h3>
              <WeatherLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">
                Todo App
              </h3>
              <TODOLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

          </ul>
        </div>

        {/* 
          Triggers navigation to the full Projects/Components section.
          Button is appropriate here because it performs an action
          rather than direct navigation via URL.
        */}
        <button
          onClick={projectsButton}
          className="
            relative z-10
            inline-block px-6 py-3 rounded-full
            bg-black text-white
            dark:bg-white dark:text-black
            transition hover:opacity-90
          "
        >
          See Components
        </button>
      </div>
    </section>
  );
};

export default SampleComponents;
