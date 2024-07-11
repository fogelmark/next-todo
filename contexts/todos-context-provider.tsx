"use client"

import { Todo } from "@/lib/types"
import { createContext, useEffect, useState } from "react"

type TodosContextProviderProps = {
  children: React.ReactNode
}

type TodosContextType = {
  todos: Todo[]
  isLoading: boolean
  addTodo: (content: string) => void
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
  clearList: () => void
}

export const TodosContext = createContext<TodosContextType | null>(null)

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const addTodo = (content: string) => {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...todos,
        { id: todos.length + 1, content, completed: false },
      ]),
    )
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
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]")
    const updatedTodos = storedTodos.filter(
      (todo: { id: number }) => todo.id !== id,
    )
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  const toggleTodo = (id: number) => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]")
    const updatedTodos = storedTodos.map(
      (todo: { id: number; completed: boolean }) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    )
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  const clearList = () => {
    setTodos([])
    localStorage.removeItem("todos")
  }

  useEffect(() => {
    setIsLoading(true)
    const data = localStorage.getItem("todos")
    if (data) {
      setTodos(JSON.parse(data))
    }
    setIsLoading(false)
  }, [])

  const value = {
    todos,
    isLoading,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearList,
  }

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
