import React, { useState } from 'react'

const Todo = ({ todos, setTodos, todo, idx }) => {
    const [editMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState('');

    const statusHandler = () => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos[idx] = { ...todo, isComplete: !prevTodos[idx].isComplete };
            return updatedTodos;
        })
    }

    const editHandler = () => {
        setEditMode(true);
        setEditInput(todo.title);
    }

    const editSubmitHandler = () => {
        setEditMode(false);
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos[idx] = { ...todo, title: editInput };
            return updatedTodos;
        })
    }

    const deleteHandler = () => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter((_, id) => id !== idx);
            return updatedTodos;
        });
    }

    return (
        <div key={idx}>
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={statusHandler}
            />

            {editMode ? (<>
                <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={editSubmitHandler}>Submit</button>
            </>) : (<>
                <p>{todo.title}</p>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </>)}
        </div>
    )
}

export default Todo