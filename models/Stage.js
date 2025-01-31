const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema({
  name: String,
  pipeline: { type: mongoose.Schema.Types.ObjectId, ref: "Pipeline" },
});

module.exports = mongoose.model("Stage", StageSchema);
