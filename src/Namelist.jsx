import React from 'react'
import PropForMap from './PropForMap'

function Namelist() {
    const person=[{name:'sam',age:17,sex:'male'},{name:'benjamin',age:22,sex:'male'},{name:'christine',age:34,sex:'female'}]
    const property= person.map(people => <PropForMap key={people.age} balls={people}/>)
   
  return (
  <div>
    {property}
  </div>
   
  )
}

export default Namelist
