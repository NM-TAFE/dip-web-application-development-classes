#### Setup:

1. Install the React Developer Tools Extension:

   - Go to the Edge, Chrome Web Store or the Firefox Add-ons site.
   - Search for "React Developer Tools".
   - Install the extension.

2. Run the Provided Code:
   - Open this challenge_5.html in your browser.

#### Steps:

1. Open React Developer Tools:

   - Open the browser’s Developer Tools (right-click on the page and select "Inspect" or press `Ctrl+Shift+I` / `Cmd+Opt+I`).
   - Go to the "Components" tab to access React Developer Tools.

2. Inspect the Component Tree:

   - Locate the `App` Component:
     - Find the `App` component in the component tree.
     - Expand it to view its child component `ItemsList`.

3. Explore the ItemsList Component Props:

   - View `ItemsList` Props:
     - Click on the `ItemsList` component in the tree.
     - In the right panel, under "Props", examine the `user` prop.
     - Confirm that the data matches the `userObject` defined in the `App` component.

4. Use the Search Functionality:

   - Use the search bar at the top of the Components tab to quickly find components by name.
   - Type "ItemsList" to see how the search narrows down the component.

5. Edit Props to re-render the DOM:

   - Modify `ItemsList` Props:
     - In the "Props" section, change the `firstName` from "John" to another name (e.g., "Jane").
     - Observe how the UI updates in real-time to reflect this change.

6. Check Component Source Code Location:

   - Right-click on the `ItemsList` component and select "Show in source".
   - This will navigate to the relevant part of the code in the "Sources" tab of Developer Tools, highlighting the component.

7. Use the Profiler:

   - Start Profiling:
     - Switch to the "Profiler" tab in the Developer Tools.
     - Click on the "Record" button to start recording a profiling session.
   - Trigger a Re-render:
     - Make changes to the props or interact with the app to trigger a re-render.
   - Stop Profiling:
     - Click the "Stop" button to end the profiling session.
   - Analyse Performance:
     - Look at the flame graph to understand the rendering performance of the components.

8. Inspect the Component Hierarchy and Rendering:

   - Hover over different components in the tree to see how they are highlighted in the browser.
   - Note how the `ItemsList` and its child elements are nested within the `App` component.

9. Use the Debugging Features:
   - Place breakpoints in your code using the "Sources" tab and see how these breakpoints affect rendering.
   - Use the console to manually trigger re-renders or update states by interacting with component instances.
