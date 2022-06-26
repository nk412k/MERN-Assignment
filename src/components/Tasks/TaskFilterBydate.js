import "./TasksFilter.css";
import React from "react";

const TasksFilterByDate = (props) => {
  const { tasks } = props;
  let Dates = [];
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  tasks.forEach((element) => {
    const found = Dates.find((item) => item.toString() === element.date.toString());
    if (!found) {
      Dates.push(element.date);
    }
  });
  return (
    <div className="tasks-filter">
      <div className="tasks-filter__control">
        <label>Filter By Date</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="None">None</option>
          {Dates.map((element) => {
              const month =element.toLocaleString("en-US", {
                month: "long",
              });
              const day = element.toLocaleString("en-US", {
                day: "2-digit",
              });
              const year = element.getFullYear();
              return (
                <option
                  key={`${day} ${month} ${year}`}
                  value={`${day} ${month} ${year}`}
                >
                  {day} {month} {year}
                </option>
              );            
            })}
        </select>
      </div>
    </div>
  );
};

export default TasksFilterByDate;
