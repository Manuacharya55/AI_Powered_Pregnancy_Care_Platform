import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useAuth} from "../../context/AuthContext"
import useAxios from "../../hooks/useAxios"
import Tile from '../../components/Admin/Tile';

const DashBoard = () => {
    const [data,setData] = useState();
    const {loading,response,error,handleRequest} = useAxios();
    const {user} = useAuth()

    const fetchDashboard = async () =>{
        if(!user?.token) return

        const response = await handleRequest({
            method : 'get',
            url : 'admin/dashboard',
            data : '',
            token : user?.token
        })

        setData(response?.data)
        console.log(response?.data)
    }

    useEffect(()=>{
        if(user?.token){
            fetchDashboard()
        }
    },[user?.token])

    return loading ? "loading...." : (
        <div id="blog">
            <div id="dot"></div>
            <div id="container">
                <span id="title" style={{
                    textAlign:"center"
                }}>Dashboard</span>
                <div id="dashboard">
                    <div id="tile-holder">
                        <Tile count={data?.totalUsers} text={"Total Users"}/>
                        <Tile count={data?.totalBlogs} text={"Total Blogs"}/>
                        <Tile count={data?.totalProgram} text={"Total Programs"}/>
                        <Tile count={data?.totalRevenue} text={"Total Revenue"}/>
                    </div>
                    <div id="latest-holder">
                        <div id="latest">
                            <h3 id='action'>Last User</h3>
                            <p id='lt-title'>Username</p>
                            <p id='lt-res'>manu@email.com</p>
                        </div>
                        <div id="latest">
                            <h3 id='action'>Last Blog</h3>
                            <p id='lt-title'>Title Of blog</p>
                            <p id='lt-res'>Author : Manu</p>
                        </div>
                        <div id="latest">
                            <h3 id='action'>Last Program</h3>
                            <p id='lt-title'>Program Name</p>
                            <p id='lt-res'>Price : price</p>
                        </div>
                        <div id="latest">
                            <h3 id='action'>Last Payment</h3>
                            <p id='lt-title'>Program Name</p>
                            <p id='lt-res'>user : Manu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

     
}

export default DashBoard