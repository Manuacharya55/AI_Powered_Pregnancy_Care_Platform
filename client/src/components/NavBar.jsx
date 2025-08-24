import React from 'react'
// import { USERNAVBAR } from '../utils/placholder'
import { NavLink, useNavigate } from 'react-router-dom'

import { RiHomeHeartLine } from "react-icons/ri";
import { TbBrandMiniprogram } from "react-icons/tb";
import { BsChatQuote } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";
import { useAuth } from '../context/AuthContext';

export const USERNAVBAR = [
  {
    icon: <RiHomeHeartLine />,
    text: "home",
    link: "/home",
  },
  {
    icon: <TbBrandMiniprogram />,
    text: "program",
    link: "/programs",
  },
  {
    icon: <BsChatQuote />,
    text: "chat",
    link: "/chat-with-ai",
  },

  {
    icon: <RiBloggerLine />,
    text: "blog",
    link: "/blog",
  },
  {
    icon: <RiBloggerLine />,
    text: "profile",
    link: "/profile",
  },
];

const NavBar = ({array}) => {
  const {clearLocalStorage} = useAuth();
  const navigate = useNavigate()
  return (
    <div id="navbar">
        <nav>
            <h1 id="logo">Logo</h1>

            <ul>
                {array.map(curEle => <li>
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