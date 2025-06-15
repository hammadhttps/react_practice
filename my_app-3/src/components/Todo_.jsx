import React from 'react'
import { useState } from 'react'

const Todo_ = () => {
    const [var1, setVar1] = useState("");
    const [array, set_array] = useState([
        "HomeWork", "Exercise",
        "Study", "Movie", "Game", "Sleep"
    ])

    const add_item = () => {
        if (var1.trim() !== "") {
            set_array([...array, var1]);
            setVar1("");
        }
    }


  return (
   <section>
    <h1>To Do List</h1>
    <ul>
        {array.map((item, idx) => (
            <li key={idx}>{item}</li>
        ))}
    </ul>
    <input
        type="text"
        value={var1}
        placeholder='Add item'
        onChange={e => setVar1(e.target.value)}
    />
    <button onClick={add_item}>Add item</button>
   </section>
  )
}

export default Todo_