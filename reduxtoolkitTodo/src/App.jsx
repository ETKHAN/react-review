import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddtTodo'

function App() {

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
