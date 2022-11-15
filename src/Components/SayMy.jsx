import React, { Component } from 'react'

export class SayMy extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         add:5,
         subtract:8,
         result:"",
         styles:{background:"green",textDecoration:"none",display:"flex",padding:"20px",textAlign:"center"}

      }
    }
    changeStaff(){
        this.setState((prevState)=>({
            result:prevState.add-prevState.subtract
        }))
    }
  render() {
    const { name,age}=this.props
    const {add,subtract,result,styles} = this.state
    return (
      <div>
        <h1>{add} - {subtract}</h1>
        <h1> yes {name},{age}Answer is {result} {this.props.children}</h1>
        <button onClick={()=>this.changeStaff()} style={styles}>Click To See The Magic</button>

      </div>
    )
  }
}

export default SayMy