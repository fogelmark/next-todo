import { useTodosContext } from "@/lib/hooks"
import { IoIosRemoveCircle, IoIosRemoveCircleOutline } from "react-icons/io"

export function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodosContext()

  return (
    <IoIosRemoveCircleOutline
      onClick={(e) => {
        e.stopPropagation()
        deleteTodo(id)
      }}
      className="cursor-pointer"
      size={20}
    />
  )
}
