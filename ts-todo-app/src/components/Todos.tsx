import React from 'react'
import TodoItem from './TodoItem'
import Todo from '../models/Todo'
import classes from './todos.module.css'

// Direct using props
const Todos: React.FC<{ items: Todo[], onDeleteTodo: (id: number) => void }> = ({ items, onDeleteTodo }) => {     // we have our custom data type created in a class having text and id properties so Todo[] means that we have array of Todo type
    return (
        <ul className={classes.todos}>{
            items.map((item) => (
                <TodoItem key={item.id} item={item} onDeleteTodo={onDeleteTodo} />
            ))
        }</ul>
    )
}

// Using props using props keyword
// const Todos: React.FC<{ items: string[] }> = (props) => {
//     return (
//         <ul>{
//             props.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//             ))
//         }</ul>
//     )
// }

export default Todos