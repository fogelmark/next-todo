import { useTodosContext } from "@/lib/hooks"
import { MdDelete } from "react-icons/md"

type Props = {
  id: number
}

export function DeleteButton(props: Props) {
  const { deleteTodo } = useTodosContext()
  const { id } = props

  return (
    <MdDelete
      onClick={(e) => {
        e.stopPropagation()
        deleteTodo(id)
      }}
      className="my-auto cursor-pointer"
      size={25}
    />
  )
}
