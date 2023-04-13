import React, { useRef } from 'react'
import classes from './addTodo.module.css'

const AddTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {    // its syntax to define a props which is a function which expects a string value on call and its return type is void bcs we are not returning anything

    const inputRef = useRef<HTMLInputElement>(null);    // need to declare that which type of dom element is referred to. and need to provide a starting value as null ie undefined

    // console.log(inputRef.current?.value);  // here the value of inputRef will be undefined

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        // const enteredValue = inputRef.current?.value;   // ? indicates that there might be a null value. therefore enteredValue have a type string | undefined.

        let enteredValue = inputRef.current!.value    // if we are 100% sure that the value will not be null then use ! mark. so it ensures that the value will be not null. therefore the type of enteredValue will be not null

        // console.log(enteredValue);  // here the value of inputRef will be any string typed in input

        if (enteredValue.trim() === '') {
            return;
        }

        onAddTodo(enteredValue);

        // new Todo(inputRef.current.value);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="">Add Todo</label>
            <input type="text" ref={inputRef} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo