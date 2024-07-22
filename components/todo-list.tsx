import { useTodosContext } from "@/lib/hooks"
import { DeleteButton } from "@/components"
import { SkeletonLoader } from "@/components/skeleton-loader"
import "react-loading-skeleton/dist/skeleton.css"

export function TodoList() {
  const { todos, isLoading, toggleTodo } = useTodosContext()

  return (
    <section data-testid="todo-list" className="w-full">
      <ul className="flex flex-col gap-2">
        {isLoading && <SkeletonLoader />}
        {todos.length === 0 && !isLoading && <li>No todos yet!</li>}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between rounded-sm p-2 shadow-[0px_4px_2px_-2px_#00000015]"
          >
            <span
              className={`${todo.completed ? "text-acapulco-800 line-through" : ""} w-full cursor-pointer select-none drop-shadow-md`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.content}
            </span>
            <DeleteButton id={todo.id} completed={todo.completed} />
          </li>
        ))}
      </ul>
    </section>
  )
}
