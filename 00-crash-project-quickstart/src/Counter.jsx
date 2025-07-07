import { useState } from "react";

const Counter =()=> {

    const [count, setCount] = useState(0);
    return (

        <>
         <h1>Counter : {count} </h1>


        <button onClick={() => setCount(count + 1)}>Click To Count</button>

        
        </>
    )
}

export default Counter;