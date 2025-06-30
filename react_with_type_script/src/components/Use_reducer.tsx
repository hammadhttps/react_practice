
import { useReducer } from "react"


type State={count:number};

type actions={ type:'INCREMENT'}|{type:'DECREMENT'};

const Counter=()=>{

    const [state,dispatch]=useReducer(Use_reducer,{count:0});

    return
    <div>
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
         
    </div>
}

const Use_reducer = (state:State,action:actions):State => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
            case 'DECREMENT':
                return {...state, count: state.count - 1};
                default:
                    return state;
                    }

}

export default Counter;