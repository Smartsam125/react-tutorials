import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    increement(){
        //this.setState((prevState  )=>prevState+1)
        // this.setState({
        //     count:this.state.count + 1
        // },()=>{
            
        //     console.log('call back value',this.state.count);
        
        // })  
        this.setState((prevState,props)=>({
            count:prevState.count + 1
        }))
       console.log(this.state.count);
    
    }
    icreementFive(){
        this.increement()
        this.increement()
        this.increement()
        this.increement()
        this.increement()
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>{count}</h1>

        <button onClick={()=>this.icreementFive()}>click</button>
      </div>
    )
  }
}

export default Counter 