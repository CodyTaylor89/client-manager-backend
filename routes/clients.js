const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// ✅ Get all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Create a new client
router.post("/", async (req, res) => {
  try {
    const newClient = new Client({ name: req.body.name });
    const savedClient = await newClient.save();
    res.json(savedClient);
  } catch (error) {
    res.status(500).json({ error: "Failed to create client" });
  }
});

module.exports = router;
