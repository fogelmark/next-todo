import { useTodosContext } from "@/lib/hooks"
import "@/styles/button.css"

type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => {
  const { totalCount } = useTodosContext()
  const disabled = totalCount === 0 && children === "Clear list"

  return (
    <button
      className={[classes.enabled, classes.disabled].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const classes = {
  disabled: "disabled:hover:bg-button-bezel disabled:opacity-50",
  enabled: "bg-button-bezel hover:bg-button-bezel-hover shadow-button-bezel w-full rounded-lg py-2 drop-shadow-md",
}
