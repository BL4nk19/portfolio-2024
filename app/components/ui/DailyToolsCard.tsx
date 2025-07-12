export const DailyToolsCard = () => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {tools.map(({ name, Component }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 p-4 bg-white dark:bg-dark-1 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <Component className="w-12 h-12 text-zinc-800 dark:text-zinc-300" />
            <p className="mt-2 text-sm text-center text-zinc-600 dark:text-zinc-300">{name}</p>
          </div>
        ))}
      </div>
    );
  };
  