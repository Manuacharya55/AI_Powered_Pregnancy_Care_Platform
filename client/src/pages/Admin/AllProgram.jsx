import React from "react";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import Form from "../../components/Form";
import { PROGRAM } from "../../utils/placholder";
import toast from "react-hot-toast";
import { handleUpload } from "../../utils/Appwrite";
import Card from "../../components/Card";

const AllProgram = () => {
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
      url: "program/",
      data: { ...program, avatar: image },
      token: user?.token,
    });
   setData((prev) => {
      return [response.data, ...prev];
    });

    setProgram({
      name: "",
      price: "",
      description: "",
    });

    setImage('')
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
        <span id="title">
          Launch New Program
        </span>

        <div id="program-details">
          <Image image={image} setImage={handleImageChange} />
          <Form
            fields={PROGRAM}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            data={program}
            loading={loading}
          />
        </div>

        <span id="title">
          View All Programs
        </span>
      </div>

      <div id="container">
        {data &&
          data.map((curEle, index) => (
              <Card 
              profile={curEle.avatar}
              title={curEle.name}
              description={curEle.description}
              price={curEle.price}
              button={"view details"}
              handleClick={() => navigate(`/analytics/${curEle._id}`)}
              />
          ))}
      </div>
    </div>
  );
};

export default AllProgram;
