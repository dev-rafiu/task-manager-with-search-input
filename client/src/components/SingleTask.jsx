import React from "react";

import { useGlobalContext } from "../App";

function SingleTask({ task }) {
  const { deleteTask, editTask } = useGlobalContext();
  return (
    <article className="single-task">
      <p>{task.taskName}</p>
      <div className="controls">
        <button className="delete-btn" onClick={() => deleteTask(task._id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <button className="edit-btn" onClick={() => editTask(task._id)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </article>
  );
}

export default SingleTask;
