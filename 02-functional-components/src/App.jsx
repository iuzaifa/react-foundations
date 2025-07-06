
// compoonet
function App() {

  const name = "Abu Huzafia"
  const x = 12, y = 13;

  return (
    <>
      <Apple/>
      <Orange/>
      <h1>Sum is : {sum()}</h1>
      <h5>{name}</h5>
      <p className="pee">{x * y }</p>
      <button onClick={()=>alert(`Hello`)}>Click</button>

      



    </>
  )
}


// compoonet
function Apple(){
  return (
    <>
      <h2>Apple </h2>
    </>
  )
}
// compoonet
function Orange(){
  return (
    <>
      <h2> Orange</h2>
    </>
  )
}
// function 

function sum(){
  return 2 + 3;
}


export default App
