import React from 'react'
import { useReducer } from 'react'

const initial_State={array:[1,2,4,5]};
const  my_function=(state,action)=>
{
    switch(action.type)
    {
        case 'increment':
            return {...state,
                array:state.array.map((item,index)=>{
                    return item+1
                })
              };
              case 'decrement':
                return {...state,
                    array:state.array.map((item,index)=>{
                        return item-1
                    })

};
default:
    return state;
}
}
const Use_reduce_pract = () => {
    const [state, dispatch] = useReducer(my_function, initial_State);
    return (
        <div>
            <ul>
                {state.array.map((i) => (
                    <li key={Math.random()}>{i}</li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "increment" })}>ADD</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
        </div>
    );
}

export default Use_reduce_pract;