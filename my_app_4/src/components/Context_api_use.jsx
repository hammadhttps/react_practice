import React from 'react'
import { data } from './Context_api_eg';
import { data1 } from './Context_api_eg';

const Context_api_use = () => {

  return (
   
     <data.Consumer>
        {(name)=>{
            return (
                
                    <data1.Consumer>
                        {(age)=>{
                            return(
                            <h1>My name is {name} and i am {age} years old</h1>
  )}}
                    </data1.Consumer>
                
            )
        }}
     </data.Consumer>
    
  )
}

export default Context_api_use