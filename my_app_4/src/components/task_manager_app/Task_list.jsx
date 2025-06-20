import React from 'react'
import Task_item from './Task_tem';

const Task_list = ({tasks,onToggle,onDelete}) => {
 
    if(tasks.length===0) return <p>No Tasks Yet.</p>

    return (
    <ul style={{listStyle:'none',padding:0}}>
       {tasks.map(task=>(
           <Task_item key={task.id}
             task={task}
             onToggle={onToggle}
             onDelete={onDelete}/>
           ))}
    </ul>
  );
}

export default Task_list;