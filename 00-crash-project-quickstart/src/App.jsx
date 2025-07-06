import { useState } from "react";
import Todo from './Todo.jsx'; 

import './assets/css/Style.css';

function App() {
  const [count , setCounter] = useState(0);
   

  return (
    <>
      {/* <p>count : {count}</p>
      <button onClick={()=> setCounter(count+1)}>Click me </button> */}

        <Todo/>


    </>
  )
}





export default App  ;
