import React from 'react'

function ClickComp() {
    function clickHandler(){
        console.log('button clicked');
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
        </div>
  )
}

export default ClickComp