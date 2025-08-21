import React from 'react'
// import { USERNAVBAR } from '../utils/placholder'
import { NavLink } from 'react-router-dom'

import { RiHomeHeartLine } from "react-icons/ri";
import { TbBrandMiniprogram } from "react-icons/tb";
import { BsChatQuote } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";

export const USERNAVBAR = [
  {
    icon: <RiHomeHeartLine />,
    text: "home",
    link: "/home",
  },
  {
    icon: <TbBrandMiniprogram />,
    text: "program",
    link: "/program",
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
];

const NavBar = () => {
  return (
    <div id="navbar">
        <nav>
            <h1 id="logo">Logo</h1>

            <ul>
                {USERNAVBAR.map(curEle => <li>
                    <NavLink to={curEle.link}>
                    {curEle.icon}
                    {curEle.text}
                    </NavLink>
                </li>)}
            </ul>
        </nav>
    </div>
  )
}

export default NavBar