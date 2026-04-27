const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const { redirect } = require("react-router-dom");

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) return res.status(404).json({ message: "No Blogs found" });

  return res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newlyCreatedBlog = await Blog.create({
      title,
      description,
      date: new Date(),
    });

    return res.status(201).json({ newlyCreatedBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return rest.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Unable to delete. Please try again" });
  }
};

const updateABlog = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    return res.send(500).json({
      message: "Something went wrong while updating. Please try again.",
    });
  }

  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to update" });
  }

  return res.send(200).json({ currentBlogToUpdate });
};

module.exports = {
  fetchListOfBlogs,
  deleteABlog,
  updateABlog,
  addNewBlog,
};
