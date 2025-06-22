import React from 'react'
import UseTasks from './UseTasks'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const To_Do_list = () => {
    const {tasks,addTask,toggle_task,deleteTask}=UseTasks();

  return (
    <div style={{
        maxWidth:500,
        margin:'40px auto',
        fontFamily:"sans-serif"
    }}>
        <h1>Task Manager</h1>
        <TaskForm onAdd={addTask}></TaskForm>
        <TaskList tasks={tasks} onToggle={toggle_task} onDelete={deleteTask}></TaskList>
    </div>
  )
}

export default To_Do_list