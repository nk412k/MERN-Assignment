import TaskItem from "./TaskItem";
import './TaskList.css';

const TaskList=(props)=>{

    if(props.items.length===0){
        return <h2 className="tasks-list__fallback">Found No Task</h2>;
    }
    return(
        <ul className="tasks-list">
            {props.items.map((task) =>{
            return <TaskItem _id={task._id}key={task._id} complete={task.complete}title={task.title} catagory={task.catagory} date={task.date} fetchTask={props.fetchTask}/>
            })}
        </ul>
    );
};

export default TaskList;