import Card from "../ui/Card";

const Features = () => {
  return (
    // Section landmark for the Features area
    // Screen readers can jump directly here
    <section
      id="features"
      className="relative"
    >

      {/* Decorative background only, hidden from screen readers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="zincprint-marks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="5" y="10" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">100</text>
              <text x="105" y="10" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">200</text>
              <text x="205" y="10" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">300</text>
              
              <text x="2" y="105" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">100</text>
              <text x="2" y="205" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">200</text>
              <text x="2" y="305" className="text-[6px] fill-zinc-500 dark:fill-zinc-400">300</text>
              
              <circle cx="100" cy="100" r="2" className="fill-zinc-500/30 dark:fill-zinc-400/30" />
              <circle cx="200" cy="200" r="2" className="fill-zinc-500/30 dark:fill-zinc-400/30" />
              <circle cx="300" cy="300" r="2" className="fill-zinc-500/30 dark:fill-zinc-400/30" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#zincprint-marks)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)]" />
      </div>

      <div className="
        relative
        z-10 px-6 py-8
        text-center
        flex flex-col items-center
        gap-10
      ">
        {/* 
          Section heading
          h2 is correct because Hero already owns h1
        */}
        <h2 className="text-3xl font-bold">
          Features
        </h2>

        {/* 
          Feature list

          - <ul> communicates this is a group of related items
          - Grid layout adapts automatically for screen size
          - Mobile: 1 column
          - Tablet+: 2 columns
        */}
        <ul
          className="
            grid
            gap-6
            sm:grid-cols-2
            max-w-4xl
          "
        >
          <li>
            <Card>Component-Based Architecture</Card>
          </li>

          <li>
            <Card>Responsive Layout</Card>
          </li>

          <li>
            <Card>Dark Mode Support</Card>
          </li>

          <li>
            <Card>Clean Structure</Card>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
