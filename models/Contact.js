const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  notes: String,
  tags: [String], // Custom tags
  customFields: Map, // Custom field support
  stage: { type: mongoose.Schema.Types.ObjectId, ref: "Stage" }, // Links to a stage
});

module.exports = mongoose.model("Contact", ContactSchema);
