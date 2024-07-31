# Challenge: Update React Code to Use `useRef` and `useEffect`

## Objective:

Convert the given React component that uses the `onClick` attribute to handle a button click event to a version that handles the click event without using `onClick`. Use `useRef` and `useEffect` hooks for this purpose. The solution should work with React loaded from a CDN.

## Instructions:

1. **Create an HTML file** named `index.html`.
2. **Include the necessary CDN scripts** to load React, ReactDOM, and Babel.
3. **Define a functional component** named `HomePage` within a script tag.
4. **Create a reference** to the button element using the `useRef` hook.
5. **Define a `handleClick` function** that will increment a count variable and update the button's text.
6. **Use the `useEffect` hook** to add the `click` event listener to the button when the component mounts and remove it when the component unmounts.
7. **Render the button** with the initial text "Like 0".

## Given Code:

```jsx
function HomePage() {
  // ...
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```
