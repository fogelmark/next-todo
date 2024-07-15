import { useTodosContext } from "@/lib/hooks"
import { FormEvent, useState } from "react"
import { Button } from "@/components"
import { z } from "zod"

const todoSchema = z.string().min(1, "Todo content cannot be empty")

export function AddTodoForm() {
  const { addTodo, clearList } = useTodosContext()
  const [todoContent, setTodoContent] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = todoSchema.safeParse(todoContent)
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    } else {
      setError("")
    }
    addTodo(todoContent)
    setTodoContent("")
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value)
        }}
        placeholder="Add a task..."
        className="rounded px-2 py-2 text-black"
        type="text"
      />
      {error && <p className="text-red-800">{error}</p>}
      <section className="flex justify-between gap-2">
        <Button children="Add to list" />
        <Button children="Clear list" onClick={clearList} />
      </section>
    </form>
  )
}
