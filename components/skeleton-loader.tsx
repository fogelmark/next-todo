import "@/styles/loader.css"

export function SkeletonLoader() {

  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-5 w-full animate-pulse rounded bg-acapulco-100 opacity-50"
        ></div>
      ))}
    </>
  )
}
