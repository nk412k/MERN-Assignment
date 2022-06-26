import { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCatagory, setEnteredCatagory] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const catagoryChangeHandler = (event) => {
    setEnteredCatagory(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHanler = async (event) => {
    event.preventDefault();
    if(!enteredTitle || !enteredDate || !enteredCatagory){
      return;
    }
    const enteredData = {
      title: enteredTitle,
      catagory: enteredCatagory,
      date: new Date(enteredDate),
    };
    props.onSaveTaskData(enteredData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredCatagory("");
  };

  return (
    <form onSubmit={submitHanler}>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-task__control">
          <label>Catagory</label>
          <input
            type="text"
            value={enteredCatagory}
            onChange={catagoryChangeHandler}
          />
        </div>
        <div className="new-task__control">
          <label>Deadline Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-task__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
