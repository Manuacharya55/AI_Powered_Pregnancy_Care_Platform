import React from "react";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/Profile/ProfileCard";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BlogCard from "../../components/Blog/BlogCard";
import { useAuth } from "../../context/AuthContext";

const ViewProfile = () => {
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();
  const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
  const fetchBlogs = async () => {
    if (!user?.token || !user) return;

    const response = await handleRequest({
      method: "get",
      url: "blog/my-blog",
      token: user?.token,
    });

    setBlogs(response.data)
  };

  const handleEdit = (id) =>{
    navigate(`/edit-blog/${id}`)
  }

  const handleDelete = async(id) => {
    if(!user?.token) return

    const response = await handleRequest({
      method : 'delete',
      url:`blog/${id}`,
      data:'',
      token:user?.token
    })

  }
  useEffect(()=>{
    if(user?.token){
        fetchBlogs()
    }
  },[user?.token])

  return (
    <div id="blog">
      <div id="container">
        <div id="profile-card-holder">
          <ProfileCard/>
        </div>
        <div id="profile-blog-holder">
          <span id="title">My Blogs</span>
          <div id="container">
            {blogs?.length > 0 ? (
          <div id="container">
            {blogs.map((curele) => (
                <BlogCard key={curele._id} data={curele} isAuthor={true} handleEdit={handleEdit} handleDelete={handleDelete}/>
            ))}
          </div>
        ) : (
          "No Blogs Yet"
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
