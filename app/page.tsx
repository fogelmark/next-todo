"use client"

import { AddTodoForm } from "@/components/add-todo-form"
import { TodoList } from "@/components/todo-list"
import "@/styles/card.css"

export default function Home() {
  return (
    <main className="bg-[#2d584e] flex min-h-screen flex-col items-center p-4 text-white">
      <section className="bg-[#5da490] shadow-lg rounded-lg mx-auto flex w-full flex-col gap-6 p-4 md:w-1/3">
        <AddTodoForm />
        <TodoList />
      </section>
    </main>
  )
}
