To ensure that all the files you've created are functioning correctly in your Next.js project, you can follow these steps to test each component of your application, including the pages, layout, error boundaries, and API routes.

### Steps to Test All Files

1. **Start the Development Server**

   - First, make sure you have the Next.js development server running.
   - Run the following command in the root directory of your project:
     ```bash
     npm run dev
     ```
   - This will start the Next.js server on `http://localhost:3000`. You can open this URL in your browser to see your app.

2. **Verify the `layout.js`**

   - Navigate to `http://localhost:3000/nasa` in your browser.
   - Check if the layout (navigation, footer) is displayed correctly. The layout should persist when you navigate through different pages in the `/nasa` segment.

3. **Test the `page.js`**

   - Ensure that the main content from your `page.js` file (your NASA API page) is displaying correctly.
   - Submit the form in `ApodForm` and check that the fetched data from the NASA API appears in `ApodContent`.
   - Verify that error messages display properly if there are issues with fetching the API data.

4. **Test the `loading.js`**

   - To see if the `loading.js` file works, you can simulate a delayed response from the NASA API. You can add a delay to your API call in `page.js` by introducing a `setTimeout` around the `fetch` function:
     ```javascript
     setTimeout(async () => {
       const response = await fetch(apiUrl);
       const data = await response.json();
       setApodData(Array.isArray(data) ? data : [data]);
     }, 2000); // delay for 2 seconds
     ```
   - This will trigger the loading state, and you should see the loading UI rendered while the data is being fetched.

5. **Test the `not-found.js`**

   - To test the not-found behavior, navigate to a non-existent page, such as `http://localhost:3000/nasa/some-nonexistent-page`.
   - You should see the custom 404 Not Found page rendered with the styled Bulma content.

6. **Test the `error.js`**

   - You can simulate an error by forcing an invalid fetch request in `page.js`, such as changing the NASA API URL to an incorrect one:
     ```javascript
     const apiUrl = `https://api.nasa.gov/planetary/apod_invalid?api_key=${apiKey}`;
     ```
   - This will trigger the error boundary, and you should see the custom error UI with the retry button.

7. **Test the `global-error.js`**

   - Global error boundaries catch errors across the entire app. To test this, you can introduce an error at a higher level (such as in the root layout or during an initial fetch).
   - For example, add a deliberate error to the `layout.js` file to trigger the global error handler:
     ```javascript
     throw new Error("Global error test");
     ```
   - When the app loads, you should see the `global-error.js` component rendered with the error message.

8. **Test the API Route (`route.js`)**

   - Navigate to the API route in your browser or via a tool like Postman or curl:
     ```bash
     curl http://localhost:3000/api/nasa
     ```
   - This should trigger your API route and return the data from the NASA API (if correctly configured). If you have implemented server-side environment variables, ensure the `NASA_API_KEY` is correctly set in your `.env.local` file:
     ```env
     NASA_API_KEY=your_nasa_api_key_here
     ```

9. **Test the `template.js` (if still present)**

   - Navigate between pages within the `/nasa` segment and check if the layout re-renders correctly when switching routes.
   - If you have removed the `template.js` file, check that the layout is persisting across route changes as expected.

10. **Check Browser Dev Tools and Network Tab**
    - Open your browser’s developer tools (F12 or right-click -> Inspect).
    - Check the **Console** for any error messages or warnings.
    - Go to the **Network** tab and verify the API calls to ensure they are being made correctly when the form is submitted.

### Additional Testing Tools

- **Console Logs**: You can add `console.log` statements in your code to check if specific components or functions are working as expected.
- **React Developer Tools**: Use the React Developer Tools browser extension to inspect your React components in detail.
- **Error Overlay**: When in development mode, Next.js will automatically show an error overlay in the browser if anything goes wrong, which helps in debugging errors directly.

By testing your application with these steps, you will be able to ensure that each component, layout, error boundary, and API route is working as expected. Let me know if you need further guidance or encounter any issues!

```
rm -rf .next
npm run dev
```
