import express from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/VerifyJwt.js";
import { addProgram, getProgram, getProgramAnalytics, getSingleProgram } from "../controllers/admin/Program.Controller.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/").get(getProgram).post(verifyAdmin,addProgram)
router.route("/analytics/:id").get(getProgramAnalytics)
router.route("/my-programs/:id").get(getProgramAnalytics)
router.route("/:id").get(getSingleProgram)

export default router;