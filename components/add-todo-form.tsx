import { useTodosContext } from "@/lib/hooks"
import { useState } from "react"
import { Button } from "@/components"

export function AddTodoForm() {
  const { addTodo, clearList } = useTodosContext()
  const [todoContent, setTodoContent] = useState("")

  return (
    <form
      className="flex flex-col gap-4"
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
        className="rounded py-2 px-2 text-black"
        type="text"
        required
      />
        <Button children="Add to list" />
        <Button children="Clear list" onClick={clearList} />
    </form>
  )
}
