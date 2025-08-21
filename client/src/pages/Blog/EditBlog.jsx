import React, { useEffect, useState } from "react";
import BlogEditor from "../../components/Blog/BlogEditor";
import { handleUpload } from "../../utils/Appwrite";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { user } = useAuth();
  const { response, error, loading, handleRequest } = useAxios();

  const{id} = useParams();


  const fetchData = async () => {
    if (!user?.token) return;

    await handleRequest({
      method: "get",
      url: `blog/${id}`,
      token: user?.token,
    });

   setTitle(response?.title)
   setImage(response?.image)
   setDescription(response?.description)
  };

  useEffect(()=>{
    if(user?.token){
        fetchData()
    }
  },[user?.token]);

  useEffect(() => {
  if (response) {
    setTitle(response.title);
    setImage(response.image);
    setDescription(response.description);
  }
}, [response]);


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
      method: "patch",
      url: `blog/${id}`,
      data: { title, description, image },
      token: user?.token,
    });

    console.log(response);
    if(!error) toast.success("done")
  };

  return (
    <div id="blog">
      <div id="blog-holder">
        <span id="title" style={{ textAlign: "center" }}>
          Refine your thoughts here.
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

export default EditBlog;
