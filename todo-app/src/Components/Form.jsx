import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../TodoContext';

const Form = () => {
    const { setTodos, input, setInput } = useContext(TodoContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos(todos => [...todos, { title: input, isComplete: false }]);
        setInput('');
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default Form