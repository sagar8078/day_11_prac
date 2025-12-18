import React from 'react'
import { data1, data2 } from './App';

export default function Child4() {

    console.log("Child4 rendered");


    return (
        <div>
            {/* <h1> Child4 component: {count}</h1>
      <br />
      <button onClick={()=>setCount(count+1)}>click child4</button> */}


            {/* // consumer to data1 */}

            <data1.Consumer>
                {
                    (count) => (

                        <data2.Consumer>
                            {

                                (setCount) => {
                                    return (
                                        <>
                                            <h1> Child4 component: {count}</h1>
                                            <br />
                                            <button onClick={() => setCount(count + 1)}>click child4</button>
                                        </>

                                    )
                                }
                            }
                        </data2.Consumer>
                    )
                }
            </data1.Consumer>
        </div>
    )
}
