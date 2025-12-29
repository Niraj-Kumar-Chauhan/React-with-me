import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const {addTodo} = useTodo()

    const [todo, setTodo] = useState('')

    // if(todo.length>0){

    // }
    const add_todo = () => {
        if(todo.trim().length>0){
            addTodo({todo: todo.trim(), completed: false})
        }
    }
    return (
        <form onSubmit={add_todo} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo((e.target.value))}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

