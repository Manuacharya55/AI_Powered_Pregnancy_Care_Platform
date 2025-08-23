import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleRequest = async (axiosData) => {
      const { method, url, data, token } = axiosData;
    setLoading(true)
    try {
      const response = await axios({
        method: method.toLowerCase() || "get",
        baseURL: "http://localhost:4000/api/v1/",
        url: url,
        data: data,
        headers: {
          "Content-Type": "application/json",
          "auth-token": token || '',
        },
      });

      if(response.data.success){
        console.log(response.data)
        setResponse(response.data)
        return response.data
      }else{
        setError(response.data.message)
      }
    } catch (error) {
        console.log(error.message)
        setError(error.message)
    }finally{
        setLoading(false)
    }
  };

  return {response,error,loading,handleRequest}
};

export default useAxios;
