import { useTodosContext } from "@/lib/hooks"

export function TodoList() {
  const { todos, deleteTodo } = useTodosContext()

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.content}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
