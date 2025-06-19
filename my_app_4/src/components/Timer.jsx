import React, { useRef,useEffect,useState } from 'react'

const Timer = () => {
    const interval=useRef(null);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        interval.current=setInterval(() =>
            {
                setCount((prevcount)=>prevcount+1);
                },1000);
                return()=>{
                   clearInterval(interval.current) 
                }
    },[])
  return (
    <div>
<h1>
   Timer:{count}seconds
</h1>
 <button onClick={()=>clearInterval(interval.current)}>Pause</button>
    </div>
  )
}

export default Timer