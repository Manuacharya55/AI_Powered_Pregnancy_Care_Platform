import express from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/VerifyJwt.js";
import { addProgram, getMyProgram, getProgram, getProgramAnalytics, getSingleProgram } from "../controllers/admin/Program.Controller.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/").get(getProgram).post(verifyAdmin,addProgram)
router.route("/my-programs").get(getMyProgram)
router.route("/analytics/:id").get(getProgramAnalytics)
router.route("/:id").get(getSingleProgram)

export default router;