import { useTodosContext } from "@/lib/hooks"

export function Heading() {
  const { completedTodos, totalCount } = useTodosContext()

  return (
    <section data-testid="heading" className="flex justify-between">
      <h1 className="text-3xl font-bold">Daily Task Manager</h1>
      <span className="text-acapulco-100">
        {totalCount === 0 ? null : `${completedTodos}/${totalCount}`}
      </span>
    </section>
  )
}
