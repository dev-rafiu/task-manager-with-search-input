import React, { useState } from "react";
import { useGlobalContext } from "../App";

function OpenCreateArea() {
  const { setIsCreateAreaOpen } = useGlobalContext();

  return (
    <div className="open-create-area">
      <button className="open-btn" onClick={() => setIsCreateAreaOpen(true)}>
        +
      </button>
      <div className="text">
        <h4>create a new task</h4>
        <p>add new task to your tasks list</p>
      </div>
    </div>
  );
}

export default OpenCreateArea;
