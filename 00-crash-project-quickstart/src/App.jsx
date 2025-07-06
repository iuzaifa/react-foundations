import { useState } from "react";

function App() {
  const [count , setCounter] = useState(0);
   

  return (
    <>
      <p>count : {count}</p>
      <button onClick={()=> setCounter(count+1)}>Click me </button>
      



    </>
  )
}





export default App  ;
