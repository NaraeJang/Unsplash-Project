import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    const body = document.querySelector("body");

    body.classList.toggle("dark-theme", isDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, setIsDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
