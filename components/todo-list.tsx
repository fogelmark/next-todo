import { useTodosContext } from "@/lib/hooks"

export function TodoList() {
  const { todos, deleteTodo, toggleTodo } = useTodosContext()

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={`${todo.completed ? "line-through" : ""}`} onClick={() => toggleTodo(todo.id)}>{todo.content}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
