import mongoose from "mongoose";
import Program from "../../models/Program.Model.js";
import Weeks from "../../models/Weeks.Model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiSuccess } from "../../utils/ApiSuccess.js";
import { AsyncHandler } from "../../utils/AsyncHandler.js";
import { generate } from "../../utils/Gemini.js";
import Payment from "../../models/Payment.Model.js";

export const addProgram = AsyncHandler(async (req, res) => {
  const { avatar, name, price, description } = req.body;

  if (!avatar || !name || !price || !description) {
    throw new ApiError(400, "All Fields Are Mandtory");
  }
  const program = await Program.create({
    avatar,
    name,
    description,
    price,
  });

  const response = await generate(name, description);

 for (let i = 0; i < response.length; i++) {
  const week = await Weeks.create({ ...response[i], program: program._id });
  program.weeks.push(week._id);
}

  const data = await program.save();

  res.send({
    data: data,
  });
});

export const getProgram = AsyncHandler(async (req, res) => {
  const program = await Program.find().select("-weeks").sort({createdAt:-1});
  res
    .status(200)
    .json(new ApiSuccess(200, "Programs Fetched Successfully", program));
});

export const getProgramAnalytics = AsyncHandler(async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(400,"NO SUCH ID")
    }
  const program = await Program.findById(id).populate("weeks");
    const purchase = await Payment.find({program:id}).populate("user")

  const data = {program,purchase}
  res
    .status(200)
    .json(new ApiSuccess(200, "Programs Fetched Successfully", data));
});

export const getSingleProgram = AsyncHandler(async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(400,"NO SUCH ID")
    }
  const program = await Program.findById(id).populate("weeks");

  res
    .status(200)
    .json(new ApiSuccess(200, "Programs Fetched Successfully", program));
});