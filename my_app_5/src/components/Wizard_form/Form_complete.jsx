import React,{useReducer} from 'react';
import Step1 from './Step1';
import Step2 from './step2';
import Step3 from './Step3';



const initialState={
    step:1,
    formData:{
        name:'',
        email:'',
        gender:'',
        subscribe:false
    }
};

function reducer(state,action)
{
    switch(action.type)
    {
        case 'Next':
            return{...state,step:state.step+1};
        case 'Prev':
            return {...state,step:state.step-1};
        case 'Update':
            return {...state,
                formData:{...state.formData,[action.field]:action.value}
            }   ;
       default:
        return state;
}
}

const Form_complete = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const props={data:state.formData,dispatch};
  return (
    <div style={{maxWidth:500,margin:'auto'}}>
       <h2>🧾 Multi-Step Form</h2>
       {state.step===1&& <Step1 {...props}/>}
       {state.step===2&& <Step2 {...props}/>}
       {state.step===3&& <Step3 {...props}/>}
    </div>
  )
}

export default Form_complete