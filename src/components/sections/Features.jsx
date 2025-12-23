import Card from "../ui/Card";

const Features = () => {
  return (
    // Section landmark for the Features area
    // Screen readers can jump directly here
    <section
      id="features"
      className="relative"
    >

      <div
        className="absolute inset-0
        h-full w-full
        bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
      >

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
