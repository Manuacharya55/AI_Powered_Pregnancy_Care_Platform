import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { RiH1 } from "react-icons/ri";
import BlogCard from "../../components/Blog/BlogCard";
import { NavLink } from "react-router-dom";

const ViewBlog = () => {
  const [page, setPage] = useState(1);
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    if (!user?.token || !user) return;

    const response = await handleRequest({
      method: "get",
      url: `blog?page=${page}`,
      token: user?.token,
    });

    setBlogs(response.data);
  };

  useEffect(() => {
    if (user?.token) {
      fetchBlogs();
    }
  }, [user?.token,page]);

  useEffect(() => {
    response && console.log(response);
  }, [response]);

  if (loading) return "Loading.....";

  return (
    <div id="blog">
      <div id="blog-holder">
        <div id="container">
          <span id="title">See what’s on everyone’s mind</span>
        </div>

        {blogs?.length > 0 ? (
          <div id="container">
            {blogs.map((curele) => (
              <NavLink to={`/blog/${curele._id}`} id="blog-card">
                <BlogCard key={curele._id} data={curele} />
              </NavLink>
            ))}
          </div>
        ) : (
          "No Blogs Yet"
        )}
        <div id="btn-holder">
        {page > 1 && (
          <button
            id="pg-btn"
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            previous
          </button>
        )}
        {blogs.length == 12 && (
          <button
            id="pg-btn"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            next
          </button>
        )}
      </div>
      </div>

    </div>
  );
};

export default ViewBlog;
