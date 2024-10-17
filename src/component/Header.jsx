import React from "react";

export default function Header({ todos }) {
  const openTodos = todos.filter((todo) => !todo.complete).length
  return (
    <header>
      <h1 className="text-gradient">
        You have {openTodos} open 
        {openTodos ? " tasks " : " task "}.
      </h1>
    </header>
  );
}
