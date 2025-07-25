 import React from 'react'
import { useState, useEffect } from 'react'

const UseTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggle_task = id => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const addTask = text => {
        setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
    };

    const deleteTask = id => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return { tasks, addTask, toggle_task, deleteTask };
}

export default UseTasks;