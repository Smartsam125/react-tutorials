import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class Parents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent',
         name:true

      }
      this.greetParent=this.greetParent.bind(this)
      this.houver=this.houver.bind(this)
    }
    greetParent(txr){
        alert(`Hello ${this.state.parentName} from ${txr}`)
    }
    houver(name,age){
        this.setState((prevState)=>({
            parentName:prevState.parentName + 'goodjob'+ name + age
        
        }))
    }
  render() {
    const {parentName,name}=this.state
    if(name){
      return (
        <div>
          <ChildComp greetHandler={this.greetParent}
                      Houvering={this.houver}
          >{parentName}</ChildComp>
        </div>
      )
      
    }else{
      return <div>
        sorry sir
      </div>
    }

    
  }
}

export default Parents