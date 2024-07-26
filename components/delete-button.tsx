import { useTodosContext } from "@/lib/hooks"
import { MdDelete } from "react-icons/md";

type Props = {
  id: number;
  completed: boolean;
}

export function DeleteButton(props: Props) {
  const { deleteTodo } = useTodosContext()
  const { id, completed } = props

  return (
    <MdDelete
      onClick={(e) => {
        e.stopPropagation()
        deleteTodo(id)
      }}
      className="cursor-pointer my-auto"
      size={25}
    />
  )
}
