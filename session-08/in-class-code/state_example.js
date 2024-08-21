import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    // take the data/information from the parent
    super(props);
    // Initialising the state object
    // ----- data -----
    this.state = {
      user: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: false,
        address: {
          street: "123 Main St",
          city: "Perth",
          zipCode: "6000",
        },
        skills: ["JavaScript", "HTML", "CSS"],
        socialProfiles: {
          twitter: "@johndoe",
          linkedIn: "linkedin.com/in/johndoe",
        },
        isEmployed: true,
      },
    };
  }

  // Method to update the user's age
  increaseAge = () => {
    this.setState((previousState) => ({
      user: {
        // notice the spread operator - take all the previous data
        ...previousState.user,
        // update the data
        age: previousState.user.age + 1,
      },
    }));
  };

  // ----- render -----
  render() {
    // Destructure user object from state
    const { user } = this.state;

    // ----- template -----
    return (
      <div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>Age: {user.age}</p>
        <p>Student: {user.isStudent ? "Yes" : "No"}</p>
        <div>
          <h2>Address</h2>
          <p>{user.address.street}</p>
          <p>
            {user.address.city}, {user.address.zipCode}
          </p>
        </div>
        <div>
          <h2>Skills</h2>
          <ul>
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Social Profiles</h2>
          <p>Twitter: {user.socialProfiles.twitter}</p>
          <p>LinkedIn: {user.socialProfiles.linkedIn}</p>
        </div>
        <p>Employed: {user.isEmployed ? "Yes" : "No"}</p>
        {/* // When the user clicks this the data will change causing a re-render */}
        <button onClick={this.increaseAge}>Increase Age</button>
      </div>
    );
  }
}

export default UserProfile;
