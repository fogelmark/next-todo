import { useTodosContext } from "@/lib/hooks"
import { DeleteButton } from "@/components"
import { SkeletonLoader } from "@/components/skeleton-loader"
import "react-loading-skeleton/dist/skeleton.css"

export function TodoList() {
  const { todos, isLoading, toggleTodo } = useTodosContext()

  return (
    <section className="w-full">
      <ul className="flex flex-col gap-2">
        {isLoading && <SkeletonLoader />}
        {todos.length === 0 && !isLoading && <li>No todos yet!</li>}
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <span
              className={`${todo.completed ? "text-acapulco-800 line-through hover:text-acapulco-800" : "hover:text-acapulco-200"} w-full cursor-pointer select-none drop-shadow-md`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.content}
            </span>
            <DeleteButton id={todo.id} />
          </li>
        ))}
      </ul>
    </section>
  )
}
