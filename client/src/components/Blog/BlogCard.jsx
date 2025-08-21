import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
      <div id="card">
        <div id="card-img">
          <img src={data.image} alt="" />
        </div>
        <h3>{data.title}</h3>
        <div id="details">
          <div id="user-profile">
            <img src={data.author?.avatar} alt="" id="profile-img" />
          </div>
          <div id="user-description">
            <span>{data.author?.name}</span>
            <span>{data.createdAt.split("T")[0]}</span>
          </div>
        </div>
      </div>
  );
};

export default BlogCard;
