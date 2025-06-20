import React from 'react'

const Task_item = ({task,onToggle,onDelete}) => {
  return (
    
    <li style={{marginBottom:'8px'}}>
    <input type="checkbox" checked={task.complete} 
    onChange={()=>onToggle(task.id)}/>

    <span style={{textDecoration: task.completed ? 'line-through' : 'none',
        marginLeft: 8}}>{task.text}</span>
        <button style={{marginLeft: 10}} onClick={() => onDelete(task.id)}>❌</button>
        </li>
   
    
  )
}

export default Task_item;