import React, { Component } from 'react'

 class Classclick extends Component {
    click(){
        console.log('clicked me',this);
    }
  render() {
    return (
      <div>
        <button onClick={this.click}>do it</button>
      </div>
    )
  }
}

export default Classclick