import React, { useContext, useState } from 'react'
import Todo from './Todo'
import { TodoContext } from '../TodoContext';

const Todos = () => {
    const { todos, setTodos } = useContext(TodoContext);

    return (
        <div>
            {todos.map((todo, idx) => (
                <Todo todos={todos} setTodos={setTodos} todo={todo} key={idx} idx={idx} />
            ))}
        </div>
    )
}

export default Todos