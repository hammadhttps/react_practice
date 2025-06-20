import { useState,useEffect } from "react";

import React from 'react'

const Use_fetch = (url) => {
    const [data, setData] = useState(null);


    useEffect(()=>{
        fetch(url)
        .then(response =>
            response.json()
            )
            .then(data =>
                {
                    setData(data)
                    }
                    )
    },[]);
 return [data];
}

export default Use_fetch;