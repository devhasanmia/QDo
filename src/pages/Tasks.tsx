import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
const tasks = useAppSelector((state) => state.tasks)
  // const toggleCompleted = (id: number) => {
  //   setTasks((prev) =>
  //     prev.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };

  const priorityColors = {
    Low: "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200",
    Medium: "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
    High: "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Tasks
        </h1>
        <button
          // onClick={handleAddTask}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tasks.map(({ id, title, description, priority, dueDate, completed }) => (
          <div
            key={id}
            className={`p-4 rounded-lg shadow-md border transition-colors flex flex-col justify-between ${
              completed
                ? "bg-green-50 border-green-400 dark:bg-green-900 dark:border-green-600"
                : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            }`}
          >
            <div>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={completed}
                  // onChange={() => toggleCompleted(id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <h2
                  className={`text-lg font-semibold ${
                    completed
                      ? "line-through text-green-700 dark:text-green-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {title}
                </h2>
              </label>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 items-center text-xs font-semibold">
              <span
                // className={`px-2 py-1 rounded-full ${priorityColors[priority]}`}
                title={`Priority: ${priority}`}
              >
                {priority}
              </span>

              <span className="px-2 py-1 rounded-full bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                Due: {(dueDate)}
              </span>

              <span
                className={`px-2 py-1 rounded-full ${
                  completed
                    ? "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
