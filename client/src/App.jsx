import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
