import { useState } from "react";

const TODOApp = () => {
  /*
    Initialize todo list from localStorage.
    Using a lazy initializer avoids needing an effect
    and prevents unnecessary re-renders.
  */
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todo");
    return saved ? JSON.parse(saved) : [];
  });

  // Controlled input value
  const [todoInput, setTodoInput] = useState("");

  // Handle text input change
  const handleChange = (e) => setTodoInput(e.target.value);

  // Add a new todo item
  const updateTodo = (e) => {
    e.preventDefault(); // Prevent form reload
    if (todoInput.trim() === "") return;

    const newItem = {
      id: Date.now(), // Used as unique ID and timestamp
      name: todoInput,
      mark: false,
    };

    const updated = [...todoList, newItem];
    setTodoList(updated);
    localStorage.setItem("todo", JSON.stringify(updated));
    setTodoInput("");
  };

  // Remove a todo item
  const deleteTodo = (id) => {
    const filtered = todoList.filter(item => item.id !== id);
    setTodoList(filtered);
    localStorage.setItem("todo", JSON.stringify(filtered));
  };

  // Toggle completion state
  const toggleMark = (id) => {
    const updated = todoList.map(task =>
      task.id === id ? { ...task, mark: !task.mark } : task
    );
    setTodoList(updated);
    localStorage.setItem("todo", JSON.stringify(updated));
  };

  return (
    /*
      Article is appropriate because this TODO app
      is a self-contained, reusable feature module.
    */
    <article
      className="
        w-90 sm:w-140 lg:w-180 h-137
        transition-all duration-300 ease-out
        opacity-0 translate-y-2
        animate-[fadeIn_300ms_ease-out_forwards]
      "
    >
      <h2 className="text-xl text-current/70 text-center">
        TODO App
      </h2>

      <div className="my-4 w-full flex flex-col gap-2">

        {/* Input form */}
        <form
          onSubmit={updateTodo}
          className="
            w-full h-25
            flex flex-col items-center justify-center gap-2
            bg-current/10
            bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
                linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
            bg-size-[12px_12px]
            border border-zinc-500/50 dark:border-zinc-200/50
            rounded-xl
            shadow-sm dark:shadow-zinc-700/70
          "
        >
          <input
            type="text"
            value={todoInput}
            onChange={handleChange}
            className="
              w-[90%]
              px-2 py-1
              bg-zinc-50 dark:bg-zinc-950
              border border-current/30 rounded-md
            "
          />

          <button
            type="submit"
            className="
              py-1 px-4
              font-semibold
              text-white dark:text-black
              bg-zinc-500 dark:bg-zinc-200
              rounded-full hover:opacity-90
            "
          >
            ADD
          </button>
        </form>

        {/* Todo list */}
        <div
          className="
            p-2 w-full h-85
            flex flex-col items-center gap-2
            bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
                linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
            bg-size-[48px_48px]
            border border-zinc-500/50 dark:border-zinc-200/50
            rounded-xl
            shadow-sm dark:shadow-zinc-700/70
            overflow-y-auto
          "
        >
          {todoList.length > 0 ? (
            todoList.map(item => {
              const date = new Date(item.id);

              return (
                <div
                  key={item.id}
                  className="
                    p-2 w-full
                    flex flex-col lg:flex-row gap-2
                    hover:bg-zinc-500/10
                    rounded-xl
                  "
                >
                  {/* Status badge */}
                  <div
                    className={`mx-auto py-2 px-4 text-xs rounded-full ${
                      item.mark
                        ? "bg-green-400 dark:text-black"
                        : "bg-zinc-500/90 dark:bg-zinc-700 text-white"
                    }`}
                  >
                    {item.mark ? "Completed" : "Incomplete"}
                  </div>

                  {/* Task text */}
                  <p className="w-80 text-center whitespace-normal">
                    {item.name}
                  </p>

                  {/* Timestamp */}
                  <div className="text-xs text-center">
                    <p>{date.toLocaleDateString()}</p>
                    <p>{date.toLocaleTimeString()}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => deleteTodo(item.id)}
                      className="py-1 px-4 rounded-full border border-current/40 hover:bg-zinc-300/90"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => toggleMark(item.id)}
                      className="py-1 px-4 rounded-full border border-current/40 hover:bg-zinc-300/90"
                    >
                      {item.mark ? "Unmark" : "Mark"}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="mt-4 w-full text-center opacity-70">
              No tasks yet...
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default TODOApp;
