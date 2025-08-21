import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Image from "../Image";

const BlogEditor = ({
  title,
  description,
  image,
  setTitle,
  setImage,
  setDescription,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div id="editor">
        <input
          type="text"
          placeholder="Enter Yout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div id="details">
          <Image image={image} setImage={setImage} />

          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            style={{
              width: "calc(100% - 300px)",
              height: "300px",
              border: "1px solid var(--primary-color)",
              color: "white",
              borderRadius: "5px",
            }}
          />
        </div>
        <button id="upload" type="submit" disabled={loading}>
          {loading ? "processing..." : "add blog"}
        </button>
      </div>
    </form>
  );
};

export default BlogEditor;
