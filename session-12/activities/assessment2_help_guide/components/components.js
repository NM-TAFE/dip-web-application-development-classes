const app = document.getElementById("app");
// Sculpture List Component

function Header({ title }) {
  return <h1 className="title is-4">{title ? title : "Default title"}</h1>;
}

const Gallery = () => {
  const { useState } = React;
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="box">
      <Header title="New Gallery" />
      <button className="button is-primary" onClick={handleClick}>
        Next
      </button>
      <h2 className="title is-5">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3 className="subtitle is-6">
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
};

// List component
function PeopleList() {
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

// Styled component
function StyledComponent() {
  return (
    <section className="animatedSection box">
      This is a styled section with animation
    </section>
  );
}

const root = ReactDOM.createRoot(app);
root.render(
  <>
    <StyledComponent />
    <PeopleList />
    <Gallery />
  </>
);
