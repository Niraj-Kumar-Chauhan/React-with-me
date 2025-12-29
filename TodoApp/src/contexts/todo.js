import { createContext, useContext } from "react";
const str = "niraj"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "cricket",
            completed: false
        },
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}