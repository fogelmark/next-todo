"use client"

import { AddTodoForm } from "@/components/add-todo-form"
import { TodoList } from "@/components/todo-list"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AddTodoForm />
      <TodoList />
    </main>
  )
}
