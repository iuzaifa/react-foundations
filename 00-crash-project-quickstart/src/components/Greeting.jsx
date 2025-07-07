import React from 'react'
const Greeting = (props) => {
  return (
    <div>
        <h1>Name {props.data.name}!</h1>
        <p>Email : {props.data.email}</p>
        <p>Age :{props.data.age}</p>
        <p>Address :{props.data.address}</p>

    </div>
  )
}

export default Greeting;
