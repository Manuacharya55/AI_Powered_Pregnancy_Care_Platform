import express from "express";
import {
  addHomePage,
  deleteHomePage,
  editHomePage,
  fetchHomePage,
} from "../controllers/admin/HomePage.Controller.js";
import { verifyAdmin, verifyJWT } from "../middlewares/VerifyJwt.js";
const router = express.Router();

router.use(verifyJWT);

router.route("/").get(fetchHomePage).post(verifyAdmin, addHomePage);
router
  .route("/:id")
  .patch(verifyAdmin, editHomePage)
  .delete(verifyAdmin, deleteHomePage);

export default router;