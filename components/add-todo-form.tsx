import { useTodosContext } from "@/lib/hooks"
import { useState } from "react"

export function AddTodoForm() {
  const { addTodo } = useTodosContext()
  const [todoContent, setTodoContent] = useState("")

  return (
    <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo(todoContent)
          setTodoContent("")
        }}
      >
        <input
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="Add a todo..."
          className="rounded border-2"
          type="text"
          required
        />
        <button className="rounded border-2">Add</button>
      </form>
  )
}
