import React from "react";
const Hello =(props)=>{
    console.log(props);
    return (
    <div>Hello  {props.name}{props.Age}
    {props.children}
    </div>

    //React.createElement('div','null',React.createElement('h1',{id:'age',className:'frank'},'Frank Ntambi'))
    )
}

export default Hello