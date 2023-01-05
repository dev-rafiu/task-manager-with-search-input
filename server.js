const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const taskControllers = require("./routes/controllers");

const app = express();

const cors = require("cors");
app.use(cors({ methods: ["GET", "POST", "PATCH", "DELETE"] }));
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URI;

app.use(express.json());
app.use("/api", taskControllers);

const start = async () => {
  try {
    const conn = await mongoose.connect(URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

// [
//   {
//     title: "Post 1",
//     body: "Body of post",
//     category: "News",
//     likes: 1,
//     tags: ["news", "events"],
//     date: Date(),
//   },
//   {
//     title: "Post 2",
//     body: "Body of post",
//     category: "News",
//     likes: 2,
//     tags: ["news", "events"],
//     date: Date(),
//   },
//   {
//     title: "Post 3",
//     body: "Body of post",
//     category: "News",
//     likes: 3,
//     tags: ["news", "events"],
//     date: Date(),
//   },
//   {
//     title: "Post 6",body: "Body of post",category: "News",
//   },
// ];
