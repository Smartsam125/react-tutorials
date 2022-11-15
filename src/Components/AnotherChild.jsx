import React from 'react'

function AnotherChild(props) {
  return (
    <div>
        <button onClick={props.Welcome}>Samson Is Great</button>
        {props.children}
    </div>
  )
}

export default AnotherChild