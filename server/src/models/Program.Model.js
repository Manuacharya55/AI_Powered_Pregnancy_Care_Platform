import { Schema, model } from "mongoose";

const ProgramSchema = new Schema({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weeks: [{ type: Schema.Types.ObjectId, ref: "Weeks" }],
  review: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Program = model("Program", ProgramSchema);
export default Program;
