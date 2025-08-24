import React from 'react'
// import { USERNAVBAR } from '../utils/placholder'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext';



const NavBar = ({array}) => {
  const {clearLocalStorage} = useAuth();
  const navigate = useNavigate()
  return (
    <div id="navbar">
        <nav>
            <h1 id="logo">Logo</h1>

            <ul>
                {array.map((curEle,index) => <li key={index}>
                    <NavLink to={curEle.link}>
                    {curEle.icon}
                    {curEle.text}
                    </NavLink>
                </li>)}
            </ul>

            <button onClick={()=>{
              clearLocalStorage()
              navigate("/")
            }}>logout</button>
        </nav>
    </div>
  )
}

export default NavBar