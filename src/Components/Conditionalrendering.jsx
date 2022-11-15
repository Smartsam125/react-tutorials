import React, { Component } from 'react'

export class Conditionalrendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greet:true
      }
    }
  render() {

    // let message
    // if(this.state.greet){
    //     message=<div>Hello sam</div>
    // }else{
    //     message=<div>Fuck you</div>
    // }
    // return (
    //  this.state.greet ? <div>Welcome</div>: <div>I don't care</div>
    // )
    return(
        this.state.greet && <div>Welcome samson mujaaak</div>
    )
  }
}

export default Conditionalrendering