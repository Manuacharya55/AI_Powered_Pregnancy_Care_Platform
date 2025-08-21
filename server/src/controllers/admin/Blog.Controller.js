import mongoose from "mongoose";
import Blog from "../../models/Blog.Model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiSuccess } from "../../utils/ApiSuccess.js";
import { AsyncHandler } from "../../utils/AsyncHandler.js";

// fetch all blogs - (Active or Inactive)
export const getAllBlog = AsyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  const blogs = await Blog.find().skip(skip).limit(limit);

  res
    .status(200)
    .json(new ApiSuccess(200, "All Blogs Fetched Successfully", blogs));
});

// fetch single blog
export const fetchSingleBlog = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid ID");
  }

  const blog = await Blog.findById(id).populate("author");

  if (!blog) {
    throw new ApiError(400, "No Such Blogs");
  }

  res.status(200).json(new ApiSuccess(200, "Blog Fetched Successfully", blog));
});

// delete blog
export const deleteBlog = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Not A Valid ID");
  }

  const existingBlog = await Blog.findById(id);

  if (!existingBlog) {
    throw new ApiError(200, "No Such Blogs");
  }

  const blog = await Blog.findByIdAndUpdate(id,
    {$set : { isActive: !existingBlog.isActive }},
    { new: true }
  );
  res.status(200).json(new ApiSuccess(200, "Blog Deleted Successfully",blog));
});
