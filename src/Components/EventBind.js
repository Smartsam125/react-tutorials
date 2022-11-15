import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
      this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"goodbye"})
    }
    handleClick=()=>{
        this.setState({
            message:"you suck"
        })
    }
  render() {
    const {message} = this.state
    return (
      <div>
        <h3>{message}</h3>
        <button onClick={this.clickHandler}>say it</button>
        <button onClick={this.handleClick}>clickicked</button>
      </div>
    )
  }
}

export default EventBind