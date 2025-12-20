const Card = ({ children }) => {
  return (
    // Article represents a standalone feature description
    // This is semantic and screen-reader friendly
    <article
      className="
        flex items-center justify-center
        w-full max-w-sm
        p-6
        border-2
        backdrop-blur-sm
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      {/* 
        Feature label text
        Kept simple and readable
      */}
      <p className="text-base font-semibold">
        {children}
      </p>
    </article>
  );
};

export default Card;
