import React, { useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../App";
import SingleTask from "./SingleTask";

function Tasks() {
  const { tasks, query } = useGlobalContext();
  const { data } = tasks;

  const filteredTasks = useMemo(() => {
    return (
      data &&
      data.filter((task) => {
        return task.taskName.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [tasks, query]);

  return (
    <div className="task-list-container">
      {filteredTasks && filteredTasks.length < 1 ? (
        <p>Empty list</p>
      ) : (
        filteredTasks &&
        filteredTasks.map((task) => <SingleTask key={task._id} task={task} />)
      )}
    </div>
  );
}

export default Tasks;
