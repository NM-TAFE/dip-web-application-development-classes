const myAge = {
  age: 42,
  getAge: function () {
    setTimeout(() => {
      console.log(this.age);
    }, 1000);
  },

  // "undefined" or leads to window.value in non-strict mode
  getAgeTraditional: function () {
    setTimeout(function () {
      console.log(this.age);
    }, 1000);
  },
};

myAge.getAge();
myAge.getAgeTraditional();

let myNewAge = 50;

const addFive = (myNewAge) => {
  myNewAge + 5; // This will return undefined
};
console.log(addFive(myNewAge));

const addFiveCorrect = (myNewAge) => myNewAge + 5;
console.log(addFiveCorrect(myNewAge));
