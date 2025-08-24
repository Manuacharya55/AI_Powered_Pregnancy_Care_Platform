import React from 'react'
import useAxios from '../../hooks/useAxios'
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../../components/Program/Accordion';
import Back from '../../components/Back';

const ProgramAnalytics = () => {
  const {loading,error,response,handleRequest} = useAxios();
  const {user} = useAuth();
  const [data,setData] = useState();
  const {id} = useParams()

const fetchProgram =async()=>{
  if(!user?.token || !id) return


  const response = await handleRequest({
    method:'get',
    url:`program/analytics/${id}`,
    data:'',
    token:user?.token
  })

  setData(response.data)
}

  useEffect(()=>{
    if(user?.token){
      fetchProgram();
    }
  },[user?.token,id])

  return loading ?"Loading..." : (
    <div id="blog">
      <div id="container">
        <span id="title">
          <Back/>
          Program Analytics</span>

        <div id="week-holder">
          {data?.program.weeks.map(curele => (
            <Accordion weekNumber={curele.weekNumber} details={curele.details}/>
          )

          )}
        </div>
      </div>
    </div>
  )
}

export default ProgramAnalytics