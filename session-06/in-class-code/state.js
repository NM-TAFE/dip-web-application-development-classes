let state_object = [];
let state = "";
let setState = (new_state) => {
  return (state = new_state);
};

state_object.push(state);
state_object.push(setState);

console.log(state_object);
console.log(state_object[0]);
console.log(state_object[1]);
console.log(state_object[1]("new state"));
console.log(state_object[0]);
