"use client"

import { Todo } from "@/lib/types"
import { createContext, useState } from "react"

type TodosContextProviderProps = {
  children: React.ReactNode
}

type TodosContextType = {
  todos: Todo[]
  addTodo: (content: string) => void
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
  clearList: () => void
}

export const TodosContext = createContext<TodosContextType | null>(null)

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (content: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const clearList = () => {
    setTodos([])
  }

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearList,
  }

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
