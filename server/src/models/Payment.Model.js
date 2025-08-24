import { Schema, model } from "mongoose";

const PaymentSchema = new Schema(
  {
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentIntentID: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Payment = model("Payment", PaymentSchema);
export default Payment;
