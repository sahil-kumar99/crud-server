const Post = require("../models/post");

async function createPost(title, description) {
  try {
    const newPost = await Post.create({
      title,
      description,
    });
    return newPost;
  } catch (error) {
    throw error;
  }
}
async function updatePostById(data) {
  try {
    const updatedPost = await Post.findOneAndUpdate({ _id: data.id }, data, {
      new: true,
      returnNewDocument: true,
    });
    return updatedPost;
  } catch (error) {
    throw error;
  }
}

async function getAllPosts() {
  try {
    console.log('---get all service---');
    const postsData = await Post.find();
    return postsData;
  } catch (error) {
    throw error;
  }
}

async function deletePostById(id) {
  try {
    const deletePost = await Post.deleteOne({ _id: id });
    return deletePost;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPost,
  updatePostById,
  getAllPosts,
  deletePostById,
};
