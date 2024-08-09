import express from "express";
import { test } from "../controllers/user.controller.js";

// export default router = express.Router();
const router = express.Router();

router.get("/test", test);

export default router;
