import "@/styles/loader.css"

export function SkeletonLoader() {

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="h-5 w-full animate-pulse rounded bg-slate-300"
        ></div>
      ))}
    </>
  )
}
