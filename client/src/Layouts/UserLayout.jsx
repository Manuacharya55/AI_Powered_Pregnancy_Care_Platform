import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { RiHomeHeartLine } from "react-icons/ri";
import { TbBrandMiniprogram } from "react-icons/tb";
import { BsChatQuote } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";
const UserLayout = ({children}) => {

const USERNAVBAR = [
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

  return (
    <div id="wrapper">
        <div id="dot"></div>
        <div id="sub-wrapper">
            <NavBar array={USERNAVBAR}/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default UserLayout