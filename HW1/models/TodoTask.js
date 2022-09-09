const mongoose = require("mongoose");

// This is the schema for how our task data will be structured, with creation date and content
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Export this as mongoose model
module.exports = mongoose.model("TodoTask", todoTaskSchema);
