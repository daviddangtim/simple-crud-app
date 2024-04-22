// Important Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// Import the model
const Blog = require("./models/blog.model.js");

//allows the use of json values in the server...i think
app.use(express.json());

// Get request and response from server
app.get("/", (req, res) => {
  res.send("Hello from Node API Updated");
});

// View the products
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get with id
app.get("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Uses the model to post data to the database(await can only be used with async functions)
app.post("/api/blog", async (req, res) => {
  try {
    // This saves the blog we enter to the database
    const blog = await Blog.create(req.body);

    res.status(200).json(blog);
  } catch (error) {
    //This shows the error message on the webpage
    res.status(500).json({ message: error.message });

    console.log(error);
  }
});

// Update prodduct
app.put("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(id, req.body);
    // Check to ensure there is an item with that id
    if (!blog) {
      return res.status(404).json({ message: "Not Found" });
    }
    // Updates the item and returns with a response
    const updatedBlog = await Blog.findById(id);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete a blog
app.delete("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mongoose connection to MongoDb server
mongoose
  .connect(
    "mongodb+srv://daviddangtim:crudbackend@cluster0.u5drsmj.mongodb.net/CRUD-API(NODE)?retryWrites=true&w=majority"
  )

  // runs this code after a successful connection
  .then(() => {
    console.log("Connected!");

    // Listens to check that the app is on the right port
    app.listen(3000, function () {
      console.log("Server running on port 3000!");
    });
  })

  // Catch if connection fails
  .catch(function () {
    console.log("Connection failed");
  });
