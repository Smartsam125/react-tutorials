import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler('Smartsam eriya')}>Greet parent</button>
        <br></br>
        <button onMouseOver={()=>props.Houvering('child','frank')}>Houverbored</button>
        {props.children}
    </div>
  )
}

export default ChildComp