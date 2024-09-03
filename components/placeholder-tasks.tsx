import { DeleteButton } from "./buttons/delete-button"

export function PlaceholderTasks() {
  const placeholders = [
    { content: "Exercise" },
    { content: "Cook a lot of food" },
    { content: "Walk the dog" },
  ]

  const placeholderOpacity = ["opacity-50", "opacity-35", "opacity-25"]

  return (
    <section data-testid="todo-list" className="w-full">
      <ul className="flex flex-col gap-2">
        {placeholders.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between rounded-sm p-2 shadow-[0px_4px_2px_-2px_#00000015] ${placeholderOpacity[index]}`}
          >
            <span
              className="w-full select-none drop-shadow-md"
            >
              {todo.content}
            </span>
            <DeleteButton id={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}
