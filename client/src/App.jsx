import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

import AddBlog from './pages/Blog/AddBlog'
import EditBlog from './pages/Blog/EditBlog'
import ViewBlog from './pages/Blog/ViewBlog'
import ViewSingleBlog from './pages/Blog/ViewSingleBlog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<HomePage/>} />

        <Route path="/add-blog" element={<AddBlog/>} />
        <Route path="/edit-blog/:id" element={<EditBlog/>} />
        <Route path="/blog" element={<ViewBlog/>} />
        <Route path="/blog/:id" element={<ViewSingleBlog/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
