"use client"

import { createContext, useContext, useState } from "react";

type Todo = {
  id: number;
  content: string;
  completed: boolean;
}

type TodosContextProviderProps = {
  children: React.ReactNode
}

type TodosContextType = {
  todos: Todo[];
  addTodo: (content: string) => void
}

export const TodosContext = createContext<TodosContextType | null>(null)

export default function useTodosContext() {
  const context = useContext(TodosContext)

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component"
    );
  }

  return context
}

export function TodosContextProvider({ children }: TodosContextProviderProps) {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (content: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false
      }
    ])
  }

  return (
    <TodosContext.Provider value={{
      todos,
      addTodo
    }}>
      {children}
    </TodosContext.Provider>
  )
}