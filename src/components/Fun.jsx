import React from 'react';
import FunList from './FunList';

const peoples = [
  { id: 1, name: "Johnny", gender: "male", age: 30 },
  { id: 2, name: "Jenny", gender: "female", age: 28 },
  { id: 3, name: "Sam", gender: "male", age: 13 },
  { id: 4, name: "Dean", gender: "male", age: 8 }
]

const Fun=(props)=>{
  return(
    <div>
      <h4 className="lead">The Members of the group</h4>
      {peoples.map((people) => <FunList key={people.id} name={people.name} gender={people.gender} age={people.age} /> )}
    </div>
  );
}

export default Fun;
  