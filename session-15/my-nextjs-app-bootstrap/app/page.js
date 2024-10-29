<<<<<<< HEAD
'use client';

import "../styles/globals.css";
import {useTheme} from './context/ThemeContext';

export default function HomePage() {
  const {theme, toggleTheme} = useTheme();
  return (
    <main className={`min-vh-100 ${theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <h1>Welcome to the App Router in Next.js 14</h1>
      <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
=======
import "../styles/globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the App Router in Next.js 14</h1>
      {/* <button className="btn btn-primary">Toggle Theme</button> */}
>>>>>>> 8b23c6fbfaff2e670e718920b2131a0fbc0cee60
    </main>
  );
}
