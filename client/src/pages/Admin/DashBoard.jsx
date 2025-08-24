import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useAuth} from "../../context/AuthContext"
import useAxios from "../../hooks/useAxios"
import Tile from '../../components/Admin/Tile';
import Latest from '../../components/Admin/Latest';

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
            <div id="container">
                <span id="title">Dashboard</span>
                <div id="dashboard">
                    <div id="tile-holder">
                        <Tile count={data?.totalUsers} text={"Total Users"}/>
                        <Tile count={data?.totalBlogs} text={"Total Blogs"}/>
                        <Tile count={data?.totalProgram} text={"Total Programs"}/>
                        <Tile count={data?.totalRevenue} text={"Total Revenue"}/>
                    </div>
                    <div id="latest-holder">
                        <Latest title="Last User" name={data?.latestUser.name} data={data?.latestUser?.email}/>

                        <Latest title="Last Blog" name={data?.latestBlog.title} data={data?.latestBlog.createdAt.split("T")[0]}/>

                        <Latest title="Last Program" name={data?.latestProgram.name} data={data?.latestProgram.price}/>

                        <Latest title="Last Payment" name={data?.latestPayment.amount} data={data?.latestPayment.createdAt.split("T")[0]}/>

                    </div>
                </div>
            </div>
        </div>
    )

     
}

export default DashBoard