const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        w-full
        min-h-[70vh]
        flex flex-col justify-center items-center p-6
      "
    >
      <h2 className="text-4xl sm:text-5xl font-black">
        Hero Section
      </h2>

      <p className="text-lg mt-4 opacity-90">
        This section introduces the website and explains its primary purpose. It helps visitors quickly understand what the site is about.
      </p>
    </section>
  );
};

export default HeroSection;