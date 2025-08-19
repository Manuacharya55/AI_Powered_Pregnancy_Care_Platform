import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/Auth.Controller.js";
import { verifyJWT } from "../middlewares/VerifyJwt.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router
  .route("/profile")
  .get( verifyJWT,getProfile)
  .patch(verifyJWT, updateUser);

  export default router