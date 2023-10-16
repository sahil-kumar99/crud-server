const postService = require("../services/post");

const addPost = async (req, res) => {
  console.log("---add post");
  try {
    const { title, description } = req.body;
    const addedPost = await postService.createPost(title, description);
    return res.status(200).json({
      status: true,
      message: "post created succesfully",
      data: addedPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getAllPosts = async (req, res) => {
  console.log("---get all controller--");
  try {
    const data = await postService.getAllPosts();
    return res.status(200).json({
      status: true,
      message: "all posts",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
const updatePost = async (req, res) => {
  try {
    const { postData } = req.body;
    console.log("---postdata---", postData);
    const upadtedPost = await postService.updatePostById(postData);
    return res.status(200).json({
      status: true,
      message: "Successfully updated",
      data: upadtedPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("---delete id---", id);
    const deletedPost = await postService.deletePostById(id);
    return res.status(200).json({
      status: true,
      message: "post is deleted",
      data: deletedPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  addPost,
  getAllPosts,
  updatePost,
  deletePost,
};
