import React from 'react'
import Todo from '../models/Todo'
import classes from './todoItem.module.css'

const TodoItem: React.FC<{ item: Todo, onDeleteTodo: (id: number) => void }> = ({ item, onDeleteTodo }) => {  // item is of Todo type

    const itemDeleteHandler = (e: React.MouseEvent) => {
        onDeleteTodo(item.id)
    }

    return (
        <div onClick={itemDeleteHandler} className={classes.item}>
            <p>{item.text}</p>
            <p>{item.date.toString()}</p>
        </div>
    )
}

export default TodoItem