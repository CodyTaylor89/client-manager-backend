const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Create a new project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project({ title: req.body.title });
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" });
  }
});

module.exports = router;
