import useTodosContext from "@/contexts/todos-context-provider"

export function TodoList() {
  const { todos } = useTodosContext()

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </section>
  )
}
