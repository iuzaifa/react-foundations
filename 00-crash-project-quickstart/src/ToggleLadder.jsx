import { useState } from "react";


const ToggleLadder=()=>{

    const [count , setCounter] = useState(0);

    return(
        <>
            <h1 className="toggleL">ToggleLadder</h1>
            <button onClick={()=>setCounter(count + 1)}>Counter</button>

            {
                count == 0 ? <h2>Counter {count}</h2>
                :count == 1 ? <h2 className="counter1">Counter {count}</h2>
                :count == 2 ? <h2 className="counter2">Counter {count}</h2>
                :count == 3 ? <h2 className="counter3">Counter {count}</h2>
                :count == 4 ? <h2 className="counter4">Counter {count}</h2>
                :count == 5 ? <h2 className="counter5">Counter {count}</h2>
                :<h2 className="red">"not dount counter"</h2>
            }

        </>
    )

}

export default ToggleLadder;