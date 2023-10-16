const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const posts = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
module.exports = mongoose.model("Post", posts);
