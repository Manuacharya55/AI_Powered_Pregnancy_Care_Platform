import express from "express";
import {
  addBlog,
  addComment,
  deleteBlog,
  editBlog,
  fetchAllBlogs,
  fetchSingleBlog,
  fetchUserBlogs,
} from "../controllers/Blog.Controller.js";
import { verifyJWT } from "../middlewares/VerifyJwt.js";

const router = express.Router();
router.use(verifyJWT)
router.route("/").get(fetchAllBlogs).post(addBlog);
router.route("/my-blog").get(fetchUserBlogs);
router.route("/add-comment/:id").post(addComment);
router.route("/:id").get(fetchSingleBlog).patch(editBlog).delete(deleteBlog);

export default router;
