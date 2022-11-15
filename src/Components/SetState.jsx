import React, { Component } from 'react'

export class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome",
         click:"Subscribe"
      }
    }
    changeMessage(){
        this.setState({
            click:"Thank you for subscribing"
        })
    }
  render() {
    const {message,click} = this.state
    return (
      <div>
         <h1>{message}</h1>
        <button onClick={()=>{
            this.changeMessage()
        }}>{click}</button>
      </div>
    )
  }
}

export default SetState