import React from "react";
import Form from "../Form";
import { COMMENT } from "../../utils/placholder";
import { useState } from "react";
import CommentCard from "./CommentCard";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const CommentForm = ({ id, usercomments }) => {
  const [comment, setComment] = useState("");
  const [commentlist, setCommentList] = useState(usercomments);
  const { error, loading, handleRequest } = useAxios();
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.token) return;
    setComment("");
    const response = await handleRequest({
      method: "post",
      url: `blog/add-comment/${id}`,
      data: { comment },
      token: user?.token,
    });

    toast.success(response.message);

    setCommentList((prev) => [...prev, response.data]);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div id="comment">
      <span id="title">Drop A Comment</span>
      <div id="comment-form">
        <Form
          fields={COMMENT}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          data={comment}
          loading={loading}
        />
        {error && error}
      </div>

      <div id="comment-holder">
        <CommentCard comments={commentlist} />
      </div>
    </div>
  );
};

export default CommentForm;
