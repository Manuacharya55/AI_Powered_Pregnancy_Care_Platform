import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import CommentForm from "../../components/Blog/CommentForm";

const ViewSingleBlog = () => {
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();
  const [blogs, setBlogs] = useState([]);

  const { id } = useParams();

  const fetchBlogs = async () => {
    if (!user?.token || !user || !id) return;

    const response = await handleRequest({
      method: "get",
      url: `blog/${id}`,
      token: user?.token,
    });

    setBlogs(response.data);
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
      <div id="blog-holder">
        <Back />
        <div id="container">
          <h1>{blogs?.title}</h1>

          <div id="image-holder">
            <img src={blogs?.image} alt="" />
          </div>

          <div
            id="blog-description"
            dangerouslySetInnerHTML={{ __html: blogs?.description }}
          ></div>
          <div id="details">
            <div id="user-profile">
              <img src={blogs?.author?.avatar} alt="" />
            </div>
            <div id="user-description">
              <span>{blogs?.author?.name}</span>
              <span>{blogs?.createdAt?.split("T")[0]}</span>
              <span>{blogs?.author?.email}</span>
            </div>
          </div>
        </div>

        <CommentForm id={blogs._id} usercomments={blogs.comments} />
      </div>
    </div>
  );
};

export default ViewSingleBlog;
