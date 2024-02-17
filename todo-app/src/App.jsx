import React, { useContext, useEffect, useState } from 'react'
import Todos from './Components/Todos';
import Form from './Components/Form';
import { TodoContext } from './TodoContext';

const App = () => {
  const { todos, setTodos, input, setInput } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(savedTodos);
  }, []);

  return (
    <div>
      <Form />
      <Todos />
    </div>
  )
}

export default App