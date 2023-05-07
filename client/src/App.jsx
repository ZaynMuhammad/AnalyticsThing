import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function handleTestGetRequest() {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <h1>  Hello Vite + React! </h1>
      <button onClick={handleTestGetRequest}>Click me!</button>
    </>
  )
}

export default App
