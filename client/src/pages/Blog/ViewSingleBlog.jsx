import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";


const ViewSingleBlog = () => {
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();
  const [blogs, setBlogs] = useState([]);

  const { id } = useParams();

  const fetchBlogs = async () => {
    if (!user?.token || !user || !id) return;

    await handleRequest({
      method: "get",
      url: `blog/${id}`,
      token: user?.token,
    });
  };

  useEffect(() => {
    if (user?.token) {
      fetchBlogs();
    }
  }, [user?.token]);

  useEffect(() => {
    response && console.log(response);
  }, [response]);

  if (loading) return "Loading.....";

  if (error) return error;

  return (
    <div id="blog">
      <div id="dot"></div>
      <div id="blog-holder">
        <Back/>
        <div id="container">
          <h1>{response?.title}</h1>

          <div id="image-holder">
            <img src={response?.image} alt="" />
          </div>

          <div
            id="blog-description"
            dangerouslySetInnerHTML={{ __html: response?.description }}
          ></div>
          <div id="details">
            <div id="user-profile">
              <img src={response?.author?.avatar} alt="" />
            </div>
            <div id="user-description">
              <span>{response?.author?.name}</span>
              <span>{response?.createdAt.split("T")[0]}</span>
              <span>{response?.author?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleBlog;
