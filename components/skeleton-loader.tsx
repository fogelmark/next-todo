export function SkeletonLoader() {
  const skeletonWidth = ["w-1/3", "w-1/2", "w-1/4"]

  return (
    <ul>
      {Array.from({ length: 3 }).map((_, index) => (
        <li className="mb-2 flex items-center justify-between" key={index}>
          <span
            className={`${skeletonWidth[index]} h-6 animate-pulse rounded bg-acapulco-50 opacity-50`}
            role="presentation"
            aria-hidden="true"
          ></span>
          <span
            className="h-5 w-[25px] animate-pulse rounded bg-acapulco-50 opacity-50"
            role="presentation"
            aria-hidden="true"
          ></span>
        </li>
      ))}
    </ul>
  )
}
