import React from 'react'
import useCounter from './useCounter'

export default function Counter() {

    const {count, Inc, Dec, Reset}= useCounter(20);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Dec</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}
