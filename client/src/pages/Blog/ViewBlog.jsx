import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { RiH1 } from "react-icons/ri";
import BlogCard from "../../components/Blog/BlogCard";
import { NavLink } from "react-router-dom";

const ViewBlog = () => {
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    if (!user?.token || !user) return;

    await handleRequest({
      method: "get",
      url: "blog/",
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

  return (
    <div id="blog">
      <div id="dot"></div>
      <div id="blog-holder">
        <span id="title" style={{ marginBottom: "20px", textAlign: "center" }}>
          See what’s on everyone’s mind
        </span>

        {response?.length > 0 ? (
          <div id="container">
            {response.map((curele) => (
              <NavLink to={`/blog/${curele._id}`} id="blog-card">
                <BlogCard key={curele._id} data={curele} />
              </NavLink>
            ))}
          </div>
        ) : (
          "No Blogs Yet"
        )}
      </div>
    </div>
  );
};

export default ViewBlog;
