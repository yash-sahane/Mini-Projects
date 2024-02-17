import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    return (
        <TodoContext.Provider value={{ todos, setTodos, input, setInput }}>
            {children}
        </TodoContext.Provider>
    )
}
