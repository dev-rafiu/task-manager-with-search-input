import React, { useState } from "react";

import { useGlobalContext } from "../App";

function CreateArea() {
  const {
    isCreateAreaOpen,
    setIsCreateAreaOpen,
    handleSubmit,
    taskNameRef,
    isEditing,
    alert,
  } = useGlobalContext();

  return (
    <div className="top-section">
      <form className="form" onSubmit={handleSubmit}>
        <p>{alert.msg}</p>
        <div className="form-group">
          <input ref={taskNameRef} type="text" placeholder="pay bill..." />
        </div>
        <button className="create-btn">{`${
          isEditing ? "Edit" : "Add"
        } task`}</button>
      </form>
    </div>
  );
}

export default CreateArea;
