import React from 'react'
import { useContext,useState} from 'react';
import { data,data1 } from './Context_api_eg';

const Context_hook = () => {

    const username=useContext(data);
    const age=useContext(data1);

  return (
    <div>
        <h1>{username}</h1>
        <h2>{age}</h2>
    </div>
  )
}

export default Context_hook