import { useTodosContext } from "@/lib/hooks"

export function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodosContext()

  return (
    <button onClick={(e) => {
      e.stopPropagation()
      deleteTodo(id)
    }}>
      ❌
    </button>
  )
}
