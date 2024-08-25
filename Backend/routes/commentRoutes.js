const express = require("express");
//import { createComment } from "../Controller/commentController.js";
const createComment = require("../Controller/commentController");
const router = express.Router();

router.post("/:postId/createComment", createComment);
module.exports = router;
