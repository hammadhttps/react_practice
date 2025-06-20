import React from 'react';
import { useState,useEffect } from 'react';


const Use_task = () => {

    const [task, setTask] = useState(()={
        const saved=localStorage.getItem('task');
        return saved ? JSON.parse(saved):[];
    });

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(task));

    },[task])

 const addTask=text=>{
    setTask([...task,{text}]);
 }

 const toggleTask=id=>{
    setTask(task.map((task, index) =>
        index === id ? {...task, completed: !task.completed} : task
    ));
 }

 const deletetask=id=>{
    setTask(task.filter((task, index) =>
        index !== id
    ));
 };


  return {task,addTask,toggleTask,deletetask};
}

export default Use_task;