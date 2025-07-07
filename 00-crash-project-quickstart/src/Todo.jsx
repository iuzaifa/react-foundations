import React, { useState } from 'react'
  
const Todo = () => {

    const path = "https://raw.githubusercontent.com/iuzaifa/iuzaifa/main/huzaifa.png";
    const name = "Abu Huzafia";
    const x = 1, y = 4;

    const userName = ['sam' ,'ali', 'hamza', 'malik']

    function sum(){
        return x + y;
    }
    function operation(a,b, op){
        if(op == "+"){
            return a + b;
        }else if( op == "-"){
            return a - b;
        }else {
            return a * b == a*b;
        }
    }


    let func = "Apple";
    const handleFunc =()=> {
        func = "banana";
        console.log(func);
    }

    const [ fruit , setfruit] = useState("Apple");
    const changeFruit =()=>{
         setfruit("Banana");
         console.log(setfruit);
    }

  return (
    <>
        <h1>{name?name:"user not found"}</h1>
        {/* <img className='images' src={path} alt="image" /> */}
        <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
        </ul> 
        <p>{x + y}</p> 
        <p>{sum()}</p>    
        <h2>{operation(24, 12, "+")}</h2>
        <p>{userName[3]}</p> 
        <button onClick={()=>alert("Hello JSX Coder")}>Click Me</button>  <hr />

        <h1>Furite : {fruit}</h1>

        <button onClick={changeFruit}>Click Here </button>
        



        
    </>
  )
}

export default Todo;