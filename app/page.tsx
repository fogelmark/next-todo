"use client"

import { Heading } from "@/components"
import { AddTodoForm } from "@/components/add-todo-form"
import { TodoList } from "@/components/todo-list"

export default function Home() {
  return (
    <main className="bg-acapulco-700 text-acapulco-100 flex min-h-screen flex-col items-center p-4">
      <section className="bg-acapulco-400 mx-auto flex w-full flex-col gap-6 rounded-lg p-4 shadow-lg md:w-1/3">
        <Heading />
        <AddTodoForm />
        <TodoList />
      </section>
    </main>
  )
}
