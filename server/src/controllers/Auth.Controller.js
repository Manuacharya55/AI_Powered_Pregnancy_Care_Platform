import mongoose from "mongoose";
import User from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiSuccess } from "../utils/ApiSuccess.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

export const registerUser = AsyncHandler(async (req, res) => {
  const { name, avatar, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All Fields Are Required");
  }

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    throw new ApiError(401, "User Already Exists");
  }

  const user = await User.create({
    name,
    avatar,
    email,
    password,
  });

  const token = await user.generateToken();
  const userObj = user.toObject();

  res
    .status(200)
    .json(
      new ApiSuccess(200, "User Registered Successfully", { ...userObj, token })
    );
})

export const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All Fields Are Required");
  }

  const existingUser = await User.findOne({ email: email }).select("+password");

  if (!existingUser) {
    throw new ApiError(400, "No Such User Exists");
  }

  const isMatch = await existingUser.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const token = await existingUser.generateToken();
  const userObj = existingUser.toObject();
  delete userObj.password;

  res
    .status(200)
    .json(
      new ApiSuccess(200, "User LoggedIn Successfully", { ...userObj, token })
    );
});

export const getProfile = AsyncHandler(async (req, res) => {
  const { _id } = req.user;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    throw new ApiError(400, "Invalid ID");
  }

  const existingUser = await User.findById(_id);

  if (!existingUser) {
    throw new ApiError(400, "No Such User Exists");
  }

  res.status(200).json(new ApiSuccess((200, "User Fetched Successfully", existingUser)));
});

export const updateUser = AsyncHandler(async (req, res) => {
  const { name, avatar, email, password } = req.body;
  const { _id } = req.user;

  const existingUser = await User.findById(_id).select("+password");

  if (!existingUser) {
    throw new ApiError(401, "No User Exists");
  }

  if (name) existingUser.name = name;
  if (avatar) existingUser.avatar = avatar;

  if (email && email != existingUser.email) {

    const user = await User.findOne({ email });
    if (user) throw new ApiError(400, "Email Already Exists");

    existingUser.email = email;
  }
  if (password) existingUser.password = password;

  await existingUser.save();
  const token = await existingUser.generateToken();
  const userObj = existingUser.toObject();
  delete userObj.password;

  res
    .status(200)
    .json(
      new ApiSuccess(200, "User Updated Successfully", { ...userObj, token })
    );
});
