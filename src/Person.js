import React from 'react'

function Person({person,index}) {
    
  return (<div> <h6> Iam <strong>{person}</strong> </h6>
  {index}</div>)
}

export default Person