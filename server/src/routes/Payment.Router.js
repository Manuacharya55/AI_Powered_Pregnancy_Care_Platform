import express from "express";
import { createPaymentIntents } from "../controllers/Payment.Controller.js";
import { verifyJWT } from "../middlewares/VerifyJwt.js";

const router = express.Router();
router.use(verifyJWT)

router.route("/:id").post(createPaymentIntents)
// router.route("/purchase").get(createPaymentIntents)


export default router;