import HomePage from "../../models/HomePage.Model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiSuccess } from "../../utils/ApiSuccess.js";
import { AsyncHandler } from "../../utils/AsyncHandler.js";

export const addHomePage = AsyncHandler(async (req, res) => {
  const { image, text } = req.body;

  if (!image || !text) {
    throw new ApiError(400, "All Fields Are Mandatory");
  }

  const data = await HomePage.create({
    image,
    text,
  });

  res.status(200).json(new ApiSuccess(200, "Data Added Successfully", data));
});

export const editHomePage = AsyncHandler(async (req, res) => {
  const { image, text } = req.body;
  const { id } = req.params;

  if (!image || !text) {
    throw new ApiError(400, "All Fields Are Mandatory");
  }

  const data = await HomePage.findByIdAndUpdate(id, { $set: { image, text } });

  if (!data) {
    throw new ApiError(400, "No Such Data");
  }

  res.status(200).json(new ApiSuccess(200, "Data Updated Successfully", data));
});

export const deleteHomePage = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await HomePage.findByIdAndDelete(id);

  if (!data) {
    throw new ApiError(400, "No Such Data");
  }
  res.status(200).json(new ApiSuccess(200, "Data Deleted Successfully", data));
});

export const fetchHomePage = AsyncHandler(async (req, res) => {
  const data = await HomePage.findOne().sort({ timestamps: -1 });
  res.status(200).json(ApiSuccess(200, "Data Fetched Successfully", data));
});
