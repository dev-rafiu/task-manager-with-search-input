const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, nHits: tasks.length, data: tasks });
  } catch (error) {
    console.log(error);
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById({ _id: id });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `no task with id ${id}` });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No expense with id: ${taskID}` });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `no task with id ${id}` });
    }
    res.status(200).json({ success: true, msg: "task deleted sucessfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
