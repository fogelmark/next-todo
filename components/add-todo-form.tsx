import { useTodosContext } from "@/lib/hooks"
import { FormEvent, useState } from "react"
import { Button } from "@/components"
import { z } from "zod"

const todoSchema = z.string().min(1, "Enter a valid task!")

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

  const handleClearList = () => {
    clearList()
    setError("")
  }

  return (
    <form
      data-testid="add-todo-form"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value)
        }}
        placeholder="Add a task..."
        className="rounded px-2 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
      />
      {error && (
        <p className={`text-red-500 ${error ? "animate-shake" : ""}`}>
          {error}
        </p>
      )}
      <section className="flex justify-between gap-2">
        <Button children="Add to list" />
        <Button children="Clear list" onClick={handleClearList} />
      </section>
    </form>
  )
}
