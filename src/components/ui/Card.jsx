const Card = ({ children }) => {
  return (
    // Article represents a standalone feature description
    // This is semantic and screen-reader friendly
    <article
      className="
        flex items-center justify-center
        w-full max-w-sm
        p-6
        border border-zinc-200/80 dark:border-zinc-500/80 rounded-xl
        backdrop-blur-xl
        shadow-sm hover:shadow-xl dark:hover:shadow-lg dark:shadow-zinc-700/70
        transform hover:-translate-y-2
        transition duration-300
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
