"use client"

import { AddTodoForm } from "@/components/add-todo-form"
import { TodoList } from "@/components/todo-list"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center border-2 bg-red-400 p-2">
      <section className="mx-auto flex w-full flex-col gap-6 border-2 border-green-800 bg-blue-400 p-4 md:w-1/3">
        <AddTodoForm />
        <TodoList />
      </section>
    </main>
  )
}
