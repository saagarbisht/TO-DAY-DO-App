import React from 'react'

export default function Header({todos}) {
  return (
    <header>
      <h1 className='text-gradient'>You have {todos.length} open {todos.length ? "tasks" : "task"}.</h1>
    </header>
  )
}
