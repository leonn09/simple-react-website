import ReactLogo from "../ui/ReactLogo";

const AboutUs = () => {
  return (
    // Section that provides background and context about the project
    <section
      id="about"
      className="
        relative
      "
    >

      {/*Background spinning logo, hidden from screen readers */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        <ReactLogo className="
          fill-current/10
          absolute -bottom-14 -right-14 md:-bottom-20 md:-right-20 lg:right-50
          w-35 h-35 md:w-50 md:h-50 lg:w-80 lg:h-80
          animate-spin [animation-duration:15s]
          "
        />
      </div>

      <div className="
        z-10 p-6
        flex flex-col justify-center items-center
        gap-4
        text-center
      ">
        {/* 
          h2 is correct here because this section
          follows the main h1 in the Hero section
        */}
        <h2 className="text-2xl font-bold">
          About Us
        </h2>

        {/* 
          Constrain width for better readability,
          especially on large screens
        */}
        <p className="max-w-xl opacity-90">
          This project is built as a clean and accessible React template,
          focusing on performance, scalability, and modern best practices.
        </p>

        {/* 
          Use an anchor instead of a button because
          this navigates to more content
        */}
        <a
          href="#"
          className="
              inline-block px-6 py-3 rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              transition hover:opacity-90
          "
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
