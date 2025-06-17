import React from 'react'
import { createContext } from 'react'
import Context_api_use from './Context_api_use';

export const data=createContext();

export const data1=createContext();

const Context_api_eg = () => {
    const name="Hammad";
    const age=23;
  return (
    <div>
           <data.Provider value={name}>
            <data.Provider value={age}>
            <Context_api_use/>
            </data.Provider>
           </data.Provider>
    </div>
  )
}

export default Context_api_eg