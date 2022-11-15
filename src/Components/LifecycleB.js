import React, { Component } from 'react'

 class LifecycleB extends Component {
    componentDidMount(){
        console.log('did mount B');
    }
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'sam'
      }
      console.log('LifeCycleB constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle Bgetderivedstate');
        return null
        
    }
    
  render() {
    console.log('renderB');
    return ( <div>
      <div>LifecycleB</div>
     
      </div>)
  }
}

export default LifecycleB