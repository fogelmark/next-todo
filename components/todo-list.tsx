import { useTodosContext } from "@/lib/hooks"
import { DeleteButton } from "@/components"

export function TodoList() {
  const { todos, toggleTodo } = useTodosContext()

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={`${todo.completed ? "line-through" : ""}`} onClick={() => toggleTodo(todo.id)}>{todo.content}</span>
            <DeleteButton id={todo.id} />
          </li>
        ))}
      </ul>
    </section>
  )
}
