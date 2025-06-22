import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks,onToggle,onDelete}) => {
  
    if(tasks.length===0) return <p>No Tasks Yet.</p>

  return (
    <ul style={{
        listStyle:'none',
        padding:0
    }}>
        {tasks.map(task=>(
            <TaskItem key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            />
        ))}
    </ul>
  );
}

export default TaskList