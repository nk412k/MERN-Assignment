import './TasksFilter.css';
import React from 'react';

const TasksFilter =(props)=>{
    const {tasks}=props;
    let catagories=[];
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };
    tasks.forEach((element) => {
      const found = catagories.find((item) => item === element.catagory);
      if (!found) {
        catagories.push(element.catagory);
      }
    });
    return (
      <div className="tasks-filter">
        <div className="tasks-filter__control">
          <label>Filter By Catagory</label>
          <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value="None">None</option>
            {
                catagories.map(element=><option key={element} value={`${element}`}>{element}</option>)
            }
          </select>
        </div>
      </div>
    );
}

export default TasksFilter;
