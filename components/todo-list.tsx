import { useTodosContext } from "@/lib/hooks"
import { DeleteButton } from "@/components"
import { SkeletonLoader } from "./skeleton-loader"

export function TodoList() {
  const { todos, isLoading, toggleTodo } = useTodosContext()

  return (
    <section className="w-full">
      <ul>
        {isLoading && <SkeletonLoader />}
        {todos.length === 0 && !isLoading && <li>No todos yet!</li>}
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <span
              className={`${todo.completed ? "line-through" : ""} cursor-pointer select-none`}
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
