import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const newObj = {id : 3, state : false}

  return (
    <>
      <Card cardName="Card  01" obj={newObj}/>
      <Card cardName="Card 02" obj={newObj}/>
    </>
  )
}

export default App
