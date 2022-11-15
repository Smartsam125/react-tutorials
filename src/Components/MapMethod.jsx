
import React from 'react';
import Person from '../Person';
function MapMethod() {
 const names = ['Richard Hendricks', 'Nelson Bigheti', 'Earlik Backman', 'Gervin Benson','sam','sam'];
  const persons=[
    {id:1,
     name:'samson',
     skill:'springboot,reactjs,mern,electron'},
     {id:2,
      name:'james frank',
      skill:'spring boot'

     },
     {
      id:3,
      name:'Jjumba eric benjamin',
      skill:'react,redux,mern'

     },
     {
      id:4,
      name:'Achuka simon allan',
      skill:'react-native,redux,next,flutter'
     }
  ]
  const personList = names.map( (person,index) => (<Person person={person} index={index} key={index}></Person> ))
  return (
    <div>{personList}</div>
  );
}
export default MapMethod;
