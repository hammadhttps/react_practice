import React,{useContext} from 'react';
import { MyContext } from './MyContext';

const Counter = () => {
    const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter