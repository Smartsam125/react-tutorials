import React, { Component } from 'react'
import axios from 'axios'

 class LifecycleA extends Component {
    componentDidMount(){
        //console.log('did mount');
        const smartsam= async ()=>{
          try {
            const james= await  axios.get('ththth')
            this.setState((prevState)=>(
              {Name:'james baldwin'+ prevState.Name}
            ))
            
          } catch (error) {
        

            
          }
          
        }
        smartsam()
    }
    // changeName(){
    //   this.setState((oo)=>({
    //     Name:oo.Name + 'ggggggg'
    //   }))
      
    // }
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'sam'
      }
      this.changeName=this.changeName.bind(this)
      
    }
   
    
  render() {
    
   
    return (
        <div>

      <div>
        <h1>
          {this.state.Name}
          <button onClick={this.changeName}>Samson Clicked</button>
        </h1>
      </div>
     
      
      </div>
    )
  }
}

export default LifecycleA