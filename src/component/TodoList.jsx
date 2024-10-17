import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, selectedTab, handleDeleteTodo, handleCompleteTodo}) {
  const filteredTodos =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);
  return (
    <>
      {filteredTodos.map((todo, idx) => (
        <TodoCard
          key={idx}
          todo={todo}
          todoIndex={todos.findIndex(value => value.input === todo.input)}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </>
  );
}
