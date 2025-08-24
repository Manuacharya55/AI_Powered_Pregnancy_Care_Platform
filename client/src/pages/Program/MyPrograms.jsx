import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import Card from '../../components/Card';
import Back from '../../components/Back';

const MyPrograms = () => {
const { loading, response, error, handleRequest } = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [program, setProgram] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState();

  const fetchData = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "get",
      url: "program/my-programs",
      data: "",
      token: user?.token,
    });
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    if (user?.token) {
      fetchData();
    }
  }, [user?.token]);

  return loading ? (
    "Loading..."
  ) : (
    <div id="blog">
      <div id="container">
        <span id="title">
            <Back />
            Learning never stops</span>
      </div>
      <div id="container">
        {data &&
          data.map((curEle, index) => (
            <Card
            profile={curEle.avatar}
            title={curEle.name}
            description={curEle.description}
            button="continue learning"
            handleClick={() => navigate(`/program/${curEle._id}`)}
            />
          ))}
      </div>
    </div>
  );
}

export default MyPrograms