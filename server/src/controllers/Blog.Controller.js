import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import Blog from "../models/Blog.Model.js";
import { ApiSuccess } from "../utils/ApiSuccess.js";

// fetch all blogs
export const fetchAllBlogs = AsyncHandler(async (req, res) => {
  const { _id } = req.user;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const skip = (page - 1) * 10;

  const blogs = await Blog.find({ author: { $ne: _id }, isActive: true })
    .skip(skip)
    .limit(limit);

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

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(400, "No Such Blogs");
  }

  res.status(200).json(new ApiSuccess(200, "Blog Fetched Successfully", blog));
});

// fetch blog by single user
export const fetchUserBlogs = AsyncHandler(async (req, res) => {
  const { _id } = req.user;

  const blogs = await Blog.find({ author: _id });

  res
    .status(200)
    .json(new ApiSuccess(200, "Blogs Fetched Successfully", blogs));
});

// add blog
export const addBlog = AsyncHandler(async (req, res) => {
  const { image, title, description } = req.body;
  const { _id } = req.user;

  if (!image || !title || !description) {
    throw new ApiError(400, "All Fields Are Mandatory");
  }

  const blog = await Blog.create({
    image,
    title,
    description,
    author: _id,
  });

  res.status(200).json(new ApiSuccess(200, "Blog create Successfully", blog));
});

// edit blog
export const editBlog = AsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const { image, title, description } = req.body;

  if (!image || !title || !description) {
    throw new ApiError(400, "All Fields Are Mandatory");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid ID");
  }

  const existingblog = await Blog.findById(id);

  if (!existingblog.author == _id) {
    throw new ApiError(403, "Forbidden");
  }

  const blog = await Blog.findByIdAndUpdate(
    id,
    {
      $set: {
        image,
        title,
        description,
      },
    },
    { new: true }
  );

  res.status(200).json(new ApiSuccess(200, "Blog Updated Successfully", blog));
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

  if (existingBlog.author !== _id) {
    throw new ApiError(400, "Forbidden");
  }

  const blog = await Blog.findByIdAndUpdate(
    id,
    { $set: { isActive: !existingBlog.isActive } },
    { new: true }
  );

  res.status(200).json(new ApiSuccess(200, "Blog Deleted Successfully", blog));
});
