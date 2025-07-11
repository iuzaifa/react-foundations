import { useState } from "react";
import Todo from './Todo.jsx';

import './assets/css/Style.css';
import Counter from "./Counter.jsx";
import Toogle from "./Toggle.jsx";
import ToggleLadder from "./ToggleLadder.jsx";
import Greeting from "./components/Greeting.jsx";

function App() {

  const [count, setCounter] = useState(0);

  // props sends to greting 
  let data = {
    name: "huziafa",
    email: "eaxmple@gmail.com",
    age: 23,
    address: "New Delhi"
  }

  return (

    <>
      {/* <p>count : {count}</p>
      <button onClick={()=> setCounter(count+1)}>Click me </button> */}

      {/* <Todo/>
        <Counter/> */}
      {/* <Toogle/> */}

      {/* <ToggleLadder/> */}
      {/* props */}
      <Greeting data={data} />




    </>
  )
}





export default App;
