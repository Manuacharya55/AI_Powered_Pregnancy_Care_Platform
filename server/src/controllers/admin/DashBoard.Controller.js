import mongoose from "mongoose";
import Blog from "../../models/Blog.Model.js";
import User from "../../models/User.model.js";
import Payment from "../../models/Payment.Model.js";
import Program from "../../models/Program.Model.js";
import { ApiSuccess } from "../../utils/ApiSuccess.js";
import { AsyncHandler } from "../../utils/AsyncHandler.js";

// fetch dashboard things
export const fetchDashboard = AsyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalPayment = await Payment.countDocuments();
  const totalProgram = await Program.countDocuments();
  const totalBlogs = await Blog.countDocuments();

  const totalRevenue = await Payment.aggregate([
    {
      $group: {
        _id: null, // group all docs together
        total: { $sum: "$amount" },
      },
    },
  ]);

  const latestUser = await User.findOne().sort({ timestamps: -1 });
  const latestProgram = await Program.findOne().sort({ timestamps: -1 });
  const latestPayment = await Payment.findOne().sort({ timestamps: -1 });
  const latestBlog = await Blog.findOne().sort({ timestamps: -1 });

  const data = {
    totalUsers,
    totalPayment,
    totalProgram,
    totalBlogs,
    totalRevenue: totalRevenue[0]?.total || 0,
    latestUser,
    latestProgram,
    latestPayment,
    latestBlog,
  };

  res
    .status(200)
    .json(new ApiSuccess(200, "Dashboard Fetched SuccessFully", data));
});

// fetch users
export const fetchUsers = AsyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const skip = (page - 1) * limit;

  const users = await User.find().limit(limit).skip(skip);

  res.status(200).json(new ApiSuccess(200, "All Users Fetched", users));
});

// fetch all payments
export const fetchPayments = AsyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const skip = (page - 1) * limit;

  const payment = await Payment.find()
    .limit(limit)
    .skip(skip)
    .populate([
      {
        path: "program",
        model: "Program",
      },
      {
        path: "user",
        model: "User",
      },
    ]);

  res.status(200).json(new ApiSuccess(200, "All Users Fetched", payment));
});
