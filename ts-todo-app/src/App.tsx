import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import Todo from "./models/Todo"  // Todo is a custom made object
import { useState } from "react"

const App = () => {
  // const items = ['hi', 'hlo', 'yo']   // lots of time we dont have only single value. so instead of using just string lets add todo and its id in a object using class

  // let items = [new Todo('hi'), new Todo('hlo'), new Todo('yo')]  // instead of array use useState

  // const [todos, setTodos] = useState([]);  // ❗ts lock this todos as empty array and nothing will get insert in this

  const [todos, setTodos] = useState<Todo[]>([]);   // now it will be of type Todo and its initial value will be empty array

  const addTodoHandler = (text: string) => {  // this function expects a text 
    const newTodo = new Todo(text);
    setTodos(todos => [newTodo, ...todos])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </>
  )
}

export default App