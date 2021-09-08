import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoList from "./components/TodoList";
import Form from "./components/Form";

function App() {

  const [todo, setTodo] = useState([]);

  function addTodo(newTodo) {
    setTodo([...todo, newTodo]);
  }


  function handleTodo(x) {
    const concluidas = todo.filter(todo =>  {
      return todo !== x
    })
    setTodo([...concluidas])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Form addTodo={addTodo}></Form>
        <ToDoList todos={todo} handleTodo={handleTodo}></ToDoList>

      </header>
    </div>
  );
}

export default App;
