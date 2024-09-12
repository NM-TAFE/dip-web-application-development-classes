#### Component Creation step:

2. **Component Setup**
   Create the component that displays a title and a Homepage component.
3. **Rendering the Component**  
   After defining the components, render the Homepage component using `ReactDOM.createRoot()`:
4. **Adding State and Logging**  
   In the Homepage component, we add a state variable likes and a function to update it using React.useState().
   **Discuss:** what the console logs will show and why.
5. **Interactivity with the Like Button**  
    We create a button that increments the likes state when clicked.
   **Discuss:** what the console logs will show and why.
   We Add more console logs inside the `handleClick` function to track our state

   **Class Task:** Run the code, click the button, and observe the console logs.

6. **Adding `useEffect` and `Debugger`**  
   We then Introduce `React.useEffect()` to log the state after the component re-renders. Place the `debugger` in both the `handleClick` function and after rendering.
