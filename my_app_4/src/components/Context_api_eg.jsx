import React from 'react'
import { createContext } from 'react'
import Context_api_use from './Context_api_use';
import Context_hook from './Context_hook';

export const data=createContext();

export const data1=createContext();

const Context_api_eg = () => {
    const name="Hammad";
    const age=23;
  return (
    <div>
           <data.Provider value={name}>
            <data.Provider value={age}>
            {/* <Context_api_use/> */}
            <Context_hook/>
            </data.Provider>
           </data.Provider>
    </div>
  )
}

export default Context_api_eg