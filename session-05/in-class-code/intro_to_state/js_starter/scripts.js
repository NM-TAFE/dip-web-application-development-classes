import data from "../data/user_objects.js";

let UserComponent = function (selector, options) {
  this.element = document.querySelector(selector);
  this.data = options.data;
  this.template = options.template;
};

UserComponent.prototype.render = function () {
  this.element.innerHTML = this.template(this.data);
};

let app = new UserComponent("#app", {
  data,
  template: (props) => {
    let html = props.map(
      (user) => `
                    <div class="user-card">
                    <h2>${user.firstName} ${user.lastName}</h2>
                    <p><strong>Age:</strong> ${user.age}</p>
                    <p><strong>Employment:</strong> ${
                      user.isEmployed ? "Employed" : "Not Employed"
                    }</p>
                    <p><strong>Location:</strong> ${user.address.city}</p>
                    <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
                    <div class="social-links">
                        #<br>
                        #LinkedIn</a>
                    </div>
                    </div>
                `,
    );

    return html;
  },
});

app.render();

let newUser = {
  firstName: "Trevor",
  lastName: "Charles",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  isEmployed: true,
  changeAge: function () {
    return (this.age += 1);
  },
  changeArrowAge: () => {
    this.age += 1;
  },
};

let setData = (userState, user, method) => {
  method === "add" ? userState.push(user) : userState.pop(user);
};

setData(data, newUser, "add");
app.render();

console.log("Added", data);

setData(data, newUser, "remove");
app.render();

console.log("Removed", data);
