import React from 'react'
import Child3 from './Child3'

export default function Child2({count, setCount}) {

console.log("Child2 rendered");


  return (
    <div>
      <h1> Child2 component: {count} </h1>
      <br />
      <button onClick={()=>setCount(count+1)}>click child2</button>

      <Child3/>
    </div>
  )
}
