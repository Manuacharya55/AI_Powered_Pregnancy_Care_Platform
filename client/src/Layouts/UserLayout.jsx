import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const UserLayout = ({children}) => {
  return (
    <div id="wrapper">
        <div id="dot"></div>
        <div id="sub-wrapper">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default UserLayout