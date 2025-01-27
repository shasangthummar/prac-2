import React from 'react';
import Person from './Person';

function App() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];

  return (
    <div>
      <h1>People List</h1>
      {people.map((person, index) => (
        <Person key={index} name={person.name} age={person.age} />
      ))}
    </div>
  );
}

export default App;
