import express from "express";
import {
  addBlog,
  getAllBlogs,
  updateBlog,
  getById,
  deleteBlog,
  getUserById,
} from "../controllers/blog-controller.js";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserById);

export default blogRouter;
