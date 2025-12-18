import React from 'react'
import Child2 from './Child2'

export default function Child1({count, setCount}) {

console.log("Child1 rendered");




  return (
    <div>
      <h1> Child1 component: {count}</h1>
      <br />
      <button onClick={()=>setCount(count+1)}>click child1</button>

      <Child2/>
    </div>
  )
}
