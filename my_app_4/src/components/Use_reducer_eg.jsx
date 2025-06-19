import React from 'react'
import { useReducer } from 'react'

const initial_State={count:0};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1};
            case 'decrement':
                return {...state,count:state.count-1};

                case 'reset':
                    return {...state,count:0};
                case "set":
                    return { ...state, count: action.payload+state.count };
                default:
                    return state;
                    }
} 


const Use_reducer_eg = () => {
   const[state,dispatch]=useReducer(reducer,initial_State);
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <input
          type="number"
          name=""
          id=""
        /* <button onClick={()=>dispatch({type:state.count})}></button> */
          onChange={e => dispatch({ type: "set", payload: Number(e.target.value) })}
        />
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <button onClick={()=>dispatch({type:state.count})}>!</button>
    </div>
  )
}

export default Use_reducer_eg