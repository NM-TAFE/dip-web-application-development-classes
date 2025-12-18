import React from "react";
// List component
export default function PeopleList() {
  const people = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Mike Johnson", age: 45 },
  ];

  return (
    <div className="box">
      <h2 className="title is-4">People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <strong>Name:</strong> {person.name} - <strong>Age:</strong>{" "}
            {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
