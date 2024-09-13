import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import {
  createPost,
  deletepost,
  getposts,
} from "../controllers/createPost.controller.js";

const router = express.Router();

router.post("/createpost", verifyToken, createPost);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
