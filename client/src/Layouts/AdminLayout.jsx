import React from 'react'
import { FiUsers } from "react-icons/fi";
import { RiBloggerLine, RiHomeHeartLine } from 'react-icons/ri';
import { MdOutlinePayment } from "react-icons/md";
import { TbBrandMiniprogram } from 'react-icons/tb';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const AdminLayout = ({children}) => {

const ADMINNAVBAR = [
      {
        icon: <RiHomeHeartLine />,
        text: "dashboard",
        link: "/dashboard",
      },
      {
        icon: <FiUsers />,
        text: "users",
        link: "/all-users",
      },
      {
        icon: <MdOutlinePayment />,
        text: "payment",
        link: "/all-payments",
      },
    
      {
        icon: <TbBrandMiniprogram />,
        text: "program",
        link: "/all-programs",
      },
      {
        icon: <RiBloggerLine />,
        text: "blogs",
        link: "/all-blogs",
      },
    ];

  return (
    <div id="wrapper">
        <div id="dot"></div>
        <div id="sub-wrapper">
            <NavBar array={ADMINNAVBAR}/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default AdminLayout