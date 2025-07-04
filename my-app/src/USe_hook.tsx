import { use } from "react"

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode/todos/1");
    return res.json();
};
const USe_hook = () => {
   
   const data=use(fetchData());
  return <div> {data.title}</div>
  
}

export default USe_hook;