const HeroSection = () => {
  return (
    // Main introductory section of the page
    <section
      id="hero"
      className="
        w-full
        min-h-[70vh]
        flex flex-col justify-center items-center
        p-6 text-center
      "
    >
      {/* 
        h1 should be used here because this is the
        primary heading of the entire page
      */}
      <h1 className="text-4xl sm:text-5xl font-black">
        Simple React Website
      </h1>

      {/* Supporting description */}
      <p className="text-lg mt-4 max-w-xl opacity-90">
        A clean, performance-focused React and Tailwind setup built with best practices, accessibility, and scalability in mind.
      </p>

      {/* Primary call to action (optional but recommended) */}
      <div className="mt-6">
        <a
          href="#about"
          className="
            inline-block px-6 py-3 rounded-full
            bg-black text-white
            dark:bg-white dark:text-black
            transition hover:opacity-90
          "
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
