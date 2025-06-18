import React from "react";
import { people } from "../data/people.js";

export default function PeopleList() {
  return (
    <div className="box mt-1">
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
