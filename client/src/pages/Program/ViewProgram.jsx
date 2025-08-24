import React from "react";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import Form from "../../components/Form";
import { PROGRAM } from "../../utils/placholder";
import Card from "../../components/Card";

const ViewProgram = () => {
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
      url: "/program",
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

  //   ADD PROGRAM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.token) return;

    const response = await handleRequest({
      method: "post",
    });
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setProgram((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //   HANDLE IMAGE CHNAGE
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Wrap your upload function with toast.promise
    const url = await toast.promise(
      handleUpload(file), // <-- your async upload function
      {
        loading: "Uploading file...",
        success: "File uploaded successfully 🎉",
        error: "Upload failed ❌",
      }
    );

    setImage(url);
  };
  return loading ? (
    "Loading..."
  ) : (
    <div id="blog">
      <div id="container">
        <span id="title">Explore What’s New for You</span>
      </div>
      <div id="container">
        {data &&
          data.map((curEle, index) => (
            <Card
            profile={curEle.avatar}
            title={curEle.name}
            description={curEle.description}
            price={curEle.price}
            button="buy now"
            handleClick={() => navigate(`/checkout/${curEle._id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default ViewProgram;
