import { archivo_black } from "@/lib/fonts"
import { useTodosContext } from "@/lib/hooks"

export function Heading() {
  const { completedTodos, totalCount } = useTodosContext()

  return (
    <section data-testid="heading" className="flex items-center justify-between">
      <h1 className={`${archivo_black.className} text-3xl md:text-5xl -tracking-wide`}>
        taskmanager.
      </h1>
      <span className="text-acapulco-100">
        {totalCount === 0 ? null : `${completedTodos}/${totalCount}`}
      </span>
    </section>
  )
}
