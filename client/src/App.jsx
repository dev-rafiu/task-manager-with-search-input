import React, { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import "./index.css";

// components
import CreateArea from "./components/CreateArea";
import TaskList from "./components/TaskList.jsx";
import OpenCreateArea from "./components/OpenCreateArea";
import SearchInput from "./components/SearchInput";

const appContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(appContext);
};

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editID, setEditID] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isCreateAreaOpen, setIsCreateAreaOpen] = useState(false);
  const [query, setQuery] = useState("");
  const taskNameRef = useRef(null);

  const handleQueryChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert((alert) => {
      return { ...alert, show, msg, type };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = taskNameRef.current;

    if (!value) {
      showAlert(true, "please provide a vlaue", "danger");
    } else if (value && isEditing) {
      showAlert(true, "editing", "success");
      const taskToEdit = tasks.data.find((task) => task._id == editID);
      await axios.patch(`/api/${taskToEdit._id}`, {
        taskName: value,
      });
      taskToEdit.taskName = value;
      setIsEditing(false);
    } else {
      const newTask = { taskName: value };
      await axios.post("/api", newTask);
      getTasks();
      showAlert(true, "item added", "success");
    }
    taskNameRef.current.value = "";
  };

  const deleteTask = async (taskID) => {
    try {
      await axios.delete(`/api/${taskID}`);
      getTasks();
      showAlert(true, "item deleted", "danger");
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (id) => {
    setIsEditing(true);
    const taskToEdit = tasks.data.find((task) => task._id === id);
    taskNameRef.current.value = taskToEdit.taskName;
    setEditID(id);
    // showAlert(true, "item edited", "success");
  };

  const getTasks = async () => {
    try {
      const { data: tasksList } = await axios.get("/api");
      setTasks(tasksList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <appContext.Provider
      value={{
        alert,
        isEditing,
        editID,
        tasks,
        handleSubmit,
        query,
        handleQueryChange,
        taskNameRef,
        deleteTask,
        editTask,
      }}
    >
      <main>
        {/* <OpenCreateArea /> */}
        <SearchInput />
        <CreateArea />
        <TaskList />
      </main>
    </appContext.Provider>
  );
}

export default App;
