import React, { Component } from 'react'

export class Forms extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:''
    }
this.handleUsernameChange =this.handleUsernameChange.bind(this)
  }
  handleUsernameChange=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  render() {
    return (
      <div>
        <form >
          <label>Username</label>
          <br></br>
          <input type='text' value={this.state.username}  onChange={this.handleUsernameChange}/>
        </form>
      </div>
    )
  }
}

export default Forms
