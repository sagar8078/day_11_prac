import React, { useContext } from 'react'
import Child4 from './Child4'
import { data1,data2 } from './App';



export default function Child3() {

const count = useContext(data1);
const setCount = useContext(data2);

console.log("Child3 rendered");


  return (
    <div>
      <h1> Child3 component: {count}</h1>
      <br />
      <button onClick={()=>setCount(count+1)}>click child3</button>

      <Child4 />
    </div>
  )
}
