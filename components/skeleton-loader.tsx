import { useTodosContext } from "@/lib/hooks"

export function SkeletonLoader() {
  const { totalCount } = useTodosContext()

  return (
    <div className="h-5 w-10 max-w-sm animate-pulse rounded bg-slate-300"></div>
  )
}
