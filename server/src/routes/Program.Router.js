import express from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/VerifyJwt.js";
import { addProgram, getProgram, getSingleProgram } from "../controllers/admin/Program.Controller.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/program").get(getProgram).post(verifyAdmin,addProgram)
router.route("/program/:id").get(getSingleProgram)

export default router;