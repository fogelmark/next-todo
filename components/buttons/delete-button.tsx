import { useTodosContext } from "@/lib/hooks"
import { MdDelete } from "react-icons/md"
import { cn } from "@/lib/utils"

type Props = {
  id: number
  className?: string
}

export function DeleteButton(props: Props) {
  const { deleteTodo } = useTodosContext()
  const { id, className } = props

  return (
    <MdDelete
      onClick={(e) => {
        e.stopPropagation()
        deleteTodo(id)
      }}
      className={cn("my-auto", className)}
      size={25}
    />
  )
}
