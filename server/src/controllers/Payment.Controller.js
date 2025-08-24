import mongoose from "mongoose";
import Stripe from "stripe";
import Program from "../models/Program.Model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiSuccess } from "../utils/ApiSuccess.js";
import Payment from "../models/Payment.Model.js";
import User from "../models/User.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

const stripeIntent = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntents = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const { paymentMethodId } = req.body;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid ID");
  }

  const existingProgram = await Program.findById(id);

  if (!existingProgram) {
    throw new ApiError(400, "No Such Products");
  }

  const intent = await stripeIntent.paymentIntents.create({
    amount: existingProgram.price * 100,
    currency: "inr",
    payment_method: paymentMethodId,
    confirm: true,
    automatic_payment_methods: { enabled: true, allow_redirects: "never" },
  });


  const user = await User.findById(req.user._id);

  const purchase = await Payment.create({
    program: existingProgram._id,
    user: req.user._id,
    amount: existingProgram.price,
    paymentIntentID: intent.id,
  });

  user.program.push(existingProgram._id)
  await user.save();

  res.status(200).json(new ApiSuccess(200, "Payment Intent Created", purchase));
});
