"use client"

import "react-loading-skeleton/dist/skeleton.css"
import { DeleteButton, PlaceholderTasks } from "@/components"
import { AnimatePresence, motion } from "framer-motion"
import { SkeletonLoader } from "@/components/skeleton-loader"
import { useTodosContext } from "@/lib/hooks"

export function TodoList() {
  const { todos, isLoading, toggleTodo } = useTodosContext()

  return (
    <section data-testid="todo-list" className="w-full">
      <ul className="flex flex-col gap-2">
        {isLoading && <SkeletonLoader />}
        {todos.length === 0 && !isLoading && <PlaceholderTasks />}
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
            key={todo.id}
            className="flex justify-between rounded-sm p-2 shadow-[0px_4px_2px_-2px_#00000015]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
              <span
                className={`${todo.completed ? "text-acapulco-800 line-through" : ""} w-full cursor-pointer select-none drop-shadow-md`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.content}
              </span>
              <DeleteButton id={todo.id} className="cursor-pointer" />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
