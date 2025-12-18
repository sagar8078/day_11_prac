import React from 'react'
import { useState } from 'react';

export default function useCounter(initialvalue=0) {

    const [count, setCount] = useState(initialvalue);

    function Inc(){
        setCount(count+1);
    }

    function Dec(){
        setCount(count-1);
    }

    function Reset(){
        setCount(initialvalue)
    }

  return (
    
        
        {count , Inc, Dec, Reset}
    
  )
}
