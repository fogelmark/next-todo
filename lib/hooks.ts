import { TodosContext } from "@/contexts/todos-context-provider";
import { useContext } from "react";

export function useTodosContext() {
  const context = useContext(TodosContext)

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component"
    );
  }

  return context
}