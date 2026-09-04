"use client";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
  themeName: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("themeName");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.dataset.theme = themeName;

    const handleSystemThemeChange = (event) => {
      if (!localStorage.getItem("themeName")) {
        const nextTheme = event.matches ? "dark" : "light";
        setThemeName(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
      }
    };

    darkMediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      darkMediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeName]);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
    document.documentElement.dataset.theme = name;
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext }