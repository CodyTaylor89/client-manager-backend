const mongoose = require("mongoose");

const PipelineSchema = new mongoose.Schema({
  name: String,
  stages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stage" }],
});

module.exports = mongoose.model("Pipeline", PipelineSchema);
