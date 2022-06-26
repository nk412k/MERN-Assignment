import React from 'react';

import TaskDate from './TaskDate';
import Card from '../UI/Card';
import './TaskItem.css';

function TaskItem(props){ 
  
  const deleteButtonHandler=(event)=>{
    fetch("http://localhost:8080/feed/task/"+props._id, {
      method: "DELETE"
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        return props.fetchTask();
      });
  }

  const doneButtonHandler=(event)=>{
    fetch("http://localhost:8080/feed/task/" + props._id, {
      method: "PUT",
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        return props.fetchTask();
      });
  }
    
    return (
      <li>
        <Card className="task-item">
          <TaskDate date={props.date} />
          <div className="task-item__description">
            <h2 className={props.complete ? "completed" : ""}>
              <pre>
                {props.title} ({props.catagory})
              </pre>
            </h2>
            <button
              className="task-item__danger"
              onClick={deleteButtonHandler}
            >
              Delete
            </button>
            {!props.complete && (
              <button
                className="task-item__done"
                onClick={doneButtonHandler}
              >
                Done
              </button>
            )}
          </div>
        </Card>
      </li>
    );
}

export default TaskItem;