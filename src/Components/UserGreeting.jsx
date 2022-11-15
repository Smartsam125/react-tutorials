import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false,
         isLoggedout:true

      }
      this.changeMessage =this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState((prevState)=>({
            
        }))
    }
  render() {
   // const {isLoggedIn,isLoggedout} = this.state
    // let message
    // if(!isLoggedIn){
    //     message = <div>welcome</div>
    // }else{
    //     message =<div>goodbye</div>
    // }
    return( <div>
        <div>samson</div>
        {
        this.state.isLoggedout ? 
       <div>Welcome</div> :
      <div>LogOut</div>}
      </div>)
       
        
    
    
  }
}

export default UserGreeting