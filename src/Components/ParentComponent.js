//import { Alert } from 'bootstrap'
import React, { Component } from 'react'
import AnotherChild from './AnotherChild'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"parent",

      }
      this.greetParent=this.greetParent.bind(this)
      this.Seemsfunny=this.Seemsfunny.bind(this)
    }

    Seemsfunny(){
        //document.writeln('welcome')
        alert('ok you are great')
        this.setState((prevState)=>({
            parentName:prevState.parentName + "Frank Ntambi"
        }))
    }
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
        
    }
  render() {
    const {parentName} = this.state
    return (
      <div>

        <ChildComponent greetHandler={this.greetParent}/>
        <AnotherChild Welcome={this.Seemsfunny}>{parentName}</AnotherChild>

      </div>
    )
  }
}

export default ParentComponent