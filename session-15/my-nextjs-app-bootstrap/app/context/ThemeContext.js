'use client';

import {createContext, useContext, useState} from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// ThemeProvider component to wrap the app and provide the theme
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;