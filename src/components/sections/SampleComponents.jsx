import PricingTableLogo from "../ui/PricingTableLogo";
import TODOLogo from "../ui/TODOLogo";
import WeatherLogo from "../ui/WeatherLogo";

const SampleComponents = ({ projectsButton }) => {
  return (
    // Section that shows some components from my worksheet
    <section
      id="about"
      className="
        relative z-10
      "
    >

      {/* Decorative background only, hidden from screen readers */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-br
          from-zinc-100 via-white to-zinc-200
          dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-800
        "
      />

      <div className="
        relative z-10 p-6
        flex flex-col justify-center items-center
        gap-4
        text-center
      ">
        {/* 
          h2 is correct here because this section
          follows the main h1 in the Hero section
        */}
        <h2 className="relative text-2xl font-bold">
          Sample Components
        </h2>

        {/* 
          Constrain width for better readability,
          especially on large screens
        */}
        <div
          className="
            max-w-xl py-4
            flex
            overflow-hidden
          "
        >
          <ul className="flex gap-6 sm:gap-25">

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">Pricing Table</h3>
              <PricingTableLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">Weather Dashboard</h3>
              <WeatherLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

            <li className="flex flex-col items-center w-25 h-25">
              <h3 className="text-xs font-semibold tracking-wide uppercase opacity-70">TODO APP</h3>
              <TODOLogo className="fill-zinc-500 dark:fill-zinc-300" />
            </li>

          </ul>
          
        </div>

        {/* 
          Use an anchor instead of a button because
          this navigates to more content
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
          Look at it
        </button>
      </div>
    </section>
  );
};

export default SampleComponents;
