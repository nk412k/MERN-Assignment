import React,{useState} from 'react';


import Card from '../UI/Card';
import TasksFilter from './TasksFilter';
import TaskList from './TaskList';
import './Tasks.css';
import TasksFilterByDate from './TaskFilterBydate';

const Tasks = (props) => {

  const [filteredYear,setFilteredYear]=useState('None');  

  const [filterDate,setFilterDate]=useState('None');

  const filterDateChangeHandler = (selectedDate) => {
    setFilterDate(selectedDate);
  };  

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);    
  };

  const filteredTasks = props.items.filter((task)=>{
    if(filteredYear==='None'){
      return task;
    }
    return task.catagory.toString()===filteredYear;
  });

  const filteredDateTasks = filteredTasks.filter((task) => {
    if (filterDate === "None") {
      return task;
    }
    const month = task.date.toLocaleString("en-US", {
      month: "long",
    });
    const day = task.date.toLocaleString("en-US", {
      day: "2-digit",
    });
    const year = task.date.getFullYear();
    const date=`${day} ${month} ${year}`;
    return date.toString() === filterDate.toString();
  });

  return (
    <div>
      <Card className="tasks">
        <TasksFilter
          selected={filteredYear}
          tasks={props.items}
          onChangeFilter={filterChangeHandler}
        />
        <TasksFilterByDate
          selected={filterDate}
          tasks={props.items}
          onChangeFilter={filterDateChangeHandler}
        />
        <TaskList items={filteredDateTasks} fetchTask={props.fetchTask}/>
      </Card>
    </div>
  );
}

export default Tasks;