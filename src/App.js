import {useState,useEffect} from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import './App.css';

function App(){
	const [tasks,setTasks]=useState([]);

	const fetchtaskHandler=()=>{
		fetch('http://localhost:8080/feed/tasks')
		.then(res=>{
			return res.json();
		})
		.then(resData=>{
			// console.log(resData)
			setTasks(
        resData.tasks
          .map((task) => {
            return { ...task, date: new Date(task.date) };
          }) || []
      );
		})
	}
	
	useEffect(()=>{
		fetchtaskHandler();
	},[])

	return (
    <div>
      <NewTask fetchTask={fetchtaskHandler} />
      <Tasks items={tasks} fetchTask={fetchtaskHandler} />
    </div>
  );
}

export default App;