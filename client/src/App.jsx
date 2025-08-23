import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

import AddBlog from './pages/Blog/AddBlog'
import EditBlog from './pages/Blog/EditBlog'
import ViewBlog from './pages/Blog/ViewBlog'
import ViewSingleBlog from './pages/Blog/ViewSingleBlog'
import ViewProfile from './pages/Profile/ViewProfile'
import EditProfile from './pages/Profile/EditProfile'
import DashBoard from './pages/Admin/DashBoard'
import AllUsers from './pages/Admin/AllUsers'
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


        <Route path="/profile" element={<ViewProfile/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />


        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/all-users" element={<AllUsers/>} />
        <Route path="/all-payments" element={<AllUsers/>} />
        <Route path="/all-programs" element={<AllUsers/>} />
        <Route path="/all-blogs" element={<AllUsers/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
