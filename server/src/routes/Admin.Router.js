import express from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/VerifyJwt.js";
import { getAllBlog } from "../controllers/admin/Blog.Controller.js";
import { deleteBlog, fetchSingleBlog } from "../controllers/Blog.Controller.js";
import { fetchDashboard, fetchPayments, fetchUsers } from "../controllers/admin/DashBoard.Controller.js";
import { addProgram, getProgram, getSingleProgram } from "../controllers/admin/Program.Controller.js";
const router = express.Router();

router.use(verifyJWT);
router.use(verifyAdmin);


router.route("/blog").get(getAllBlog);
router.route("/blog:id").get(fetchSingleBlog).delete(deleteBlog);

router.route("/dashboard").get(fetchDashboard)
router.route("/users").get(fetchUsers)
router.route("/payments").get(fetchPayments)



export default router;
