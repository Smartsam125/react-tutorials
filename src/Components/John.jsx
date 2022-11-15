import React, { Component } from 'react'

export class John extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Name:'samson'
      }
      
    }
  changName(){
    this.setState((prevstatet)=>({
        Name:prevstatet.Name +"John"
    }))
  }
  render() {
    const {Name} = this.state
    return (
      <div>
        <h1>{Name}</h1>
        <button onClick={()=>this.changName()}>Hello</button>
      </div>
    )
  }
}

export default John