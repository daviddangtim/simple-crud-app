// Import mongoose using require
const mongoose = require("mongoose");
// Create the Database Schema
const BlogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Author name"],
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    blogEntry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// export the model
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
