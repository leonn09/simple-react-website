const Card = ({ children }) => {
  return (
    // Article represents a self-contained piece of content
    <article
      className="
        flex items-center justify-center
        w-75 max-w-sm
        p-6
        border-2 rounded-xl
        shadow-xs
      "
    >
      <p className="text-md font-semibold">
        {children}
      </p>
    </article>
  );
};

export default Card;
