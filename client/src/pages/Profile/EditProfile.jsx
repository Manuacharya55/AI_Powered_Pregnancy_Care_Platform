import React from "react";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import Image from "../../components/Image";
import { handleUpload } from "../../utils/Appwrite";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Back from "../../components/Back";

const EditProfile = () => {
  const { loading, error, response, handleRequest } = useAxios();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();
  const { user, setLocalStorage } = useAuth();

  const fetchData = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "get",
      url: "auth/profile",
      data: "",
      token: user?.token,
    });
    setData(response.data);
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Wrap your upload function with toast.promise
    const url = await toast.promise(handleUpload(file), {
      loading: "Uploading file...",
      success: "File uploaded successfully 🎉",
      error: "Upload failed ❌",
    });

    setAvatar(url);
  };

  const handleSubmit = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "patch",
      url: "auth/profile",
      data: { ...data, avatar },
      token: user?.token,
    });
    console.log(response);
    setLocalStorage(response.data);
    navigate(-1);
  };

  const handleTextChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    if (user?.token) {
      fetchData();
      console.log("fetched");
    }
  }, [user?.token]);

  return loading ? (
    "loading"
  ) : (
    <div id="blog">

      <div id="container">
        <span id="title">
          <Back/>
          Edit Profile
          </span>
        <div id="edit-card">
          <form onSubmit={handleSubmit}>
            <Image image={data?.avatar} setImage={handleChange} />
            <input
              type="text"
              name="name"
              id="name"
              value={data?.name}
              onChange={handleTextChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={data?.email}
              onChange={handleTextChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              value={data?.password}
              onChange={handleTextChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Processing" : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
