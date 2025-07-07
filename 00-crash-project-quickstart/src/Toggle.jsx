import React, { useState } from 'react'
import UserCompToggle from './UserCompToggle';

const Toggle = () => {

    const [display, setDisplay] = useState(true);
    return (
        <>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
              <h1>Toggle in React js</h1>
            {/* {display?<h1>Abu Huzaifa</h1>: null} */}
            
            {display ? <UserCompToggle/> : null}


        </>
    )
}

export default Toggle;
