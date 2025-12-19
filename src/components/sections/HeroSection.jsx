import { useState, useEffect } from 'react';

// Slide content is data-driven to avoid hardcoding DOM
// Makes the Hero easy to extend or animate later
const HERO_SLIDES = [
  {
    tag: "React + Tailwind Starter",
    title: "Simple React Website",
    description:
      "A clean, performance-focused React and Tailwind starter built with accessibility, scalability, and modern best practices in mind.",
    cta: "Learn more",
    href: "#about",
  },
  {
    tag: "Mobile-First Design",
    title: "Built for Every Screen",
    description:
      "Designed with a mobile-first mindset to ensure smooth performance and clean layouts across all devices.",
    cta: "See features",
    href: "#features",
  },
  {
    tag: "Developer Friendly",
    title: "Easy to Extend",
    description:
      "Clean structure, readable components, and best practices that make scaling and experimentation easy.",
    cta: "Get started",
    href: "#features",
  },
];

const HeroSection = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HERO_SLIDES[activeIndex];

  // Initialize auto-play based on user's motion preference
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(() => {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Listen for changes in motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setIsAutoPlayEnabled(!mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Enables keyboard navigation for hero slides
  // Left arrow → previous slide
  // Right arrow → next slide
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex(i =>
          i === HERO_SLIDES.length - 1 ? 0 : i + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex(i =>
          i === 0 ? HERO_SLIDES.length - 1 : i - 1
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Auto-play slides when enabled
  // Advances every 6 seconds
  useEffect(() => {
    if (!isAutoPlayEnabled) return;

    const interval = setInterval(() => {
      setActiveIndex(i =>
        i === HERO_SLIDES.length - 1 ? 0 : i + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlayEnabled]);


  return (
    // Primary introductory section of the page
    <section
      id="hero"
      className="
        relative
        w-full min-h-[85vh]
        flex items-center
        px-6
        overflow-hidden
      "
      onMouseEnter={() => setIsAutoPlayEnabled(false)}
      onFocus={() => setIsAutoPlayEnabled(false)}
    >
      
      {/* Decorative background only, hidden from screen readers */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-linear-to-br
          from-zinc-200 via-white to-zinc-300
          dark:from-zinc-900 dark:via-zinc-800 dark:to-black
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -top-32 -right-32
          h-96 w-96
          rounded-full
          bg-white/40 dark:bg-white/10
          blur-3xl
        "
      />

      {/* 
        Slide content wrapper
        Key forces React to remount this block on slide change,
        allowing CSS entrance animations to play
      */}
      <div
        key={activeIndex}
        className="
          relative z-10
          max-w-3xl mx-auto
          text-center flex flex-col items-center
          transition-all duration-300 ease-out
          opacity-0 translate-y-2
          animate-[fadeIn_300ms_ease-out_forwards]
        "
>

        <span className="mb-4 text-sm font-semibold tracking-wide uppercase opacity-70">
          {slide.tag}
        </span>


        {/* Main page heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
          {slide.title}
        </h1>

        {/* Supporting description */}
        <p className="mt-6 max-w-2xl text-lg opacity-90">
          {slide.description}
        </p>

        {/* Primary call to action */}
        <div className="mt-10">
          <a
            href={slide.href}
            className="
              inline-block px-6 py-3 rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              transition hover:opacity-90
            "
          >
            {slide.cta}
          </a>
        </div>
      </div>

      <div className="
        hidden absolute inset-y-0 left-0 right-0
        z-20
        sm:flex items-center justify-between
        px-2 sm:px-6
        pointer-events-none
      ">
        <button
          aria-label="Previous slide"
          onClick={() => {
            setIsAutoPlayEnabled(false);
            setActiveIndex(i =>
              i === 0 ? HERO_SLIDES.length - 1 : i - 1
            );
          }}
          className="
            pointer-events-auto
            h-10 w-10
            rounded-full
            flex items-center justify-center
            bg-white/30 dark:bg-black/30
            backdrop-blur
            hover:opacity-80
          "
        >
          ←
        </button>

        <button
          aria-label="Next slide"
          onClick={() => {
            setIsAutoPlayEnabled(false);
            setActiveIndex(i =>
              i === HERO_SLIDES.length - 1 ? 0 : i + 1
            );
          }}
          className="
            pointer-events-auto
            h-10 w-10
            rounded-full
            flex items-center justify-center
            bg-white/30 dark:bg-black/30
            backdrop-blur
            hover:opacity-80
          "
        >
          →
        </button>
      </div>

      {/* 
        Slide indicators (pagination dots)

        Each indicator is a real <button> for accessibility and keyboard support.
        The button itself is sized to meet minimum touch target requirements (44x44px),
        while the visible dot remains small for visual design.

        This ensures:
        - Good mobile usability
        - Lighthouse accessibility compliance
        - No visual layout compromise
      */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              setIsAutoPlayEnabled(false);
              setActiveIndex(index);
            }}
            className="
              h-11 w-11
              flex items-center justify-center
            "
          >
            <span
              className={`
                h-2 w-2 rounded-full transition
                ${index === activeIndex
                  ? "bg-black dark:bg-white"
                  : "bg-black/30 dark:bg-white/30"}
              `}
            />
          </button>
        ))}
      </div>




    </section>
  );
};

export default HeroSection;