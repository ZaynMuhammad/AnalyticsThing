import { useState } from 'react'

import { Header, Products } from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='grid-container'>
      <Header count={count} />
      <Products />
      <footer>footer</footer>
    </div>
  )
}

export default App