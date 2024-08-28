import React from "react";
import ReactDOM from "react-dom/client"; // Note the change in import path
import Lifecycle from "./LifeCycle";

function ItemList({ items }) {
  // Your code goes here to return JSX
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
}

// Usage example
const App = () => {
  const items = [
    { id: 1, title: "First Item" },
    { id: 2, title: "Second Item" },
    { id: 3, title: "Third Item" },
  ];

  return <ItemList items={items} />;
};

function App() {
  const items = [
    { id: 1, title: "First Item" },
    { id: 2, title: "Second Item" },
    { id: 3, title: "Third Item" },
  ];

  return (
    <>
      <Lifecycle />
      <ItemList items={items} />
      {/* <UserProfile
        firstName="John"
        lastName="Doe"
        age={30}
        isStudent={false}
        skills={["JavaScript", "React", "CSS"]}
      /> */}
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
