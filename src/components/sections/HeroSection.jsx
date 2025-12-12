const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        min-h-[70vh]
        w-full
        flex flex-col justify-center items-center p-6
      "
    >
      <h2 className="text-4xl sm:text-5xl font-black leading-tight">
        Hero Section
      </h2>

      <p className="text-lg mt-4 opacity-90">
        This section provides a brief introduction to the site. It highlights the main purpose and sets the tone for the rest of the content.
      </p>
    </section>
  );
};

export default HeroSection;