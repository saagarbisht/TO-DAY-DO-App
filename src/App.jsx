import Header from "./component/Header";
import Tabs from "./component/Tabs";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import "./index.css";
import "./fanta.css";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(todoInput) {
    const newTodos = [...todos, { input: todoInput, complete: false }];
    setTodos(newTodos);
    handleSaveData(newTodos)
  }

  function handleCompleteTodo(currentTodoIndex) {
    const newTodos = [...todos];
    const completedTodo = todos[currentTodoIndex];
    completedTodo["complete"] = true;
    newTodos[(currentTodoIndex = completedTodo)];
    setTodos(newTodos);
    handleSaveData(newTodos)
  }

  function handleDeleteTodo(currentTodoIndex) {
    const newTodos = todos.filter(
      (todo, todoIndex) => todoIndex !== currentTodoIndex
    );
    setTodos(newTodos);
    handleSaveData(newTodos)
  }

  function handleSaveData(currentTodos){
    localStorage.setItem("todo-app",JSON.stringify({todos : currentTodos}))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem("todo-app")) {return}
    const db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos)
  },[])

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
