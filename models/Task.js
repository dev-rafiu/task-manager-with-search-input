const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
