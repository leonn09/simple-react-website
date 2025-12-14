import Card from "../ui/Card";

const Features = () => {
  return (
    // Section that highlights key features of the project
    <section
      id="features"
      className="p-6 text-center flex flex-col items-center gap-6"
    >
      <h2 className="text-2xl font-bold">
        Features
      </h2>

      {/* 
        Unordered list is used for accessibility
        because this is a list of related items
      */}
      <ul className="grid sm:grid-cols-2 items-center gap-4">
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
    </section>
  );
};

export default Features;