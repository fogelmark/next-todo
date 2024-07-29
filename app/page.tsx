"use client"

import { Heading } from "@/components"
import { AddTodoForm } from "@/components/add-todo-form"
import { TodoList } from "@/components/todo-list"
import { TodosContextProvider } from "@/contexts/todos-context-provider"

export default function Home() {
  return (
    <main data-testid="main" className={classes.main}>
      <section className={classes.section}>
        <TodosContextProvider>
          <Heading />
          <AddTodoForm />
          <TodoList />
        </TodosContextProvider>
      </section>
    </main>
  )
}

const classes = {
  main: "bg-acapulco-700 text-acapulco-50 flex min-h-screen flex-col items-center p-4",
  section:
    "bg-acapulco-400 mx-auto flex w-full flex-col gap-6 rounded-lg p-4 shadow-lg max-w-[500px] md:max-w-[500px]",
}
