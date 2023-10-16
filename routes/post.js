const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");

router.post("/addPost", postController.addPost);
router.get("/getAllPosts", postController.getAllPosts);
router.put("/updatePost", postController.updatePost);
router.post("/deletePost", postController.deletePost);
module.exports = router;
