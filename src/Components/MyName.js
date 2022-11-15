import React from 'react'

function MyName(props) {
    console.log(props);
  return (
    <div>MyName  is {props.name}
     {props.children}
    </div>

  )
}

export default MyName