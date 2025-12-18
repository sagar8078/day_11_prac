import { createContext, useState } from 'react'
import Child1 from './Child1'
import './App.css'


// creating context

const data1 = createContext();
const data2 = createContext();

function App() {
  const [count, setCount] = useState(10)



  return (
    <>

    <h1>App component's Children</h1>

      <data1.Provider value = {count}>
        <data2.Provider value ={setCount}>
      
      <Child1 />

      </data2.Provider>

      </data1.Provider>
    
      {/* <Child1 count={count} setCount = {setCount}/> */}
      
     {/* / now any child of app.jsx can directly use this conext and we dont need to pass states
     / suppose we want to use in child4, so in child4 we have to import and to use it we have use it with the help cosumer  */}
      

    </>
  )
}

export default App

export {data1, data2}


// we have to export the context as well