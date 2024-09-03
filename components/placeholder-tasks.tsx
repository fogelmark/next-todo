import { DeleteButton } from "./buttons/delete-button"
import { motion } from "framer-motion"

export function PlaceholderTasks() {
  const placeholders = [
    { id: 1, content: "Exercise" },
    { id: 2, content: "Cook a lot of food" },
    { id: 3, content: "Walk the dog" },
  ]

  const placeholderOpacity = ["opacity-50", "opacity-35", "opacity-25"]

  return (
    <section data-testid="placeholder-list" className="w-full">
      <motion.ul
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {placeholders.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between rounded-sm p-2 shadow-[0px_4px_2px_-2px_#00000015] ${placeholderOpacity[index]}`}
          >
            <span className="w-full select-none drop-shadow-md">
              {todo.content}
            </span>
            <DeleteButton id={index} />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
