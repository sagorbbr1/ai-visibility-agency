import express from "express";

import {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("coverImage"), createBlog);

router.get("/", getBlogs);

router.get("/:slug", getSingleBlog);

router.put("/:id", upload.single("coverImage"), updateBlog);

router.delete("/:id", deleteBlog);

export default router;