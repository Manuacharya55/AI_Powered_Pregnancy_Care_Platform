import React, { useState } from "react";
import BlogEditor from "../../components/Blog/BlogEditor";
import { handleUpload } from "../../utils/Appwrite";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { user } = useAuth();

const { response, error, loading, handleRequest } = useAxios();

  const handleChange = async (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      return;
    }

    if (!user?.token) {
      return;
    }

   await handleRequest({
      method: "post",
      url: "blog/",
      data: {title,description,image},
      token: user?.token,
    });

    console.log(response)

  };

  return (
    <div id="blog">
      <div id="dot"></div>
      <div id="blog-holder">
        <span id="title" style={{ textAlign: "center" }}>
          What’s on Your Mind Today?
        </span>
        <div id="container">
          <BlogEditor
            title={title}
            description={description}
            image={image}
            setTitle={setTitle}
            setDescription={setDescription}
            setImage={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
          {error && error}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
