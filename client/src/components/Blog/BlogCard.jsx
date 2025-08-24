import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({
  data,
  isAuthor = false,
  handleEdit = "",
  handleDelete,
}) => {
  return (
    <div className="card background">
      <div className="card-image">
        <img src={data.image} alt="" />
      </div>
      <div className="card-content">
      <span className="sm-title">{data.title}</span>
        {!isAuthor && (
        <div id="details">
          <div id="user-profile">
            <img src={data.author?.avatar} alt="" id="profile-img" />
          </div>
          <div id="user-description">
            <span>{data.author?.name}</span>
            <span>{data.createdAt.split("T")[0]}</span>
          </div>
        </div>
      )}

      {isAuthor && (
        <div className="blog-op">
          <button onClick={()=>handleEdit(data?._id)} className="edit">Edit</button>
          <button className="delete" onClick={()=>handleDelete(data?._id)}>
            Delete
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default BlogCard;
