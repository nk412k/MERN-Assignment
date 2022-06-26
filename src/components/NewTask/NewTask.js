import TaskForm from "./TaskForm";
import "./NewTask.css";
import { useState } from "react";

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTaskDataHandler = (enteredTaskData) => {

    fetch("http://localhost:8080/feed/task", {
      method: "POST",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res=> {
        return res.json();
      })
      .then(resData => {
        return props.fetchTask();
    })
      setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-task">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Task</button>
      )}
      {isEditing && (
        <TaskForm
          onSaveTaskData={saveTaskDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTask;
